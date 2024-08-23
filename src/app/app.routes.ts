import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { BasketComponent } from './basket/basket.component';

export const routes: Routes = [
    {path:"list", component:ListComponent},
    {path:"basket", component:BasketComponent}
];
