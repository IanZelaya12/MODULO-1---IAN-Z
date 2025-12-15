import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';

import { ItemsRoutingModule } from './items-routing.module'; // 4. Submódulo de ruteo
import { ItemsComponent } from './items.component'; 
import { ItemDetailComponent } from './item-detail/item-detail.component'; // 2. Componente nuevo

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ItemsRoutingModule // Importar el ruteo
    ],
    declarations: [
        ItemsComponent, // 2. Componente nuevo (ItemsComponent)
        ItemDetailComponent // 2. Componente nuevo (ItemDetailComponent)
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ItemsModule { }
