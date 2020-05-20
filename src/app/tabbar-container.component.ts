import {Component} from '@angular/core';
import {MatTabChangeEvent} from '@angular/material/tabs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  template: `
    <mat-tab-group
      (selectedTabChange)="onTabChange($event)"
      [selectedIndex]="selectedIndexTab"
      [animationDuration]="'0ms'"
    >
      <mat-tab [label]="'General Ledger'">
        <router-outlet></router-outlet>
      </mat-tab>
      <mat-tab [label]="'Service Branch'">
        Service Branch Screen Component
      </mat-tab>
      <mat-tab [label]="'RC Code'">
        RC Code Screen Component
      </mat-tab>
    </mat-tab-group>
  `,
})
export class TabbarContainerComponent {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    console.log('tab name is = ' + this.activatedRoute.snapshot.params.tab);
  }

  public get selectedIndexTab() {
    return this.matRouteIndex.findIndex(tabName => tabName ===  this.activatedRoute.snapshot.params.tab);
  }
  private matRouteIndex = [
    'general-ledger',
    'service-branch',
    'rc-code',
  ];

  public onTabChange(event: MatTabChangeEvent) {
    this.router.navigate(['..', this.matRouteIndex[event.index]], {
      relativeTo: this.activatedRoute,
    });
  }
}
