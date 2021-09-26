// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const path = require("path");

// eslint-disable-next-line no-undef
module.exports = {
	mode: "development",
	entry: "./src/index.ts",
	output: {
		// eslint-disable-next-line no-undef
		path: path.join(__dirname, "docs"),
		filename: "bundle.js",
	},
	resolve: {
		extensions: [".ts", ".js"],
	},
	module: {
		rules: [
			{ test: /\.ts$/, loader: "ts-loader" },
			{ test: /\.(png|jpe?g|gif)$/i, loader: "file-loader" },
		],
	},
};
