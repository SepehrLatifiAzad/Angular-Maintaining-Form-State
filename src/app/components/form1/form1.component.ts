import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
      []
    ),
    lastName: new FormControl(
      this.savedFormData ? (this.savedFormData as any)['lastName'] : '',
      []
    ),
  });

  constructor(private routerService: RouterService) {}
  saveForm() {
    this.routerService.setFormData(this.form1.value);
    console.log(this.form1.value);
  }
}
