const fs = require("fs");
const path = require("path");
const archiver = require("archiver");

class ZipWebpackPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.afterEmit.tapAsync(
      "ZipWebpackPlugin",
      (compilation, callback) => {
        const outputPath = compiler.options.output.path;
        const output = fs.createWriteStream(
          path.join(outputPath, this.options.filename)
        );

        const archive = archiver("zip", {
          zlib: { level: 9 }, // 设置压缩级别。
        });

        output.on("close", () => {
          callback();
        });

        archive.pipe(output);
        archive.directory(outputPath, false);
        archive.finalize();
      }
    );
  }
}

module.exports = ZipWebpackPlugin;
