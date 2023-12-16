import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchComponent } from './search/search.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.scss'],
  standalone: true,
  imports: [CommonModule, NavigationComponent, SearchComponent],
})
export class CenterComponent implements OnInit {
  showSearch = false;
  constructor() {}

  ngOnInit() {}

  onShowSearch() {
    this.showSearch = true;
  }

  onShowNavigation() {
    this.showSearch = false;
  }
}
