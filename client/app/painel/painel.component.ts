
import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'painel',
    templateUrl: 'painel.component.html'
})
export class PainelComponent implements OnInit {

    @Input() titulo: string;

    constructor() { }

    ngOnInit() { 


    }
}