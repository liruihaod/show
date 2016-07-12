
### `ng-Ueditor`是一个`angular`集成`Ueditor`的插件，实现了双向绑定和按需加载功能。



## 如何使用
[示例Demo](https://github.com/liruihaod/show/blob/master/ng-ueditor/dest/demo.html)
***
### 安装

 - 1.下载最新的`angular.js`文件。引入到页面中。
```
    <script src="./angular-1.5.7/angular.min.js"></script>

```
- 2.下载本插件`ngUeditor`文件。引入到页面底部。
```
<script src="ngUeditor.js"></script>
```
***
### 使用

- 1.由于继承了`NgModelController`,这里在使用时候必须绑定`ngModel`
- 2.参数获取：
   使用时,在页面底部添加script标签,以`JSON`格式添加数据(这里以Ueditor两个文件为例)
```
   <script type="text/json" id="ueditor">
{
    "url": {
        "config": "http://ueditor.baidu.com/ueditor/ueditor.config.js",
        "main": "http://ueditor.baidu.com/ueditor/ueditor.all.js"
    }
}
</script>
```
   这里将需要按需加载的文件,写入其中
- 创建`ng-model`模板
```
    angular.module('acorn', ["ng.ueditor"])
```
- `html`部分
```
    <body ng-app="acorn">
    <ng-ueditor ng-model="test"></ng-ueditor>
    <textarea ng-model="test"></textarea>
    </body>
```
