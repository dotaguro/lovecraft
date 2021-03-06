import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LobbyComponent} from './lobby.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatOptionModule} from '@angular/material/core';

@NgModule({
  declarations: [LobbyComponent],
  exports: [LobbyComponent],
  imports: [
    CommonModule, MatSnackBarModule, MatListModule, MatButtonModule, MatIconModule, FormsModule, MatOptionModule
  ]
})
export class LobbyModule {
}
