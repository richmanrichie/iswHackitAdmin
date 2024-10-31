import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from 'src/app/material.module';


export interface productsData {
  id: number;
  imagePath: string;
  uname: string;
  budget: number;
  priority: string;
  total_paid: number
}

const PRODUCT_DATA: productsData[] = [
  {
    id: 1,
    imagePath: 'assets/images/profile/user-1.jpg',
    uname: 'iPhone 13 pro max-Pacific Blue-128GB storage',
    budget: 35,
    total_paid: 300000,
    priority: 'in stock',
  },
  {
    id: 2,
    imagePath: 'assets/images/profile/user-1.jpg',
    uname: 'iPhone 13 pro max-Pacific Blue-128GB storage',
    budget: 11,
    total_paid: 2000000,
    priority: 'low',
  },
  {
    id: 2,
    imagePath: 'assets/images/profile/user-1.jpg',
    uname: 'iPhone 13 pro max-Pacific Blue-128GB storage',
    budget: 0,
    total_paid: 2000000,
    priority: 'out of stock',
  }
];

@Component({
  selector: 'app-inventory-list',
  standalone: true,
  imports: [
    MatTableModule,
    CommonModule,
    MatCardModule,
    MaterialModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
  ],
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.scss',
})
export class InventoryListComponent {

  displayedColumns1: string[] = ['assigned', 'name', 'priority', 'budget'];
  dataSource1 = PRODUCT_DATA;


}
