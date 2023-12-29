import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CarDetailComponent } from './cars/car-detail/car-detail.component';
import { CarItemComponent } from './cars/car-list/car-item/car-item.component';
import { CarListComponent } from './cars/car-list/car-list.component';
import { CarsComponent } from './cars/cars.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CarDetailComponent, CarItemComponent, CarListComponent, CarsComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GregsList';
}
