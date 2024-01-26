import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormStateService } from 'src/app/service/form-service/form-state.service';
import { RouterService } from 'src/app/service/router-service/router.service';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss'],
})
export class Form1Component implements OnInit {
  signUpForm!: FormGroup;
  hidePassword: boolean = true;

  // Inject the FormStateService to be able to subscribe to the form state
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
      if (state.page1) {
        this.signUpForm.setValue(state.page1);
      }
    });
  }

  ngOnDestroy(): void {
    // Update the form state when the component is destroyed
    this.formStateService.updateFormState('page1', this.signUpForm.value);
  }
}
