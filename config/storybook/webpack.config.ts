import path from "path";
import { Configuration, RuleSetRule } from "webpack";

import { BuildPaths } from "./../build/types/config";
import { buildScssLoader } from "../build/loaders/buildScssLoaders";

export default ({ config }: { config: Configuration }) => {
  const paths: BuildPaths = {
    build: "",
    html: "",
    entry: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };

  config.resolve.modules.push(paths.src);

  config.resolve.extensions.push(".ts", ".tsx");

  config.module.rules.push(buildScssLoader(true));

  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });

  return config;
};