import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('angular-prac');
  count=0

  handleCounter(val:string){
    if(val=='minus') {
      this.count = this.count - 1;
    }else if(val=='plus'){
      this.count=this.count+1;
    }else if(val=='reset'){
      this.count=0;
    }
  }
}
