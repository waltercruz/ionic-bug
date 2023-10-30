import { Component, OnInit } from '@angular/core';
import {
  IonSearchbar,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonMenu,
  IonMenuButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonSearchbar,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonMenu,
    IonMenuButton,
  ],
})
export class SearchPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
