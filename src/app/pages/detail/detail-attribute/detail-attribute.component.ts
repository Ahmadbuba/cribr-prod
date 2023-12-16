import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-detail-attribute',
  templateUrl: './detail-attribute.component.html',
  styleUrls: ['./detail-attribute.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class DetailAttributeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
