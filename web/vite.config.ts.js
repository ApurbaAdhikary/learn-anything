// vite.config.ts
import solid from "solid-start";
import vercel from "solid-start-vercel";
import { defineConfig } from "vite";
var vite_config_default = defineConfig({
  plugins: [
    {
      ...(await import("@mdx-js/rollup")).default({
        jsx: true,
        jsxImportSource: "solid-js",
        providerImportSource: "solid-mdx"
      }),
      enforce: "pre"
    },
    solid({
      adapter: vercel(),
      extensions: [".mdx", ".md"]
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBzb2xpZCBmcm9tIFwic29saWQtc3RhcnRcIlxuaW1wb3J0IHZlcmNlbCBmcm9tIFwic29saWQtc3RhcnQtdmVyY2VsXCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB7XG4gICAgICAuLi4oYXdhaXQgaW1wb3J0KFwiQG1keC1qcy9yb2xsdXBcIikpLmRlZmF1bHQoe1xuICAgICAgICBqc3g6IHRydWUsXG4gICAgICAgIGpzeEltcG9ydFNvdXJjZTogXCJzb2xpZC1qc1wiLFxuICAgICAgICBwcm92aWRlckltcG9ydFNvdXJjZTogXCJzb2xpZC1tZHhcIixcbiAgICAgIH0pLFxuICAgICAgZW5mb3JjZTogXCJwcmVcIixcbiAgICB9LFxuICAgIHNvbGlkKHtcbiAgICAgIGFkYXB0ZXI6IHZlcmNlbCgpLFxuICAgICAgZXh0ZW5zaW9uczogW1wiLm1keFwiLCBcIi5tZFwiXSxcbiAgICB9KSxcbiAgXSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1A7QUFBQSxNQUNFLEdBQUksT0FBTSxPQUFPLG1CQUFtQixRQUFRO0FBQUEsUUFDMUMsS0FBSztBQUFBLFFBQ0wsaUJBQWlCO0FBQUEsUUFDakIsc0JBQXNCO0FBQUEsTUFDeEIsQ0FBQztBQUFBLE1BQ0QsU0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBLE1BQU07QUFBQSxNQUNKLFNBQVMsT0FBTztBQUFBLE1BQ2hCLFlBQVksQ0FBQyxRQUFRLEtBQUs7QUFBQSxJQUM1QixDQUFDO0FBQUEsRUFDSDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
