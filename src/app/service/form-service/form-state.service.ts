import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormStateService {
  // Storing forms state
  private formsState = new BehaviorSubject<any>({});
  // Exposing formState as observable
  currentFormsState = this.formsState.asObservable();

  /**
   * @description updating form state with new data whenever user navigates to next page
   * @param page - page name
   * @param formData - form data (form values or state)
   */
  updateFormState(page: string, formData: any) {
    const currentState = this.formsState.value;
    currentState[page] = formData;
    this.formsState.next(currentState);
  }
}
