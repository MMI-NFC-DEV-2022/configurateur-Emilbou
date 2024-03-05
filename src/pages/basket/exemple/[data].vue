<script setup lang="ts">
import FormSvg from "../../../components/FormBasket.vue";
defineProps<{
    data: string;
}>();
</script>
<template>
    <FormSvg :data="JSON.parse(data)" />
</template>