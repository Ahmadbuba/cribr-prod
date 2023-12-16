import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PropertyImage } from 'src/app/shared/models/propertyImage.model';

@Component({
  selector: 'app-detail-image-grid',
  templateUrl: './detail-image-grid.component.html',
  styleUrls: ['./detail-image-grid.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class DetailImageGridComponent implements OnInit {
  @Input() imageSources: string[];
  @Input() total: number;
  displayLength: number;
  subImages: string[];

  ngOnInit() {
    this.subImages = this.imageSources.slice(0, 4);
    console.log(this.subImages.length);
    console.log(this.imageSources.length);
  }
}
