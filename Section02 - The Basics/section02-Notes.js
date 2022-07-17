//# 1... The Angular CLI created a root component for our application for us.
//• '<app-root></app-root>' : the component which tie together our whole application.
//• All below files which has 'component' in their name are related to this component:
//• "app.component.css"
//• "app.component.html"
//• "app.component.spec.ts"
//• "app.component.ts"

//# 2... inside the 'app.component.ts' we have "@Component" decorator in which we have the "selector" property.
//• selector: 'app-root' ==> A CSS selector that defines how the component is used in a template.
//• Angular then will replace '<app-root></app-root>' part with the template of this component.

//# 3... 'index.html' file:
//• The file which is served by the server.
//• This is the single page application file.

//# 4... 'ng serve' command process:
//• with every 'ng serve' process it will create bundles, JavaScript script bundles and automatically
//• add the right imports in the 'index.html' file.

//# 5... 'main.ts' file:
//• The first code to be executed.

//# 6... in 'app.module.ts' file:
//• we have the '@NgModule({})' decorator which has the 'bootstrap' property.
//• 'bootstrap' property tells Angular which components it should be aware of when the application starts.

//# 7... Components are key feature in Angular.
//• we build the whole application by composing it from a couple of components.
//• each component has its own [template 'HTML', styling 'CSS', business logic 'JS or TS'].
//• So it allows us to split up our complex application into small reusable parts.

//# 8... A component in Angular is just a Typescript class:
//• component is a Typescript class so Angular will be able to instantiate it into an object.

//# 9... How do we create our own component?
//✱  Example:  How we create our own component?
//✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤//
//~  file:  'server.component.ts'

//➜  Todo:  2. import the '{ Component }' decorator from '@angular/core'.
import { Component } from '@angular/core';

//➜  Todo:  3. use the '@Component' decorator.
@Component({
  selector: 'app-server', //The CSS selector. [Note: stay away from accidentally override a default HTML element]
  templateUrl: './server.component.html', //reference-point to our HTML template. [using relative path]
})

//➜  Todo:  1. export our Typescript class in order to be able to use it outside the file.
export class ServerComponent {}
//======================================================================================//
//~  file:  'app.module.ts'

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//➜  Todo:  4. import our new created component.
import { ServerComponent } from './server/server.component';

@NgModule({
  //➜  Todo:  5. Registering/adding our new (ServerComponent) inside the '@NgModule({})' decorator inside the declarations array.
  declarations: [AppComponent, ServerComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
//✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤✤//
//»  Note:  Now we can use the "<app-server></app-server>" selector inside 'app.component.html' file.

//# 10... How to generate our component using Angular CLI instead of creating it manually?
//»  Note:  we should leave the 'ng serve' terminal running we should not close it.
//• using command 'ng generate component [our component name]'
//• using command 'ng g c [our component name]'
//• This command will create a new folder named 'servers' inside our 'app' folder.
//• And will automatically be registered inside the 'app.module.ts' file.
//✱  Example:  'ng g c servers'

//# 11... Inside the "@Component({})" decorator we should have at least one of two option/property.
//• templateUrl: which will hold a relative path to our HTML template file.
//• template: which will hold our template as string between ['', "", ``].
//»  Note:  One of both properties has to be present.

//# 12... Inside the "@Component({})" decorator we could have either of two option/property.
//• styleUrls: which takes an array of realtive url reference strings.
//• styles: which takes an array of native CSS styles in form of string.

//# 13... 'selector' property inside the "@Component({})" decorator.
//• selector: takes a CSS selector in form of string.
//• we could use 'attribute' or 'class' selector like below.
//• selector: '.app-servers'
<div class='app-servers'></div>;
//• selector: '[app-servers]'
<div app-servers></div>;

//# 14... Databinding == Communication.
//• Databinding : Is the communication between our TypeScript Code (Business Logic) and HTML (Template).

//• a) OUTPUT DATA: outputting data from our TypeScript code into our template.
//• 1. String Interpolation. ( {{data}} )
//• 2. Property Binding. ( [property="data"] )

//• b) REACT TO USER EVENTS: running some TypeScript code as the user interacts with the template.
//• 1. Event Binding. ( (event)="expression" )

//• c) COMBINATION OF BOTH.
//• 1. Two-way binding. ( [(ngModule)]="data" )

//# 15... String Interpolation:
//• We use "{{ }}" to output some dynamic data from our TypeScript code into our template.
//• In the template between "{{ TypeScript data }}" we could write a TypeScript expressions.
//• we could use a ternary expression or call a method which retruns a string.
//»  Note:  TypeScript Expression means any expression which can be resolved to a string in the end.

//»  Note:  we could define dynamic data in our TypeScript code with giving this data type or not like below:
serverId: number = 10; //serverId = 10;
serverStatus: string = 'offline'; //serverStatus = 'offline';

//# 16... "constructor() { }":
//• Is a method which gets executed at the point of time the component is created by Angular.

//# 17... property binding:
//• We use ( [property]="TypeScript data" ) to dynamically bind a property of a HTML tag with a TypeScript data.

//# 18... we could exchange string interpolation with property binding.
//• using the ( [innerText]="TypeScript-data" ) attribute on a HTML element.

//# 19... Event Binding:
//• we use ( (event)="functionName()" ) in order to listen to user events.

//# 20... ($event):
//• Is a reserved variable name we can use in the template when we use event binding.

//# 21... Two-way binding:
//• In 2-way binding we combine "property" and "event" binding, by combining the "[]" and "()".
//• we use ( [(ngModel)]="TypeScript-data" ) to create 2-way binding.
//»  Note:  "ngModel" is a special directive used for 2-way binding.

//# 22... What are Directives?
//• Directives are instructions in the DOM!
//• when using our created custom component for example: <app-server></app-server> it's a directive.
//• we could have a directives with or without a template.
//✱  Example:  "appTurnGreen" a custom directive we could build which color the text to green.
<p appTurnGreen></p>;

//# 23... '*ngIf' directive (structural directive) :
//• we use ( *ngIf="condition" ) to conditionally output some data.
//• a star * is required because ngIf is a structural directive which means it changes the structure of the DOM.
//✱  Example:   *ngIf="serverCreated"

//# 24... using else with the '*ngIf' (structural directive) :
//• we could an else with the *ngIf like ( *ngIf="serverCreated; else noServer" )
//• This means that we will render the template marked with #noServer in case the condition was false.
//✱  Example:   *ngIf="serverCreated; else noServer"

//# 25... 'ngStyle' (attribute directive) :
//• we use 'ngStyle' attibute directive to add some styles dynamically.
//»  Note:  attribute directives don't add or remove elements. They only change the element they were placed on.
//✱  Example:   [ngStyle]="{ backgroundColor: getColor() }

//# 26... 'ngClass' (attribute directive) :
//• allows us to dynamically add or remove CSS classes.
//✱  Example:  [ngClass]="{ online: getServerStatus() === 'online' }

//# 27... '*ngFor' (structural directive) :
//• allows us to render list of elements.
//✱  Example:   *ngFor="let server of servers"

//»  Note:  we could getting the index when using '*ngFor' like this :
//✱  Example:  *ngFor="let logItem of log; let i = index"
