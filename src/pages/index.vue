<script setup lang="ts">
import FormBasket from '@/components/FormBasket.vue';
import FormImages from '@/components/FormImages.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <RouterLink to="/BasketIndex">navigation</RouterLink>
  <main>bonjour de home</main>
  <FormBasket/>
  <FormImages/>

  

</template>
