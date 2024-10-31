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
    budget: 1800000,
    total_paid: 300000,
    priority: 'confirmed',
  },
  {
    id: 2,
    imagePath: 'assets/images/profile/user-1.jpg',
    uname: 'iPhone 13 pro max-Pacific Blue-128GB storage',
    budget: 1800000,
    total_paid: 2000000,
    priority: 'confirmed',
  }
];

@Component({
  selector: 'app-purchase-list',
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
  templateUrl: './purchase-list.component.html',
  styleUrl: './purchase-list.component.scss'
})
export class PurchaseListComponent {
  displayedColumns1: string[] = ['assigned', 'name', 'priority', 'budget'];
  dataSource1 = PRODUCT_DATA;


}
