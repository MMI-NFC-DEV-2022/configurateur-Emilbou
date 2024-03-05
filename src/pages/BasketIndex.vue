<script setup lang="ts">
import FormBasket from "@/components/FormBasket.vue";
import type { Basket } from "../types";
const exemple0: Basket = {
    semelle: "#FF0000",
    empeigne: "#FFFFFF",
    pointe: "#FFFFFF",
    oeillet: "#FFFFFF",
    bande: "#00FF00",
    languette: "#FFFFFF",
    lacet: "#00FF00",
    trimestre: "#FFFFFF",
};
</script>
<template>
    <section>
        <h1 class="text-2xl">Exemples de Baskets</h1>
        <div class="flex flex-wrap gap-2">
            <div class="w-64">
                <RouterLink :to="{
                    name: 'basket-exemple-data',
                    params: { data: JSON.stringify(exemple0) },
                }">
                    <FormBasket class="w-64" v-bind="exemple0" />
                </RouterLink>
            </div>
        </div>
    </section>
</template>