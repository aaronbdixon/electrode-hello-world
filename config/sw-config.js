module.exports = {
  cache: {
    cacheId: "electrode-hello-world",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    title: "electrode-hello-world",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
