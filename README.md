## 简介（Introduction)

webpack插件使用demo，其中包含许多插件练习

ConsoleLogOnBuildWebpackPlugin：这个插件在每次构建开始时在控制台打印一条消息。

ReplaceTextPlugin：这个插件会替换源代码中的特定文本，你可以通过参数指定要替换的文本和替换内容。

FileListPlugin：这个插件在每次构建完成后，会在输出目录中生成一个 filelist.md 文件，其中列出了所有的输出文件。


CopyWebpackPlugin：这个插件用于将单个文件或整个目录复制到构建目录。

ZipWebpackPlugin：这个插件用于将输出文件打包为一个 zip 文件。

## 技术栈（Scheme）

react + typescript + webpack5

## 项目设计结构

```js
.
├── README.md
├── babel.config.js
├── config
│   └── webpack.config.js
├── global.d.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── api
│   │   └── index.ts
│   ├── app.tsx
│   ├── assets
│   │   ├── images
│   │   │   ├── defaultPhoto@3x.png
│   │   │   └── defaultQR.png
│   │   └── styles
│   │       ├── index.less
│   │       └── normalize.less
│   ├── components
│   │   ├── index.ts
│   │   ├── noMatch.tsx
│   │   └── routeWithSubRoutes.tsx
│   ├── pages
│   │   ├── home
│   │   │   ├── components
│   │   │   │   ├── header.css
│   │   │   │   ├── header.module.css
│   │   │   │   ├── header.module.less
│   │   │   │   └── header.tsx
│   │   │   ├── index.less
│   │   │   └── index.tsx
│   │   └── my
│   │       └── index.tsx
│   ├── routes.ts
│   ├── types
│   │   └── index.d.ts
│   └── utils
│       └── index.ts
└── tsconfig.json
```

## 使用（Usage）

### 克隆仓库

git clone git@github.com:oldTimer98/webpack-demo.git

### 安装依赖

pnpm install

### 构建模式

正常构建
```
pnpm build
```

开启loader与plugin耗时统计
```
pnpm build:speed
```

开启构建产物大小分析
```
pnpm build:analyzer
```

