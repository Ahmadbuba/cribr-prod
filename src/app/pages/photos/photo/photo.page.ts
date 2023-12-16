import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Swiper } from 'swiper/types';
import { register } from 'swiper/element/bundle';
import { PropertiesService } from 'src/app/services/properties.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.page.html',
  styleUrls: ['./photo.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PhotoPage implements OnInit {
  @ViewChild('swiperEx') swiperEx?: ElementRef<{ swiper: Swiper }>;
  swiper: Swiper;

  imageSources: string[];
  @Input() total: number;

  constructor(private propertyService: PropertiesService) {}

  ngOnInit() {
    this.propertyService.getAllProperties().subscribe((res) => {
      this.imageSources = res.results[0].images.map((image) => image.thumbnail);
    });
  }

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
