<script setup lang="ts">
import FormSvg from "../../../components/FormBasket.vue";
import { useRoute } from "vue-router/auto"
const route = useRoute("/basket/exemple/[data]")
</script>
<template>
    <FormSvg :data="JSON.parse(route.params.data)" />
</template>