import { Criteria } from './criteria';

export class CriteriaSelection {
    constructor(public values: Array<String> = [],
                public criteria: Criteria = new Criteria()) {
    }

}
