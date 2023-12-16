import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-detail-body',
  templateUrl: './detail-body.page.html',
  styleUrls: ['./detail-body.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DetailBodyPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
