<script setup lang="ts">

import { defineProps } from 'vue';
import { type SchemaQuartier } from '@/supabase-types';
defineProps<SchemaQuartier>()
</script>

<template>
<div> {{quartier_commune.nom_quartier }}</div>    
<h1>bonjour de affiche quartier</h1>
</template>