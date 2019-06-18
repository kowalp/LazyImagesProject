import { Directive, AfterViewInit, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';

@Directive({
  selector: '[appLazyLoad]'
})
export class LazyLoadDirective implements AfterViewInit {
  @HostBinding('attr.src') srcAttr = null;
  @Input() src: string;
  @HostBinding('class') class: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.canLazyLoad() ? this.lazyLoadImage() : this.loadImage();
  }

  canLazyLoad() {
    return window && 'IntersectionObserver' in window;
  }

  lazyLoadImage() {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(({ isIntersecting }) => {
        const a = this.el.nativeElement.getBoundingClientRect().top;
        if ( a <= window.innerHeight + 200) {
          if (isIntersecting) {
            this.loadImage();
            obs.unobserve(this.el.nativeElement);
            this.class = 'fade';
          }
        }
      });
    });
    obs.observe(this.el.nativeElement);
  }

  loadImage() {
    this.srcAttr = this.src;
  }
}
