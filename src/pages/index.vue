<script setup lang="ts">
import FormBasket from '@/components/FormBasket.vue';
import FormImages from '@/components/FormImages.vue';
import { RouterLink } from 'vue-router';
</script>

<template>

<div class="text-3xl gap-20">
  
    <RouterLink to="/BasketIndex">navigation</RouterLink>
    <RouterLink to="/basket/">affichage liste basket de supabase</RouterLink>
</div>
  <main>bonjour de home</main>
  <FormBasket/>
  <FormImages/>

  

</template>
