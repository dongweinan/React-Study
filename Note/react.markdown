## react 为什么用jsx不用js
    jsx 更加简洁 方便
    jsx 就是react 写js 的语法糖

## 虚拟dom 和 真实dom 的区别
    1.虚拟dom本质上是object类型的对象
    2.虚拟dom比较‘轻’，真实dom比较‘重’，因为虚拟dom是React内部在用，无需真实dom上那么多的属性
    3.虚拟dom最终会被React转换成真实dom，呈现在界面上。
## jsx
    1.全称：JavaScript XML
    2.React 定义的一种类似于 XML 的 JS扩展语法：JS + XML

## XML
    XML早期用于存储和传输数据
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
## jsx语法规则

    1.定义虚拟dom时，不要写引号
    2.标签中混入js表达式时要用{}
    3.样式的类名不能使用class，而要使用className
    4.内联样式，要用style = {{key:value}} 的形式
    5.只能有一个根标签
    6.标签必须闭合
    7.标签首字母若为大写，会识别为组件，若为小写，则转换为html同名标签