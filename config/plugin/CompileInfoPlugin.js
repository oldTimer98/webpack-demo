class ConsoleLogOnBuildWebpackPlugin {
  constructor() {}
  apply(compiler) {
    compiler.hooks.run.tap("ConsoleLogOnBuildWebpackPlugin", (compilation) => {
      console.log("The webpack build process is starting!!!");
    });
  }
}

module.exports = ConsoleLogOnBuildWebpackPlugin
