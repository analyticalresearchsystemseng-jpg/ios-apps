import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>
          TestApp
        </ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content class="ion-padding">
      <h1>Welcome to TestApp</h1>
      <p>This is a scaffolded Ionic app built with OpenClaw.</p>
    </ion-content>
  `,
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage {
  constructor() {}
}
