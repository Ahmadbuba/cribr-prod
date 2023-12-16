import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PropertiesService } from 'src/app/services/properties.service';
import { PropertyImage } from 'src/app/shared/models/propertyImage.model';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.page.html',
  styleUrls: ['./photos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class PhotosPage implements OnInit {
  photos: PropertyImage[];
  constructor(private propertyService: PropertiesService) {}

  ngOnInit() {
    this.propertyService.getAllProperties().subscribe((res) => {
      console.log(res);
      this.photos = [...res.results[0].images];
    });
  }
}
