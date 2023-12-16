import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-detail-date',
  templateUrl: './detail-date.component.html',
  styleUrls: ['./detail-date.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class DetailDateComponent implements OnInit {
  highlightedDays: { date: Date }[];
  nextDay: string;
  constructor() {
    // Initialize nextDay with the date of the next day
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);

    // Format the date as a string in the "YYYY-MM-DD" format
    this.nextDay = currentDate.toISOString().slice(0, 10);
  }

  ngOnInit() {}
}
