//# 1... What is Angular?
//• Angular is a Javascript Framework which allows us to create reactive Single-Page-Applications (SPAs).

//»  Note:  JavaScript is much faster than reaching out to the server for every page change or for every peace of data we want to display.

//# 2... Understanding versioning of Angular.
//• [AngularJS] or [Angular 1] : Angulat team found out that it wasn't future proof because of some fundamental flaws.
//• [Angular 2] : The result of re-writting "AngularJS" and was released in 2016.
//• [Angular 3] : This version was skipped because of internal reasons.
//• [Angular 10, 11, 12 ...etc].

//»  Note:  All these versions are the same framework, the only difference is between "Angular JS" and Angular 2.

//# 3... The Angular team releases a new major version every six-months.

//»  Note:  We 1st need "Node.js" to be installed on our system so it brings up the "npm" tool with it.

//# 4... To install the Angular CLI [The official Angular command line interface] globally on our machine use command:
//• 'npm install -g @angular/cli@latest'
//»  Note:  We create Angular projects using the official Angular CLI because:
//» 1. there are a couple of files that needs to be converted before they can run in the browser.
//» 2. the Angular CLI heavily optimize our code.

//# 5... To create an Angular project we use command:
//• 'ng new [project-name]' ==> strict mode enabled.
//• 'ng new [project-name] --no-strict' ==> strict mode disabled.

//# 6... To run our created Angular project and bring up a development server we use command:
//• 'ng serve'
//• 'ng serve --open' : '--open' option automatically opens your browser to http://localhost:4200/
//• 'ng serve -o' : '-o' option automatically opens your browser to http://localhost:4200/

//# 7... Angular uses Typescript which is a super set of javascript:
//• 'Typescript' : a language that looks a bit like JavaScript and is compiled down to JavaScript in the end.

//# 8... In the 'package.json' file we have:
//• "dependencies" : all the 3rd party libraries the project needs to run correctly.
//• "devDependencies" : all the 3rd party libraries required for development and for the build work-flow.

//# 9... What is TypeScript?
//• 1. TypeScript is a super set of JavaScript.
//• 2. offers more features than JavaScript like [classes , interfaces, strong typing]
//• 3. checks for 'strong typing' at the time of writting code not just at the time we run it.
//• 4. Typescript does not run in the browser, so it's complied into vanilla JavaScript. (handled by the CLI)

//# 10... In order to install the bootstrap framewok into our project:
//• 1. use command : 'npm install --save bootstrap@3'. (This will add the bootstrap framework locally into our project)
//• 2. we then should add the bootstrap url ("node_modules/bootstrap/dist/css/bootstrap.min.css")
//•    in the 'styles' section in the 'angular.json' file in order to make angular aware of it.
//»  Note:   please refere to the "project-template" project in the same directory.
