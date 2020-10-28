import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') onEnter(){
    this.textDeco('red');
  }
  @HostListener('mouseleave') onLeave(){
    this.textDeco(null)
  }

  constructor(private elem:ElementRef) { }

  private textDeco(action:string){
    this.elem.nativeElement.style.backgroundColor= action;
  }

}
