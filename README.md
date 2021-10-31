<h1 align="center"> 👩‍💻 PHP & VUE-CLI 👩‍💻 </h1>

### `說明檔`
 [中文](/) | [English](./)


### `專案安裝`
```bash
# 安裝
$ git clone https://github.com/kcc7907/php_vueCli.git
$ npm install
```

### `專案執行`
#### 原生 PHP server + Vue-cli dev
- 下載 [PHP](/)
- 設定 PHP [環境變數](./)
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
