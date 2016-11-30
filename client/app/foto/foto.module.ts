import { FiltroPorTituloPipe } from './foto.pipes';
import { NgModule } from '@angular/core';
import { FotoComponent } from './foto.component';

@NgModule({
  declarations: [ FotoComponent, FiltroPorTituloPipe],
  exports: [FotoComponent, FiltroPorTituloPipe]
})
export class FotoModule { }