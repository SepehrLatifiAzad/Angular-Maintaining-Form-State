import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormStateService } from 'src/app/service/form-service/form-state.service';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.scss'],
})
export class Form3Component implements OnInit {
  requestForm!: FormGroup;
  hidePassword: boolean = true;

  constructor(
    private fb: FormBuilder,
    private formStateService: FormStateService
  ) {}

  ngOnInit(): void {
    this.requestForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      id: ['', [Validators.required, Validators.minLength(8)]],
    });

    // Subscribe to the form state service and set the form value when the component loads
    this.formStateService.currentFormState.subscribe((state) => {
      if (state.form3) {
        this.requestForm.setValue(state.form3);
      }
    });
  }

  ngOnDestroy(): void {
    // Update the form state when the component is destroyed
    this.formStateService.updateFormState('form3', this.requestForm.value);
  }
}
