import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Khushi", "Bhanushali", "khushi@gmail.com", 50000),
    new SalesPerson("Nisha", "Soni", "nisha@gmail.com", 60000),
    new SalesPerson("Khushali", "Bhanushali", "khushali@gmail.com", 80000),
    new SalesPerson("Dhara", "Sukhadiya", "dhara@gmail.com", 40000)
  ]
}
