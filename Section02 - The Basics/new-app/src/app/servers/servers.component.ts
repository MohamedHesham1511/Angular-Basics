import { Component, OnInit } from '@angular/core';

@Component({
  //➜  Todo:  1. defining component using attribute selector.
  // selector: '[app-servers]',
  //➜  Todo:  2. defining component using class selector.
  // selector: '.app-servers',
  //➜  Todo:  3. defining component using tag selector.
  selector: 'app-servers',
  //➜  Todo:  4. adding template as a string instead of referencing to an external .html file using "template" property.
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  //➜  Todo:  5. referencing our component template to an external .html file using "templateUrl" property.
  templateUrl: './servers.component.html',
  //➜  Todo:  6. referencing our component CSS styles to an external .css file using "styleUrls" property.
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverCreated = false;
  servers = ['Test server 1', 'Test server 2'];

  //➜  Todo:  7. "constructor() { }" is a method which gets executed at the point of time this component is created by Angular.
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server was created! Name is : ${this.serverName}`;
  }

  //➜  Todo:  8. Adding the Business logic of the 'onUpdateServerName()' method which recieves (event) as an argument.
  // onUpdateServerName(event) {
  //   this.serverName = event.target.value;
  // }

  //➜  Todo:  8. Adding the Business logic of the 'onUpdateServerName()' method which recieves (event) as an argument.
  onUpdateServerName(event: Event) {
    //»  Note:  explicit casting to a HTML input element.
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
