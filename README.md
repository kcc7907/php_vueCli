<h1 align="center"> 👩‍💻 PHP & VUE-CLI 👩‍💻 </h1>

### `說明檔`
 [中文](https://github.com/kcc7907/php_vueCli/edit/master/README.md) | [English](https://github.com/kcc7907/php_vueCli/edit/master/README.md)


### `專案安裝`
```bash
# 安裝
$ git clone https://github.com/kcc7907/php_vueCli.git
$ npm install
```

### `專案執行`
#### 原生 PHP server + Vue-cli dev
- 下載 [PHP](https://www.php.net/downloads)
- 設定 PHP [環境變數](http://asika.windspeaker.co/post/3491-win-php-cli)
```javascript
// npm script : 
//  "php": "php -S localhost:3000 -t public"
//  "serve": "vue-cli-service serve"
//  "all": "npm-run-all --parallel serve php"

//1. 使用 PHP cliI 啟動 PHP server 
  $ npm run php
  
  //執行 Vue-cli 開發模式
  $ npm run serve

//2. 或是用 npm-run-all 套件一次執行兩個指令
  $ npm run all
```

#### XAMPP
- 下載 [XAMPP](https://www.apachefriends.org/download.html)
- 打開這專案下的下列註解
```javascript
// vue.config.js
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost',
        changeOrigin: true
      }
    }
  }
  
// src/main.js
  // for xampp
  Vue.prototype.$axios = axios
  
```
### `PHP檔案位置`
#### 原生PHP
檔案放置public下，打包時也會一同產出。
```javascript
public/api 
```
#### XAMPP
複製public下的api資料夾到，到你的XAMPP安裝路徑下。
```javascript
xampp/htdocs/api
```

