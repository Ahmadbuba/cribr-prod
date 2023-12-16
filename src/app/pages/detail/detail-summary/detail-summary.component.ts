import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-detail-summary',
  templateUrl: './detail-summary.component.html',
  styleUrls: ['./detail-summary.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class DetailSummaryComponent implements OnInit {
  about =
    'The only troglodite house in Córdoba,the most exclusive in Andalusia. Stands inside the stone quarry. We reach it via the enchanting 3000 m2 circular garden that surrounds it. Keeping the same temperature during the whole year from 18º to 20 ºC';
  showFullAbout: boolean = false;

  toggleShowFullAbout() {
    this.showFullAbout = !this.showFullAbout;
  }
  constructor() {}

  ngOnInit() {}
}
