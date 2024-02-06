const fs = require("fs-extra");
const path = require("path");

class CopyWebpackPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.emit.tapAsync(
      "CopyWebpackPlugin",
      (compilation, callback) => {
        this.options.forEach((option) => {
          fs.copySync(
            option.from,
            path.join(compiler.options.output.path, option.to)
          );
        });
        callback();
      }
    );
  }
}

module.exports = CopyWebpackPlugin;
