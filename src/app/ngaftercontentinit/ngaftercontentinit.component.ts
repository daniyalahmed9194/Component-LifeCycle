import { Component, DoCheck } from '@angular/core';
import { NgdocheckComponent } from '../ngdocheck/ngdocheck.component';

@Component({
  selector: 'app-ngaftercontentinit',
  imports: [],
  templateUrl: './ngaftercontentinit.component.html',
  styleUrl: './ngaftercontentinit.component.css'
})
export class NgaftercontentinitComponent implements DoCheck {
  ngDoCheck(): void {
    console.log('ngDoCheck called - ');
  }
  
}
