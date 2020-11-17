// next.config.js
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = ({
	// publicRuntimeConfig: {
  //   VARIABLE_TEST_FER : process.env.VARIABLE_TEST_FER
	// },
	typescript: {
    ignoreBuildErrors: true,
  },
	webpack(config, options) {
		if (!config.resolve.plugins) {
      config.resolve.plugins = [];
    }

    config.resolve.plugins.push(new TsconfigPathsPlugin());

    return config;
	}
})