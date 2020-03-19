import {Component, Input} from '@angular/core';

export interface TableDataComponentDatasourceItem {
  label: string;
  value: string;
}

@Component({
  template: `
    <h1>Datasource</h1>
    <div *ngFor="let d of _filteredDatasource">
      {{d}}
    </div>
  `,
  selector: 'app-table-data'
})
export class TableDataComponent {
  private _datasource: TableDataComponentDatasourceItem[] = [];
  private _filter: string | undefined = undefined;

  get value(): TableDataComponentDatasourceItem {
    return this._filteredDatasource[0];
  }

  @Input() set datasource(v: TableDataComponentDatasourceItem[]) {
    this._datasource = v;
    this.reloadFilter();
  }

  @Input() set filter(v: string) {
    this._filter = v;
    this.reloadFilter();
  }

  private _filteredDatasource: TableDataComponentDatasourceItem[] = [];

  reloadFilter() {
    if (this._filter) {
      this._filteredDatasource = this._datasource.filter(data => data.label === this._filter);
    } else {
      this._filteredDatasource = this._datasource;
    }
  }

}
