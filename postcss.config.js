import cssnano from "cssnano";
import autoprefixer from "autoprefixer";
import postcssImport from "postcss-import";
import postcssPresetEnv from "postcss-preset-env";
import postcssPurgecss from "@fullhuman/postcss-purgecss";

const mode = process.env.NODE_ENV;
const dev = mode === "development";

const REGEX_CLASS_SELECTOR = /(?:class:)*([\w\d-/:%.]+)/gm;
const postcssContentMapper = ([_match, group, ..._rest]) => group;
const postcssDefaultExtractor = (content) =>
  [...content.matchAll(REGEX_CLASS_SELECTOR)].map(postcssContentMapper);

export default {
  scss: true,
  plugins: [
    postcssImport,
    postcssPresetEnv({
      "color-mod-function": true,
      "nesting-rules": true,
    }),
    autoprefixer(),
    !dev &&
      postcssPurgecss({
        content: ["./src/**/*.svelte", "./src/**/*.html"],
        defaultExtractor: postcssDefaultExtractor,
      }),
    !dev &&
      cssnano({
        preset: ["default", { discardComments: { removeAll: true } }],
      }),
  ].filter(Boolean),
};
