import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root' // Inyección de dependencia global
})
export class MyGlobalService {
    private globalValue: string = "Inicializado Globalmente";

    constructor() { }

    setGlobalValue(value: string) {
        this.globalValue = value;
    }

    getGlobalValue(): string {
        return this.globalValue;
    }
}
