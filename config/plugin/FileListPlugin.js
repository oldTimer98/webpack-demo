const fs = require("fs");
const path = require("path");

class FileListPlugin {
  apply(compiler) {
    // emit 是异步 hook，使用 tapAsync 触发它
    compiler.hooks.emit.tapAsync("FileListPlugin", (compilation, callback) => {
      let fileList = "In this build:\n\n"; // 遍历所有编译过的资源文件， // 对于每个文件名称，都添加一行内容。

      for (let filename in compilation.assets) {
        fileList += "-" + filename + "\n";
      } // 将这个列表作为一个新的文件资源，插入到 webpack 构建中：

      compilation.assets["fileList.md"] = {
        source: function () {
          return fileList;
        },
        size: function () {
          return fileList.length;
        },
      };

      callback();
    });
  }
}

module.exports = FileListPlugin;
