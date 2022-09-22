const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "platos",
    projectName: "card",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    output: {
      libraryTarget: 'system'
    },
    // modify the webpack config however you'd like to by adding to this object
  });
};
