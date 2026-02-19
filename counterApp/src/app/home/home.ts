import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  users=[
    {'id':1,
    'name':'sehej',
    'email':'sehej@.com'},
    {'id':2,
      'name':'sahil',
      'email':'sahil@.com'},
    {'id':3,
      'name':'jot',
      'email':'jot@.com'}
  ]
}
