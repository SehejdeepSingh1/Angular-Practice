import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  name=""
  displayName=""

  getName(event:Event) {
    this.name = (event.target as HTMLInputElement).value
  }
  showName() {
    this.displayName = this.name
  }

  // protected readonly title = signal('angular-prac');
  // count=0
  //
  // handleCounter(val:string){
  //   if(val=='minus') {
  //     this.count = this.count - 1;
  //   }else if(val=='plus'){
  //     this.count=this.count+1;
  //   }else if(val=='reset'){
  //     this.count=0;
  //   }
  email: string="";
  setName() {
    this.displayName ="sahil"
  }

  getEmail(value: string) {
    this.email=value
  }

  setEmail() {
    this.email="def@test.com"
  }
}
