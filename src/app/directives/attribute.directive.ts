import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAttribute]'
})
export class AttributeDirective {

  constructor(private el: ElementRef) { 
    this.el.nativeElement.innerHTML = "Lorem Ipsum";
    this.el.nativeElement.style.padding = "20px";
  }

}
