import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular: Getting Started';
}


// one ngular module: AppModule 
//BrowserModule ->AppModule -> AppComponent 
// product-list component should also be declared in the AppModule 
// declare a component 

/*
AppComponent:->
@Component({
selector: 'pm-root'
template: `
<div><h1>{{pageTitl}}
</h1>
</div>
`
})



*/


/*
import { Component } from '@angular/core'

*/