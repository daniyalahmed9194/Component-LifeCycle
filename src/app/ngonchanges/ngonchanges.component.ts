import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ngonchanges',
  imports: [],
  templateUrl: './ngonchanges.component.html',
  styleUrl: './ngonchanges.component.css',
})
export class NgonchangesComponent implements OnChanges {
  @Input() inputValue: string = '';

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('ngOnChanges called - '+ this.inputValue);
  //   console.log(changes);
  // }
  previousValue: string | undefined ;
  currentValue: string | undefined ;
  
 ngOnChanges(changes: SimpleChanges): void {
    if (changes['inputValue']) {
      this.previousValue = changes['inputValue'].previousValue;}
      this.currentValue = changes['inputValue'].currentValue
      console.log(changes)
  }


  //working:
  // 1. WHen the input value is changed from the parent component, ngOnChanges will be called, changes information is passed tho the simple changes interface.
  // 2. It will log the changes to the console.
  // 3. It will log the current value of the input property.

  //purpose:
  //it is used to detect and respond to changes in @Input() properties of a component. It is called before ngOnInit and ngDoCheck, and it receives a SimpleChanges object that contains the current and previous values of the input properties.

}
