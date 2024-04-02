import { Routes } from '@angular/router';
import { ListKittenComponent } from './list-kitten/list-kitten.component';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';

export const routes: Routes = [{
    path:'',
    component: ListKittenComponent
},
{path:'create-kitten',
component: CreateKittenComponent},
{path:'list-kitten',
component: ListKittenComponent}];
