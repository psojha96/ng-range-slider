import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.scss']
})
export class RangeSliderComponent {

  constructor() {}

  @Input() id = '_range'

 @Input() minVal = 0;

 @Input() maxVal = 100;

 @Input() value = 0;

 @Output() callback = new  EventEmitter();

 type = 'range';

//   calculateRange(){
//      let rangeV = document.getElementById('rangeV');
//    const newValue = Number( (this.value - this.minVal) * 100 / (this.maxVal - this.minVal) );
//    let newPosition = 10 - (newValue * 0.2);
//    rangeV.innerHTML= `calc(${newValue}% + (${newPosition}px))`
//  }
  
  clickAction(){
      this.callback.emit(this.value+'');
  }
}
