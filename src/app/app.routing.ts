import {Routes, RouterModule} from '@angular/router';

import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';

const APP_ROUTES: Routes = [
	{path: 'home', component: HomeComponent},
	{path: 'todos', component: TodosComponent},
	{path: 'user', component: UserComponent}
	
	
];

export const routing = RouterModule.forRoot(APP_ROUTES);