class ReplaceTextPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.compilation.tap("ReplaceTextPlugin", (compilation) => {
      compilation.hooks.optimizeChunkAssets.tap(
        "ReplaceTextPlugin",
        (chunks) => {
          chunks.forEach((chunk) => {
            chunk.files.forEach((file) => {
              const source = compilation.assets[file].source();
              const newSource = source.replace(
                this.options.search,
                this.options.replace
              );
              compilation.assets[file].source = () => newSource;
            });
          });
        }
      );
    });
  }
}

module.exports = ReplaceTextPlugin;
