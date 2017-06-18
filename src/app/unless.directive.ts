import {ContentChild, Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[dirUnless]'
})
export class UnlessDirective {
  @Input() set dirUnless(condition: boolean) {
    if(!condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }

}
