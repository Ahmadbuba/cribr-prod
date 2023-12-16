import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OffCampusPage } from '../pages/off-campus/off-campus.page';
import { PropertiesPage } from '../pages/properties/properties.page';
import { AuctionsPage } from '../pages/auctions/auctions.page';
import { HeaderComponent } from '../components/header/header.component';
import { NavComponent } from '../components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { FooterPage } from '../components/footer/footer.page';
import { HomeService } from '../services/home.service';
import { LocationService } from '../services/location.service';
import { ScrollVanishDirective } from '../directives/scroll-vanish.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    OffCampusPage,
    PropertiesPage,
    AuctionsPage,
    HeaderComponent,
    NavComponent,
    FooterPage,
    ScrollVanishDirective,
    RouterModule,
  ],
})
export class HomePage implements OnInit {
  // @Output() showModal = new EventEmitter<boolean>();
  isModalOpen: boolean;

  constructor(
    private homeService: HomeService,
    private locationService: LocationService
  ) {}

  ngOnInit() {
    this.homeService.isModalOpen$.subscribe(
      (value) => (this.isModalOpen = value)
    );
  }

  openModal() {
    this.homeService.openModal();
    console.log(this.isModalOpen);
  }

  closeModal() {
    this.homeService.closeModal();
    console.log(this.isModalOpen);
  }

  handleChange(e) {
    console.log('ionChange fired with value: ' + e.detail.value);
  }

  handleCancel() {
    console.log('ionCancel fired');
  }

  handleDismiss() {
    console.log('ionDismiss fired');
  }

  readLiveLocation() {
    this.locationService.getCurrentLocation();
  }
}
