import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  standalone: true,
  imports: [RouterModule],
})
export class NavigationComponent {
  @Output() show = new EventEmitter<boolean>();

  onHideNavigation() {
    this.show.emit(true);
  }
}
