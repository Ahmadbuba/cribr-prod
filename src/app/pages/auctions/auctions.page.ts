import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.page.html',
  styleUrls: ['./auctions.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AuctionsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
