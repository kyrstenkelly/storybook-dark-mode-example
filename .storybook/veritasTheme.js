import { create } from "@storybook/theming";

const VDS_CERULEAN = "#02B3E4";
const VDS_CERULEAN_DARK = "#017A9B";

export default create({
  base: "light",

  colorPrimary: VDS_CERULEAN,
  colorSecondary: VDS_CERULEAN_DARK,

  // Branding
  brandTitle: "Veritas",
  brandUrl: "https://udacity.com",
});
