import { Component } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      .online {
        color: white;
      }
    `,
  ],
})
export class ServerComponent {
  //➜  Todo:  1. define dynamic data in our TypeScript code with giving this data a type.
  // serverId = 10;
  // serverStatus = 'offline';
  //➜  Todo:  2. define dynamic data in our TypeScript code without giving these data a type and TypeScript will
  //➜            infer it in the compilation time.
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
