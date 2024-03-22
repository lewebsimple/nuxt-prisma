<script setup>
const { data } = await useFetch("/api/test");
</script>

<template>
  <div>Nuxt Prisma playground!</div>
  <pre>{{ data }}</pre>
</template>
