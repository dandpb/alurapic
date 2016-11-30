import { FotoComponent } from './foto.component';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filtroPorTitulo'
})

export class FiltroPorTituloPipe implements PipeTransform {
    transform(fotos: FotoComponent[], digitado: string): any {
        if( digitado != null) {
            digitado = digitado.toLowerCase();
            fotos = fotos.filter( fotos => fotos.titulo.toLowerCase().includes(digitado));
        }
        return fotos;
    }
}