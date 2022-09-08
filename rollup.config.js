import typescript from "rollup-plugin-typescript2";
import { uglify } from "rollup-plugin-uglify";
import packageJson from "./package.json";
import dts from "rollup-plugin-dts";

export default [
	{
		input: "src/index.ts",
		output: [
			{ file: packageJson.cjs, format: "cjs" },
			{ file: packageJson.module, format: "esm" },
			{
				name: "gandolfini_hooks",
				file: packageJson.browser,
				format: "umd",
			},
		],
		plugins: [
			typescript({
				tsconfig: "./tsconfig.json",
				rollupCommonJSResolveHack: false,
				clean: true,
			}),
			uglify(),
		],
	},
	{
		input: "src/index.ts",
		output: [{ file: packageJson.typings, format: "es" }],
		plugins: [dts()],
	},
];
