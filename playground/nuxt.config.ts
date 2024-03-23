export default defineNuxtConfig({
  modules: ["../src/module"],
  prisma: {
    watchSchema: true,
  },
  devtools: { enabled: true },
});
