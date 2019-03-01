import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent} from './app.component'
import { SearchFormComponent} from './components/search-form/search-form.component'
// look into this, i tried importing the search form componenet and it didnt work, possibly because it belongs to another module and not this one? read up on this later

const routes: Routes = [

  { path: 'search', component: SearchFormComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
