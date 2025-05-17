import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-oninit',
  imports: [],
  templateUrl: './oninit.component.html',
  styleUrl: './oninit.component.css'
})
export class OninitComponent implements OnInit{

  ngOnInit(): void {
    console.log('ngOnInit called - ');
  }

  constructor() {
    console.log('Constructor called - ');
  }
    //constructor is called before the complete initialiszation of the component, whereas ngOnInit is called after the complete initialization of the component.

  //ngOnInit is preffered to call API calls, as it is called after the complete initialization of the component.
}
