import { Directive, ElementRef, inject, OnInit } from '@angular/core';

@Directive({
  selector: '[libAutofocus]',
  standalone: true
})
export class AutofocusDirective implements OnInit {
  readonly #elementRef: ElementRef<HTMLElement> = inject(ElementRef<HTMLElement>);


  ngOnInit(): void {
    this.#elementRef.nativeElement.focus();
  }

}
