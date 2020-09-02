# react-redux-express-jwt

## 環境構築

### クライアント

- webpack、babel に関するインストール

```
$ npm install --save-dev webpack webpack-cli webpack-dev-server
$ npm install --save webpack webpack-cli
$ npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
```

- react に関するインストール

```
$ npm install --save-dev react react-dom
$ npm install --save-dev react-router react-router-dom
$ npm install --save-dev classnames
```

- html-webpack-plugin、mini-css-extract-plugin に関するインストール

```
$ npm install --save-dev html-webpack-plugin mini-css-extract-plugin optimize-css-assets-webpack-plugin terser-webpack-plugin
$ npm install --save-dev css-loader
```

- sass-loader に関するインストール

```
$ npm install --save-dev sass-loader sass style-loader
```

### サーバ

- express に関するインストール

```
$ npm install --save-dev cookie-parser
```

- concurrently のインストール

```
$ npm install --save-dev concurrently
```