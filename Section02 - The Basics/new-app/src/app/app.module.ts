import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//➜  Todo:  1. named import for { FormsModule } from '@angular/forms'.
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [AppComponent, ServerComponent, ServersComponent],
  //➜  Todo:  2. adding imported { FormsModule } in imports array in order to enable 2-way binding.
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
