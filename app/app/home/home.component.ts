import { isAndroid } from '@nativescript/core'; // Importación necesaria
// ...

export class HomeComponent implements OnInit {
    // ...
    plataformaActiva: string;
    
    ngOnInit(): void {
        this.search();
        
        // 10. Código que asigna un valor a una variable, cuando se está en Android solamente
        if (isAndroid) {
            this.plataformaActiva = "Estamos en Android!";
            console.log(this.plataformaActiva);
        } else {
            this.plataformaActiva = "No estamos en Android (es iOS o web)";
        }
        
        // ... otras inicializaciones
    }
}
