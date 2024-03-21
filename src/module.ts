import { addPlugin, createResolver, defineNuxtModule } from "@nuxt/kit";

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "@lewebsimple/nuxt-prisma",
    configKey: "prisma",
  },
  defaults: {},
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);
  },
});
