import webpack from "webpack";

import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

import { BuildOptions } from "./types/config";

export function buildPlugins({
  paths,
  isDev,
  apiURL,
  project,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),

    //new webpack.DefinePlugin to use variables like isDev in our app components
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiURL),
      __PROJECT__: JSON.stringify(project),
    }),
  ];

  if (isDev) {
    plugins.push(
      //HotModuleReplacementPlugin for updating app when change code without page reload
      new webpack.HotModuleReplacementPlugin()
    );

    plugins.push(
      new BundleAnalyzerPlugin({
        analyzerPort: 3003,
        openAnalyzer: false,
      })
    );

    plugins.push(new ReactRefreshWebpackPlugin());
  }

  return plugins;
}
