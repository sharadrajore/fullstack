import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  template: `<h3>This test1 Component</h3>
  <p>Created a component using CLI with inline style 
  and template</p>
  `,
  styles: [`
 h3{
    font-family:cursive;
    
  }`,
  `
  p{
    color:green;
    font-size:1.2em;

  }
  
  `]
})
export class Test1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
