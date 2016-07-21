import {Component, Directive, Input, Output, EventEmitter, HostListener, ElementRef} from '@angular/core'

@Directive({selector: 'paper-checkbox'})
export class PaperChechboxDirective {
  @Input() checked: boolean;
  @Output() checkedChange:EventEmitter<any> = new EventEmitter();
  
  constructor(private el: ElementRef) {}
  ngOnChanges() {
     this.el.nativeElement.checked = this.checked;
  }
  @HostListener('iron-change', ['$event'])
  onChange(e) {
    this.checkedChange.emit(this.el.nativeElement.checked);
  }
}