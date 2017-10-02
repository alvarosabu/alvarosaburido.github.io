import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: '<%= name %>',
    templateUrl: '<%= name %>.component.html',
    styleUrls: [
        './<%= name %>.component.scss'
    ]
})
export class <%= capitalname %>Component implements OnInit {
    public navBar: any = {
        brand: {
            name: 'TOKOPINI'
        },
        back: () => {
            /* this._location.back(); */
        }
    };
    constructor() { }

    public ngOnInit() { }
}
