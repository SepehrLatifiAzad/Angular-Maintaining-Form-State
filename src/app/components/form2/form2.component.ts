import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormStateService } from 'src/app/service/form-service/form-state.service';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss'],
})
export class Form2Component implements OnInit {
  signUpForm!: FormGroup;
  hidePassword: boolean = true;

  constructor(
    private fb: FormBuilder,
    private formStateService: FormStateService
  ) {}
  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

    // Subscribe to the form state service and set the form value when the component loads
    this.formStateService.currentFormState.subscribe((state) => {
      if (state.form2) {
        this.signUpForm.setValue(state.form2);
      }
    });
  }

  ngOnDestroy(): void {
    // Update the form state when the component is destroyed
    this.formStateService.updateFormState('form2', this.signUpForm.value);
  }
}
