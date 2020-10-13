import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WizardModel } from 'src/app/models/wizard.model';
import { WizardService } from 'src/app/services/wizard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WizardComponent implements OnInit {

  steps: Observable<WizardModel[]>;
  currentStep: Observable<WizardModel>;

  constructor(private stepsService: WizardService) { }

  ngOnInit(): void {
    this.steps = this.stepsService.getSteps();
    this.currentStep = this.stepsService.getCurrentStep();
  }

  onStepClick(step: WizardModel) {
    this.stepsService.setCurrentStep(step);
  }
}
