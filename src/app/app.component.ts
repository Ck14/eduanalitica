import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceJsonService } from './service-json.service';
import * as data from '../particles.json';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  json: any = data;
  id = 'tsparticles';
  particlesOptions: any;
  currentYear = 0;

  constructor() {
    // console.log(this.json.default);
 
  }

  ngOnInit(): void { 
    this.iniciarOpciones();
    this.currentYear = (new Date()).getFullYear();
    
  }

  // tslint:disable-next-line: typedef
  iniciarOpciones(){
    this.particlesOptions = this.json.default;
    console.log(this.particlesOptions);
  }

  

  

  // particlesOptions = {
  //   background: {
  //     color: {
  //       value: '#0d47a1',
  //     },
  //   },
  //   fpsLimit: 60,
  //   interactivity: {
  //     detectsOn: 'canvas',
  //     events: {
  //       onClick: {
  //         enable: true,
  //         mode: 'push',
  //       },
  //       onHover: {
  //         enable: true,
  //         mode: 'repulse',
  //       },
  //       resize: true,
  //     },
  //     modes: {
  //       bubble: {
  //         distance: 400,
  //         duration: 2,
  //         opacity: 0.8,
  //         size: 40,
  //       },
  //       push: {
  //         quantity: 4,
  //       },
  //       repulse: {
  //         distance: 200,
  //         duration: 0.4,
  //       },
  //     },
  //   },
  //   particles: {
  //     color: {
  //       value: '#ffffff',
  //     },
  //     links: {
  //       color: '#ffffff',
  //       distance: 150,
  //       enable: true,
  //       opacity: 0.5,
  //       width: 1,
  //     },
  //     collisions: {
  //       enable: true,
  //     },
  //     move: {
  //       direction: 'none',
  //       enable: true,
  //       outMode: 'bounce',
  //       random: false,
  //       speed: 6,
  //       straight: false,
  //     },
  //     number: {
  //       density: {
  //         enable: true,
  //         value_area: 800,
  //       },
  //       value: 80,
  //     },
  //     opacity: {
  //       value: 0.5,
  //     },
  //     shape: {
  //       type: 'circle',
  //     },
  //     size: {
  //       random: true,
  //       value: 5,
  //     },
  //   },
  //   detectRetina: true,
  // };
} //ned
