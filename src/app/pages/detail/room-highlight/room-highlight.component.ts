import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-room-highlight',
  templateUrl: './room-highlight.component.html',
  styleUrls: ['./room-highlight.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class RoomHighlightComponent implements OnInit {
  reviews = [1, 2, 3, 4, 5];
  constructor() {}

  ngOnInit() {}
}
