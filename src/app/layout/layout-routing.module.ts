import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/guard/auth.guard';
import { LayoutComponent } from './layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
      { path: 'dashboard', loadChildren: () => import('../views/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuard] },
      { path: 'administration', loadChildren: () => import('../views/admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule), canActivate: [AuthGuard] },
      { path: 'analyzes', loadChildren: () => import('../views/analyzes/analyzes.module').then(m => m.AnalyzesModule), canActivate: [AuthGuard] },
      { path: 'medical-history', loadChildren: () => import('../views/antecedent/antecedent.module').then(m => m.AntecedentModule), canActivate: [AuthGuard] },
      { path: 'biometrics', loadChildren: () => import('../views/biometrie/biometrie.module').then(m => m.BiometrieModule), canActivate: [AuthGuard] },
      { path: 'patients', loadChildren: () => import('../views/patients/patients.module').then(m => m.PatientsModule), canActivate: [AuthGuard] },
      { path: 'documents', loadChildren: () => import('../views/document/document.module').then(m => m.DocumentModule), canActivate: [AuthGuard] },
      { path: 'finances', loadChildren: () => import('../views/finance/finance.module').then(m => m.FinanceModule), canActivate: [AuthGuard] },
      { path: 'tele-consulting', loadChildren: () => import('../views/teleconsultation/teleconsultation.module').then(m => m.TeleconsultationModule), canActivate: [AuthGuard] },
      { path: 'treatments', loadChildren: () => import('../views/traitement/traitement.module').then(m => m.TraitementModule), canActivate: [AuthGuard] },
      { path: 'vaccines', loadChildren: () => import('../views/vaccin/vaccin.module').then(m => m.VaccinModule), canActivate: [AuthGuard] },
      { path: 'agenda', loadChildren: () => import('../views/agenda/agenda.module').then(m => m.AgendaModule), canActivate: [AuthGuard] },
      { path: 'wristbands-reader', loadChildren: () => import('../views/wristbands/wristbands.module').then(m => m.WristbandsModule), canActivate: [AuthGuard] },
      { path: 'pharmacies', loadChildren: () => import('../views/pharmacy/pharmacy.module').then(m => m.PharmacyModule), canActivate: [AuthGuard] },
      { path: 'messenger', loadChildren: () => import('../views/messenger/messenger.module').then(m => m.MessengerModule), canActivate: [AuthGuard] },
      { path: 'accounting', loadChildren: () => import('../views/accounting/accounting.module').then(m => m.AccountingModule), canActivate: [AuthGuard] },
      { path: 'statistics', loadChildren: () => import('../views/statistics/statistics.module').then(m => m.StatisticsModule), canActivate: [AuthGuard] },
      { path: 'clinical-case', loadChildren: () => import('../views//clinical-case/clinical-case.module').then(m => m.ClinicalCaseModule), canActivate: [AuthGuard] },
      { path: 'medical-file', loadChildren: () => import('../views/medical-file/medical-file.module').then(m => m.MedicalFileModule), canActivate: [AuthGuard] },
      { path: 'profile', loadChildren: () => import('../views//profile/profile.module').then(m => m.ProfileModule), canActivate: [AuthGuard] },
      { path: 'settings', loadChildren: () => import('../views/settings/settings.module').then(m => m.SettingsModule), canActivate: [AuthGuard] }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
