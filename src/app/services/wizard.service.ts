import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { WizardModel } from '../models/wizard.model';

const STEPS = [
  { stepIndex: 1, isComplete: false },
  { stepIndex: 2, isComplete: false },
  { stepIndex: 3, isComplete: false },
];

@Injectable({
  providedIn: 'root'
})
export class WizardService {

  steps$: BehaviorSubject<WizardModel[]> = new BehaviorSubject<WizardModel[]>(STEPS);
  currentStep$: BehaviorSubject<WizardModel> = new BehaviorSubject<WizardModel>(null);

  constructor() {
    this.currentStep$.next(this.steps$.value[0]);
  }

  setCurrentStep(step: WizardModel): void {
    this.currentStep$.next(step);
  }

  getCurrentStep(): Observable<WizardModel> {
    return this.currentStep$.asObservable();
  }

  getSteps(): Observable<WizardModel[]> {
    return this.steps$.asObservable();
  }

  moveToNextStep(): void {
    const index = this.currentStep$.value.stepIndex;

    if (index < this.steps$.value.length) {
      this.currentStep$.next(this.steps$.value[index]);
    }
  }

  isLastStep(): boolean {
    return this.currentStep$.value.stepIndex === this.steps$.value.length;
  }
}
