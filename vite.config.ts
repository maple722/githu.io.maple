import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({  
  base: '/github.io.maple/', // 匹配你的 GitHub 仓库路径  
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
