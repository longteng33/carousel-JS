# carousel-JS
用js和animation实现的渐变轮播<br>
1,使用js封装：<br>
box: 元素，包裹整个轮播图的组件<br>
img: 元素，类数组，包裹每个图片元素li<br>
dots: 元素，类数组，可没有，小圆点<br>
prev: 元素，可没有，前一张按钮<br>
next: 元素，可没有，下一张按钮<br>
intervalTime: 数字，自动轮播时间间隔，单位ms<br>
gradualTime: 数字，渐变时间，单位ms<br>
className: 字符串，当前展示图片和小圆点的类名,<br>
<br>
2，切换时的渐变效果：使用transition-property: opacity实现<br>
3，在setInterval和setTimeout中传入函数时，函数中的this会指向window对象<br>
这是由于setTimeout()调用的代码运行在与所在函数完全分离的执行环境上。这会导致这些代码中包含的 this 关键字会指向 window (或全局)对象<br>
4，使用bind改变this指向<br>
5,将e.target更改为e.currentTarget,返回当前事件触发元素，而e.target可能会返回事件触发元素下的子元素