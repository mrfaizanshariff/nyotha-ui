import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { TextPlugin,ScrollTrigger } from 'gsap/all';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { 
    gsap.registerPlugin(TextPlugin,ScrollTrigger); 
  }

  ngOnInit(): void {
  this.textAnimation()
  this.ctaButtonAnimation()
  }
  textAnimation(){
    const tl = gsap.timeline({repeat:0,yoyo:true})
    tl
    .to("#title",{
      duration:1.5, text:"Nyotha",
      translateY:10,
      scrub:true
    })
    .from("#subtitle",{
      translateY:-100,
      opacity:0,
      duration:1.5,
    })

  }
  ctaButtonAnimation(){
    gsap.from("#cta-button",{
      translateX:100,
      opacity:0,
      scale:0.5,
      duration:1.5,
    })
  }
}
