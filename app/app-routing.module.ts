// app/app-routing.module.ts (Fragmento)
const routes: Routes = [
    // ... rutas preexistentes (ej. /home) ...
    {
        path: 'items',
        loadChildren: () => import('~/app/items/items.module').then(m => m.ItemsModule)
    },
    // ...
];
