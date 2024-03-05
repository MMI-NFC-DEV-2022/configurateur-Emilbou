<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { useRoute, useRouter } from 'vue-router/auto'
import { supabase } from '@/supabase'
const route = useRoute('/quartier/edit/[id]')
const router = useRouter()
const quartier = ref({})


// @ts-ignore
async function upsertquartier(dataForm, node) {
    const { data, error } = await supabase.from("quartier").upsert(dataForm).select('id');
    if (error) node.setErrors([error.message])
    else {
        console.log("data id :", data[0].id);

        node.setErrors([]);
        router.push("/quartier/");
    }

}

if (route.params.id) {
    // On charge les données de la maison
    let { data, error } = await supabase
        .from("quartier")
        .select("*")
        .eq("id", route.params.id);
    if (error) console.log("n'a pas pu charger la table quartier :", error);
    else quartier.value = (data as any[])[0];
}

const { data: commune, error } = await supabase
    .from("commune")
    .select("*");
if (error) console.log("n'a pas pu charger la table Commune :", error);
// Les convertir par `map` en un tableau d'objets {value, label} pour FormKit
const optionsCommune = commune?.map((commune) => ({
    label: commune.nomCommune,
}));

async function supprimerQuartier() {
    const { data, error } = await supabase
        .from("quartier")
        .delete()
        .match({ id: quartier.value.id });
    if (error) {
        console.error(
            "Erreur à la suppression de ",
            quartier.value,
            "erreur :",
            error
        );
    } else {
        router.push("/quartier");
    }
}
</script>
<template>
    <div>
        <div class="p-2">
            <h2 class="text-2xl">Résultat (Prévisualisation)</h2>

            <p>{{ quartier.nom_quartier }}</p>
        </div>
        <div class="p—2">
            <FormKit @submit="upsertquartier" type="form" v-model="quartier" :config="{
                classes: {
                    input: 'p-1 rounded border-gray-300 shadow-sm border',
                    label: 'text-gray-600 mb-12',
                },
            }">
                <div class="flex gap-5 p-2 my-12">

                    <FormKit name="nom_quartier" placeholder="nom" />

                </div>


            </FormKit>
        </div>
        <FormKit
            type="select"
            label="Commune"
            :options="optionsCommune"
          />
          <button
            type="button"
            v-if="quartier.id"
            @click="($refs.dialogSupprimer as any).showModal()"
            class="focus-style justify-self-end rounded-md bg-red-500 p-2 shadow-sm"
          >
            Supprimer l'offre
          </button>
          <dialog
            ref="dialogSupprimer"
            @click="($event.currentTarget as any).close()"
          >
            <button
              type="button"
              class="focus-style justify-self-end rounded-md bg-blue-300 p-2 shadow-sm"
            >
              Annuler</button
            ><button
              type="button"
              @click="supprimerQuartier()"
              class="focus-style rounded-md bg-red-500 p-2 shadow-sm"
            >
              Confirmer suppression
            </button>
          </dialog>
    </div>
</template >