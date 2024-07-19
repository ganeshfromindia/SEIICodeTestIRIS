import { Component, OnInit } from '@angular/core';
import { SubdivisionService } from '../service/subdivision.service';
import { ColDef } from 'ag-grid-community';


@Component({
  selector: 'app-subdivision-data-display',
  templateUrl: './subdivision-data-display.component.html',
  styleUrls: ['./subdivision-data-display.component.css']
})
export class SubdivisionDataDisplayComponent implements OnInit {
  
  public rowData: any[] = []
  public colDefs: ColDef[] = [];
  public pagination: boolean = true;
  public paginationPageSize: number = 500;
  public paginationPageSizeSelector: any[] = [200, 500, 1000];


  constructor(private subdivisionService: SubdivisionService) { }

  ngOnInit(): void {
    this.setSubdivisionData()
    this.colDefs = [
      { field: "name", flex: 1, sortable: true }, //This column will be twice as wide as the others
      { field: "marketName", flex: 1, sortable: false },
      { field: "subdivisionStatusCode", flex:1, filter: true, sortable: false },
      { field: "county", flex: 1, sortable: false },
      { field: "nearMapImageDate", flex: 1,sortable: true }
  ];
  }

  setSubdivisionData() {
    this.subdivisionService.getSubdivisions().subscribe({
      next: (data: any) => this.rowData = data.subdivisions,
      error: (e: any) => alert(e),
      complete: () => console.info('complete') 
  })
  }

}
