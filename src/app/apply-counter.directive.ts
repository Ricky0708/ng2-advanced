import {Renderer, HostListener,  HostBinding,  Directive,  Input,  ElementRef} from '@angular/core';

@Directive({
  selector: '.pt0[apply-counter]'
})
export class ApplyCounterDirective {

  @HostBinding('class.bg-success')
  @Input()
  bgClass = false;

  @HostListener('click', ['$event'])
  myClick($event) {
    this.bgClass = !this.bgClass;
    console.log($event);
  }

  constructor(private el: ElementRef, private renderer: Renderer) {

    // setTimeout(() => {
    //   this.bgClass = true;
    // }, 5000);

  }

  ngOnInit() {
    (this.el.nativeElement as HTMLDivElement).innerHTML = '123';
    this.renderer.setElementClass(this.el.nativeElement, 'bg-danger', true);
  }

}
