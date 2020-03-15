interface CarouselOptions {
    container: HTMLElement;
    duration: number;
    nav: HTMLElement;
}
declare class CarouselLib {
    private container;
    private slides;
    private duration;
    private count;
    private _timer;
    private activeIndex;
    private nav;
    private navItems;
    private currentItem;
    constructor(options: CarouselOptions);
    init(): CarouselLib;
    _transitionEnd(ele: HTMLElement, fn: Function): void;
    animate(isFirst: boolean): this;
    slideTo(index: number): void;
    start(): void;
    destroy(): this;
}
export default CarouselLib;
