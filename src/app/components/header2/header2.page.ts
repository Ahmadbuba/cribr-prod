import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.page.html',
  styleUrls: ['./header2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class Header2Page implements OnInit {
  show = true;

  hide() {
    this.show = !this.show;
  }

  constructor() {}

  ngOnInit() {}
}
