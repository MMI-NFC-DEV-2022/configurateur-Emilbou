<script setup lang="ts">

import { type SchemaOffreMaison } from '@/types';
import AfficheMaison from '../components/AfficheMaison.vue';
import tableaujson from '../tableau.json'
const tableaumaisons = [{
    nomMaison: 'Maison1',
    prix: 1000,
    adresse: '14543 rue',
    nbrChambres: 2,
    nbrSDB: 2,
    surface: "30x40m²",
    favori: true,
    image: 'pexels-binyamin-mellish-106399 1 (5).png'
},
{
    nomMaison: 'Maison2',
    prix: 1000,
    adresse: '123 rue',
    nbrChambres: 3,
    nbrSDB: 2,
    surface: "30x40m²",
    favori: true,
    image: 'pexels-binyamin-mellish-106399 1 (5).png'
},
{
    nomMaison: 'Maison3',
    prix: 1000,
    adresse: '123 rue',
    nbrChambres: 3,
    nbrSDB: 2,
    surface: "30x40m²",
    favori: true,
    image: 'pexels-binyamin-mellish-106399 1 (5).png'
},
{
    nomMaison: 'Maison4',
    prix: 1000,
    adresse: '123 rue',
    nbrChambres: 3,
    nbrSDB: 2,
    surface: "30x40m²",
    favori: true,
    image: 'pexels-binyamin-mellish-106399 1 (5).png'
},
{
    nomMaison: 'Maison5',
    prix: 1000,
    adresse: '123 rue',
    nbrChambres: 3,
    nbrSDB: 2,
    surface: "30x40m²",
    favori: true,
    image: 'pexels-binyamin-mellish-106399 1 (5).png'
},
{
    nomMaison: 'Maison6',
    prix: 1000,
    adresse: '123 rue',
    nbrChambres: 3,
    nbrSDB: 2,
    surface: "30x40m²",
    favori: true,
    image: 'pexels-binyamin-mellish-106399 1 (5).png'
},
]
const maMaison:SchemaOffreMaison = {
    nomMaison: 'Maison2',
    prix: 1000,
    adresse: '123 rue',
    nbrChambres: 3,
    nbrSDB: 2,
    surface: "30x40m²",
    favori: true,
    image: 'pexels-binyamin-mellish-106399 1 (5).png'
}
</script>

<template>

    
    <h1 class="text-5xl font-bold">on passe les valeurs en objet avec v-bind</h1>
<AfficheMaison v-bind="maMaison"/>
        <h1 class="text-5xl font-bold">on passe les valeurs en attributs</h1>
        <AfficheMaison nom-maison="Maison" :favori="true" image="pexels-binyamin-mellish-106399 1 (5).png" />
        <h1 class="text-5xl font-bold">On affiche les valeurs avec un tableau de données</h1>
        <AfficheMaison v-bind="tableaumaisons[0]"/>
        <AfficheMaison v-bind="tableaumaisons[1]"/>
        <AfficheMaison v-bind="tableaumaisons[2]"/>
        <h1 class="text-5xl font-bold">on affiche avec un v-for</h1>
      
        <AfficheMaison v-for="maison in tableaumaisons" :key="maison.nomMaison" v-bind="maison" />
        <h1>tableau json</h1>
  <AfficheMaison v-for="maisonsjson in tableaujson" v-bind="maisonsjson" />
</template>