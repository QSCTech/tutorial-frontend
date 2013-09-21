# JavaScript基础


## 基础语法

- JavaScript 用 `var x` 的方式来定义变量。和C,Java等语言不同，JavaScript 并不需要给定一个变量类型，就像`int a` 一样。(这个就叫作 __"泛型"__。)

- 接下来是它的一些基础语句，和C基本一样，自己感受一下吧。

```
var a,b,c,d,e;
a = 10;
b = "JavaScript";
c = true;

if(a == 10){
  d = 10;
}  /* condition statement */

for(e = 0;e <= 10;e++){
  var f;
  switch(e){
    case 1:
      c = false;
      break;
    case 2:
      c = true;
      break;
    default:
      break;
  }
}

```

如果还是不太懂的话，请自行翻阅[JS If...Else](http://www.w3school.com.cn/js/js_if_else.asp)等教程。


## 再说泛型

- 不直接定义数据类型不代表没有数据类型。只不过JavaScript会自动判断数据类型并转换成为 __JavaScript自己__ 认为合适的类型。

JavaScript有以下几种类型：
 - Number
 - String 
 - Boolean
 - Object

 - Undefined
 - Null       [这两种类型都代表"空"值,但是具体而言又有所不同]

以下就是个例子：

```

var ex_string  = "JavaScript"   //双引号就代表着字符串(String)类型
var ex_number  = 12.34;         //数字类型，没有小数整数长整型的分别
var ex_boolean = true;          //布尔类型，只有 true 或者 false 两个值
var ex_object = {
  name:"DaiHao",
  sex:"male",
  alone:true
}                             
  /*对象类型。这里的对象只是数据的集合而已。*/

var ex_null = null;
var ex_undefined = undefined; //这两个有点复杂，之后再有机会解释。
```

如果想更加具体地了解的话，请阅读[标准中对类型的说明](http://www.ecma-international.org/ecma-262/5.1/#sec-8)

```
>>> 各位可以试一下以下式子的结果：

"123" + 456 = ?
123 + true *10 = ?
    
```


## 函数、数组

- 函数
  一个函数可以这么定义和调用：

```

function MyFunc(a){
  if(a == 0){
    return 1;
  }else{
    return 0;
  }


MyFunc(0);  //调用函数。返回值为1。

```

- 数组
  一个数组是这样定义的：

```

var MyArray = [12,"String",true,{a:12}];
var a = MyArray[1]; //数姐调用语句，a="String"。注意，数组里面不一定非要放同一个类型的变量不可。

```

## 对象
[要写的话就有点凶残了...先放着吧]

## 作业

写一个能将当前日期转换成特定格式的字符串的程序？[比如:20130922] 
