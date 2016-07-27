import {Component, Directive, Input, Output, EventEmitter, HostListener, ElementRef} from '@angular/core';

@Directive({
    selector: 'paper-dialog'
})
export class PaperDialogDirective {
  @Input() opened: boolean;
  @Output() openedChange:EventEmitter<any> = new EventEmitter();
  
  constructor(private el: ElementRef) {}
  
  @HostListener('iron-overlay-opened', ['$event'])
  open(e) {
    this.openedChange.emit(true);
  }
  @HostListener('iron-overlay-closed', ['$event'])
  close(e) {
    this.openedChange.emit(false);
  }
}