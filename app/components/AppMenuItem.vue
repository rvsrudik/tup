<template>
  <li class="text-white text-sm cursor-pointer">
    <NuxtLink :to="menuItem.to" class="flex items-center flex-grow" @click="isShowChildren = !isShowChildren">
      <div
        class="rounded-md h-8 w-8 flex items-center justify-center transition-colors"
        :class="[route.name === menuItem.name ? '[background:#FEFEFE54] ' : '', mini ? '' : 'mr-2']"
      >
        <img :src="`/icons/${menuItem.icon}`" class="w-5 h-5" :alt="menuItem.title" />
      </div>
      <div v-if="!mini" class="flex justify-between w-full" :class="[route.name === menuItem.name ? 'font-bold' : '']">
        {{ menuItem.title }}
        <img
          v-if="menuItem.children"
          src="~/assets/icons/arrow.svg"
          :alt="menuItem.title"
          :class="[isShowChildren ? 'rotate-180' : '']"
        />
      </div>
    </NuxtLink>

    <!-- submenu -->
    <ul v-if="menuItem.children && isShowChildren && !mini" class="flex flex-col ml-10 mt-1">
      <li v-for="childMenu in menuItem.children" :key="childMenu.title" class="[color:#FFFFFFB2]">
        <NuxtLink :to="childMenu.to" class="flex py-1" :class="[route.path === childMenu.to.path ? 'font-bold' : '']">
          {{ childMenu.title }}
        </NuxtLink>
      </li>
    </ul>
  </li>
</template>

<script setup>
const route = useRoute();

const props = defineProps({
  menuItem: {
    type: Object,
  },
  mini: {
    type: Boolean,
  },
});

const isShowChildren = ref(true);
</script>
