import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { WizardModel } from 'src/app/models/wizard.model';
import { WizardService } from 'src/app/services/wizard.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SignupComponent implements OnInit, OnDestroy {

  currentStep: WizardModel;
  currentStepSub: Subscription;

  @Input() step: WizardModel;

  constructor(
    @Inject(DOCUMENT) private _document,
    private stepsService: WizardService,
  ) { }

  ngOnInit(): void {
    this._document.body.classList.add('bg-gradient');
    this.currentStepSub = this.stepsService.getCurrentStep().subscribe((step: WizardModel) => {
      this.currentStep = step;
    });
  }

  ngOnDestroy(): void {
    this.currentStepSub.unsubscribe();
    this._document.body.classList.add('bbg-gradient');
  }

}
