import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormStateService {
  // Storing forms state
  private formState = new BehaviorSubject<any>({});
  // Exposing formState as observable
  currentFormState = this.formState.asObservable();

  /**
   * @description updating form state with new data whenever user navigates to next page
   * @param page - page name
   * @param formData - form data (form values or state)
   */
  updateFormState(page: string, formData: any) {
    const currentState = this.formState.value;
    currentState[page] = formData;
    this.formState.next(currentState);
  }
}
