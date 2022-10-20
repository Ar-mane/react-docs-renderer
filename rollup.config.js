import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import autoprefixer from "autoprefixer";
import size from "rollup-plugin-bundle-size";
import dts from "rollup-plugin-dts";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        name: "react-docs-renderer",
      },
      {
        file: packageJson.module,
        format: "esm",
      },
    ],
    plugins: [
      external(),
      nodeResolve(),
      commonjs(),
      typescript(),
      postcss({
        plugins: [autoprefixer()],
        minimize: true,
        extract: "styles.css",
      }),
      terser({ compress: true }),
    ],
  },
  {
    input: "dist/esm/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    external: [/\.css$/],
    plugins: [dts(), size()],
  },
];
