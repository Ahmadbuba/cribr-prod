import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-footer-nav',
  templateUrl: './footer-nav.page.html',
  styleUrls: ['./footer-nav.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class FooterNavPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
