import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template001',
  templateUrl: './template001.component.html',
  styleUrls: ['./template001.component.scss']
})
export class Template001Component implements OnInit {
  @Input() data:any
  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
    
  }

}
