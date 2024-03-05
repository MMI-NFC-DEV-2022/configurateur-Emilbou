<script setup lang="ts">
import Icon from '@/components/icons/Icon.vue';
import Icon1 from '@/components/icons/Icon-1.vue';
import Icon2 from '@/components/icons/Icon-2.vue';
import Icon3 from '@/components/icons/Icon-3.vue';
import { defineProps } from 'vue';
import { type SchemaOffreMaison } from '@/types';
 defineProps<SchemaOffreMaison>()
 const props = defineProps<Database['public']['Tables']['Maison']['Row']>();



const quartier = ref<Database['public']['Tables']['Quartier']['Row'] | null>(null);

// Fonction pour récupérer les données de la Quartier correspondant à l'idQuartier de la table Quartier
async function fetchQuartier() {
    const { data, error } = await supabase
        .from<Database['public']['Tables']['Quartier']['Row']>('Quartier')
        .select('*')
        .eq('id', props.idQuartier)
        .single();

    if (error) {
        console.error('Erreur lors de la récupération de la Quartier:', error);
    } else {
        quartier.value = data;
    }
}

fetchQuartier();



</script>

<template>
    <div class="flex flex-col w-fulls rounded-lg border-indigo-100 border-solid overflow-hidden border-2">
        <div class="h-full w-full "><img class="object-cover w-full h-full" :src="image" alt=""></div>
        <div class="px-5 pt-5 flex flex-row justify-between">
            <div class="flex flex-col ">
                <div class="text-base font-bold text-indigo-500 ">$ {{ prix }} <span
                        class="text-base font-normal text-gray-500">/month</span></div>
                <div class="text-base font-bold text-black py-2">{{ nomMaison }}</div>
            </div>
            <div>
                <Icon :class="{ 'fill-red-400': favori }" />
            </div>
        </div>
        <div class="px-5">

            <div class="py-2">{{ adresse }}</div>
            <p>Nom Quartier - {{ quartier?.nomQuartier }}</p>
            <hr />
            <div class="w-full justify-between flex">
                <div class="flex py-4 gap-4">
                    <Icon1 /> {{ nbrChambres }} beds
                </div>
                <div class="flex py-4 gap-4">
                    <Icon2 /> {{ nbrSDB }} bathrooms
            </div>
            <div class="flex py-4 gap-4"><Icon-3 /> {{ surface }} m2</div>
        </div>
    </div>
</div></template>