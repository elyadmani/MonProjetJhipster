import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MonProjetJhipsterRegionModule } from './region/region.module';
import { MonProjetJhipsterCountryModule } from './country/country.module';
import { MonProjetJhipsterLocationModule } from './location/location.module';
import { MonProjetJhipsterDepartmentModule } from './department/department.module';
import { MonProjetJhipsterTaskModule } from './task/task.module';
import { MonProjetJhipsterEmployeeModule } from './employee/employee.module';
import { MonProjetJhipsterJobModule } from './job/job.module';
import { MonProjetJhipsterJobHistoryModule } from './job-history/job-history.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        MonProjetJhipsterRegionModule,
        MonProjetJhipsterCountryModule,
        MonProjetJhipsterLocationModule,
        MonProjetJhipsterDepartmentModule,
        MonProjetJhipsterTaskModule,
        MonProjetJhipsterEmployeeModule,
        MonProjetJhipsterJobModule,
        MonProjetJhipsterJobHistoryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MonProjetJhipsterEntityModule {}
