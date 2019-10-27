import { Component, OnInit } from '@angular/core';
import { Directive, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-left-control-menu',
  templateUrl: './left-control-menu.component.html',
  styleUrls: ['./left-control-menu.component.css']
})

@Directive({
  selector: '[myHighlight]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})

export class LeftControlMenuComponent implements OnInit {
  private _defaultColor = 'blue';
  private el: HTMLElement;

  constructor(el: ElementRef) 
  { 
    this.el = el.nativeElement;
  }

  @Input('myHighlight') highlightColor: string;

  ngOnInit() {
  }

  onMouseEnter(){
    console.log("mouse enter : ");
    this.highlight(this.highlightColor || this._defaultColor); 
    
 }

 onMouseLeave(){
   console.log('mouse leave :');
 }
 private highlight(color:string) {
  this.el.style.backgroundColor = color;
}

}
