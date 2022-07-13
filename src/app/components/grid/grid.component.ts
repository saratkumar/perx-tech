import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { MatTableDataSource } from '@angular/material/table';
import { RepositoryService } from 'src/app/services/respository.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { GRID_HEADER } from 'src/app/models/grid.interface';
import { GRIDHEADER } from 'src/app/shared/constants/grid.constants';
export interface Owner{
  id: string;
  name: string;
  type: Date;
  created_at: string;
}
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, AfterViewInit  {
  MAT_TABLE_HEADERS: GRID_HEADER[] = GRIDHEADER;
  displayedColumns = GRIDHEADER.map(el => el.source);
  dataSource = new MatTableDataSource<Owner>();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private repoService: RepositoryService) { }
  ngOnInit() {
    this.getAllOwners();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  public getAllOwners = () => {
    this.repoService.getData()
    .subscribe((res:any) => {
      const temp: Owner[] = [];
      res.data.forEach((el: any) => {
        const obj = {
          id: el.id,
          name: el.attributes.content,
          type: el.type,
          created_at: el.attributes.created_at
        };

        temp.push(obj);
      })
      this.dataSource.data = temp as Owner[];
    })
  }
  public doFilter = (target: any) => {
    this.dataSource.filter = target.value.trim().toLocaleLowerCase();
  }
}
