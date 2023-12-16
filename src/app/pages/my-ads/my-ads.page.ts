import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Header2Page } from 'src/app/components/header2/header2.page';
import { OffCampusService } from 'src/app/services/off-campus.service';
import { Property } from 'src/app/shared/models/property.model';
import { FooterNavPage } from 'src/app/components/footer-nav/footer-nav.page';
import { ScrollVanishDirective } from 'src/app/directives/scroll-vanish.directive';

@Component({
  selector: 'app-my-ads',
  templateUrl: './my-ads.page.html',
  styleUrls: ['./my-ads.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Header2Page,
    ScrollVanishDirective,
    FooterNavPage,
  ],
})
export class MyAdsPage implements OnInit {
  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];

  @ViewChild('popover') popover;

  isOpen = false;
  isAlertOpen = false;

  presentPopover(e: Event, set: boolean) {
    this.popover.event = e;
    this.isOpen = set;
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  setResult(ev) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }
  allProperties: Property[];

  constructor(private offCampusService: OffCampusService) {}

  ngOnInit() {
    this.offCampusService.getAllProperties().subscribe((res) => {
      this.allProperties = res.results.slice();
      console.log(this.allProperties);
    });
  }
}
