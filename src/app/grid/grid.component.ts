import { Component, OnInit } from '@angular/core';
import { DataStateChangeEvent, GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { orderBy, SortDescriptor, State } from '@progress/kendo-data-query';
import { USER } from '../shared/userClass';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  usersData:USER[];
  public gridView: GridDataResult;
  public pageSize = 8;
  public skip = 0;

  public sort: SortDescriptor[] = [
    {
      field: "id",
      dir: "asc",
    },
  ];

  constructor(private userService:UsersService) { 
    this.userService.getUsers().subscribe(data =>{
      this.usersData = data;
    });
  
   
  }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(){
    this.gridView = {
      data: orderBy(this.usersData.slice(this.skip, this.skip + this.pageSize), this.sort),
      total: this.usersData.length,
    };
  }

  pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadItems();
  }



  sortChange(sort: SortDescriptor[]): void {
    console.log(sort);
    this.sort = sort;
    this.loadItems();
  }

}
