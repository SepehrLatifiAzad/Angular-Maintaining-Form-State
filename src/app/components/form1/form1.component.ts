import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterService } from 'src/app/service/router-service/router.service';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss'],
})
export class Form1Component {
  savedFormData: Object | undefined = this.routerService.getFormData();
  form1: FormGroup = new FormGroup({
    firstName: new FormControl(
      this.savedFormData ? (this.savedFormData as any)['firstName'] : '',
      [Validators.required, Validators.minLength(3)]
    ),
    lastName: new FormControl(
      this.savedFormData ? (this.savedFormData as any)['lastName'] : '',
      [Validators.required, Validators.minLength(3)]
    ),
    email: new FormControl(
      this.savedFormData ? (this.savedFormData as any)['email'] : '',
      [Validators.required, Validators.email]
    ),
    password: new FormControl(
      this.savedFormData ? (this.savedFormData as any)['password'] : '',
      [Validators.required, Validators.minLength(8)]
    ),
  });
  hidePassword: boolean = true;
  constructor(private routerService: RouterService) {}
  saveForm() {
    this.routerService.setFormData(this.form1.value);
    console.log(this.form1.value);
  }
}
