import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
})

// pour utiliser sur l'iphone
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000,
//     host: "0.0.0.0",
//   },
// })
