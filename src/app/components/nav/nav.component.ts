import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Swiper } from 'swiper';
import { register } from 'swiper/element/bundle';

interface Icon {
  name: string;
  description: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NavComponent implements AfterViewInit {
  @ViewChild('swiperEx') swiperEx?: ElementRef<{ swiper: Swiper }>;
  swiper: Swiper;

  iconNames: Icon[] = [
    { name: 'home', description: 'Homes' },
    { name: 'details', description: 'Mechanics' },
    { name: 'business_center', description: 'Hospitals' },
    { name: 'medical_services', description: 'Medicals' },
    { name: 'h_mobiledata_badge', description: 'Hotels' },
  ];

  ngAfterViewInit() {
    register();
  }

  navigation = {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  };

  currentIndex() {
    this.swiper.activeIndex;
  }

  onSlideNext() {
    this.swiperEx?.nativeElement.swiper.slideNext();
    console.log(this.currentIndex);
  }

  onSlidePrev() {
    this.swiperEx?.nativeElement.swiper.slidePrev();
    console.log(this.currentIndex);
  }

  scroll(direction: string): void {
    const scrollContainer = document.querySelector('.scroll-container');
    if (scrollContainer) {
      const scrollAmount = 200; // You can adjust this value based on your requirements
      if (direction === 'left') {
        scrollContainer.scrollLeft -= scrollAmount;
      } else {
        scrollContainer.scrollLeft += scrollAmount;
      }
    }
  }
}
