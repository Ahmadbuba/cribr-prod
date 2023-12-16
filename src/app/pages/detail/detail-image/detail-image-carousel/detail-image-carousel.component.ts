import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { register } from 'swiper/element/bundle';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Swiper } from 'swiper';
import { PropertyImage } from 'src/app/shared/models/propertyImage.model';

@Component({
  selector: 'app-detail-image-carousel',
  templateUrl: './detail-image-carousel.component.html',
  styleUrls: ['./detail-image-carousel.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DetailImageCarouselComponent implements AfterViewInit {
  @ViewChild('swiperEx') swiperEx?: ElementRef<{ swiper: Swiper }>;
  swiper: Swiper;

  @Input() imageSources: string[];
  @Input() total: number;

  ngAfterViewInit() {
    register();
    console.log(this.imageSources.length);
  }

  slidePerView = 1;
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
}
