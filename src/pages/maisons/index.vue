<script setup lang="ts">

import AfficheMaison from '@/components/AfficheMaison.vue';
import {supabase} from '@/supabase'
import type { SchemaOffreMaison } from '@/types';
import { RouterLink } from 'vue-router';
console.log("supabase :", supabase); // pour vérifier et "garder" supabase dans le code

const { data: Maisons, error } = await supabase
    .from('Maisons')
    .select('*')
console.log(Maisons)


</script>


<template>
    <h1>Bonjour</h1>
    <div v-for="mesMaisons in Maisons">
        <RouterLink :to="{ name: '/maisons/edit/[id]', params: {id: mesMaisons.id}}">
            <AfficheMaison  v-bind="mesMaisons"></AfficheMaison>
        </RouterLink>
    </div>
</template>