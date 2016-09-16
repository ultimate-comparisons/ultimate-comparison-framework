import { Type } from '@angular/core';

import { Select2Component } from './components/select2.component';
import { SelectComponent } from './components/select.component';
import { PaperChechboxDirective } from './directives/paper-checkbox.directive';

export const INPUT_COMPONENTS: Type[] = [
    Select2Component,
    SelectComponent
];

export const INPUT_DIRECTIVES: Type[] = [
    PaperChechboxDirective
];