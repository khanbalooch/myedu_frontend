import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[uppercaseFirstLetter]'
})
export class UppercaseFirstLetterDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @Input('uppercaseFirstLetter') set uppercaseFirstLetter(value: string) {
    if (value) {
        console.log('Directive ========Callied');
        const values = value.split(' ').map( word => word.charAt(0).toUpperCase() + word.slice(1)); 
      this.renderer.setProperty(this.el.nativeElement, 'innerText', values.join(' '));
    }
  }
}





