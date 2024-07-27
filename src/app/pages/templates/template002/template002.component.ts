import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template002',
  templateUrl: './template002.component.html',
  styleUrls: ['./template002.component.scss']
})
export class Template002Component implements OnInit {
  @Input() data:any
  constructor() { }

  ngOnInit(): void {
  }

}
