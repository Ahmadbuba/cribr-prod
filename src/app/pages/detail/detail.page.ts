import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { DetailImageComponent } from './detail-image/detail-image.component';
import { DetailSummaryComponent } from './detail-summary/detail-summary.component';
import { RoomHighlightComponent } from './room-highlight/room-highlight.component';
import { DetailAttributeComponent } from './detail-attribute/detail-attribute.component';
import { DetailDateComponent } from './detail-date/detail-date.component';
import { DetailReviewComponent } from './detail-review/detail-review.component';
import { FooterNavPage } from 'src/app/components/footer-nav/footer-nav.page';
import { Property } from 'src/app/shared/models/property.model';
import { PropertiesService } from 'src/app/services/properties.service';
import { ScrollVanishDirective } from 'src/app/directives/scroll-vanish.directive';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HeaderComponent,
    DetailImageComponent,
    DetailSummaryComponent,
    RoomHighlightComponent,
    DetailAttributeComponent,
    DetailDateComponent,
    DetailReviewComponent,
    ScrollVanishDirective,
    FooterNavPage,
  ],
})
export class DetailPage implements OnInit {
  reviews = [1, 2, 3, 4, 5];
  highlightedDays: { date: Date }[];
  nextDay: string;
  allProperties: Property[];
  about =
    'The only troglodite house in Córdoba,the most exclusive in Andalusia. Stands inside the stone quarry. We reach it via the enchanting 3000 m2 circular garden that surrounds it. Keeping the same temperature during the whole year from 18º to 20 ºC';
  showFullAbout: boolean = false;

  constructor(private propertyService: PropertiesService) {
    // Initialize nextDay with the date of the next day
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);

    // Format the date as a string in the "YYYY-MM-DD" format
    this.nextDay = currentDate.toISOString().slice(0, 10);
  }

  ngOnInit() {
    this.propertyService.getAllProperties().subscribe((res) => {
      this.allProperties = res.results.slice();
      console.log(this.allProperties);
      console.log(this.allProperties[0].images);
    });
  }

  toggleShowFullAbout() {
    this.showFullAbout = !this.showFullAbout;
  }
}
