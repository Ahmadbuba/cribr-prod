import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
})
export class SearchComponent {
  @Output() show = new EventEmitter<boolean>();

  onHideSearch() {
    this.show.emit(true);
  }
}
