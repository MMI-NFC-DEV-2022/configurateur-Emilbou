<script setup lang="ts">
import type { Basket } from "../types";
import SvgProfil from "@/components/SvgProfil.vue";
const exemples: Basket[] = [
    {
        semelle: "#FF0000",
        empeigne: "#FFFFFF",
        pointe: "#FFFFFF",
        oeillet: "#FFFFFF",
        bande: "#00FF00",
        languette: "#FFFFFF",
        lacet: "#00FF00",
        trimestre: "#FFFFFF",
    },
    {
        semelle: "#FFFF00",
        empeigne: "#0000FF",
        pointe: "#0000FF",
        oeillet: "#0000FF",
        bande: "#FF0000",
        languette: "#0000FF",
        lacet: "#FF0000",
        trimestre: "#0000FF",
    },
    {
        semelle: "#00FFFF",
        empeigne: "#FF00FF",
        pointe: "#FF00FF",
        oeillet: "#FF00FF",
        bande: "#FFFF00",
        languette: "#FF00FF",
        lacet: "#FFFF00",
        trimestre: "#FF00FF",
    },
    
    ]
</script>
<template>
    <section>
        <h1 class="text-2xl">Exemples de Baskets</h1>
        <div class="flex flex-wrap gap-2">
            <div class="w-64">
                <RouterLink
                 v-for="exemple in exemples"
                :to="{
                    name: '/basket/exemple/[data]',
                    params: { data: JSON.stringify(exemple) },
                }">
                    <SvgProfil class="w-64" v-bind="exemple" />
                </RouterLink>
            </div>
        </div>
    </section>
</template>