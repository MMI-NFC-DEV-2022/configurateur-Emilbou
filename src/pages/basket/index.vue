



<script setup lang="ts">
import { supabase } from '@/supabase';

const { data: exemples, error } = await supabase
  .from('Basket')
  .select('*')

import AffichageProfil from "@/components/AffichageProfil.vue";

</script>
<template>
    <section>
        <h1 class="text-2xl">Exemples de Baskets</h1>
        <div class="flex flex-wrap gap-2">
            <div class="w-64">
                <RouterLink
                    v-for="exemple in exemples"
                    :to="{
                        name: '/basket/edit/[id]',
                        params: { id:exemple.id },
                    }">
                    <AffichageProfil class="w-64" v-bind="exemple" />
                </RouterLink>
            </div>
        </div>
    </section>
</template>