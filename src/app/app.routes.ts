import { Routes } from '@angular/router';
import { CveListing } from './cve-listing/cve-listing.js';
import { CveData } from './cve-data/cve-data.js';
import { HackybaraHome } from './hackybara-home/hackybara-home.js';

export const routes: Routes = [
    {
        path: '',
        component: HackybaraHome,
        title: 'Home',
    },
    {
        path: 'cves/get', // edit later for an actual landing page
        component: CveListing,
        title: 'CVE List',
    },
    {
        path: 'cves/:id',
        component: CveData,
        title: 'Data',
    }
];
