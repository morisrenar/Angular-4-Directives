import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer, OnInit} from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective implements OnInit {
  private backgroundColor: String;
  @Input() defaultColor = 'white';
  @Input('dirHighlight') highlightColor = 'green';
  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = this.highlightColor;
  };
  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = this.defaultColor;
  };
  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }
  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    /*this.elementRef.nativeElement.style.backgroundColor = 'green';*/
    /*this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green');*/
  }
  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}
