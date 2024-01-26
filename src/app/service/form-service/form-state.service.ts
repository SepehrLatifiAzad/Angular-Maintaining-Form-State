import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormStateService {
  private formState = new BehaviorSubject<any>({});
  currentFormState = this.formState.asObservable();

  constructor() { }

  updateFormState(page: string, formData: any) {
    const currentState = this.formState.value;
    currentState[page] = formData;
    this.formState.next(currentState);
  }
}
