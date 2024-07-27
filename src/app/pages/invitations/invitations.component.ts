import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Template001Component } from '../templates/template001/template001.component';
import { Template002Component } from '../templates/template002/template002.component';
import { DynamicTemplateDirective } from 'src/app/shared/directives/dynamic-template.directive';

@Component({
  selector: 'app-invitations',
  templateUrl: './invitations.component.html',
  styleUrls: ['./invitations.component.scss']
})
export class InvitationsComponent implements OnInit {
  id: any = 'invitation'
  private templateMapping: { [key: string]: any } = {
    'template1': Template001Component,
    'template2': Template002Component
    // Add more mappings as needed
  };
  customer: any = 'Customer Data';
  @ViewChild(DynamicTemplateDirective, { static: true }) dynamicTemplate!: DynamicTemplateDirective;
  constructor(private route: ActivatedRoute,  private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);
      this.loadTemplateComponent(this.id);
      // Fetch and display the data based on the id
    });
  }

  private loadTemplateComponent(template: string) {
    const component = this.templateMapping[template];
    if (component) {
      const componentFactory: ComponentFactory<any> = this.componentFactoryResolver.resolveComponentFactory(component);
      const viewContainerRef = this.dynamicTemplate.viewContainerRef;
      viewContainerRef.clear();
      const componentRef: ComponentRef<any> = viewContainerRef.createComponent(componentFactory);
      componentRef.instance.data = this.customer;
    }
  }

}
