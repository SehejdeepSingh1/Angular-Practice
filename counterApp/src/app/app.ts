import { Component, signal } from '@angular/core';
// import {FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators} from '@angular/forms';
// import {User} from './user/user';
import {CommonModule} from '@angular/common';
import {Product} from './services/product';
import{OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  productList:any[]=[];
  constructor(private productservice:Product) {

  }

  ngOnInit(){
    this.productservice.getProductList().subscribe((data:User)=>{
      console.log("Working")
      this.productList=data.products;
    })
  }






  // profileForm=new FormGroup({
  //   name:new FormControl([Validators.required]),
  //   password:new FormControl([Validators.minLength(5),Validators.required]),
  //   email:new FormControl([Validators.required,Validators.maxLength(50)]),
  // })
  //
  // onSubmit(){
  //   console.log("Onsubmit called")
  // }


  // task=""
  // taskList:{id:number, task:string}[]=[]
  //
  // addTask(){
  //   this.taskList.push({id:this.taskList.length+1,task:this.task})
  //   this.task=" "
  // }
  //
  // deleteTask(taskID:number){
  //   this.taskList=this.taskList.filter(item=>item.id!=taskID)
  // }
  // // addTask(){
  // //   this.taskList.push(id:this.taskList.length+1,task:this.task)
  // // }
  //
  // students=["sehej","sahil"]



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
