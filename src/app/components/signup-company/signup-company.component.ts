import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signup-company',
  templateUrl: './signup-company.component.html',
  styleUrls: ['./signup-company.component.scss']
})
export class SignupCompanyComponent implements OnInit{

  signUpForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private notification: NzNotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      phone: [''],
    }, { validators: this.passwordValidator.bind(this) });
  }

  public passwordValidator(formGroup: FormGroup): ValidationErrors | null {
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('confirmPassword');
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ notEqual: true });
      return { notEqual: true };
    } else {
      if (confirmPassword) {
        confirmPassword.setErrors(null);
      }
      return null;
    }
  }

  public submit(){
    const emailControl = this.signUpForm.get('email');
    if (emailControl) {
      console.log(emailControl.errors);
    }
    const registerData = this.signUpForm.value;
    console.log(registerData);
    this.authService.registerCompany(registerData).subscribe({
      next: (response) => {
        this.notification.success('Sucesso', 'Cliente registrado com sucesso!');
        this.router.navigate(['/login']);
      },
      error: (error) => {
        this.notification.error('Erro', 'Erro ao registrar cliente!');
      },
    });
  }

}
