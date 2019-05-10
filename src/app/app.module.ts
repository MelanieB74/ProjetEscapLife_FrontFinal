import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';

import { ClientListComponent } from './components/client-list/client-list.component';
import { EditNewClientComponent } from './components/edit-new-client/edit-new-client.component';
import { ClientSummaryComponent } from './components/client-summary/client-summary.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { EditNewReservationComponent } from './components/edit-new-reservation/edit-new-reservation.component';
import { ReservationListComponent } from './components/reservation-list/reservation-list.component';
import { ReservationDetailsComponent } from './components/reservation-details/reservation-details.component';
import { ReservationSummaryComponent } from './components/reservation-summary/reservation-summary.component';
import { EmployeListComponent } from './components/employe-list/employe-list.component';
import { EmployeSummaryComponent } from './components/employe-summary/employe-summary.component';
import { EditNewEmployeComponent } from './components/edit-new-employe/edit-new-employe.component';
import { EmployeDetailComponent } from './components/employe-detail/employe-detail.component';
import { ActiviteListComponent } from './components/activite-list/activite-list.component';
import { EscapeGameListComponent } from './components/escape-game-list/escape-game-list.component';
import { EscapeGameSummaryComponent } from './components/escape-game-summary/escape-game-summary.component';
import { EscapeGameNewEditComponent } from './components/escape-game-new-edit/escape-game-new-edit.component';
import { EscapeGameDetailComponent } from './components/escape-game-detail/escape-game-detail.component';
import { LaserGameListComponent } from './components/laser-game-list/laser-game-list.component';
import { LaserGameSummaryComponent } from './components/laser-game-summary/laser-game-summary.component';
import { LaserGameEditNewComponent } from './components/laser-game-edit-new/laser-game-edit-new.component';
import { LaserGameDetailComponent } from './components/laser-game-detail/laser-game-detail.component';
import { BowlingListComponent } from './components/bowling-list/bowling-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    EditNewClientComponent,
    ClientSummaryComponent,
    ClientDetailsComponent,
    ReservationListComponent,
    EditNewReservationComponent,
    ReservationSummaryComponent,
    ReservationDetailsComponent,
    EmployeListComponent,
    EmployeSummaryComponent,
    EditNewEmployeComponent,
    EmployeDetailComponent,
    ActiviteListComponent,
    EscapeGameListComponent,
    EscapeGameSummaryComponent,
    EscapeGameNewEditComponent,
    EscapeGameDetailComponent,
    LaserGameListComponent,
    LaserGameSummaryComponent,
    LaserGameEditNewComponent,
    LaserGameDetailComponent,
    BowlingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'editnewclient', component: EditNewClientComponent },
      { path: 'client', component: ClientListComponent },
      { path: 'editnewclient/:client_id', component: EditNewClientComponent },
      { path: 'client/:client_id', component: ClientDetailsComponent },
      { path: '', redirectTo: '/client', pathMatch: 'full'  },
      { path: 'editnewreservation', component: EditNewReservationComponent },
      { path: 'reservation', component: ReservationListComponent },
      { path: 'editnewreservation/:reservation_id', component: EditNewReservationComponent },
      { path: 'reservation/:reservation_id', component: ReservationDetailsComponent },
      { path: '', redirectTo: '/reservation', pathMatch: 'full'  },

      { path: 'editNewEmploye', component: EditNewEmployeComponent },
      { path: 'employe', component: EmployeListComponent },
      { path: 'editNewEmploye/:employe_id', component: EditNewEmployeComponent },
      { path: 'employe/:employe_id', component: EmployeDetailComponent },
      { path: '', redirectTo: '/employe', pathMatch: 'full'  },

      { path: 'activite', component: EscapeGameListComponent },
      { path: 'editNewActivite', component: EscapeGameNewEditComponent },
      { path: 'editNewActivite/:activite_id', component: EscapeGameNewEditComponent },
      { path: 'activite/:activite_id', component: EscapeGameDetailComponent },
      { path: '', redirectTo: '/activite', pathMatch: 'full'  },

      { path: 'laserGame', component: LaserGameListComponent },
      { path: 'editNewLaserGame', component: LaserGameEditNewComponent },
      { path: 'editNewLaserGame/:activite_id', component: LaserGameEditNewComponent },
      { path: 'laserGame/:activite_id', component: LaserGameDetailComponent },
      { path: '', redirectTo: '/laserGame', pathMatch: 'full'  },
    ])
  ],

  providers: [],
  bootstrap: [AppComponent]
 })

export class AppModule { }
