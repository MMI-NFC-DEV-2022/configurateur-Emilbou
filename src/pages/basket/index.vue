



<script setup lang="ts">
import { supabase } from '@/supabase';

const { data: exemples, error } = await supabase
  .from('Basket')
  .select('*')

import SvgProfil from "@/components/SvgProfil.vue";

</script>
<template>
    <section>
        <h1 class="text-2xl">Exemples de Baskets</h1>
        <div class="flex flex-wrap gap-2">
            <div class="w-64">
                <RouterLink :to="{
                    name: '/basket/exemple/[data]',
                    params: { data: JSON.stringify(exemples) },
                }">
                    <SvgProfil class="w-64" v-for="exemple in exemples" v-bind="exemple" />
                </RouterLink>
            </div>
        </div>
    </section>
</template>