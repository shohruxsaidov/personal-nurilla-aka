import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      external: ['y_0', 'w_3335', 'h_3335/fill/w_400', 'h_400', 'al_c', 'q_80', 'usm_0.66_1.00_0.01', 'enc_auto/Financial%20Advisor.jpg', 'w_5212', 'h_4000/fill/w_400', 'enc_auto/Financial%20Advisor.jpg', 'enc_auto/A%20couple%20at%20a%20business%20meeting.jpeg']
    }
  }
})
