## <font style="color:rgb(51, 51, 51);">HTML + CSS</font>
### <font style="color:rgb(51, 51, 51);">HTML介绍</font>
<font style="color:rgb(51, 51, 51);">html控制网站的结构， css控制网站的样式</font>

<font style="color:rgb(51, 51, 51);">html超文本标记语言</font>

<font style="color:rgb(51, 51, 51);">超文本： 超越了文本的限制， 比普通文本更强大。出了文字信息，还可以定义图片、音频、视频等</font>

<font style="color:rgb(51, 51, 51);">标记语言：有标签 "<标签名>" 构成的语言</font>

<font style="color:rgb(51, 51, 51);">html中标签都是预定义好的</font>

<font style="color:rgb(51, 51, 51);">代码可以直接在浏览器中运行 html标签由浏览器解析</font>

### <font style="color:rgb(51, 51, 51);">CSS 介绍</font>
<font style="color:rgb(51, 51, 51);">CSS：层叠样式表 用于控制页面的样式</font>

<font style="color:rgb(51, 51, 51);">1.新建文本文件 后缀名为.html </font>

<font style="color:rgb(51, 51, 51);">2.编写HTML的基本骨架 定义标题</font>

<font style="color:rgb(51, 51, 51);">3.在</font><font style="color:rgb(167, 167, 167);"><body></font><font style="color:rgb(51, 51, 51);">中填写内容</font>

<font style="color:rgb(167, 167, 167);"><haed></font><font style="color:rgb(51, 51, 51);">标签是用来定义网站的头部信息的 给浏览器看的 如CSS样式</font>

<font style="color:rgb(167, 167, 167);"><body></font><font style="color:rgb(51, 51, 51);">是网页的主体 用来存放给用户看的信息 图片 文字视频等</font>

<font style="color:rgb(167, 167, 167);"><img></font><font style="color:rgb(51, 51, 51);">标签可以引入图片</font>

<font style="color:rgb(167, 167, 167);"><br :></font><font style="color:rgb(51, 51, 51);">可以进行换行</font>

<font style="color:rgb(167, 167, 167);"><b></font><font style="color:rgb(51, 51, 51);">和</font><font style="color:rgb(167, 167, 167);"><strong></font><font style="color:rgb(51, 51, 51);">标签可以让文本加粗显示</font>

<font style="color:rgb(167, 167, 167);"><u></font><font style="color:rgb(51, 51, 51);">下划线</font>

<font style="color:rgb(167, 167, 167);"><i></font><font style="color:rgb(51, 51, 51);">斜线</font>

<font style="color:rgb(167, 167, 167);"><s></font><font style="color:rgb(51, 51, 51);">删除线</font>

<font style="color:rgb(51, 51, 51);">text-indent属性设置首行缩进</font>

<font style="color:rgb(51, 51, 51);">font-size属性设置字体大小</font>

<font style="color:rgb(51, 51, 51);">font-family属性设置字体</font>

<font style="color:rgb(51, 51, 51);">margin：设置居中显示</font>

<font style="color:rgb(51, 51, 51);">line-height：设置行高</font>

<font style="color:rgb(51, 51, 51);">&nbst是空格的实体字符</font>

<font style="color:rgb(51, 51, 51);">&lt : <</font>

<font style="color:rgb(51, 51, 51);">&gt : ></font>

```plain
width: 50%;
              /* 居中显示   */
              margin: 0 auto;
              /* 字体设置为宋体  */
              font-family: "宋体";
              /* 行距设置为2em; */
              line-height: 2em;
```

<img src = "img/1.png">

# <font style="color:rgb(51, 51, 51);">用于定义网站的几级标题</font>
<font style="color:rgb(51, 51, 51);">完整演示：</font>

```plain
<html>
    <head>
        <title>HELLO HTML</title>
    </head>
    <body>
        <h1>
            HELLO HTML
        </h1>
        <img src = "img.png">
        
    </body>
</html>
```

### <font style="color:rgb(51, 51, 51);">语法特点</font>
<font style="color:rgb(51, 51, 51);">1.标签不区分大小写</font>

<font style="color:rgb(51, 51, 51);">2.属性的值可以使用单引号也可以使用双引号</font>

<font style="color:rgb(51, 51, 51);">3.语法结构较为松散 不严谨</font>

### <font style="color:rgb(51, 51, 51);">解析特点</font>
<font style="color:rgb(51, 51, 51);">从上到下逐行解析</font>

### <font style="color:rgb(51, 51, 51);">标题</font>
<font style="color:rgb(51, 51, 51);">标题标签从</font><font style="color:rgb(167, 167, 167);"><h1></font><font style="color:rgb(51, 51, 51);"> - </font><font style="color:rgb(167, 167, 167);"><h6></font><font style="color:rgb(51, 51, 51);">没有</font><font style="color:rgb(167, 167, 167);"><h7></font>

<font style="color:rgb(167, 167, 167);"><a></font><font style="color:rgb(51, 51, 51);">是一个超链接标签 其中里面有两个常见的属性：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">href 表示链接地址</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">target 表示打开方式 _blank新窗口打开 _self在本窗口打开</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">默认就是_self</font>

<font style="color:rgb(51, 51, 51);">如果只是显示内容可以不用加任何标签直接输入文字就可以</font>

### <font style="color:rgb(51, 51, 51);">css的引入方式</font>
<font style="color:rgb(51, 51, 51);">行内样式：写在标签的style属性中 配合javascript使用</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">使用</font><font style="color:rgb(167, 167, 167);"><span></font><font style="color:rgb(51, 51, 51);">标签包裹起来 这个标签是没有任何意义的只是将内容包裹起来 在里面使用style属性指定字题颜色</font>

<span style="color:slategray">2025年1月1日</span>

<font style="color:rgb(51, 51, 51);">内部样式：写在style标签中 （可以写在页面任何位置 但是通常写在head中）</font>

```plain
<html>
    <head>
        <title>HELLO HTML</title>
        <style>
            span{
                color:red; 
            }
        </style>
    </head>
    <body>
        <h1>【学习新思想 整座新青年】</h1>
        <a href = "cctv.com" target="_blank">央视网</a>
        <span>2025年1月1日</span>
    </body>
</html>
```

<font style="color:rgb(51, 51, 51);">外部样式：写在一个单独的.css文件中 通过link标签在网页中引入</font>

 <link rel="stylesheet" href="img\css\news.css">

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">link标签中的两个属性</font>

<font style="color:rgb(51, 51, 51);">		</font><font style="color:rgb(51, 51, 51);">rel：引入的样式</font>

<font style="color:rgb(51, 51, 51);">		</font><font style="color:rgb(51, 51, 51);">href：表示引入的地址</font>

<font style="color:rgb(51, 51, 51);">可以使用text-decoration:none标签去除超链接下面的下划线</font>

### <font style="color:rgb(51, 51, 51);">颜色的表示形式</font>
### <font style="color:rgb(51, 51, 51);">CSS选择器</font>
<font style="color:rgb(51, 51, 51);">CSS选择器书用来选取需要设置样式的元素（标签）的</font>

```plain
<html>
    <head>
        <title>HELLO HTML</title>
        <style>
            span1{
                color:red; 
            }
            .cla {
                color:blue;
                size : 500px;
            }
            #id {
                color:green;
            }
        </style>
        <link rel="stylesheet" href="img\css\news.css">
    </head>
    <body>
        <h1>【学习新思想 整座新青年】</h1>
        <a href = "cctv.com" target="_blank">央视网</a>
        <span1>我是元素选择器</span1>
        <span .clss = "cla">我是类选择器</span>
        <span id = "id">我是id选择器</span>
    </body>
</html>
```

<font style="color:rgb(51, 51, 51);">三种选择器的优先级：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">ID选择器>类选择器>元素选择器</font>

### <font style="color:rgb(51, 51, 51);">video标签</font>
<font style="color:rgb(51, 51, 51);">src：视频地址</font>

<font style="color:rgb(51, 51, 51);">controls: 显示播放控件</font>

<font style="color:rgb(51, 51, 51);">autoplay：自动播放 </font>

<font style="color:rgb(51, 51, 51);">widh: 视频宽度</font>

<font style="color:rgb(51, 51, 51);">height：视频高度、</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">单位：</font>

<font style="color:rgb(51, 51, 51);">		</font><font style="color:rgb(51, 51, 51);">px：像素</font>

<font style="color:rgb(51, 51, 51);">		</font><font style="color:rgb(51, 51, 51);">%：百分比 相对于父元素的百分比</font>

### <font style="color:rgb(51, 51, 51);">p段落引入标签</font>
<font style="color:rgb(51, 51, 51);">段落引入标签 使用p标签可以将一段文字包裹起来 </font>

### <font style="color:rgb(51, 51, 51);">img图片</font>
<font style="color:rgb(51, 51, 51);">属性;</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">src:图片的访问地址</font>

<font style="color:rgb(51, 51, 51);">		</font><font style="color:rgb(51, 51, 51);">绝对路径 不推荐</font>

<font style="color:rgb(51, 51, 51);">		</font><font style="color:rgb(51, 51, 51);">行对路径</font>

<font style="color:rgb(51, 51, 51);">			</font><font style="color:rgb(51, 51, 51);">./ 当前目录 可以省略</font>

<font style="color:rgb(51, 51, 51);">			</font><font style="color:rgb(51, 51, 51);">../ 上一级目录</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">width: 宽度</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">heigth： 高度</font>

### <font style="color:rgb(51, 51, 51);">盒子模型</font>
<font style="color:rgb(51, 51, 51);">页面中所有的元素 都可以看作一个盒子 由盒子将页面中的元素包含在一个矩形区域内 通过盒子的视角更方便的进行页面布局</font>

<font style="color:rgb(51, 51, 51);">盒子模型组成： 内容区域(content)、内边距区域(padding)、边框区域(border)、边外据区域(margin</font>

<font style="color:rgb(51, 51, 51);">)</font>

<font style="color:rgb(51, 51, 51);">布局标签：网页开发中 会使用div和span这两个没有语义的布局标签</font>

<font style="color:rgb(51, 51, 51);">div标签</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">一行显示一个</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">宽度默认是父元素的宽度 高度由内容撑开</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">可以设置宽高</font>

<font style="color:rgb(51, 51, 51);">span标签</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">一行可以显示多个</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">宽度和高度默认由内容撑开</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">不可以设置宽高</font>

```plain
div {
    width : 200px;/*设置宽度*/
    heigth : 200;/*设置高度*/
    background-color : #05a012d; 设置背景色
    padding : 20px 20px 20px 20px; 内边距
    border : 20px solid #a23222;边框
    margin : 20px 20px 20px 20px;外边距
    /*方位分别是上右下左 顺时针*/
}
```

### <font style="color:rgb(51, 51, 51);">弹性布局 flex</font>
<font style="color:rgb(51, 51, 51);">是flexible Box的缩写 是一种给一维的布局模型 可以为元素之间提供强大的空间布局和对其能力</font>

<font style="color:rgb(51, 51, 51);">通过给服了容器添加flex的想过属性 来控制族元素的位置和排列方式</font>

### <font style="color:rgb(51, 51, 51);">表单标签</font>
<font style="color:rgb(51, 51, 51);">在网页中主要负责数据采集 如注册登录等数据采集</font>

<font style="color:rgb(51, 51, 51);">标签：</font><font style="color:rgb(167, 167, 167);"><form></font>

<font style="color:rgb(51, 51, 51);">表单项：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(167, 167, 167);"><input></font><font style="color:rgb(51, 51, 51);">: 定义表单项 通过type属性控制输入的形式（rext/password/...）</font>

<font style="color:rgb(51, 51, 51);">		</font><font style="color:rgb(51, 51, 51);">设置type属性为submit是为提交按钮</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(167, 167, 167);"><select></font><font style="color:rgb(51, 51, 51);">: 定义下拉列表</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(167, 167, 167);"><textarea></font><font style="color:rgb(51, 51, 51);">: 定义文本域 长文本</font>

<font style="color:rgb(51, 51, 51);">	</font>

<font style="color:rgb(51, 51, 51);">属性：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">action：规定当提交表单时向何处发送表单数据URL</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">method: 规定用于发送数据的方式 GET、POST</font>

<font style="color:rgb(51, 51, 51);">表单项想要提价数据必须设置name属性 表示表单项的名字</font>

### <font style="color:rgb(51, 51, 51);">table表格展示数据</font>
#### <font style="color:rgb(51, 51, 51);">thead表头</font>
<font style="color:rgb(167, 167, 167);"><tr></font><font style="color:rgb(51, 51, 51);">用来定义行的</font>

<font style="color:rgb(167, 167, 167);"><th></font><font style="color:rgb(51, 51, 51);">用来定义表头单元格</font>

#### <font style="color:rgb(51, 51, 51);">tbody 表格主题内容</font>
<font style="color:rgb(167, 167, 167);"><td></font><font style="color:rgb(51, 51, 51);">用来定义普通单元格</font>

## <font style="color:rgb(51, 51, 51);">JavaScript</font>
<font style="color:rgb(51, 51, 51);">负责网页的行为 交互效果</font>

<font style="color:rgb(51, 51, 51);">是一门跨平台 面向对象的脚本语言 是用来控制网页行为 实现网页的交互效果</font>

<font style="color:rgb(51, 51, 51);">组成：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">ECMAscript：规定了JS基础语法核心只是 包括变量 数据类型 流程控制 函数 对象等</font>

<font style="color:rgb(51, 51, 51);">BOM：浏览器对象模型 用于操作浏览器本身 页面弹窗 地址栏操作 关闭窗口等</font>

<font style="color:rgb(51, 51, 51);">DOM：文档对象模型 用于操作HTML文档 例如高边标签内的内容 改变标签内字体样式等</font>

### <font style="color:rgb(51, 51, 51);">引入方式</font>
<font style="color:rgb(51, 51, 51);">内部脚本：将JS代码定义在HTML页面中</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">JS代码必须位于</font><script></script><font style="color:rgb(51, 51, 51);"> 标签之间</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">在HTML文档中 可以在任意地方 防止任意数量的</font><font style="color:rgb(167, 167, 167);"><script></font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">一般会把脚本放在</font><font style="color:rgb(167, 167, 167);"><body></font><font style="color:rgb(51, 51, 51);">元素的底部 可与i改善显示速度</font>

<font style="color:rgb(51, 51, 51);">外部脚本：将JS脚本放在外部jS文件中 然后引入到HTML界面中</font>

<script src = "demo.js"><script>

### <font style="color:rgb(51, 51, 51);">变量&常量</font>
<font style="color:rgb(51, 51, 51);">JS中用let关键字声明白能量 （弱类型语言 变量可以存放不同类型的数据）</font>

<font style="color:rgb(51, 51, 51);">变量名命名规则：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">只能用数字、字母、下划线、美元符号组成， 数字不能开头</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">变量名严格区分大小写</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">不能使用关键字</font>

<font style="color:rgb(51, 51, 51);">JS中使用const声明常量</font>

<font style="color:rgb(51, 51, 51);">一旦声明 常量的值不可以改变 不可以重新赋值</font>

<font style="color:rgb(51, 51, 51);">早期可以使用var声明变量但是不推荐 会提升变量的作用域</font>

#### <font style="color:rgb(51, 51, 51);">数据类型</font>
##### <font style="color:rgb(51, 51, 51);">基本数据类型</font>
<font style="color:rgb(51, 51, 51);">number:数字</font>

<font style="color:rgb(51, 51, 51);">boolean：布尔类型 true false</font>

<font style="color:rgb(51, 51, 51);">null 对象为空</font>

<font style="color:rgb(51, 51, 51);">undefined: 声明的变量没有初始化是 的默认值</font>

<font style="color:rgb(51, 51, 51);">string： 字符串 单引号 双引号 反引号 都可以</font>

<font style="color:rgb(51, 51, 51);">使用typeof运算符可以获取数据类型</font>

typeof a

##### <font style="color:rgb(51, 51, 51);">模板字符串</font>
<font style="color:rgb(51, 51, 51);">反引号引起来的字符串是模板字符串 内容拼接是使用${}包住变量</font>

alert(`你好世界${name}${age}`)

### <font style="color:rgb(51, 51, 51);">输出语句</font>
<font style="color:rgb(51, 51, 51);">可以使用alert()函数输出变量或常量的值 弹出框</font>

<font style="color:rgb(51, 51, 51);">console.log也是输出到控制台</font>

<font style="color:rgb(51, 51, 51);">document.write()可以直接将值i输出在body区域</font>

### <font style="color:rgb(51, 51, 51);">函数</font>
<font style="color:rgb(51, 51, 51);">函数是被设计用来执行特定任务的代码块 方便程序的封装使用</font>

<font style="color:rgb(51, 51, 51);">JS中通过关键字function定义 定义是不用指定类型 </font>

#### <font style="color:rgb(51, 51, 51);">具名函数</font>
```plain
function add(a, b) {
    //执行 的代码
    return a + b;
}
```

<font style="color:rgb(51, 51, 51);">直接通过函数名调用函数</font>

let result = add(10, 20);

<font style="color:rgb(51, 51, 51);">调用时的参数个数和形参是可以不一致的 建议保持一致</font>

#### <font style="color:rgb(51, 51, 51);">匿名函数</font>
<font style="color:rgb(51, 51, 51);">匿名函数是指一种没有名称的函数 可以通过函数表达式和箭头函数定义</font>

```plain
//函数表达式
let add = function(a, b) {
    return a + b;
}
//箭头函数
let add = (a + b) => {
    return a + b;
}
```

<font style="color:rgb(51, 51, 51);">调用时 可以通过变量名直接调用</font>

let result = add(10, 20);

### <font style="color:rgb(51, 51, 51);">自定义对象</font>
<font style="color:rgb(51, 51, 51);">定义格式：</font>

```plain
let 对象名 = {
    属性名: 属性值,
    属性名: 属性值,
    属性名: 属性值,
    方法名: function (形参列表) { }//: function可以省略
    方法名(形参列表) {}
}
```

<font style="color:rgb(51, 51, 51);">this：和java中的this一致 表示当前对象</font>

<font style="color:rgb(51, 51, 51);">在对象里面的函数不要使用箭头函数</font>

<font style="color:rgb(51, 51, 51);">调用格式：</font>

```plain
对象名.属性名;
对象名.方法名();
```

### <font style="color:rgb(51, 51, 51);">json</font>
<font style="color:rgb(51, 51, 51);">对象标记法 JS对象标记法书写的文本</font>

<font style="color:rgb(51, 51, 51);">由于语法简单层次结构鲜明 现在用于数据载体 在网络中进行数据传输 </font>

 

<font style="color:rgb(51, 51, 51);">所有的key必须使用双引号引起来 值如果是字符串也要使用双引号引起来</font>

<font style="color:rgb(51, 51, 51);">JS中提供了JSON对象</font>

<font style="color:rgb(51, 51, 51);">JSON.stringify(...)可以将JS中的对象转成JSON</font>

let jsonString = JSON.stringify(person);

<font style="color:rgb(51, 51, 51);">JSON.parse(..)可以将JSON转换成JS中的对象</font>

### <font style="color:rgb(51, 51, 51);">DOM</font>
<font style="color:rgb(51, 51, 51);">文档对象模型</font>

<font style="color:rgb(51, 51, 51);">将标记语言的各个组成部分封装为对应的对象：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">Document：整个文档的对象</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">Element：元素对象</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">Attribute：属性对象</font><font style="color:rgb(51, 51, 51);">		</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">Text：文本对象</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">Comment：注释对象</font>

<font style="color:rgb(51, 51, 51);">通过DOM 可以对HTML进行操作：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">改变HTML元素的内容</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">改变HTML元素的样式</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">对HTML DOM事件做出反应</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">添加和删除HTML元素</font>

#### <font style="color:rgb(51, 51, 51);">操作</font>
<font style="color:rgb(51, 51, 51);">核心思想 ：把页面中的所有元素都当成对象处理（标签的所有属性在该对象上都可以找到</font>

<font style="color:rgb(51, 51, 51);">操作步骤：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">获取操作的DOM对象</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">操作DOM对象的属性或方法</font>

<font style="color:rgb(51, 51, 51);">获取DoM对象</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">根据CSS选择器来获取元素 获取匹配到的第一个元素 ：document.querySelector('选择器')</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">根据CSS选择器来获取DOM元素 获取匹配到的所有元素：document.querySelectorALL('选择器')</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">注意：得到的是一个NodeList节点集合 是一个伪数组（有长度 有索引的数组）</font>

### <font style="color:rgb(51, 51, 51);">事件监听</font>
<font style="color:rgb(51, 51, 51);">HTML时间是发生在HTML元素上的 事情 比如：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">按钮被点击</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">鼠标移动到元素上</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">按下键盘按钮</font>

<font style="color:rgb(51, 51, 51);">事件监听：Javascript可以在时间出发时 就立刻调用一个函数做出响应 也叫 时间绑定或注册时间</font>

<font style="color:rgb(51, 51, 51);">语法：</font>

事件源.addEventListener('事件类型', 事件触发时执行的函数)；	

<font style="color:rgb(51, 51, 51);">事件监听三要素：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">事件源：哪个dom出发触发了该事件 要获取dom元素</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">事件类型：用什么方式触发 比如鼠标单击 click</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">事件触发执行的函数：要做什么事</font>

#### <font style="color:rgb(51, 51, 51);">常见事件</font>
<font style="color:rgb(51, 51, 51);">鼠标事件</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">click：鼠标单击</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">mouseenter：鼠标移入</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">mouseleave：鼠标移出</font>

<font style="color:rgb(51, 51, 51);">键盘事件</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">keydown：键盘按下时触发</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">keyup：键盘抬起时触发</font>

<font style="color:rgb(51, 51, 51);">焦点事件</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">focus：获得焦点触发</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">blur：失去焦点时触发</font>

<font style="color:rgb(51, 51, 51);">表单事件</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">input：用户输入时触发</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">bubmit：表单提交时触发</font>

## <font style="color:rgb(51, 51, 51);">Vue3</font>
<font style="color:rgb(51, 51, 51);">是一个用于构架用户界面的渐进式Javascript框架</font>

<font style="color:rgb(51, 51, 51);">框架：就是一个完整的项目解决方案 用于快速构建项目</font>

<font style="color:rgb(51, 51, 51);">优点：大大提升了前端项目的开发效率</font>

<font style="color:rgb(51, 51, 51);">缺点：需要理解记忆框架的使用规则</font>

<font style="color:rgb(51, 51, 51);">基于数据渲染出用户看到的页面 数据驱动试图</font>

### <font style="color:rgb(51, 51, 51);">准备</font>
<font style="color:rgb(51, 51, 51);">引入Vue模块</font>

```plain
<script type="module">
        import{createApp}from'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
    </script>
```

<font style="color:rgb(51, 51, 51);">创建Vue程序的应用实例 控制视图的元素</font>

<font style="color:rgb(51, 51, 51);">准备元素(div) 被Vue控制</font>

```plain
<div id = "app">
        <h1>{{message}}</h1>
        
    </div>
        
    <script type="module">
        import{createApp}from'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
        createApp({
             data() {
                 return {
                     message: "helloword"
                 }
             }   
        }).mount('#app')
    </script>
```

#### <font style="color:rgb(51, 51, 51);">数据驱动视图</font>
<font style="color:rgb(51, 51, 51);">准备数据</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">data返回的数据就是数据</font>

<font style="color:rgb(51, 51, 51);">通过插值表达式渲染页面</font>

### <font style="color:rgb(51, 51, 51);">常用指令</font>
<font style="color:rgb(51, 51, 51);">HTML标签上带有v-标签的特殊属性 不同的指令具有不同的涵义 可以实现不同的功能</font>

## <font style="color:rgb(51, 51, 51);">Ajax</font>
<font style="color:rgb(51, 51, 51);">异步的JS和XML</font>

<font style="color:rgb(51, 51, 51);">作用：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">数据交换：通过Akax可以给服务器发送和请求 并获取服务器的数据</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">异步交互：可以在不重新加在整个也买你的情况下与服务器交换数据并更新部分为网页的技术 例如 搜索联想 用户名是否合法等</font>

### <font style="color:rgb(51, 51, 51);">同步与异步交互区别</font>
### <font style="color:rgb(51, 51, 51);">AXIOS</font>
<font style="color:rgb(51, 51, 51);">对原生Ajax进行的封装 简化了书写 快速开发</font>

<font style="color:rgb(51, 51, 51);">步骤;</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">引入Axios的JS文件</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">使用Axios发送请求 并获取响应结果</font>

```plain
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

axios
method:'GET'，
url:'https://web-server.itheima.net/emps/list'
）.then(（result）=>{
console.log(result.data);
）.catch(（err）=>{
alert(err);
）;
```

## <font style="color:rgb(51, 51, 51);">Maven</font>
<font style="color:rgb(51, 51, 51);">是一款用于管理和构建java项目的工具时apach旗下的一个开源项目 基于项目对象模型PMOOM盖尼奥 通过一小段的描述信息管理项目的构建</font>

### <font style="color:rgb(51, 51, 51);">作用</font>
<font style="color:rgb(51, 51, 51);">依赖管理</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">可以方便快捷的jar包</font>

<font style="color:rgb(51, 51, 51);">项目构建</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">提供了一套标准化的跨平台的打包工具</font>

<font style="color:rgb(51, 51, 51);">统一项目结构</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">不同的编译器目录结构是不一样的 不可以互相导入， maven提供了一套容易的项目结构</font>

### <font style="color:rgb(51, 51, 51);">安装maven</font>
<font style="color:rgb(51, 51, 51);">1。解压</font>

<font style="color:rgb(51, 51, 51);">2.配置本地仓库 修改conf/sittings.xml中的</font><font style="color:rgb(167, 167, 167);"><localRepository></font><font style="color:rgb(51, 51, 51);">为一个指定目录</font>

<font style="color:rgb(51, 51, 51);">3.配置阿里云私服：修改conf/settings.xml中的</font><font style="color:rgb(167, 167, 167);"><mirrors></font><font style="color:rgb(51, 51, 51);">标签 添加如下标签</font>

```plain
<mirror>
<id>alimaven</id>
<name>aliyun maven</name>
<url>http://maven.aliyun.com/nexus/content/groups/public/</url>
<mirrorof>central</mirrorof>
</mirror>
```

<font style="color:rgb(51, 51, 51);">4.配置环境变量：MAVEN_HOME为maVen的解压目录，并将其bin目录加入PATH环境变量。</font>

### <font style="color:rgb(51, 51, 51);">Maven坐标</font>
<font style="color:rgb(51, 51, 51);">坐标是资源的唯一标识。通过该坐标可以唯一定位资源的位置</font>

<font style="color:rgb(51, 51, 51);">使用坐标来定义项目或引入项目中需要的依赖</font>

#### <font style="color:rgb(51, 51, 51);">坐标的组成</font>
<font style="color:rgb(51, 51, 51);">groupId：定义当前Maven项目隶属组织名称 通常是域名反写</font>

<font style="color:rgb(51, 51, 51);">artifactId：定义当前maven项目的名称 通常是模块名称</font>

<font style="color:rgb(51, 51, 51);">version：定义当前项目的版本号</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">SNAPSHOT：功能不稳定 处于开发解读那 快照版本</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">RELEASE：功能趋于稳定 当前停止更新 可以用于发行的版本</font>

### <font style="color:rgb(51, 51, 51);">导入项目</font>
<font style="color:rgb(51, 51, 51);">方式-：File->ProjectStructure->Modules->ImportModule->选择maven项目的pom.xml。</font>

<font style="color:rgb(51, 51, 51);">方式二:Maven面板->+（AddMavenProjects））->选择maven项目的pom.xml。</font>

### <font style="color:rgb(51, 51, 51);">依赖管理</font>
<font style="color:rgb(51, 51, 51);">依赖：是指项目运行需要的jar包 一个项目中可以引入多个jar包</font>

#### <font style="color:rgb(51, 51, 51);">配置</font>
<font style="color:rgb(51, 51, 51);">在pom.xml中编写</font><font style="color:rgb(167, 167, 167);"><dependency></font><font style="color:rgb(51, 51, 51);">标签</font>

<font style="color:rgb(51, 51, 51);">在</font><font style="color:rgb(167, 167, 167);"><dependencies></font><font style="color:rgb(51, 51, 51);">标签中 使用</font><font style="color:rgb(167, 167, 167);"><dependency></font><font style="color:rgb(51, 51, 51);">引入坐标</font>

<font style="color:rgb(51, 51, 51);">定义坐标的groupId, artifactId, version</font>

<font style="color:rgb(51, 51, 51);">点击刷新按钮 引入最新加入的坐标</font>

```plain
<dependencies>
    <dependency>
        <groupId>commons-io</groupId>
        <artifactId>commons-io</artifactId>
        <version>2.0</version>
    </dependency>
</dependencies>
```

##### <font style="color:rgb(51, 51, 51);">排除依赖</font>
<font style="color:rgb(51, 51, 51);">指主动断开依赖的资源 被排除的资源无需指定版本 </font><font style="color:rgb(167, 167, 167);"><exclusion></font>

#### <font style="color:rgb(51, 51, 51);">生命周期</font>
<font style="color:rgb(51, 51, 51);">就是为了对所有的maven项目构建过程进行抽象和统一</font>

<font style="color:rgb(51, 51, 51);">maven中有三套相互独立的生命周期</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">clean：清理工作</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">default：核心工作 编译 测试 打包 安装 部署等</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">site：生成报告 发布站点等</font>

<font style="color:rgb(51, 51, 51);">clean：移除上一次构建生成的文件</font><font style="color:rgb(51, 51, 51);">compile：编译项目源代码</font><font style="color:rgb(51, 51, 51);">test：使用合适的单元测试框架运行测试（junit）</font><font style="color:rgb(51, 51, 51);">package：将编译后的文件打包，如：jar、war等</font><font style="color:rgb(51, 51, 51);">install：安装项目到本地仓库</font>

<font style="color:rgb(51, 51, 51);">在</font>**<font style="color:rgb(51, 51, 51);">同一套</font>**<font style="color:rgb(51, 51, 51);">生命周期内 当运行后面阶段是 前面的阶段都会运行</font>

### <font style="color:rgb(51, 51, 51);">单元测试</font>
<font style="color:rgb(51, 51, 51);">测试是用来促进鉴定软件的正确性 完整性 安全性 和质量的过程</font>

<font style="color:rgb(51, 51, 51);">阶段划分：单元测试、集成测试、系统测试、验收测试</font>

<font style="color:rgb(51, 51, 51);">单元测试是对软件的基本组成进行测试 测试的最小单位</font>

<font style="color:rgb(51, 51, 51);">测试方法：白盒测试、黑盒测试、灰盒测试</font>

#### <font style="color:rgb(51, 51, 51);">JUnit</font>
<font style="color:rgb(51, 51, 51);">是最流行的java测试框架之一 提供了一些功能 方便程序进行单元测试</font>

<font style="color:rgb(51, 51, 51);">1.在pom.xml中引入junit依赖</font>

```plain
<dependency>
        <groupId>org.junit.jupiter</groupId>
        <artifactId>junit-jupiter</artifactId>
        <version>5.9.1</version>
        <scope>test</scope>
```

<font style="color:rgb(51, 51, 51);">2.在test/java目录下 创建测试类并编写对应的测试放大 并在方法上面声明@Test注解</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">注意：JUnit单元测试类名命名规范为：XxxxxTest【规范】。JUnit单元测试的方法，必须声明为pubLic Void【规定】。</font>

1. <font style="color:rgb(51, 51, 51);">运行单元测试 绿色成功 红色失败</font>

#### <font style="color:rgb(51, 51, 51);">断言</font>
#### <font style="color:rgb(51, 51, 51);">常见注解</font>
#### <font style="color:rgb(51, 51, 51);">开发规范</font>
<font style="color:rgb(51, 51, 51);">原则：编写测试方法时 要尽可能包括所有的可能尤其是 边界数据</font>

#### <font style="color:rgb(51, 51, 51);">依赖范围</font>
<font style="color:rgb(51, 51, 51);">依赖的jar包，默认情况下，可以在任何地方使用。可以通过</font><font style="color:rgb(167, 167, 167);"><scope></font><font style="color:rgb(51, 51, 51);">.</font><font style="color:rgb(167, 167, 167);"></scope></font><font style="color:rgb(51, 51, 51);">设置其作用范围。</font>

## <font style="color:rgb(51, 51, 51);">web基础</font>
### <font style="color:rgb(51, 51, 51);">springWeb入门</font>
#### <font style="color:rgb(51, 51, 51);">创建步骤</font>
<font style="color:rgb(51, 51, 51);">1.创建springboot工程，并勾选给web开发相关依赖</font>

<font style="color:rgb(51, 51, 51);">2.定义HelloController类 添加方法hello并添加注解</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">@RestController 表示当前类是个请求类</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">@RequestMapping("/hello") 表示请求路径</font>

<font style="color:rgb(51, 51, 51);">springBoot创建时会自动创建一个启动类用注解@SpringBootApplication 表示</font>

### <font style="color:rgb(51, 51, 51);">http协议</font>
<font style="color:rgb(51, 51, 51);">超文本传输协议，规定了浏览器和服务器之间数据传输的规则</font>

#### <font style="color:rgb(51, 51, 51);">特点</font>
<font style="color:rgb(51, 51, 51);">基于tcp协议 面向连接 安全</font>

<font style="color:rgb(51, 51, 51);">基于请求-响应模型 一次请求对应一次相应</font>

<font style="color:rgb(51, 51, 51);">是无状态的协议 对于事物处理没有记忆能力 每次请求响应都是独立的</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">缺点：多次请求之间不能共享诗句</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">有点：速度快</font>

#### <font style="color:rgb(51, 51, 51);">请求协议</font>
<font style="color:rgb(51, 51, 51);">1.请求行 </font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">由三部分组成 请求方式 资源路径 协议</font>

GET /brand/findAll?name=OPP0&status=1 HTTP/1.1

<font style="color:rgb(51, 51, 51);">2.请求头</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">第二行开始 格式：key: value</font>

Accept:text/html,application/xhtml+xml,application/xmlq=0.9,image/avif,image/webp,image/apng,*/•Accept-Encoding:gzip,deflate，br•Accept-Language:zh-CN,zh;g=0.9•Host:1oca1host:8080•User-Agent:Mozi1la/5.0（Windows NT 10.0;Win64;x64)AppleWebkit/537.36（KHTML,1ike Gecko)Chrome/..

**<font style="color:rgb(51, 51, 51);">常见的key：</font>**

<font style="color:rgb(51, 51, 51);">Host</font><font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">请求的主机名</font><font style="color:rgb(51, 51, 51);">User-Agent</font><font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">浏览器版本，例如Chrome浏览器的标识类似Mozilla/5.0。。。Chrome/79，IE浏览器的标识类似Mozilla/5.0</font><font style="color:rgb(51, 51, 51);">(Windows NT ...） like Gecko</font><font style="color:rgb(51, 51, 51);">Accept</font><font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">表示浏览器能接收的资源类型，如text/</font>_<font style="color:rgb(51, 51, 51);">，image/</font>_<font style="color:rgb(51, 51, 51);">或者</font>_<font style="color:rgb(51, 51, 51);">/</font>_<font style="color:rgb(51, 51, 51);">表示所有;</font><font style="color:rgb(51, 51, 51);">Accept-Language</font><font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">表示浏览器偏好的语言，服务器可以据此返回不同语言的网页；</font><font style="color:rgb(51, 51, 51);">Accept-Encoding</font><font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">表示浏览器可以支持的压缩类型，例如gzip，deflate等。</font><font style="color:rgb(51, 51, 51);">Content-Type</font><font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">请求主体的数据类型。</font><font style="color:rgb(51, 51, 51);">Content-Length</font><font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">请求主体的大小（单位：字节）。</font>

<font style="color:rgb(51, 51, 51);">3.请求体</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">POST请求 存放请求参数</font>

{"status":1, "brandName":"黑马", "companyName”, "description"："黑马程序员"}

#### <font style="color:rgb(51, 51, 51);">获取请求</font>
<font style="color:rgb(51, 51, 51);">Web服务器（Tomcat）对HTTP协议的请求数据进行解析，并进行了封装（HttpServletRequest），在调用Controller方法的时候传递给了该方法。这样，就使得程序员不必直接对协议进行操作，让Web开发更加便捷。</font>

```plain
//获取请求方式
        String method = request.getMethod();
        System.out.println(method);
        //获取请求的url地址
        String url = request.getRequestURL().toString();
        System.out.println(url);
        String uri = request.getRequestURI();//资源路径
        System.out.println(uri);
        //获取请求的协议
        String protocol = request.getProtocol();
        System.out.println(protocol);
        //获取请求的参数
        String name = request.getParameter("name");
        String age = request.getParameter("age");
        System.out.println(name);
        System.out.println(age);
        //获取请求头 Accept
        request.getHeader("Accept");
```

#### <font style="color:rgb(51, 51, 51);">响应数据</font>
<font style="color:rgb(51, 51, 51);">1.相应行 响应数据第一行（协议、状态码、描述）</font>

HTTP/1.1 200 OK

<font style="color:rgb(51, 51, 51);">2.响应头 第二行开始 key: value</font>

```plain
Content-Type:application/json
Transfer-Encoding:chunked
Date:Tue,10May 202207:51:07GMT
Keep-Alive:timeout=60
Connection:keep-alive
```

<font style="color:rgb(51, 51, 51);">3.响应体 最后一部分 存放响应的数据</font>

[{id：1，brandName：“阿里巴巴"，companyName：“腾讯计算机系统有限公司"，description：“玩玩玩"}]

##### <font style="color:rgb(51, 51, 51);">状态码</font>
<font style="color:rgb(51, 51, 51);">1xX 响应中-临时状态码，表示请求已经接收，告诉客户端应该继续请求或者如果它已经完成则忽略它。</font><font style="color:rgb(51, 51, 51);">2xx 成功-表示请求已经被成功接收，处理已完成。</font><font style="color:rgb(51, 51, 51);">3xx 重定向-重定向到其他地方；让客户端再发起一次请求以完成整个处理。</font><font style="color:rgb(51, 51, 51);">4XX 客户端错误一处理发生错误，责任在客户端。如：请求了不存在的资源、客户端未被授权、禁止访问等。</font><font style="color:rgb(51, 51, 51);">5xx 服务器错误一处理发生错误，责任在服务端。如：程序抛出异常等。</font>

##### <font style="color:rgb(51, 51, 51);">响应头内容</font>
<font style="color:rgb(51, 51, 51);">Content-Type</font><font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">表示该响应内容的类型，例如text/html，application/json。</font><font style="color:rgb(51, 51, 51);">Content-Length</font><font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">表示该响应内容的长度（字节数）。</font><font style="color:rgb(51, 51, 51);">Content-Encoding</font><font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">表示该响应压缩算法，例如gzip。</font><font style="color:rgb(51, 51, 51);">Cache-Control</font><font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">指示客户端应如何缓存，例如max-age=300表示可以最多缓存300秒。</font><font style="color:rgb(51, 51, 51);">Set-Cookie</font><font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">告诉浏览器为当前页面所在的域设置cookie。</font>

#### <font style="color:rgb(51, 51, 51);">响应数据设置</font>
<font style="color:rgb(51, 51, 51);">Web服务器对HTTP协议的响应数据进行了封装（HttpServletResponse），并在调用Controller方法的时候传递给</font><font style="color:rgb(51, 51, 51);">了该方法。这样，就使得程序员不必直接对协议进行操作，让Web开发更加便捷。</font>

<font style="color:rgb(51, 51, 51);">响应状态码和响应头如果没有特殊要求的话，通常不手动设定。服务器会根据请求处理的逻辑，自动设置响应状态码和响应头。</font>

##### <font style="color:rgb(51, 51, 51);">通过HttpServletR</font><font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">esponse设置响应数据</font>
```plain
@RequestMapping("response")
    public void response(HttpServletResponse response) throws IOException {
        //设置响应状态码
        response.setStatus(200);
        //设置响应头
        response.setHeader("name", "kanin");
        //设置响应体
        response.getWriter().write("<h1>hello</h1>");
    }
```

##### <font style="color:rgb(51, 51, 51);">通过ResponseEntity 对象 spring提供的</font>
```plain
@RequestMapping("response2")
    public ResponseEntity<String> response2() {
        return ResponseEntity.status(200).
                header("name", "kanin").
                body("<h1>hello</h1>");
    }
```

#### <font style="color:rgb(51, 51, 51);">spring案例</font>
<font style="color:rgb(51, 51, 51);">1.准备工作：</font><font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">创建一个SpringBoot工程，并勾选web依赖、Lombok。</font><font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">引入资料中准备好的用户数据文件（user.txt），及前端静态页面。</font><font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">定义一个实体类，用来封装用户信息</font><font style="color:rgb(51, 51, 51);">2.开发服务端程序，接收请求，读取文本数据并响应。</font>

### <font style="color:rgb(51, 51, 51);">分层解耦</font>
#### <font style="color:rgb(51, 51, 51);">三层架构</font>
<font style="color:rgb(51, 51, 51);">controller:控制层 接受前端发送的请求 对请求进行处理 并响应数据</font>

```plain
@RestController
public class UserCroller {

    @RequestMapping("/list")
    public List<user> list() throws FileNotFoundException {
        //3.返回数据 转换为json格式
        return new UserSeraviceImpl().findAll();
    }
}
```

<font style="color:rgb(51, 51, 51);">service: 业务逻辑层 处理具体的业务逻辑</font>

```plain
public class UserSeraviceImpl implements UserService {
    private UserDao userdao = new UserDaoImpl();
    @Override
    public List<user> findAll() throws FileNotFoundException {
        List<String> lines = userdao.findAll();
        //2.解析用户数据 封装为User对象 -》 list集合
        List<user> userList = lines.stream().map(line -> {
            String[] part = line.split(",");
            Integer id = Integer.parseInt(part[0]);
            String username = part[1];
            String password = part[2];
            String name = part[3];
            Integer age = Integer.parseInt(part[4]);
            LocalDateTime updateTime = LocalDateTime.parse(part[5], DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
            return new user(id, username, password, name, age, updateTime);
        }).toList();

        return userList;
    }
}
```

<font style="color:rgb(51, 51, 51);">dao：数据访问层 负责数据访问操作 包括数据的增删改查</font>

```plain
public class UserDaoImpl implements UserDao {

    @Override
    public List<String> findAll() throws FileNotFoundException {
        //1加载并读取user.txt文件获取用户数据
        FileInputStream in = new FileInputStream(new File("src/main/resources/user.txt"));
        ArrayList<String> lines = IoUtil.readLines(in, StandardCharsets.UTF_8, new ArrayList<>());
        return lines;
    }
}
```

### <font style="color:rgb(51, 51, 51);">ico和id</font>
<font style="color:rgb(51, 51, 51);">耦合：衡量软件这种各个层/模块的依赖关联程度</font>

<font style="color:rgb(51, 51, 51);">内聚：软件中各个功能模块内部功能的联系</font>

<font style="color:rgb(51, 51, 51);">控制反转：IOC 对象的创建控制权交给程序本身转移到外部 这种思想成为控制反转</font>

<font style="color:rgb(51, 51, 51);">依赖注入：ID 容器为应用程序提供运行时所依赖的资源 成为依赖注入</font>

<font style="color:rgb(51, 51, 51);">Bean对象：IOC容器创建、管理的对象成为Bean</font>

<font style="color:rgb(51, 51, 51);">在Dao以及Service层的实现类上添加@Component 注解 表示将这个类的对象交给IOC容器管理</font>

<font style="color:rgb(51, 51, 51);">在Controller以及service对象创建IOC对象的上方添加@Autowired 注解</font>

<font style="color:rgb(51, 51, 51);">要把某个对象交给IOC容器管理，需要在对应的类上加上如下注解之一：</font><font style="color:rgb(51, 51, 51);">注解说明位置</font><font style="color:rgb(51, 51, 51);">@Component声明bean的基础注解不属于以下三类时，用此注解</font><font style="color:rgb(51, 51, 51);">@Controllera</font><font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">Component的衍生注解标注在控制层类上</font><font style="color:rgb(51, 51, 51);">@Servicea</font><font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">Component的衍生注解标注在业务层类上</font><font style="color:rgb(51, 51, 51);">@Repositorya</font><font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">Component的衍生注解标注在数据访问层类上（由于与mybatis整合，用的少）</font>

<font style="color:rgb(51, 51, 51);">生命bean是 可以通过注解的value属性指定bean的名字 如果没有指定默认为类名首字母小写</font>

<font style="color:rgb(51, 51, 51);">前面声明bean的四大注解，要想生效，还需要被组件扫描注解@ComponentScan扫描。</font><font style="color:rgb(51, 51, 51);">该注解虽然没有显式配置，但是实际上已经包含在了启动类声明注解@SpringBootApplication中，默认扫描的范</font><font style="color:rgb(51, 51, 51);">围是启动类所在包及其子包。</font>

<font style="color:rgb(51, 51, 51);">使用@Autowired进行依赖注入的常见方式:</font>

<font style="color:rgb(51, 51, 51);">1.属性注入</font>

```plain
@RestController
public class UserController {
    @Autowired
    private UserService userService;
    //....
}
```

<font style="color:rgb(51, 51, 51);">2.构造器注入</font>

```plain
@RestController
public class UserController {
    private final UserService userService;
    @AutowiredN
    public UserController(UserService userService） {
        this.userService = userService;
    }
}
```

<font style="color:rgb(51, 51, 51);">3.setter注入</font>

```plain
@RestController
public class UserController {
    private UserService userService;
    @Autowired
    public void setUserService(UserService userService） {
        this.userService = userService;
    }
}
```

<font style="color:rgb(51, 51, 51);">@Autowired注解 默认是按照类型进行注入的</font>

<font style="color:rgb(51, 51, 51);">如果存在多个想通过类型的bean会报错， 解决方案如下：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">1.@Primary</font>

```plain
@Primary
@Service
public class UserServiceImpl implements UserService {
    @Override
    public List<User> list(){
        //省略... 
    }
}
```

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">2.@Qualifier</font>

```plain
@RestController
public class UserController {
    @Autowired
    @Qualifier("userServiceImpl")
    private UserService userService;
}
```

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">3.@Resource</font>

```plain
@RestController
public class UserController {
    @Resource(name = "userServiceImpl")
    private UserService userService;
}
```

## <font style="color:rgb(51, 51, 51);">mySql</font>
<font style="color:rgb(51, 51, 51);">数据库：DB 是存储和管理数据的仓库</font>

<font style="color:rgb(51, 51, 51);">数据库管理系统：DBMS 操纵和管理数据库的大型软件</font>

<font style="color:rgb(51, 51, 51);">SQL：操作关系型数据库的编程语言 定义了一套操作的统一标准</font>

### <font style="color:rgb(51, 51, 51);">安装MySql</font>
<font style="color:rgb(51, 51, 51);">初始化:</font>

mysqld --initialize-insecure

<font style="color:rgb(51, 51, 51);">注册MySql服务：</font>

mysqld -install

<font style="color:rgb(51, 51, 51);">启动MySql</font>

```plain
net start mysql  // 启动mysql服务
    
net stop mysql  // 停止mysql服务
```

<font style="color:rgb(51, 51, 51);">修改账户名密码：</font>

mysqladmin -u root password 1234

<font style="color:rgb(51, 51, 51);">登录：</font>

mysql -uroot -p1234

<font style="color:rgb(51, 51, 51);">退出:</font>

exit

<font style="color:rgb(51, 51, 51);">登录参数：</font>

mysql -u用户名 -p密码 -h要连接的mysql服务器的ip地址(默认127.0.0.1) -P端口号(默认3306)

### <font style="color:rgb(51, 51, 51);">数据模型</font>
<font style="color:rgb(51, 51, 51);">关系型数据库：建立在关系模型基础上 由多张相互联系的二维表组成的数据库</font>

<font style="color:rgb(51, 51, 51);">特点：使用表存储数据 格式统一 便于维护</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">使用SQL语言操作 标准统一 可用于复杂查询</font>

### <font style="color:rgb(51, 51, 51);">SQL语句</font>
<font style="color:rgb(51, 51, 51);">SQL:是一个操作关系型数据库的编程语言 定义操作说有关系型数据库的统一标准</font>

<font style="color:rgb(51, 51, 51);">分类：</font>

<font style="color:rgb(51, 51, 51);">	</font>

#### <font style="color:rgb(51, 51, 51);">DDL</font>
<font style="color:rgb(51, 51, 51);">数据库操作：</font>

```plain
--查询所有数据库
show databases;
--查询当前数据库
select database();
--使用/切换数据库
use数据库名；
--创建数据库
create database [if not exists] 数据库名 [default charset utf8mb4];
-删除数据库
drop database[if exists]数据库名;
```

<font style="color:rgb(51, 51, 51);">SQL 不区分大小写</font>

<font style="color:rgb(51, 51, 51);">表的操作：</font>

```plain
create table tablename(

    字段1 字段类型 [约束] [comment 字段1 注释]，
    字段2 字段类型 [约束] [comment 字段2 注释】
)[comment 表注释];
                   
create table user (
    id int comment 'id, 主键',
    username varchar(50) comment '用户名',
    name varchar(50) comment '姓名',
    age int comment '年龄',
    gender char(1) comment '性别'
)comment '用户信息表'
```

<font style="color:rgb(51, 51, 51);">约束：是作用于表中字段上的规则 用于限制表中的数据 保证数据的正确性 完整性 有效性</font>

<font style="color:rgb(51, 51, 51);">常见约束：</font>

```plain
约束描述
非空约束    限制该字段值不能为   nullnot null
唯一约束    保证字段的所有数据都是唯一、不重复的  unique
主键约束    主键是一行数据的唯一标识，要求非空且唯一    primary key
默认约束    保存数据时，如果未指定该字段值，则采用默认值  default
外键约束    让两张表的数据建立连接，保证数据的一致性和完整性    foreign key
```

##### <font style="color:rgb(51, 51, 51);">常见的数据类型</font>
<font style="color:rgb(51, 51, 51);">主要分为三类：数值型、字符串型、日期时间型.</font>

###### <font style="color:rgb(119, 119, 119);">数值型</font>
| **<font style="color:rgb(51, 51, 51);">类型</font>** | **<font style="color:rgb(51, 51, 51);">大小(byte)</font>** | **<font style="color:rgb(51, 51, 51);">有符号(SIGNED)范围</font>** | **<font style="color:rgb(51, 51, 51);">无符号(UNSIGNED)范围</font>** | **<font style="color:rgb(51, 51, 51);">描述</font>** | **<font style="color:rgb(51, 51, 51);">备注</font>** |
| :--- | :--- | :--- | :--- | :--- | :--- |
| <font style="color:rgb(51, 51, 51);">tinyint</font> | <font style="color:rgb(51, 51, 51);">1</font> | <font style="color:rgb(51, 51, 51);">(-128，127)</font> | <font style="color:rgb(51, 51, 51);">(0，255)</font> | <font style="color:rgb(51, 51, 51);">小整数值</font> | |
| <font style="color:rgb(51, 51, 51);">smallint</font> | <font style="color:rgb(51, 51, 51);">2</font> | <font style="color:rgb(51, 51, 51);">(-32768，32767)</font> | <font style="color:rgb(51, 51, 51);">(0，65535)</font> | <font style="color:rgb(51, 51, 51);">大整数值</font> | |
| <font style="color:rgb(51, 51, 51);">mediumint</font> | <font style="color:rgb(51, 51, 51);">3</font> | <font style="color:rgb(51, 51, 51);">(-8388608，8388607)</font> | <font style="color:rgb(51, 51, 51);">(0，16777215)</font> | <font style="color:rgb(51, 51, 51);">大整数值</font> | |
| <font style="color:rgb(51, 51, 51);">int</font> | <font style="color:rgb(51, 51, 51);">4</font> | <font style="color:rgb(51, 51, 51);">(-2147483648，2147483647)</font> | <font style="color:rgb(51, 51, 51);">(0，4294967295)</font> | <font style="color:rgb(51, 51, 51);">大整数值</font> | |
| <font style="color:rgb(51, 51, 51);">bigint</font> | <font style="color:rgb(51, 51, 51);">8</font> | <font style="color:rgb(51, 51, 51);">(-2</font><sup><font style="color:rgb(51, 51, 51);">63，2</font></sup><font style="color:rgb(51, 51, 51);">63-1)</font> | <font style="color:rgb(51, 51, 51);">(0，2^64-1)</font> | <font style="color:rgb(51, 51, 51);">极大整数值</font> | |
| <font style="color:rgb(51, 51, 51);">float</font> | <font style="color:rgb(51, 51, 51);">4</font> | <font style="color:rgb(51, 51, 51);">(-3.402823466 E+38，3.402823466351 E+38)</font> | <font style="color:rgb(51, 51, 51);">0 和 (1.175494351 E-38，3.402823466 E+38)</font> | <font style="color:rgb(51, 51, 51);">单精度浮点数值</font> | <font style="color:rgb(51, 51, 51);">float(5,2)：5表示整个数字长度，2 表示小数位个数</font> |
| <font style="color:rgb(51, 51, 51);">double</font> | <font style="color:rgb(51, 51, 51);">8</font> | <font style="color:rgb(51, 51, 51);">(-1.7976931348623157 E+308，1.7976931348623157 E+308)</font> | <font style="color:rgb(51, 51, 51);">0 和 (2.2250738585072014 E-308，1.7976931348623157 E+308)</font> | <font style="color:rgb(51, 51, 51);">双精度浮点数值</font> | <font style="color:rgb(51, 51, 51);">double(5,2)：5表示整个数字长度，2 表示小数位个数</font> |
| <font style="color:rgb(51, 51, 51);">decimal</font> | | | | <font style="color:rgb(51, 51, 51);">小数值(精度更高)</font> | <font style="color:rgb(51, 51, 51);">decimal(5,2)：5表示整个数字长度，2 表示小数位个数</font> |


###### <font style="color:rgb(119, 119, 119);">字符串</font>
| **<font style="color:rgb(51, 51, 51);">分类</font>** | **<font style="color:rgb(51, 51, 51);">类型</font>** | **<font style="color:rgb(51, 51, 51);">大小</font>** | **<font style="color:rgb(51, 51, 51);">描述</font>** |
| :--- | :--- | :--- | :--- |
| <font style="color:rgb(51, 51, 51);">字符串类型</font> | <font style="color:rgb(51, 51, 51);">char</font> | <font style="color:rgb(51, 51, 51);">0-255 bytes</font> | <font style="color:rgb(51, 51, 51);">定长字符串</font> |
| <font style="color:rgb(51, 51, 51);">varchar</font> | <font style="color:rgb(51, 51, 51);">0-65535 bytes</font> | <font style="color:rgb(51, 51, 51);">变长字符串</font> | |
| <font style="color:rgb(51, 51, 51);">tinyblob</font> | <font style="color:rgb(51, 51, 51);">0-255 bytes</font> | <font style="color:rgb(51, 51, 51);">不超过255个字符的二进制数据</font> | |
| <font style="color:rgb(51, 51, 51);">tinytext</font> | <font style="color:rgb(51, 51, 51);">0-255 bytes</font> | <font style="color:rgb(51, 51, 51);">短文本字符串</font> | |
| <font style="color:rgb(51, 51, 51);">blob</font> | <font style="color:rgb(51, 51, 51);">0-65 535 bytes</font> | <font style="color:rgb(51, 51, 51);">二进制形式的长文本数据</font> | |
| <font style="color:rgb(51, 51, 51);">text</font> | <font style="color:rgb(51, 51, 51);">0-65 535 bytes</font> | <font style="color:rgb(51, 51, 51);">长文本数据</font> | |
| <font style="color:rgb(51, 51, 51);">mediumblob</font> | <font style="color:rgb(51, 51, 51);">0-16 777 215 bytes</font> | <font style="color:rgb(51, 51, 51);">二进制形式的中等长度文本数据</font> | |
| <font style="color:rgb(51, 51, 51);">mediumtext</font> | <font style="color:rgb(51, 51, 51);">0-16 777 215 bytes</font> | <font style="color:rgb(51, 51, 51);">中等长度文本数据</font> | |
| <font style="color:rgb(51, 51, 51);">longblob</font> | <font style="color:rgb(51, 51, 51);">0-4 294 967 295 bytes</font> | <font style="color:rgb(51, 51, 51);">二进制形式的极大文本数据</font> | |
| <font style="color:rgb(51, 51, 51);">longtext</font> | <font style="color:rgb(51, 51, 51);">0-4 294 967 295 bytes</font> | <font style="color:rgb(51, 51, 51);">极大文本数据</font> | |


**<font style="color:rgb(51, 51, 51);">备注</font>**

| | **<font style="color:rgb(51, 51, 51);">优势</font>** | **<font style="color:rgb(51, 51, 51);">劣势</font>** |
| --- | :--- | :--- |
| <font style="color:rgb(51, 51, 51);">char(10): 固定占用10个字符空间; 存储A, 占用10个空间; 存储ABC, 占用10个空间;</font> | <font style="color:rgb(51, 51, 51);">性能略高</font> | <font style="color:rgb(51, 51, 51);">浪费磁盘空间</font> |
| <font style="color:rgb(51, 51, 51);">varchar(10): 最多占用10个字符空间; 存储A, 占用1个空间; 存储ABC, 占用3个空间;</font> | <font style="color:rgb(51, 51, 51);">节约磁盘空间</font> | <font style="color:rgb(51, 51, 51);">性能略低</font> |
| | | |
| <font style="color:rgb(51, 51, 51);">username varchar(50)</font> | | |
| <font style="color:rgb(51, 51, 51);">idcard char(18)</font> | | |
| <font style="color:rgb(51, 51, 51);">phone char(11)</font> | | |


###### <font style="color:rgb(119, 119, 119);">日期时间</font>
| **<font style="color:rgb(51, 51, 51);">分类</font>** | **<font style="color:rgb(51, 51, 51);">类型</font>** | **<font style="color:rgb(51, 51, 51);">大小(byte)</font>** | **<font style="color:rgb(51, 51, 51);">范围</font>** | **<font style="color:rgb(51, 51, 51);">格式</font>** | **<font style="color:rgb(51, 51, 51);">描述</font>** |
| :--- | :--- | :--- | :--- | :--- | :--- |
| <font style="color:rgb(51, 51, 51);">日期类型</font> | <font style="color:rgb(51, 51, 51);">date</font> | <font style="color:rgb(51, 51, 51);">3</font> | <font style="color:rgb(51, 51, 51);">1000-01-01 至 9999-12-31</font> | <font style="color:rgb(51, 51, 51);">YYYY-MM-DD</font> | <font style="color:rgb(51, 51, 51);">日期值</font> |
| <font style="color:rgb(51, 51, 51);">time</font> | <font style="color:rgb(51, 51, 51);">3</font> | <font style="color:rgb(51, 51, 51);">-838:59:59 至 838:59:59</font> | <font style="color:rgb(51, 51, 51);">HH:MM:SS</font> | <font style="color:rgb(51, 51, 51);">时间值或持续时间</font> | |
| <font style="color:rgb(51, 51, 51);">year</font> | <font style="color:rgb(51, 51, 51);">1</font> | <font style="color:rgb(51, 51, 51);">1901 至 2155</font> | <font style="color:rgb(51, 51, 51);">YYYY</font> | <font style="color:rgb(51, 51, 51);">年份值</font> | |
| <font style="color:rgb(51, 51, 51);">datetime</font> | <font style="color:rgb(51, 51, 51);">8</font> | <font style="color:rgb(51, 51, 51);">1000-01-01 00:00:00 至 9999-12-31 23:59:59</font> | <font style="color:rgb(51, 51, 51);">YYYY-MM-DD HH:MM:SS</font> | <font style="color:rgb(51, 51, 51);">混合日期和时间值</font> | |
| <font style="color:rgb(51, 51, 51);">timestamp</font> | <font style="color:rgb(51, 51, 51);">4</font> | <font style="color:rgb(51, 51, 51);">1970-01-01 00:00:01 至 2038-01-19 03:14:07</font> | <font style="color:rgb(51, 51, 51);">YYYY-MM-DD HH:MM:SS</font> | <font style="color:rgb(51, 51, 51);">混合日期和时间值，时间戳</font> | |


##### <font style="color:rgb(51, 51, 51);">案例</font>
```plain
create table emp (
    id int unsigned primary key  auto_increment comment 'id主键',
    userName varchar(20) unique not null comment '用户名',
    name varchar(10) unique comment '姓名',
    gender tinyint unsigned unique comment '性别 1男 2女',
    phone char(11) unique not null comment '手机号',
    job tinyint unsigned comment '职位 1 班主任 2讲师 3学工主管 4教研主管 5咨询师',
    salary int unsigned comment '薪资',
    entry_date date comment '入职日期',
    image varchar(255) comment '图像',
    password varchar(32) default '123456' comment '密码',
    create_time datetime comment '创建时间',
    updata_time datetime comment '修改时间'
) comment '员工表';
```

##### <font style="color:rgb(51, 51, 51);">查询修改删除</font>
```plain
show tables；--查询当前数据库的所有表
desc 表名；--查询表结构
show create table 表名;查询建表语句
alter table表名 add 字段名类型（长度）[comment注释］[约束]；--添加字段
alter table表名 modify 字段名新数据类型（长度）；--修改字段类型
alter table表名 change 旧字段名新字段名类型（长度）[comment注释】[约束]；--修改字段名与字段类型
alter table 表名 drop column 字段名;；--删除字段
alter table 表名 rename to 新表名；；--修改表名
drop table[if exists］表名；--删除表
```

#### <font style="color:rgb(51, 51, 51);">DML</font>
<font style="color:rgb(51, 51, 51);">DML操作的是数据的增删改</font>

##### <font style="color:rgb(51, 51, 51);">添加数据(INSERT)</font>
```plain
--指定字段添加数据
insert into表名（字段名1，字段名2）values（值1，值2）;
--全部字段添加数据
insert into 表名 values（值1，值2，...）；
--批量添加数据（指定字段）
insert into 表名（字段名1，字段名2）values（值1，值2），（值1，值2）;
--批量添加数据（全部字段）
insert into 表名 values（值1，值2，·。。），（值1，值2，。。。）;
```

<font style="color:rgb(51, 51, 51);">修改数据(UPDATE)</font>

```plain
update 表明 set字段名1 = 值1, 字段名2 = 值2, ...[where 条件];
```

<font style="color:rgb(51, 51, 51);">删除数据(DELETE)</font>

delete from 表名 [where 条件];

#### <font style="color:rgb(51, 51, 51);">DQL</font>
<font style="color:rgb(51, 51, 51);">用来查询数据 关键字：select</font>

```plain
select [distinct去掉重复]
    字段列表
from
    表名列表
where
    条件列表
group by
    分组字段列表
having
    分组后条件列表
order by
    排序字段列表
limit
    分页参数
```

##### <font style="color:rgb(51, 51, 51);">运算符</font>
```plain
>   大于
>=  大于等于
<   小于
<=  小于等于
=   等于
<>或！=   不等于
between and     在某个范围之内(含最小、最大值)
in(...)     在in之后的列表中的值，多选一
like    占位符模糊匹配（_匹配单个字符，%匹配任意个字符）
is null     是null

//逻辑运算符
and 或者 &&  并且
or 或者 ||
not 或者 !  非 不是
```

**<font style="color:rgb(51, 51, 51);">聚合函数</font>**

<font style="color:rgb(51, 51, 51);">可以将一列数据作为一个整体进行纵向计算</font>

<font style="color:rgb(51, 51, 51);">所有的聚合函数不参与null计算</font>

```plain
count(字段 * 常量 优先推荐使用*)  计数
sum     求和
max     最大值
min     最小值
avg     平均数
```

```plain
-- 分组查询
select 字段列表 from 表名 [where条件列表] group by 分组字段名 [having 分组后过滤条件];
```

**<font style="color:rgb(51, 51, 51);">where和having的区别</font>**

```plain
1.实行时机不同：where是在分组前进行过滤 不满足where条件 不参与分组 having是分组后进行结果过滤
2.判断条件不同：where不能对聚合函数进行判断 但是having可以
```

<font style="color:rgb(51, 51, 51);">注意：分组之后，select后的字段列表不能随意书写，能写的一般是分组字段+聚合函数；</font>

```plain
--排序查询
select 字段列表 from 表名 [where条件列表] [group by 分组字段名 having 分组后过滤条件] order by 排序字段 排序方式;
-- asc:升序      desc：降序    默认是asc 可以不写
```

```plain
--分页查询
select 字段 from 表名 [where 条件] [group by 分组字段 having 过滤条件] [order by 排序字段] limit 起始索引,查询记录数;
```

#### <font style="color:rgb(51, 51, 51);">多表关系</font>
<font style="color:rgb(51, 51, 51);">项目开发中，在进行数据库表结构设计时，会根据业务需求及业务模块之间的关系，分析并设计表结构。由于业务之间相互关联，所以各个表结构之间也存在着各种联系。</font>

<font style="color:rgb(51, 51, 51);">关系分为三种：</font>

##### <font style="color:rgb(51, 51, 51);">一对多</font>
<font style="color:rgb(51, 51, 51);">场景：部门和员工的关系（一个部门下有多个员工）</font>

<font style="color:rgb(51, 51, 51);">实现：在多的一方添加一个字段 关联一的主键 这个字段是外键</font>

<font style="color:rgb(51, 51, 51);">现象：部门数据可以直接删除，然而还有部分员工归属于该部门下，此时就出现了数据的不完整、不一致问题。</font><font style="color:rgb(51, 51, 51);">原因：目前上述的两张表，在数据库层面，并未建立关联，所以是无法保证数据的一致性和完整性的。</font><font style="color:rgb(51, 51, 51);">解决方案：外键约束。</font>

```plain
--创建表时指定
create table 表名(
	字段名 数据类型，
	[constraint] [外键名称] foreign key（外键字段名）references 主表（字段名）
)；
```

```plain
--建完表后，添加外键
alter table 表名 add constraint 外键名称 foreign key（外键字段名）references 主表（字段名）；
```

```plain
alter table emp add constraint fk_emp_dept_id foreign key (dept_id) references dept(id);
```

<font style="color:rgb(51, 51, 51);">缺点：影响怎删改的效率， 仅用于单节点数据库 不适用于分布式 集群场景 容易引发数据库死锁问题 消耗性能</font>

<font style="color:rgb(51, 51, 51);">逻辑外键：在业务层逻辑中解决外键关联 通过逻辑外键 就可以很方便的解决以上缺点。</font>

##### <font style="color:rgb(51, 51, 51);">一对一</font>
<font style="color:rgb(51, 51, 51);">案例：用户和身份证信息</font>

<font style="color:rgb(51, 51, 51);">关系：多用于单表拆分 将一张表的基础字段放在一张表中 其他字段放在另一张表中 亿提升效率</font>

<font style="color:rgb(51, 51, 51);">实现：在任意一方添加外键 关联另外一方的主键 设置外键为唯一的</font>

##### <font style="color:rgb(51, 51, 51);">多对多</font>
<font style="color:rgb(51, 51, 51);">案例：学生和课程的关系</font>

<font style="color:rgb(51, 51, 51);">关系：一个学生可以选修多个课程 一门课程也可以供多个学生选择</font>

<font style="color:rgb(51, 51, 51);">实现：建立第三张中间表 中间表至少包括两个外键 分别关联两方主键</font><font style="color:rgb(51, 51, 51);">	</font>

#### <font style="color:rgb(51, 51, 51);">多表查询</font>
<font style="color:rgb(51, 51, 51);">从多张表中进行查询</font>

select * from emp, dept where emp.dept_id = dept.id;

##### <font style="color:rgb(51, 51, 51);">内连接</font>
```plain
-- 隐式内连接（常见）
select  字段列表 from 表1, 表2 where 连接条件；

-- 显示内连接
select 字段列表 from 表1 [inner] join 表2 on 连接条件...;
```

```plain
select emp.id, emp.name, dept.name from emp, dept where emp.dept_id = dept.id;

select emp.id, emp.name, dept.name from emp inner join dept on emp.dept_id = dept.id
```

##### <font style="color:rgb(51, 51, 51);">外连接</font>
```plain
--1.左外连接
select 字段列表 from 表1 left [outer] join 表2 on 连接条件。.。
--2.右外连接
select 字段列表 from 表1 right [outer］join 表2 on 连接条件
```

##### <font style="color:rgb(51, 51, 51);">子查询</font>
<font style="color:rgb(51, 51, 51);">介绍：SQL语句中嵌套select语句，称为嵌套查询，又称子查询。</font><font style="color:rgb(51, 51, 51);">形式: select * from tl where columnl = (select columnl from t2 .);</font>

<font style="color:rgb(51, 51, 51);">说明：子查询外部的语句可以是insert／ update／delete／ select 的任何一个，最常见的是 select。</font><font style="color:rgb(51, 51, 51);">分类：</font><font style="color:rgb(51, 51, 51);">1。标量子查询：子查询返回的结果为单个值</font><font style="color:rgb(51, 51, 51);">2。列子查询：子查询返回的结果为一列</font><font style="color:rgb(51, 51, 51);">3。行子查询：子查询返回的结果为一行</font><font style="color:rgb(51, 51, 51);">4。表子查询：子查询返回的结果为多行多列</font>

## <font style="color:rgb(51, 51, 51);">JDBC</font>
<font style="color:rgb(51, 51, 51);">是使用java操作关系型数据库的一套API</font>

```plain
//1.注册驱动
Class.forName("com.mysql.cj.jdbc.Driver");
//2.获取连接
Stringurl="jdbc:mysql://localhost:3306/web01";
String username ="root";
String password ="1234";
Connection connection =DriverManager.getConnection(url，username,password);
//3.获取SQL语句执行对象
Statement statement=connection.createStatement()；
//4.执行SQL
int i=statement.executeUpdate("update user set age =25 where id=1");
//5.释放资源
statement.close();
connection.close();
```

```plain
package com.kaninbk;

import com.mysql.cj.jdbc.Driver;
import org.junit.jupiter.api.Test;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class JdbcTest {

    @Test
    public void testUpdata() throws ClassNotFoundException, SQLException {
        //1.注册驱动
        Class.forName("com.mysql.cj.jdbc.Driver");
        //2.获取数据库的链接
        String url = "jdbc:mysql://localhost:3306/web01";
        String username = "root";
        String password = "1234";
        Connection connection = DriverManager.getConnection(url, username, password);

        //3.获取SQL语句的执行对象
        Statement statement = connection.createStatement();
        //4.执行SQL
        int i = statement.executeUpdate("update user set age = 25 where id = 1");
        System.out.println("影响的记录数为：" + i);
        //5.释放资源
        connection.close();
        statement.close();
    }
}
```

### <font style="color:rgb(51, 51, 51);">查询数据</font>
<font style="color:rgb(51, 51, 51);">需求：基于JDBC执行如下select语句，将查询结果封装到User对象中。（AI辅助）</font><font style="color:rgb(51, 51, 51);">SQL: select * from user where username = 'daqiao' and password ='123456'</font><font style="color:rgb(51, 51, 51);">ResultSet（结果集对象）：ResultSet rs= statement.executeQuery(）</font><font style="color:rgb(51, 51, 51);">next（）：将光标从当前位置向前移动一行，并判断当前行是否为有效行，返回值为boolean。</font><font style="color:rgb(51, 51, 51);">true：有效行，当前行有数据</font><font style="color:rgb(51, 51, 51);">false：无效行，当前行没有数据</font><font style="color:rgb(51, 51, 51);">getXxx（..）：获取数据，可以根据列的编号获取，也可以根据列名获取（推荐）。</font>

```java
package com.kaninbk;

import com.kaninbk.pojo.User;
import com.mysql.cj.jdbc.Driver;
import org.junit.jupiter.api.Test;

import java.sql.*;
import java.util.ArrayList;

public class JdbcTest {

    @Test
    public void testUpdata() throws ClassNotFoundException, SQLException {
        //1.注册驱动
        Class.forName("com.mysql.cj.jdbc.Driver");
        //2.获取数据库的链接
        String url = "jdbc:mysql://localhost:3306/web01";
        String username = "root";
        String password = "1234";
        Connection connection = DriverManager.getConnection(url, username, password);

        //3.获取SQL语句的执行对象
        Statement statement = connection.createStatement();
        //4.执行SQL
        //int i = statement.executeUpdate("update user set age = 25 where id = 1");
        //System.out.println("影响的记录数为：" + i);
        ResultSet resultSet = statement.executeQuery("select * from user;");
        ArrayList<User> list = new ArrayList<>();
        while (resultSet.next()) {
            int id = resultSet.getInt("id");
            String name = resultSet.getString("username");
            String pwd = resultSet.getString("password");
            String name2 = resultSet.getString("name");
            int age = resultSet.getInt("age");
            list.add(new User(id, username, pwd, name2, age));

        }
        for (User user : list) {
            System.out.println(user.toString());
        }

        //5.释放资源
        connection.close();
        statement.close();
    }
}
```

## <font style="color:rgb(51, 51, 51);">MyBatis</font>
<font style="color:rgb(51, 51, 51);">是一个优秀的持久层框架 用于简化JDBC的开发</font>

**<font style="color:rgb(51, 51, 51);">准备工作：</font>**

```plain
1．创建SpringBoot工程、引入Mybatis相关依赖
2．准备数据库表user、实体类User
3.配置Mybatis（在application.properties中数据库连接信息）
```

```plain
#application.properties 配置数据库连接信息
spring.datasource.url=jdbc:mysql://localhost:3306/web01
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.username=root
spring.datasource.password=1234
#mybatis的配置
mybatis.configuration.log-impl=org.apache.ibatis.logging.stdout.StdOutImpl
```

<font style="color:rgb(51, 51, 51);">编写MyBatis：编写持久层接口 定义SQD（注解/XML）</font>

```plain
@Mapper //应用程序在创建时会自动扫描该接口，并自动创建该接口的实现类对象；并放在IOC容器中
public interface UserMapper {

    @Select("select * from user")
    public List<User> findAll();
}
```

<font style="color:rgb(51, 51, 51);">测试类：</font>

```plain
@SpringBootTest
class SpringMybatisApplicationTests {

    @Autowired
    private UserMapper um;
    @Test
    void mybatisTest() {
        List<User> list = um.findAll();
        for (User user : list) {
            System.out.println(user);
        }
    }

}
```

### <font style="color:rgb(51, 51, 51);">数据库连接池</font>
<font style="color:rgb(51, 51, 51);">数据库连接池是个容器 负责分配 管理数据库连接</font>

<font style="color:rgb(51, 51, 51);">它允许一个用程序重复使用一个现有的数据库连接 而不是重新建立一个人</font>

<font style="color:rgb(51, 51, 51);">释放空闲时间超过最大空闲时间的连接 来避免因为没有释放连接而引起的数据库连接遗漏</font>

<font style="color:rgb(51, 51, 51);">标准接口：DataSource</font><font style="color:rgb(51, 51, 51);">官方(sun)提供的数据库连接池接口，由第三方组织实现此接口。</font><font style="color:rgb(51, 51, 51);">功能：获取连接 :</font>

Connection getConnection() throws SQLException;

<font style="color:rgb(51, 51, 51);">切换数据库连接池：</font>

```plain
pom.xml
<dependency>
<groupId>com.alibaba</groupId>
<artifactId>druid-spring-boot-starter</artifactId>
<version>1.2.19</version>
</dependency>
```

```plain
#application.properties
spring.datasource.type=com.alibaba.druid.pool.DruidDataSource
spring.datasource.url=jdbc:mysql://localhost:3306/web
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.username=root
spring.datasource.password=1234
```

### <font style="color:rgb(51, 51, 51);">删除数据</font>
**<font style="color:rgb(51, 51, 51);">mapper接口：</font>**

```plain
@Delete("delete from user where id = #{id}")
public void deleteById(Integer id);
//方法如果由返回值则返回影响的记录数
```

**<font style="color:rgb(51, 51, 51);">测试类：</font>**

```plain
@SpringBootTest
class SpringMybatisApplicationTests {
    @Autowired
    private UserMapper um;
    @Test
    void mybatisTest() {
        
        um.deleteById(5);
    }

}
```

### <font style="color:rgb(51, 51, 51);">新增数据</font>
```plain
@Insert("insert into user values (#{id}, #{username}, #{password}, #{name}, #{age})")
    public void save(Integer id, String username, String password, String name, int age);
```

<font style="color:rgb(51, 51, 51);">我们也可以在接口中传递一个对象</font>

```plain
@Insert("insert into user values (#{id}, #{username}, #{password}, #{name}, #{age})")
public void save1(User user);
```

### <font style="color:rgb(51, 51, 51);">更新数据</font>
<font style="color:rgb(51, 51, 51);">同上</font>

### <font style="color:rgb(51, 51, 51);">查询数据</font>
```plain
@Select("select * from user where username = #{username} and password = #{password}")
public User findByUsernameAndPassword(@Param("username") String username, @Param("password") String password);
/*
使用注解@Param给形参起名字 用来区分sql中的名字 如果项目是基于springBoot创建的则注解可以省略
*/
```

### <font style="color:rgb(51, 51, 51);">XML 映射配置</font>
<font style="color:rgb(51, 51, 51);">在Mybatis中，既可以通过注解配置SQL语句，也可以通过XML配置文件配置SQL语句。</font><font style="color:rgb(51, 51, 51);">默认规则：</font><font style="color:rgb(51, 51, 51);">1。XML映射文件的名称与Mapper接口名称一致，并且将xML映射文件和Mapper接口放置在相同包下（同包同名）。</font><font style="color:rgb(51, 51, 51);">2。XML映射文件的namespace属性为Mapper接口全限定名一致。</font><font style="color:rgb(51, 51, 51);">3。XML映射文件中sql语句的id与Mapper接口中的方法名一致，并保持返回类型一致。</font>

### <font style="color:rgb(51, 51, 51);">SpringBoot配置文件</font>
<font style="color:rgb(51, 51, 51);">SpringBoot项目提供了多种属性配置方式（properties、yaml、yml）。</font>

#### <font style="color:rgb(51, 51, 51);">yml配置文件</font>
<font style="color:rgb(51, 51, 51);">●格式:</font><font style="color:rgb(51, 51, 51);">数值前边必须有空格，作为分隔符n</font><font style="color:rgb(51, 51, 51);">使用缩进表示层级关系，缩进时，不允许使用Tab键，只能用空格（idea中会自动将Tab转换为空格）</font><font style="color:rgb(51, 51, 51);">缩进的空格数目不重要，只要相同层级的元素左侧对齐即可</font><font style="color:rgb(51, 51, 51);">#表示注释，从这个字符一直到行尾，都会被解析器忽略</font>

**<font style="color:rgb(51, 51, 51);">定义对象/map</font>**

```plain
user:
    name: 张三
    age: 18
    password: 123456
```

**<font style="color:rgb(51, 51, 51);">定义list</font>**

```plain
hobby: 
    - java
    - game
    - sprt
```

<font style="color:rgb(51, 51, 51);">在yml格式的配置文件中，如果配置项的值是以0开头的，值需要使用用！！引起来，因为以0开头在yml中表示8进制的数据。</font>

## <font style="color:rgb(51, 51, 51);">Tlias智能学习辅助系统 部门管理</font>
### <font style="color:rgb(51, 51, 51);">准备工作</font>
**<font style="color:rgb(51, 51, 51);">Restful</font>**<font style="color:rgb(51, 51, 51);">：表述性状态转换，它是一种软件架构风格。</font>

<font style="color:rgb(51, 51, 51);">URL定位资源</font>

<font style="color:rgb(51, 51, 51);">HTTP动词（请求方式）描述操作</font>

<font style="color:rgb(51, 51, 51);">1．REST是风格，是约定方式，约定不是规定，可以打破。</font><font style="color:rgb(51, 51, 51);">2.描述功能模块通常使用复数形式（加s），表示此类资源，而非单个资源。如：users、books。。</font>

### <font style="color:rgb(51, 51, 51);">工程搭建</font>
<font style="color:rgb(51, 51, 51);">1。创建SpringBoot工程，并引l入web开发起步依赖、mybatis、mysql驱动、lombok。</font><font style="color:rgb(51, 51, 51);">2．创建数据库表dept，并在application.yml中配置数据库的基本信息。</font>

```plain
#配置数据库连接信息
spring:
  application:
    name: tliasWebMaxagement
  datasource:
    url: jdbc:mysql://localhost:3306/tlias
    driver-class-name: com.mysql.cj.jdbc.Driver
    username: root
    password: 1234
mybatis:
  configuration:
    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
```

<font style="color:rgb(51, 51, 51);">3．准备基础代码结构，并引l入实体类Dept及统一的响应结果封装类Result。</font>

<font style="color:rgb(51, 51, 51);">实体类属性名和数据库表查询返回的字段名一致，mybatis会自动封装。</font><font style="color:rgb(51, 51, 51);">如果实体类属性名和数据库表查询返回的字段名不一致，不能自动封装。</font>

<font style="color:rgb(51, 51, 51);">但是可以通过一下方式进行手动封装：</font>

```plain
@Results({
            @Result(column = "create_time", property = "createTime"),
            @Result(column = "update_time", property = "updateTime")
    })

//其中column表示数据库中的字段， property表示bean类中的字段
```

<font style="color:rgb(51, 51, 51);">也可以通过在SQL中起别名的方式将数据库字段名改为 bean中的字段名即可。</font>

<font style="color:rgb(51, 51, 51);">或者开启驼峰命名 如果字段名与属性名古河驼峰命名规则 mybatis会自动通过驼峰命名规则进行映射</font>

```plain
mybatis:
  configuration:
  #开启了驼峰命名映射开关
    map-underscore-to-camel-case: true
```

<font style="color:rgb(51, 51, 51);">-</font>

#### <font style="color:rgb(51, 51, 51);">反向代理：</font>
<font style="color:rgb(51, 51, 51);">反向代理是一种网络架构（安全、灵活、负载均衡） 客户端直接访问代理服务器 转发给后端服务器</font>

<font style="color:rgb(51, 51, 51);">反向代理配置：</font>

```plain
server {
        listen       90;  //监听端口
        server_name  localhost;
        client_max_body_size 10m;
        
        location / {   //用于定义匹配路径的规则
            root   html;
            index  index.html index.htm;
            try_files $uri $uri/ /index.html;
        }

        location ^~ /api/ {     //表示精准匹配 即只匹配/api/开头的路径
            rewrite ^/api/(.*)$ /$1 break;      //重写匹配到的路径
            proxy_pass http://localhost:8080;   //用于代理转发 将匹配到的请求转发给位于后端的指令服务器
        }
        
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
```

### <font style="color:rgb(51, 51, 51);">删除数据</font>
#### <font style="color:rgb(51, 51, 51);">Controller接收数据</font>
<font style="color:rgb(51, 51, 51);">方式1：通过原始的HttoServletRequest对象接受请求参数。(不推荐)</font>

```plain
@DeleteMapping("/depts")
    public Result delete(HttpServletRequest request) {
        String idStr = request.getParameter("id");
        int id = Integer.parseInt(idStr);
        System.out.println("删除部门id为：" + id);
        return Result.success();
    }
```

<font style="color:rgb(51, 51, 51);">方式2：通过注解@RequestParam 将请求参数绑定给方法的形参</font>

```plain
@DeleteMapping("/depts")
    public Result delete(@RequestParam("id") Integer id) {
        System.out.println("删除部门：" + id);
        return Result.success();
    }
```

<font style="color:rgb(51, 51, 51);">注意事项：如果声明了@RequestParam注解 在传递参数时必须传递请求参数 如果不传递将会保错。</font>

<font style="color:rgb(51, 51, 51);">可以主动的将required设置为false</font>

<font style="color:rgb(51, 51, 51);">如果请求的参数名与形参参数名相同可以省略@RequestParam注解 直接定义方法形参即可</font>

```plain
@DeleteMapping("/depts")
    public Result delete(Integer id) {
        System.out.println("删除部门：" + id);
        return Result.success();
    }
```

#### <font style="color:rgb(51, 51, 51);">具体实现</font>
```plain
//mapper
@Delete("delete from dept where id = #{id}")
    public void deleteById(Integer id);
//service
@Override
    public void deleteById(Integer id) {
        deptMapper.deleteById(id);
    }
//controller
@DeleteMapping("/depts")
    public Result delete(Integer id) {
        System.out.println("删除部门：" + id);
        deptService.deleteById(id);
        return Result.success();
    }
```

### <font style="color:rgb(51, 51, 51);">新增部门</font>
#### <font style="color:rgb(51, 51, 51);">接收JSON数据参数</font>
<font style="color:rgb(51, 51, 51);">JSON格式的参数，通常会使用一个实体对象进行接收</font><font style="color:rgb(51, 51, 51);">规则：JSON数据的键名与方法形参对象的属性名相同，并需要使用@RequestBody注解标识。</font>

public Result add(@RequestBody Dept dept){}

#### <font style="color:rgb(51, 51, 51);">具体实现</font>
```plain
//controller
@PostMapping("/depts")
    public Result add(@RequestBody Dept dept) {
        System.out.println("新增部门：" + dept.getName());
        deptService.add(dept);
        return Result.success();
    }
//service
@Override
    public void add(Dept dept) {
        // 补全属性值
        dept.setCreateTime(LocalDateTime.now());
        dept.setUpdateTime(LocalDateTime.now());
        deptMapper.add(dept);
    }
//mapper
@Insert("insert into dept(name, create_time, update_time) values(#{name}, #{createTime}, #{updateTime})")
    public void add(Dept dept);
```

### <font style="color:rgb(51, 51, 51);">修改部门</font>
#### <font style="color:rgb(51, 51, 51);">查询回显</font>
<font style="color:rgb(51, 51, 51);">路径参数：通过请求URL直接传递参数，使用{..}来标识该路径参数，需要使用@PathVariable获取路径参数</font>

```plain
@GetMapping("/depts/{id}")
    public Result findById(@PathVariable("id") Integer id) {
        System.out.println("根据id查询部门：" + id);
        return Result.success();
    }
```

<font style="color:rgb(51, 51, 51);">如果形参的名称和路径参数的属性名一致的话可以省略@PathVariable中的参数</font>

```plain
//controller
@GetMapping("/depts/{id}")
    public Result getInfo(@PathVariable Integer id) {
        System.out.println("根据id查询部门：" + id);
        Dept dept = deptService.getById(id);
        return Result.success(dept);
    }
//service
 @Override
    public Dept getById(Integer id) {
        return deptMapper.getById(id);
    }
//mapper
@Select("select id, name, create_time, update_time from dept where id = #{id}")
    Dept getById(Integer id);
```

#### <font style="color:rgb(51, 51, 51);">修改数据</font>
```plain
//controller
@PutMapping("/depts")
    public Result update(@RequestBody Dept dept) {
        System.out.println("修改部门：" + dept.getName());
        deptService.update(dept);
        return Result.success();
    }
//service
@Override
    public void update(Dept dept) {
        //补全参数
        dept.setUpdateTime(LocalDateTime.now());
        deptMapper.update(dept);
    }
//mapper
@Update("update dept set name = #{name}, update_time = #{updateTime} where id = #{id}")
    void update(Dept dept);
```

### <font style="color:rgb(51, 51, 51);">备注</font>
<font style="color:rgb(51, 51, 51);">如果controller中所有的路径一致的话可以在类上添加注释@RequestMapping ("depts") 将方法上面的路径抽取到类上</font>

## <font style="color:rgb(51, 51, 51);">日志技术 logback</font>
<font style="color:rgb(51, 51, 51);">程序中的日志是用来记录应用程序的运行信息、状态信息、错误信息等。</font>

<font style="color:rgb(51, 51, 51);">JUL：这是JaVaSE平台提供的官方日志框架，也被称为JUL。配置相对简单，但不够灵活，性能较差。</font>

<font style="color:rgb(51, 51, 51);">Log4j：一个流行的日志框架，提供了灵活的配置选项，支持多种输出目标。</font>

<font style="color:rgb(51, 51, 51);">Logback：基于Log4j升级而来，提供了更多的功能和配置选项，性能优于Log4j。</font>

<font style="color:rgb(51, 51, 51);">Slf4j（SimpleLoggingFacadeforJava）：简单日志门面，提供了一套日志操作的标准接口及抽象类，允许应用程序使用不同的底层日志框架。</font>

### <font style="color:rgb(51, 51, 51);">使用</font>
<font style="color:rgb(51, 51, 51);">准备工作：引入logback的依赖（springboot项目中该依赖已传递）、配置文件logback.xml。</font><font style="color:rgb(51, 51, 51);">记录日志：定义日志记录对象Logger，记录日志。</font>

<font style="color:rgb(51, 51, 51);">如果引入了lombok的话可以不用定义对象 直接添加注解</font>**<font style="color:rgb(51, 51, 51);">@Slf4j</font>**<font style="color:rgb(51, 51, 51);">即可</font>

```plain
private staticfinal Loggerrlog=LoggerFactory.getLogger(LogTest.class);
@Test
publicvoid testLog(){
    log.debug（"开始计算..."）;
    int sum =0；
    int[] nums ={1，5，3，2，1，4，5，4，6，7，4，34，2，23};
    for（inti=0;i<=nums.length;i++）{
    sum += nums[i];

    log.info（"计算结果为："+sum）;
    log.debug（"结束计算..."）;
}
```

### <font style="color:rgb(51, 51, 51);">配置文件</font>
<font style="color:rgb(51, 51, 51);">配置文件名：logback.xml</font><font style="color:rgb(51, 51, 51);">该配置文件是对Logback日志框架输出的日志进行控制的，可以来配置输出的格式、位置及日志开关等。</font><font style="color:rgb(51, 51, 51);">常用的两种输出日志的位置：控制台、系统文件</font>

```plain
<！--控制台输出
<appender name="sTDouT" class="ch.qos.logback.core.ConsoleAppender">...</appender>
```

```plain
系统文件输出
<appender name="FILE""class="ch.qos.logback.core.rolling.RollingFileAppender">...</appender>
```

### <font style="color:rgb(51, 51, 51);">日志级别</font>
<font style="color:rgb(51, 51, 51);">指的是日志信息的类型 </font>

<font style="color:rgb(51, 51, 51);">在调用方法是可以使用占位符{} 替代+</font>

log.info("新增部门：{}", dept);

## <font style="color:rgb(51, 51, 51);">Tlias智能学习辅助系统 员工管理</font>
### <font style="color:rgb(51, 51, 51);">PageHelper</font>
<font style="color:rgb(51, 51, 51);">是一个第三方的在MyBatis中实现分页的插件 用来简化分页操作 提高开发效率。</font>

```plain
//原始方法 mapper
@Select("select emp.*, dept.name as deptName from emp left join dept on emp.dept_id = dept.id order by emp.update_time desc limit #{start}, #{pageSize}")
List<Emp> list(Integer start, Integer pageSize);
//service
    @Override
    public PageResult<Emp> page(Integer page, Integer pageSize) {
        long c = empMapper.count();
        List<Emp> empList = empMapper.list((page - 1) * pageSize, pageSize);
        return new PageResult<>(c, empList);
    }
```

<font style="color:rgb(51, 51, 51);">使用PageHelper在mapper层只需要定义sql语句即可</font>

<font style="color:rgb(51, 51, 51);">分页相关的操作在Service层定义Pagehelper.startPage(page, pageSize)即可</font>

```plain
//PageHelper Mapper
@Select("select e.* from emp e...")
public List<Emp> list();

//service
@Override
    public PageResult<Emp> page(Integer page, Integer pageSize) {
        Pagehelper.startPage(page, pageSize)
        List<Emp> empList = empMapper.list();
        return new PageResult<>(c, empList);
    }
```

#### <font style="color:rgb(51, 51, 51);">使用步骤</font>
<font style="color:rgb(51, 51, 51);">1.引入PageHelper插件</font>

```plain
<!--分页插件PageHeLper
<dependency>
    <groupId>com.github.pagehelper<{groupId>
    <artifactId>pagehelper-spring-boot-starter</artifactId>
    <version>1.4.7</version>
</dependency>
```

<font style="color:rgb(51, 51, 51);">2.定义Mapper接口的查询方法（无需考虑分页）</font>

```plain
@Select("select e.* from emp e...")
public List<Emp> list();
```

<font style="color:rgb(51, 51, 51);">3.在Service方法中实现分页查询</font>

```plain
public PageResult<Emp> page(Integer page, Integer pageSize) {
        /*long c = empMapper.count();
        List<Emp> empList = empMapper.list((page - 1) * pageSize, pageSize);
        return new PageResult<>(c, empList);*/
        //设置分页参数
        PageHelper.startPage(page, pageSize);
        //执行查询
        Page<Emp> p = (Page<Emp>)empMapper.list();
        //解析查询结果 并封装数据
        return new PageResult<Emp>(p.getTotal(), p.getResult());

    }
//或者可以一下写法
   @Override
    public PageResult<Emp> page(Integer page, Integer pageSize) {
        /*long c = empMapper.count();
        List<Emp> empList = empMapper.list((page - 1) * pageSize, pageSize);
        return new PageResult<>(c, empList);*/
        //设置分页参数
        Page<Emp> p = PageHelper.startPage(page, pageSize);
        //执行查询
        empMapper.list();
        //解析查询结果 并封装数据
        return new PageResult<Emp>(p.getTotal(), p.getResult());

    }
}
```

#### <font style="color:rgb(51, 51, 51);">注意事项</font>
<font style="color:rgb(51, 51, 51);">定义的sql语句结尾不能加；</font>

<font style="color:rgb(51, 51, 51);">仅仅只对后面的第一个查询操作起作用 </font>

<font style="color:rgb(51, 51, 51);">我们可以在sql中使用concat对字符串进行拼接</font>

<font style="color:rgb(51, 51, 51);">可以使用@Options(useGeneratedKeys = true, keyProperty = "id") 让主键保存在对象的id中</font>

### <font style="color:rgb(51, 51, 51);">优化</font>
<font style="color:rgb(51, 51, 51);">如果传递的参数比较多 我们可以吧参数封装到一个对象中</font>

#### <font style="color:rgb(51, 51, 51);">动态sql</font>
<font style="color:rgb(51, 51, 51);">随着用户的输入或者外部调教的变化而变化的sql语句 就是动态sql</font>

<font style="color:rgb(167, 167, 167);"><if></font><font style="color:rgb(51, 51, 51);">:判断条件是否成立 如果条件为true则拼接sql</font>

```plain
<if test = "gender != null">
    and e.gender = #{gender}
</if>
```

<font style="color:rgb(167, 167, 167);"><where></font><font style="color:rgb(51, 51, 51);"> 根据查询条件 生成where关键字 自动去除条件天面的and或or</font>

```plain
<select id="list" resultType="com.kaninbk.pojo.Emp">
        select emp.*, dept.name as deptName from emp left join dept on emp.dept_id = dept.id
            <where>
                <if test = "name != null and name != ''">
                    emp.name like concat('%', #{name}, '%')
                </if>
                <if test = "gender!= null">
                    and emp.gender = #{gender}
                </if>
                <if test = "begin!= null and end != null">
                    and emp.entry_date between #{begin} and #{end}
                </if>

            </where> order by emp.update_time desc

    </select>
```

##### <font style="color:rgb(51, 51, 51);">批量保存工作经历</font>
<font style="color:rgb(167, 167, 167);"><foreach></font>

<font style="color:rgb(167, 167, 167);"><foreach></font><font style="color:rgb(51, 51, 51);">属性说明：</font><font style="color:rgb(51, 51, 51);">T.collection：集合名称</font><font style="color:rgb(51, 51, 51);">2．item：集合遍历出来的元素/项</font><font style="color:rgb(51, 51, 51);">3．separator：每一次遍历使用的分隔符</font><font style="color:rgb(51, 51, 51);">4.open:遍历开始前拼接的片段</font><font style="color:rgb(51, 51, 51);">5．close：遍历结束后拼接的片段</font>

```plain
<mapper namespace = "com.kaninbk.mapper.EmpExprMapper">
    <insert id="saveBach">
        insert into emp_expr(emp_id, begin, end, company, job) values
        <foreach collection="exprList" item = "expr" separator=",">
            (#{expr.empId}, #{expr.begin}, #{expr.end}, #{expr.company}, #{expr.job})
        </foreach>
    </insert>

</mapper>
```

## <font style="color:rgb(51, 51, 51);">事务</font>
<font style="color:rgb(51, 51, 51);">概念：事务是一组操作的集合，它是一个不可分割的工作单位。事务会把所有的操作作为一个整体一起向系统提交或撤销操作请求，即这些操作要么同时成功，要么同时失败。</font>

<font style="color:rgb(51, 51, 51);">MySql默认的事务是自动提交的 也急速hi说 当执行一条DML语句 会立即隐式的提交事务</font>

### <font style="color:rgb(51, 51, 51);">操作</font>
<font style="color:rgb(51, 51, 51);">事务控制主要三步操作：开启事务 提交事务/回滚事务</font>

```plain
--开启事务
start transaction; / begin
--1.保存员工基本信息
insert into emp values（39，‘Tom’，‘123456'，‘汤姆’，1，‘13300001111′，1，4000，‘1.jpg'，‘2023-11-01'，1，now（)，now(））;
--2.保存员工工作经历
insert into emp_expr(emp_id, begin, end, company, job) values(....)

--提交事务（全部成功）/回滚事务（有一个失败）
commit/rollback
```

### <font style="color:rgb(51, 51, 51);">Spring事务管理</font>
<font style="color:rgb(51, 51, 51);">注解:@Transactional</font><font style="color:rgb(51, 51, 51);">作用：将当前方法交给spring进行事务管理，方法执行前，开启事务；成功执行完毕，提交事务；出现异常，回滚事务</font><font style="color:rgb(51, 51, 51);">位置：业务（service）层的方法（推荐）上、类上、接口上</font>

<font style="color:rgb(51, 51, 51);">rollbackFor属性用于控制出现何种异常类型，回滚事务。</font>

<font style="color:rgb(51, 51, 51);">Transactional默认只有出现运行RuntimeException时异常才会回滚</font>

<font style="color:rgb(51, 51, 51);">如果想要出现所有的异常都回滚 要声明@Transactional(rollbackFor = {Exception.class})即可</font>

<font style="color:rgb(51, 51, 51);">注解：@propagation</font>

<font style="color:rgb(51, 51, 51);">事务传播行为：指的就是当一个事务方法被另一个事务方法调用时这个事务方法应该如何进行事务控制</font><font style="color:rgb(51, 51, 51);">	</font>

<font style="color:rgb(51, 51, 51);">属性值:</font>

```plain
REQUIRED【默认值】需要事务，有则加入，无则创建新事务
REQUIRES_NEW需要新事务，无论有无，总是创建新事务
SUPPORTS支持事务，有则加入，无则在无事务状态中运行
NOT_SUPPORTED不支持事务，在无事务状态下运行，如果当前存在已有事务，则挂起当前事务
MANDATORY必须有事务，否则抛异常
NEVER必须没事务，否则抛异常
```

## <font style="color:rgb(51, 51, 51);">文件上传</font>
<font style="color:rgb(51, 51, 51);">文件上传：是指将本地图片、视频、音频等文件上传到服务器，供其他用户浏览或下载的过程。</font><font style="color:rgb(51, 51, 51);">文件上传在项目中应用非常广泛，我们经常发微博、发微信朋友圈都用到了文件上传功能。</font>

<font style="color:rgb(51, 51, 51);">前端文件上传时必须使用POST不能使用GET</font>

<font style="color:rgb(51, 51, 51);">服务器端在接收是需要在方法的形参中定义 一个multipartFile用来接受前端传递过来的文件</font>

```plain
@PostMapping("/upload")
    public Result upload(String name, Integer age, MultipartFile file) throws Exception {
        log.info("文件上传");
        //获取文件名
        String originalFilename = file.getOriginalFilename();
        //新的文件名
        String extension = originalFilename.substring(originalFilename.lastIndexOf("."));
        String newFileName = UUID.randomUUID().toString() + extension;//使用UUID唯一区分每一个文件
        //保存文件
        file.transferTo(new File("E:\\project\\tliasProject\\tliasWebMaxagement\\image\\" + newFileName));

        return Result.success();
    }
```

<font style="color:rgb(51, 51, 51);">SpringBoot默认上传文件大小限制为1m 可以通过配置一下配置项解决：</font>

spring.servlet.multipart.max-file-size

### <font style="color:rgb(51, 51, 51);">阿里云OSS</font>
<font style="color:rgb(51, 51, 51);">阿里云对象存储OsS（QbjectStorageService），是一款海量、安全、低成本、高可靠的云存储服务。使用OSS您可以通过网络随时存储和调用包括文本、图片、音频和视频等在内的各种文件。</font>

<font style="color:rgb(51, 51, 51);">上传文件示例代码：</font>

```plain
package com.kaninbk;

import java.io.*;
import java.nio.file.Files;
import java.util.Random;

import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.CredentialsProviderFactory;
import com.aliyun.oss.common.auth.EnvironmentVariableCredentialsProvider;
import com.aliyun.oss.model.OSSObject;
import com.aliyun.oss.model.ObjectListing;
import com.aliyun.oss.model.OSSObjectSummary;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;

public class OssJavaSdkQuickStart {
    /** 生成一个唯一的 Bucket 名称 */
    public static String generateUniqueBucketName(String prefix) {
        // 获取当前时间戳
        String timestamp = String.valueOf(System.currentTimeMillis());
        // 生成一个 0 到 9999 之间的随机数
        Random random = new Random();
        int randomNum = random.nextInt(10000); // 生成一个 0 到 9999 之间的随机数
        // 连接以形成一个唯一的 Bucket 名称
        return prefix + "-" + timestamp + "-" + randomNum;
    }

    public static void main(String[] args) throws com.aliyuncs.exceptions.ClientException {
        // 设置 OSS Endpoint 和 Bucket 名称
        String endpoint = "https://oss-cn-beijing.aliyuncs.com";
        //String bucketName = generateUniqueBucketName("tlias-ai-std");
        String bucketName = "tlias-ai-std";
        // 替换为您的 Bucket 区域
        String region = "cn-beijing";
        
        // 从环境变量中获取访问凭证。运行本代码示例之前，请先配置环境变量
        EnvironmentVariableCredentialsProvider credentialsProvider =
                CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
                
        // 创建 OSSClient 实例
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        // 显式声明使用 V4 签名算法
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
                .endpoint(endpoint)
                .credentialsProvider(credentialsProvider)
                .region(region)
                .build();

        try {
            // 1. 创建存储空间（Bucket）
            ossClient.createBucket(bucketName);
            System.out.println("1. Bucket " + bucketName + " 创建成功。");
            // 2. 上传文件
            String objectName = "001.md";

            File file = new File("E:\\project\\tliasProject\\tliasWebMaxagement\\doc\\key.md");
            byte[] content = Files.readAllBytes(file.toPath());

            ossClient.putObject(bucketName, objectName, new ByteArrayInputStream(content));
            System.out.println("2. 文件 " + objectName + " 上传成功。");
            
        } catch (OSSException oe) {
            System.out.println("Caught an OSSException, which means your request made it to OSS, "
                    + "but was rejected with an error response for some reason.");
            System.out.println("Error Message:" + oe.getErrorMessage());
            System.out.println("Error Code:" + oe.getErrorCode());
            System.out.println("Request ID:" + oe.getRequestId());
            System.out.println("Host ID:" + oe.getHostId());
        } catch (ClientException | IOException ce) {
            System.out.println("Caught an ClientException, which means the client encountered "
                    + "a serious internal problem while trying to communicate with OSS, "
                    + "such as not being able to access the network.");
            System.out.println("Error Message:" + ce.getMessage());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
    }
}
```

<font style="color:rgb(51, 51, 51);">我们可以在项目中引入OSS的工具类直接调用工具类 中的uplload方法即可</font>

<font style="color:rgb(51, 51, 51);">最新的oss不能直接靠拼接获取图片的连接但是可以通过以下方式获取一个有时间限制的链接：</font>

```plain
private String getObjectUrl(String objectName, OSS ossClient) {
        URL url = ossClient.generatePresignedUrl(bucketName, objectName, new Date(new Date().getTime() + 3600 * 1000L));
        return url.toString();

    }
```

### <font style="color:rgb(51, 51, 51);">参数配置化</font>
<font style="color:rgb(51, 51, 51);">将一些需要变动的参数 配置在文件中通过@Value注解注入外部配置的属性</font>

```plain
aliyun:
  oss:
    endpoint: https://oss-cn-beijing.aliyuncs.com
    bucketName: tlias-ai-std
    region: cn-beijing
```

```plain
@Value("${aliyun.oss.endpoint}")
    private String endpoint;
    @Value("${aliyun.oss.bucketName}")
    private String bucketName;
    @Value("${aliyun.oss.region}")
    private String region;
```

<font style="color:rgb(51, 51, 51);">但是使用@Value注解注入配置文件的配置项，女如果配置项多，注入繁琐，不便于维护管理和复用。</font>

<font style="color:rgb(51, 51, 51);">可以使用@ConfigurationProperties实现批量注入 将配置项封装到实体类中 实体类中的字段名要和yml中的配置项名字相同 将这个实体类交给IOC容器管理</font>

```plain
//pojo实体类
@Data
@Component
@ConfigurationProperties(prefix = "aliyun.oss")
public class AliyunOSSProperties {
    private String endpoint;
    private String bucketName;
    private String region;
}
```

## <font style="color:rgb(51, 51, 51);">删除员工信息</font>
### <font style="color:rgb(51, 51, 51);">服务器接受前端发送过来的数组</font>
<font style="color:rgb(51, 51, 51);">可以直接在形参中定义一个数组</font>

```plain
@DeleteMapping
    public Result delete(Integer[] ids) {
        log.info("批量删除{}", Arrays.toString(ids));

        return Result.success();
    }
```

<font style="color:rgb(51, 51, 51);">也可以直接封装到一个集合中 但是必须添加注解@RequestParam</font>

```plain
@DeleteMapping
    public Result delete(@RequestParam List<Integer> ids) {
        log.info("批量删除{}", Arrays.toString(ids));

        return Result.success();
    }
```

## <font style="color:rgb(51, 51, 51);">异常处理</font>
<font style="color:rgb(51, 51, 51);">我们可以使用全局异常处理器 来处理异常</font>

```plain
@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandle {
    @ExceptionHandler
    public Result handleException(Exception e) {
        log.error("全局异常处理器， 异常信息：", e);
        return Result.error("对不起，服务器异常请稍后再试 或者联系管理员：19819102162");
    }
}
```

## <font style="color:rgb(51, 51, 51);">员工信息统计</font>
<font style="color:rgb(51, 51, 51);">前段的信息统计使用的是百度提供的Echarts</font>

<font style="color:rgb(51, 51, 51);">我们可以使用SQL中的流程控制函数CASE将job字段的数字转化成职位名称</font>

```plain
SELECT
    (CASE job
        WHEN 1 THEN '班主任'
        WHEN 2 THEN '讲师'
        WHEN 3 THEN '学工主管'
        WHEN 4 THEN '教研主任'
        WHEN 5 THEN '咨询师'
        ELSE '其他'
        END) as pos,
    COUNT(*) as num
FROM
    emp
GROUP BY
    job
order by num;
```

<font style="color:rgb(51, 51, 51);">也可以省略CASE后面的字段名 在WHEN后面直接写条件 可以使用条件控制 </font>

## <font style="color:rgb(51, 51, 51);">登录认证</font>
### <font style="color:rgb(51, 51, 51);">会话技术</font>
<font style="color:rgb(51, 51, 51);">登录标记：用户登陆成功之后 在后续的每一次请求中 都可以获取该标记【会话技术】</font>

<font style="color:rgb(51, 51, 51);">统一拦截：过滤器Filter、拦截器Interceptor</font>

<font style="color:rgb(51, 51, 51);">会话：用户打开浏览器，访问web服务器的资源，会话建立，直到有一方断开连接，会话结束。在一次会话中可以包含多次请求和响应。</font>

<font style="color:rgb(51, 51, 51);">会话跟踪：一种维护浏览器状态的方法，服务器需要识别多次请求是否来自于同一浏览器，以便在同一次会话的多次请求间共享数据。</font>

<font style="color:rgb(51, 51, 51);">会话跟踪方案：</font><font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">客户端会话跟踪技术：Cookie</font><font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">服务端会话跟踪技术：Session</font><font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">令牌技术</font>

#### <font style="color:rgb(51, 51, 51);">Cookie</font>
<font style="color:rgb(51, 51, 51);">优点：HTTP支持的技术</font>

<font style="color:rgb(51, 51, 51);">缺点：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">移动端App无法使用</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">不安全 用户可以自己禁用</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">Cookie不能跨域</font>

#### <font style="color:rgb(51, 51, 51);">Session</font>
<font style="color:rgb(51, 51, 51);">优点：存储在服务器 安全</font>

<font style="color:rgb(51, 51, 51);">缺点：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">服务器集群环境下无法直接使用Session</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">Cookie的所有缺点因为底层是基于Cookie的</font>

#### <font style="color:rgb(51, 51, 51);">令牌方案 （主流方案）</font>
<font style="color:rgb(51, 51, 51);">相当于用户合法的身份凭证</font>

<font style="color:rgb(51, 51, 51);">优点：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">支持PC端、移动端</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">解决集群环境下的认证问题</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">减轻服务端的压力</font>

<font style="color:rgb(51, 51, 51);">缺点：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">需要程序员自己实现 编码繁琐</font>

#### <font style="color:rgb(51, 51, 51);">JWT令牌</font>
<font style="color:rgb(51, 51, 51);">JSON Web Token 定义了一种简介的 自包含的格式，用于在通信双方以json数据格式安全的传输信息。</font>

<font style="color:rgb(51, 51, 51);">组成：</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">1.Header（头），记录令牌类型 签名算法等</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">2.Payload（有效载荷），携带一些自定义信息 默认信息的</font>

<font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">3.Signatureignature（签名），防止Token被篡改、确保安全性。将header、payload融入，并加入指定秘钥，通过指定签名算法计算而来</font>

<font style="color:rgb(51, 51, 51);">使用Base64进行编码</font>

<font style="color:rgb(51, 51, 51);">注意：签名部分不是基于Base64 而是基于一种签名算法</font>

<font style="color:rgb(51, 51, 51);">令牌的长度不是固定的 长度是根据内容的长度决定的</font>

##### <font style="color:rgb(51, 51, 51);">生成或解析令牌</font>
<font style="color:rgb(51, 51, 51);">1.引入jjwt依赖</font>

<font style="color:rgb(51, 51, 51);">2.调用官方工具类Jwts来解析jwt令牌</font>

```plain
<dependency>
            <groupId>io.jsonwebtoken</groupId>
            <artifactId>jjwt</artifactId>
            <version>0.9.1</version>
        </dependency>
```

**<font style="color:rgb(51, 51, 51);">生成JWT令牌：</font>**

```plain
@Test
    public void testGenerateJwt(){
        Map<String, Object> dataMap = new HashMap();
        dataMap.put("id", 1);
        dataMap.put("username", "admin");
        String compact = Jwts.builder().signWith(SignatureAlgorithm.HS256, "a2FuaW5iaw==")//指定签名算法和签名密钥
                .addClaims(dataMap)//添加自定义信息
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 3600))//设置过期时间
                .compact();
        System.out.println(compact);
    }
```

**<font style="color:rgb(51, 51, 51);">解析JWT令牌</font>**

```plain
@Test
    public void testParseJwt(){
        String token = "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsImV4cCI6MTc0Njc3MTc2NH0.DrLSPOUPMNErij-K2bdNxBJuHJAPeVfKCART1oNwpwA";
        Claims body = Jwts.parser().setSigningKey("a2FuaW5iaw==")//指定签名密钥
                .parseClaimsJws(token)//解析token
                .getBody();//获取token中的自定义信息 生成的Claims本质上就是一个map对象
        System.out.println(body);
    }
```

#### <font style="color:rgb(51, 51, 51);">拦截器 Interceptor</font>
<font style="color:rgb(51, 51, 51);">用于动态拦截控制器方法的执行</font>

<font style="color:rgb(51, 51, 51);">拦截请求执行预先设定的代码</font>

<font style="color:rgb(51, 51, 51);">定义拦截器：</font>

```plain
@Component
@Slf4j
public class TokenInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        //获取请求路径
        String requestURI = request.getRequestURI();
        //判断是否是登录请求 如果是则放行
        if (requestURI.contains("/login")) {
            log.info("登录请求 放行");
            return true;
        }
        //判断token是否为空
        String token = request.getHeader("token");
        if (token == null || token.isEmpty()) {
            log.info("令牌为空 响应401");
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return false;
        }

        //如果token存在 校验令牌 校验失败 返回错误信息
        try {
            JwtUtils.parseToken(token);
        } catch (Exception e) {
            log.info("令牌非法 响应401");
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return false;

        }
        log.info("放行！");
        return true;

    }
}
```

<font style="color:rgb(51, 51, 51);">注册拦截器：</font>

```plain
@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Autowired
    private TokenInterceptor tokenInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(tokenInterceptor).addPathPatterns("/**");//拦截所有
    }
}
```

## <font style="color:rgb(51, 51, 51);">webSocket</font>
<font style="color:rgb(51, 51, 51);">是一种基于TCP的全双工通信协议</font>

<font style="color:rgb(51, 51, 51);">首先会使用http协议握手，握手成功后切换成WebSocket协议。</font>

<font style="color:rgb(51, 51, 51);">JavaWebSocket应用由一系列的Endpoint组成。Endpoint是一个java对象，代表WebSocket链接的一端，对于服务端，我们可以视为处理具体WebSocket消息的接口。</font>

#### <font style="color:rgb(51, 51, 51);">定义endpoint的两种方式</font>
<font style="color:rgb(51, 51, 51);">1.变成是，积极成javax.websocket.endpoint并实现其方法。</font>

<font style="color:rgb(51, 51, 51);">2.直接是，即定义一个pojo并添加@ServerEndpoint相关注解</font><font style="color:rgb(51, 51, 51);">	</font>

##### <font style="color:rgb(51, 51, 51);">相关方法</font>
<font style="color:rgb(51, 51, 51);">onOpen() @opOpen</font><font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">当开启一个新的会话是调用，该方法是客户端与服务器握手成功后调用的 方法</font>

<font style="color:rgb(51, 51, 51);">onClose() @onClose</font><font style="color:rgb(51, 51, 51);">	</font><font style="color:rgb(51, 51, 51);">当会话关闭是调用</font>

<font style="color:rgb(51, 51, 51);">onError() @onError 当链接过程异常是调用</font>

```plain
@ServerEnpdpoint("chat")
@Conmponent
public class ChatEndpoint {
    @onOpen
    public void onOPen(Session session, EndpointConfig config) {
        
    }
    @onMessage
    public void onMessage(String message) {
        
    }
    @OnClose
    public void onClose(Session session) {
        
    }
}
```

<font style="color:rgb(51, 51, 51);">这里面的session指的是websocket会话 不会http会话</font>

#### <font style="color:rgb(51, 51, 51);">服务端接受客户端发送的数据</font>
<font style="color:rgb(51, 51, 51);">编程式：通过添加MessageHandler 消息处理器来接受消息</font>

<font style="color:rgb(51, 51, 51);">注解式：在定义Endpoint时，通过@OnMessage注解指定接受消息的方法</font>

#### <font style="color:rgb(51, 51, 51);">服务器如果推送数据给客户端</font>
<font style="color:rgb(51, 51, 51);">发送消息则由RemoteEndpoint完成，其实例由Sessin维护</font>

##### <font style="color:rgb(51, 51, 51);">发送消息的两种方法</font>
<font style="color:rgb(51, 51, 51);">1.通过session.getBasicRemote获取消息发送的实例，然后调用其sendXxx()方法发送消息</font>

<font style="color:rgb(51, 51, 51);">2.通过sesion.getAsyncRemote获取一部消息发送实例，然后调用其sendXxx()发送消息</font>

  
 

