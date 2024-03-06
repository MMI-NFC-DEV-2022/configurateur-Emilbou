<script setup lang="ts">
import {ref} from "@vue/reactivity"
import { supabase } from "@/supabase"
import FormBasket from "@/components/FormBasket.vue";
const basket = ref({})
defineProps<{
    id: string;
}>();


</script>
<template>
    <FormBasket :id="id" />
</template>