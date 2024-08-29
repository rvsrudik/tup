<template>
  <nav>
    <ul class="gap-6 flex flex-col">
      <AppMenuItem v-for="menuItem in menu" :key="menuItem.title" :menu-item="menuItem" :mini="mini" />
    </ul>
  </nav>
</template>

<script setup>
import AppMenuItem from '@/components/AppMenuItem';

const props = defineProps({
  mini: {
    type: Boolean,
  },
});

const menu = [
  { title: 'Profile', name: 'index', to: { name: 'index' }, icon: 'graph.svg' },
  {
    title: 'Campaigns',

    icon: 'box.svg',
    name: 'campaigns-campaigns',
    children: [
      { title: 'Feminine hygiene products', to: { path: '/campaigns/ceminine-hygiene-products' } },
      { title: 'Shuttle service', to: { path: '/campaigns/shuttle-service' } },
    ],
  },
];
</script>
