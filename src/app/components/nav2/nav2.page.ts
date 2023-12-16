import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Swiper } from 'swiper';
import { register } from 'swiper/element/bundle';

interface Icon {
  name: string;
  description: string;
}

@Component({
  selector: 'app-nav2',
  templateUrl: './nav2.page.html',
  styleUrls: ['./nav2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Nav2Page implements OnInit, AfterViewInit {
  @ViewChild('swiperEx') swiperEx?: ElementRef<{ swiper: Swiper }>;
  swiper: Swiper;

  iconNames: Icon[] = [
    { name: 'home', description: 'Homes' },
    { name: 'details', description: 'Mechanics' },
    { name: 'business_center', description: 'Hospitals' },
    { name: 'medical_services', description: 'Medicals' },
    { name: 'h_mobiledata_badge', description: 'Hotels' },
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

  constructor() {}

  ngOnInit() {}
}
