import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   https: {
  //     key: "./iphone_store-privateKey.key",
  //     cert: "./iphone_store.crt",
  //   },
  // },
  plugins: [react()],
});
