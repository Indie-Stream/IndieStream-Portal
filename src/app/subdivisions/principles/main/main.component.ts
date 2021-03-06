import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  items = ['red_blue_pink_gradiant.png',
           'weird_gradiants.png'].map((n) => `assets/images/shows/${n}`);
  constructor() { }

  ngOnInit(): void {
  }

}
