// next.config.js
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = ({
	publicRuntimeConfig: {
    API : process.env.API
	},
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