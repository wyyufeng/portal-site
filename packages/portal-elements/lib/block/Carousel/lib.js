"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CarouselLib = /** @class */ (function () {
    function CarouselLib(options) {
        this.container = options.container;
        this.nav = options.nav;
        this.slides = Array.from(this.container.querySelectorAll('.portal-carousel-slide'));
        this.navItems = Array.from(this.nav.querySelectorAll('.portal-carousel-nav-item'));
        this.activeIndex = 0;
        this._timer = null;
        this.duration = options.duration;
    }
    CarouselLib.prototype.init = function () {
        var _this = this;
        this.slides.forEach(function (node) {
            node.style.cssText = 'opacity:0;transform:scale(1,1);z-index:-1';
        });
        this.navItems.forEach(function (node, index) {
            node.dataset.itemindex = index + '';
            node.addEventListener('click', function (e) {
                var target = e.currentTarget;
                _this.slideTo(+target.dataset.itemindex);
            });
        });
        this.count = this.slides.length;
        this.animate(true).start();
        return this;
    };
    //　保证transitionEnd　事件只触发一次
    CarouselLib.prototype._transitionEnd = function (ele, fn) {
        var called = false;
        var callback = function () {
            if (!called) {
                fn.call(this);
                called = true;
                ele.removeEventListener('transitionend', callback);
            }
        };
        ele.addEventListener('transitionend', callback.bind(ele));
    };
    // 动画
    CarouselLib.prototype.animate = function (isFirst) {
        var _this = this;
        if (isFirst) {
            this.currentItem = this.slides[0];
        }
        else {
            this.currentItem.style.opacity = '0';
            this.currentItem.style.transform = 'scale(1.5,1.5)';
            this.currentItem.style.transition = '1000ms cubic-bezier(0.5,0,0.2,1)';
            this._transitionEnd(this.currentItem, function () {
                this.style.zIndex = '-1';
                this.style.transform = 'scale(1,1)';
            });
        }
        this.currentItem = this.slides[this.activeIndex];
        this.currentItem.style.zIndex = '0';
        this.currentItem.style.opacity = '1';
        this.currentItem.style.transform = 'scale(1,1)';
        this.currentItem.style.transition = '800ms cubic-bezier(0,1,1,1)';
        this._transitionEnd(this.currentItem, function () {
            this.style.transform = 'scale(1.1,1.1)';
            this.style.transition = '5000ms linear';
        });
        this.navItems.forEach(function (nav, index) {
            index === _this.activeIndex ? nav.classList.add('active') : nav.classList.remove('active');
        });
        return this;
    };
    CarouselLib.prototype.slideTo = function (index) {
        this.activeIndex = index;
        this.destroy().start();
        this.animate(false);
    };
    CarouselLib.prototype.start = function () {
        var _this = this;
        this._timer = setInterval(function () {
            _this.activeIndex++;
            if (_this.activeIndex >= _this.count)
                _this.activeIndex = 0;
            _this.animate(false);
        }, this.duration);
    };
    CarouselLib.prototype.destroy = function () {
        clearInterval(this._timer);
        return this;
    };
    return CarouselLib;
}());
exports.default = CarouselLib;
