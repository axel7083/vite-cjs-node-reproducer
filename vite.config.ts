import { defineConfig } from 'vite';
import { builtinModules } from 'node:module';

export default defineConfig({
    build: {
        target: 'esnext',
        outDir: 'dist',
        assetsDir: '.',
        minify: false,
        lib: {
            entry: 'index.js',
            formats: ['cjs'],
        },
        rollupOptions: {
            external: builtinModules.flatMap(p => [p, `node:${p}`]),
            output: {
                entryFileNames: '[name].cjs',
            },
        },
    },
});
