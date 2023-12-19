## react 为什么用 jsx 不用 js

jsx 更加简洁 方便
jsx 就是 react 写 js 的语法糖

## 虚拟 dom 和 真实 dom 的区别

1.虚拟 dom 本质上是 object 类型的对象

2.虚拟 dom 比较‘轻’，真实 dom 比较‘重’，因为虚拟 dom 是 React 内部在用，无需真实 dom 上那么多的属性 3.虚拟 dom 最终会被 React 转换成真实 dom，呈现在界面上。

## jsx

1.全称：JavaScript XML
2.React 定义的一种类似于 XML 的 JS 扩展语法：JS + XML

## XML

XML 早期用于存储和传输数据

```
    <student>
        <name>Tom</name>
        <age>18</age>
    </student>

    <!-- JSON -->

    “{"name":'Tom',"age":18}”

    parse
    stringfy
```

## jsx 语法规则

1.定义虚拟 dom 时，不要写引号

2.标签中混入 js 表达式时要用{}

3.样式的类名不能使用 class，而要使用 className

4.内联样式，要用 style = {{key:value}} 的形式 5.只能有一个根标签 6.标签必须闭合 7.标签首字母若为大写，会识别为组件，若为小写，则转换为 html 同名标签

## js 语句（代码）和 js 表达式 的区别

1.表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方
下面的这些都是表达式：
(1). a
(2). a+b
(3). demo(1)
(4). arr.map()
(5). function test() 2.语句（代码）：
下面的这些都是语句（代码）：
(1). if()
(2). for(){}
(3). switch(){case:xxxx}

## react 中定义组件

1.函数式组件
用函数定义的组件，函数式组件渲染过程：react 先解析组件标签，找到组件，发现组件是函数式组件，随后点用该函数，进而渲染页面 2.类式组件
用类定义的组件，类组件渲染过程： react 解析组件标签，发现是类组件，随后 new 出来该类的实力，并通过该实例调用原型上的 render 方法，进而渲染页面
