import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-reg-page',
  templateUrl: './customer-reg-page.component.html',
  styleUrls: ['./customer-reg-page.component.scss']
})
export class CustomerRegPageComponent implements OnInit {
  name:any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
  submit() {
    console.log(this.name);  // Logs the input value to the console
    this.router.navigate([`/${this.name}`]);
  }

}
