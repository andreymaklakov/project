import webpack from "webpack";
import { buildBabelLoader } from "./loaders/buildBabelLoader";
import { buildScssLoader } from "./loaders/buildScssLoaders";

import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const sassLoader = buildScssLoader(isDev);

  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  const imageLoager = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  const babelLoader = buildBabelLoader(isDev);

  return [babelLoader, typescriptLoader, sassLoader, svgLoader, imageLoager];
}
