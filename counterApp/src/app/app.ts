import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  task=""
  taskList:{id:number, task:string}[]=[]

  addTask(){
    this.taskList.push({id:this.taskList.length+1,task:this.task})
    this.task=" "
  }

  deleteTask(taskID:number){
    this.taskList=this.taskList.filter(item=>item.id!=taskID)
  }
  // addTask(){
  //   this.taskList.push(id:this.taskList.length+1,task:this.task)
  // }





  // display=true
  // togglediv= true
  //
  // hide(){
  //   this.display=false
  // }
  //
  // show() {
  //   this.display=true;
  // }
  // toggle(){
  //   this.display=!this.display
  // }
  // toggledivision(){
  //   this.togglediv=!this.togglediv
  // }

  // name=""
  // displayName=""
  //
  // getName(event:Event) {
  //   this.name = (event.target as HTMLInputElement).value
  // }
  // showName() {
  //   this.displayName = this.name
  // }

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
  // //   }
  // email: string="";
  // setName() {
  //   this.displayName ="sahil"
  // }
  //
  // getEmail(value: string) {
  //   this.email=value
  // }
  //
  // setEmail() {
  //   this.email="def@test.com"
  // }


}
