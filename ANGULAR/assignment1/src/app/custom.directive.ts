import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';


@Directive(
    {
        selector : '[custDir]'
    }
)








export class CustomDirective {
    constructor(private el : ElementRef){
        this.el.nativeElement.style.backgroundColor='red';
       

    } @HostBinding('style.color') colorName = 'yellow'
    @HostListener('mouseleave') s(){
        this.el.nativeElement.style.backgroundColor='gray';
        
    }
    @HostListener('mouseenter') m(){
        this.el.nativeElement.style.backgroundColor='green';
        
    }
}