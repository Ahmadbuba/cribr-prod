import { IonicModule } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { DetailImageCarouselComponent } from './detail-image-carousel/detail-image-carousel.component';
import { DetailImageGridComponent } from './detail-image-grid/detail-image-grid.page';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PropertyImage } from 'src/app/shared/models/propertyImage.model';

@Component({
  selector: 'app-detail-image',
  templateUrl: './detail-image.component.html',
  styleUrls: ['./detail-image.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    DetailImageCarouselComponent,
    DetailImageGridComponent,
  ],
})
export class DetailImageComponent implements OnInit {
  @Input() images: PropertyImage[];
  imageThumbnails: string[];

  constructor() {}

  ngOnInit() {
    this.imageThumbnails = this.images.map((image) => image.thumbnail);
  }
}
