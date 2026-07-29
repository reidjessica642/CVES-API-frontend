import { Routes } from '@angular/router';
import { CveListing } from './cve-listing/cve-listing.js';
import { CveData } from './cve-data/cve-data.js';
import { HackybaraHome } from './hackybara-home/hackybara-home.js';
import { HackybaraAbout } from './hackybara-about/hackybara-about.js';
import { CveEdit } from './cve-edit/cve-edit.js';

export const routes: Routes = [
    {
        path: '',
        component: HackybaraHome,
        title: 'Home',
    },
    {
        path: 'about',
        component: HackybaraAbout,
        title: 'About',
    },
    {
        path: 'cves/list',
        component: CveListing,
        title: 'CVE List',
    },
    {
        path: 'cves/:id',
        component: CveData,
        title: 'Data',
    },
    {
        path: 'cves/edit/:id',
        component: CveEdit,
        title: 'Edit CVE',
    }
];
