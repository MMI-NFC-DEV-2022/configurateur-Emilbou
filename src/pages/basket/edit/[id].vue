<script setup lang="ts">
import FormSvg from "../../../components/FormBasket.vue";
defineProps<{
    id: string;
}>();
</script>
<template>
    <FormSvg :id="id" />
</template>