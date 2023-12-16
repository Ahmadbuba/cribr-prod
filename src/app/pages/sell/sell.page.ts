import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';

interface Image {
  file: File;
  url: string;
}

@Component({
  selector: 'app-sell',
  templateUrl: './sell.page.html',
  styleUrls: ['./sell.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
})
export class SellPage implements OnInit {
  selectedImages: Image[] = [];
  sellForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.sellForm = this.fb.group({
      university: ['', Validators.required],
      title: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      rooms_available: ['', Validators.required],
      bedroom_size_sqm: ['', Validators.required],
      ad_tier: ['', Validators.required],
      uploaded_images: this.fb.array([this.initPhotosFields()]),
      tags: this.fb.array([this.initTagsFields()]),
    });
  }

  initTagsFields() {
    return this.fb.group({ name: ['', Validators.required] });
  }

  getTagsControls(): FormArray {
    return this.sellForm.get('tags') as FormArray;
  }

  initPhotosFields() {
    return this.fb.group({ photo: [''] });
  }

  getPhotoControls(): FormArray {
    return this.sellForm.get('uploaded_images') as FormArray;
  }

  addNewTagField(): void {
    const control = this.sellForm.get('tags') as FormArray;
    control.push(this.initTagsFields());
  }

  addNewPhotoField(): void {
    const control = this.sellForm.get('uploaded_images') as FormArray;
    control.push(this.initPhotosFields());
  }
  async onImageChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement?.files) {
      for (let i = 0; i < inputElement.files.length; i++) {
        const file = inputElement.files[i];
        const url = await this.convertToBase64(file).then((url: string) => {
          this.selectedImages.push({ file, url });
        });
      }
    }
    console.log('The length of images: ' + this.selectedImages.length);
  }

  convertToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result);
          console.log('Here it is:' + reader.result);
        } else {
          reject('Error reading file.');
        }
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  removeImage(index: number): void {
    if (index >= 0 && index < this.selectedImages.length) {
      this.selectedImages.splice(index, 1); // Remove the image at the specified index
    }
    console.log(this.selectedImages.length);
  }
}
