module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias["webpack-hot-middleware/client"] = "empty";
    }
    return config;
  },
};
