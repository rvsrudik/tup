<template>
  <div class="relative border-t p-4 pt-6">
    <div>
      <div>Alexander Johnson</div>
      <div>{{ formattedDateTime }}</div>
    </div>
    <div
      class="relative w-full md:w-[90%] mr-auto bg-slate-200 p-4 pr-8 rounded-lg"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima facere
      deleniti quae veniam aliquam voluptatibus qui fugiat aliquid labore optio
      similique maxime velit doloremque, nostrum nulla placeat voluptatem natus
      illum esse animi harum asperiores quo? Quisquam error sequi in ratione
      nostrum voluptates numquam, dolor, atque maiores optio sit vitae incidunt.
      <ChatMessageDecor left="true" />
    </div>
  </div>
</template>

<script setup>
const date = new Date();

const dateTimeFormatter = new Intl.DateTimeFormat(undefined, {
  dateStyle: 'medium', // Наприклад: "Sep 4, 2024"
  timeStyle: 'short', // Наприклад: "4:30 PM"
});

// Форматування дати і часу
const formattedDateTime = dateTimeFormatter.format(date);
</script>
