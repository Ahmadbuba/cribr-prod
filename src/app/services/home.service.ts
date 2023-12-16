import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  isModalOpen$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {}

  openModal(): void {
    this.isModalOpen$.next(true);
  }

  closeModal(): void {
    this.isModalOpen$.next(false);
  }
}
