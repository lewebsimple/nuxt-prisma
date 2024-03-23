import { addServerScanDir, createResolver, defineNuxtModule, useLogger } from "@nuxt/kit";
import { exec } from "child_process";
import { createRequire } from "module";

export interface ModuleOptions {
  watchSchema?: boolean;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "@lewebsimple/nuxt-prisma",
    configKey: "prisma",
  },
  defaults: {
    watchSchema: true,
  },
  setup(options, nuxt) {
    const logger = useLogger();

    // Prisma client generation
    const prismaCliPath = createResolver(nuxt.options.workspaceDir).resolve("node_modules/.bin/prisma");
    const runPrismaGenerate = async () => {
      await new Promise<void>((resolve, reject) => {
        exec(`${prismaCliPath} generate`, (error) => {
          if (error) reject(error);
          else {
            logger.success("Prisma client generated successfully.");
            resolve();
          }
        });
      });
    };

    // Generate Prisma client before build
    nuxt.hooks.hook("build:before", runPrismaGenerate);

    // Watch schema.prisma for changes (if enabled)
    if (options.watchSchema) {
      nuxt.hooks.hook("builder:watch", async (event, path) => {
        if (path.endsWith("schema.prisma")) {
          await runPrismaGenerate();
        }
      });
    }

    // Auto-import from runtime/server/utils
    addServerScanDir(createResolver(import.meta.url).resolve("./runtime/server"));

    // Fix resolution of .prisma/client/index-browser
    nuxt.options.alias[".prisma/client/index-browser"] = createRequire(import.meta.url)
      .resolve("@prisma/client")
      .replace("@prisma/client/default.js", ".prisma/client/index-browser.js");
  },
});
