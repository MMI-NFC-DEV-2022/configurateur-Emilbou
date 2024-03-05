<script setup lang="ts">
import type { ChaussureImage } from "@/types-images";

withDefaults(defineProps<ChaussureImage>(), {
orientation: "cote",
bandes: "bleu",
cuir: "bleu",
mousse: "bleu",
});
</script>

<template>

    <div class="relative">

<img :src="`/images/${orientation}/base.png`" alt="" class="h-auto w-full" />
<img :src="`/images/${orientation}/bandes-${bandes}.png`" alt="" class="absolute top-0 left-0 h-auto w-full" v-if="orientation !== 'derriere'">

    </div>
</template>