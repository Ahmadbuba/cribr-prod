import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CenterComponent } from './center/center.component';
import { NavigationComponent } from './center/navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, CenterComponent, NavigationComponent],
})
export class HeaderComponent implements OnInit {
  showSearch = false;

  constructor(private homeService: HomeService) {}

  ngOnInit() {}

  onShowSearch() {
    this.showSearch = true;
  }

  onShowNavigation() {
    this.showSearch = false;
  }

  openFilterModal() {
    this.homeService.openModal();
    console.log(
      this.homeService.isModalOpen$.subscribe((value) => console.log(value))
    );
  }
}
