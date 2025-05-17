import { CommonModule } from '@angular/common';
import { Component, DoCheck, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-ngdocheck',
  imports: [CommonModule],
  templateUrl: './ngdocheck.component.html',
  styleUrl: './ngdocheck.component.css',
})
export class NgdocheckComponent implements DoCheck {
  @Input() user: any;
  //ngOnChanges(changes: SimpleChanges): void {
  //  console.log('ngOnChanges called - ', changes); it did not upadte the hook because it is not called on the property of object. if the whole object is  then it will be called.
  // }

  private previousUserName: string | undefined;

  ngDoCheck(): void {
    if (this.user.name != this.previousUserName) {
      this.previousUserName = this.user.name;
    }
    console.log('ngDoCheck called - User name changed to', this.user.name);
  }
}
