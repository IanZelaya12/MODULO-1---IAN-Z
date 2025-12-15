import { Component, OnInit } from '@angular/core';
import { MyGlobalService } from '../services/my-global.service'; // 6. Service global

@Component({
    selector: 'Items',
    template: `
        <GridLayout class="page">
            <StackLayout>
                <Label text="Listado de Ítems" class="h1"></Label>
                <Label [text]="'Valor Global: ' + globalService.getGlobalValue()" class="h2"></Label>
                
                <StackLayout *ngFor="let item of items" class="list-item">
                    <Label [text]="item.name" class="list-item-title"></Label>
                    <Label [text]="item.description" class="list-item-subtitle"></Label>
                </StackLayout>
            </StackLayout>
        </GridLayout>
    `
})
export class ItemsComponent implements OnInit {
    items = [
        { id: 1, name: 'Item Uno', description: 'Descripción 1' },
        { id: 2, name: 'Item Dos', description: 'Descripción 2' },
        { id: 3, name: 'Item Tres', description: 'Descripción 3' }
    ];

    constructor(public globalService: MyGlobalService) { }

    ngOnInit(): void { }
}
