<script setup lang="ts">
import { supabase } from "../../supabase";
import groupBy from "lodash/groupBy";
const { data: QuartiersCommune, error } = await supabase.from("quartier_commune").select("*");
if (error) console.log("n'a pas pu charger la table quartiercommune :", error);

const { data: quartier } = await supabase
    .from('quartier')
    .select('*');
console.log(quartier)
</script>

<template>
  <section class="flex flex-col">
    <h3 class="text-2xl">Liste des quartiers</h3>
    <ul>
      <li v-for="(lesquartiers, nomCommune) in (Object.groupBy(QuartiersCommune, v => v.nomCommune))">
<h2>{{ nomCommune }}</h2>
<li v-for="quartierObject in lesquartiers">
    <div>{{ quartierObject.nom_quartier }}</div>
</li>
      </li> 
    </ul>
  </section>
  <hr>
 <div v-for="mesQuartiers in quartier">
            <RouterLink :to="{ name: '/quartier/edit/[id]', params: { id: mesQuartiers.id } }">
                <p>{{ mesQuartiers.nom_quartier }}</p>
            </RouterLink>
        </div>
</template>