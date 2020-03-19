import {Component, ViewChild} from '@angular/core';
import {LayoutableComponentMessageProvider} from './layoutable.component';
import {TableDataComponent, TableDataComponentDatasourceItem} from './table/table-data.component';
import {TableInputComponent} from './table/table-input.component';


class AppComponentMessageProvider extends LayoutableComponentMessageProvider {
  getMessage(): string {
    return 'Hi';
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test';

  messageProvider = new AppComponentMessageProvider();

  @ViewChild(TableDataComponent, {static: true}) tableDataComponent: TableDataComponent;
  @ViewChild(TableInputComponent, {static: true}) tableInputComponent: TableInputComponent;

  data: TableDataComponentDatasourceItem[] = [
    {
      label: 'Maya',
      value: 'maya'
    },
    {
      label: 'Edgar',
      value: 'edgar'
    },
  ];

  onNext() {
    console.log(this.tableInputComponent.value);
    console.log(this.tableDataComponent.value);
  }

}

