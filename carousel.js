// 轮播图注意点：
// 1 轮播的每项，必须设置position:absolute
// 2 new Carousel必须写在Carousel构造函数之后
// 3 更改this指向，使用了_this=this和bind方法

function Carousel(carouselObj) {
    this.box = carouselObj.box;
    this.img = carouselObj.img;
    this.dots = carouselObj.dots;
    this.prev = carouselObj.prev;
    this.next = carouselObj.next;
    this.intervalTime = carouselObj.intervalTime;
    this.gradualTime = carouselObj.gradualTime;
    this.className = carouselObj.className;
    this.size = this.img.length;
    this.i = 0;
    // new时执行如下函数
    this.init();
    // 在setInterval和setTimeout中传入函数时，函数中的this会指向window对象
    // 这是由于setTimeout()调用的代码运行在与所在函数完全分离的执行环境上。这会导致这些代码中包含的 this 关键字会指向 window (或全局)对象
    this.timer = setInterval(this.move.bind(this), this.intervalTime, 1);
}

Carousel.prototype = {

    // toArray方法把类数组转为真数组
    toArray: function (eles) {
        return Array.prototype.slice.call(eles)
    },
    move: function (n) {
        var _this = this;
        this.i += n;
        if (this.i == this.size) {
            this.i = 0;
        };
        if (this.i == -1) {
            this.i = this.size - 1
        };
        if (this.dots) {
            var dotsArr = this.toArray(this.dots);
            dotsArr.forEach(function (item) {
                item.classList.remove(_this.className)
            });
            this.dots[this.i].classList.add(_this.className);
        }
        var imgArr = this.toArray(this.img);
        imgArr.forEach(function (item) {
            item.classList.remove(_this.className)
        });
        this.img[this.i].classList.add(_this.className);
    },

    init: function () {
        var _this = this;
        // 点击上下键
        if (this.prev) {
            this.prev.onclick = function () {
                _this.move(-1)
            };
        }
        if (this.next) {
            this.next.onclick = function () {
                _this.move(1)
            };
        }

        // mouseover每个小圆点
        if (this.dots) {
            var dotsArr = this.toArray(this.dots);
            dotsArr.forEach(function (item, index) {
                item.index = index;
                item.onmouseover = function (e) {

                    _this.i = e.target.index - 1;
                    // 因为执行move(1)时i会加1，所以先减一
                    _this.move(1)
                };
            })


        }

        // // 进入时清楚计时器；离开时重启计时器
        this.box.onmouseenter = function () {
            clearInterval(_this.timer);
        };
        this.box.onmouseleave = function () {
            _this.timer = setInterval(_this.move.bind(_this), _this.intervalTime, 1);
        };

    }
}