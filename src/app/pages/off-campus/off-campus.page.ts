import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomeWrapperPage } from 'src/app/shared/UI/home-wrapper/home-wrapper.page';
import { OffCampusService } from 'src/app/services/off-campus.service';
import { Property } from 'src/app/shared/models/property.model';
import { CardPage } from 'src/app/shared/UI/card/card.page';
import { CarouselPage } from 'src/app/shared/UI/carousel/carousel.page';
import { FooterNavPage } from 'src/app/components/footer-nav/footer-nav.page';

@Component({
  selector: 'app-off-campus',
  templateUrl: './off-campus.page.html',
  styleUrls: ['./off-campus.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CardPage,
    CarouselPage,
    FooterNavPage,
  ],
})
export class OffCampusPage implements OnInit {
  isModalOpen = true;
  defaultPage = 1;

  allProperties: Property[];

  constructor(private offCampusService: OffCampusService) {}

  ngOnInit() {
    this.offCampusService.getAllProperties().subscribe((res) => {
      this.allProperties = res.results.slice();
      console.log(this.allProperties);
    });
  }

  setOpen(value: boolean) {
    this.isModalOpen = value;
  }
}
