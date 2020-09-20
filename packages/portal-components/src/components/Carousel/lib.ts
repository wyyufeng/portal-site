interface CarouselOptions {
  container: HTMLElement;
  duration: number;
  nav: HTMLElement;
}

class CarouselLib {
  private container: HTMLElement;
  private slides: Array<HTMLElement>;
  private duration: number;
  private count: number;
  private _timer: any;
  private activeIndex: number;
  private nav: HTMLElement;
  private navItems: Array<HTMLElement>;
  private currentItem: null | HTMLElement;
  constructor(options: CarouselOptions) {
    this.container = options.container;
    this.nav = options.nav;
    this.slides = Array.from(this.container.querySelectorAll('.portal-carousel-slide'));
    this.navItems = Array.from(this.nav.querySelectorAll('.portal-carousel-nav-item'));
    this.activeIndex = 0;
    this._timer = null;
    this.duration = options.duration;
    this.count = 0;
    this.currentItem = null;
  }

  init(): CarouselLib {
    this.slides.forEach((node) => {
      node.style.opacity = '0';
      node.style.transform = "scale(1,1)";
      node.style.zIndex = '-1';
    });

    this.navItems.forEach((node, index) => {
      node.dataset.itemIndex = index + '';
      node.addEventListener('click', (e) => {
        const target = (e.currentTarget as HTMLElement)!;

        this.slideTo(+target.dataset.itemIndex!);
      });
    });

    this.count = this.slides.length;
    this.animate(true).start();
    return this;
  }

  //　保证transitionEnd　事件只触发一次
  _transitionEnd(ele: HTMLElement, fn: Function) {
    let called = false;

    const callback = function () {
      if (!called) {
        fn.call(ele);
        called = true;
        ele.removeEventListener('transitionend', callback);
      }
    };

    ele.addEventListener('transitionend', callback);
  }
  // 动画
  animate(isFirst: boolean) {
    if (this.slides.length === 0) return this;
    if (isFirst) {
      this.currentItem = this.slides[0];
    } else {
      this.currentItem!.style.opacity = '0';
      this.currentItem!.style.transform = 'scale(1.5,1.5)';
      this.currentItem!.style.transition = '1000ms cubic-bezier(0.5,0,0.2,1)';
      this._transitionEnd(this.currentItem!, function (this: HTMLElement) {
        this.style.zIndex = '-1';
        this.style.transform = 'scale(1,1)';
      });
    }

    this.currentItem = this.slides[this.activeIndex];

    this.currentItem.style.zIndex = '0';
    this.currentItem.style.opacity = '1';
    this.currentItem.style.transform = 'scale(1,1)';
    this.currentItem.style.transition = '800ms cubic-bezier(0,1,1,1)';
    this._transitionEnd(this.currentItem, function (this: HTMLElement) {
      this.style.transform = 'scale(1.1,1.1)';
      this.style.transition = '5000ms linear';
    });

    this.navItems.forEach((nav, index) => {
      index === this.activeIndex
        ? nav.classList.add('active')
        : nav.classList.remove('active');
    });
    return this;
  }

  slideTo(index: number) {
    this.activeIndex = index;
    this.destroy().start();
    this.animate(false);
  }

  start() {
    this._timer = setInterval(() => {
      this.activeIndex++;
      if (this.activeIndex >= this.count) this.activeIndex = 0;
      this.animate(false);
    }, this.duration);
  }
  destroy() {
    clearInterval(this._timer);
    return this;
  }
}

export default CarouselLib;
