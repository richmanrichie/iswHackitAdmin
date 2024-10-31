import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from 'src/app/material.module';
import { OrganisationAddComponent } from '../organisation-add/organisation-add.component';

export interface organisationsData {
  id: number;
  name: string;
  staff_number: string;
  status: string;
  location: string;
  email: string;
  logo: string;
}

const PRODUCT_DATA: organisationsData[] = [
  {
    id: 1,
    name: "Interswitch",
    staff_number: "500",
    status: 'active',
    location: "Lagos, Nigeria",
    email: "contact@interswitch.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Interswitch_logo.svg",
  },
  {
    id: 2,
    name: "UBA",
    staff_number: "1500",
    status: 'inactive',
    location: "Lagos, Nigeria",
    email: "info@ubagroup.com",
    logo: "https://www.ubagroup.com/wp-content/uploads/2018/09/UBA-logo-5.gif",

  },
  {
    id: 3,
    name: "GTB",
    staff_number: "1200",
    status: 'suspended',
    location: "Lagos, Nigeria",
    email: "support@gtbank.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/GTBank_logo.svg/1200px-GTBank_logo.svg.png",
  }
];

@Component({
  selector: 'app-organisation-list',
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
  templateUrl: './organisation-list.component.html'
})
export class OrganisationListComponent {
  // table 1
  readonly dialog = inject(MatDialog);
  
  displayedColumns1: string[] = ['logo', 'status', 'staff_number', 'more'];
  dataSource1 = PRODUCT_DATA;


  openDialog(): void {
    const dialogRef = this.dialog.open(OrganisationAddComponent, {
      width: '70%px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.data) {
        // this.getData();
      } else {
        // console.error('Dialog error:', result?.message); // Handle error
      }
    })
  }
}
