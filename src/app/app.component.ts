import { AfterContentInit, Component } from '@angular/core';
import { NgonchangesComponent } from "./ngonchanges/ngonchanges.component";
import { OninitComponent } from "./oninit/oninit.component";
import { NgdocheckComponent } from "./ngdocheck/ngdocheck.component";
import { NgaftercontentinitComponent } from "./ngaftercontentinit/ngaftercontentinit.component";

@Component({
  selector: 'app-root',
  imports: [ NgaftercontentinitComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterContentInit {
  inputValue = 'new-val';
  //ngonchange:
  // constructor() {
  //   console.log('Calling From Constructor' + this.inputValue);
  // }

  // ngOnInit:
  // updatedValue(){
  //   this.inputValue = 'updated-val';
  // }

  //ngdocheck:
  // user = {
  //   name: 'UserA'
  // }

  // updateUser() {
  //   this.user.name = 'UserB';
  // }

  //ngaftercontentinit:
  dataFromParert: string = '';
  ngAfterContentInit(): void { 
    console.log('ngAfterContentInit called - ' + this.dataFromParert);
   }
  sendDataToChild() {
    let random = Math.floor(Math.random() * 10);
    this.dataFromParert = 'Data from parent - ' + random;
  }
}
