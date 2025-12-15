import { Component } from '@angular/core';

@Component({
    selector: 'ItemDetail',
    template: `
        <GridLayout class="page">
            <Label text="Detalle del Ítem (Ejemplo de ruteo)" class="h1"></Label>
        </GridLayout>
    `
})
export class ItemDetailComponent {
    constructor() { }
}
