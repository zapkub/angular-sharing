import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, UrlSegment} from '@angular/router';
import {TabbarContainerComponent} from './tabbar-container.component';
import {MatTabsModule} from '@angular/material/tabs';
import {GeneralLedgerListComponent} from './general-ledger-list.component';
import {GeneralLedgerDetailComponent} from './general-ledger-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TabbarContainerComponent,
    GeneralLedgerDetailComponent,
    GeneralLedgerListComponent,
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        matcher: (url) => {
          if (url.length > 1 && url[1].path.match(/^(general-ledger)/)) {
            return {
              consumed: [url[0], url[1]],
              posParams: {
                tab: url[1],
              },
            };
          } else if (url.length === 2 && url[1].path.match(/^(rc-code|service-branch)/)) {
            return {
              consumed: url,
              posParams: {
                tab: url[1],
              }
            };
          }
          return null;
        },
        component: TabbarContainerComponent,
        children: [
          {
            component: GeneralLedgerDetailComponent,
            path: 'detail',
          },
          {
            component: GeneralLedgerListComponent,
            path: '',
          },
        ],
      },

      {
        path: '**',
        redirectTo: 'data-management/general-ledger'
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
