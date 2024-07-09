import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signup-client',
  templateUrl: './signup-client.component.html',
  styleUrls: ['./signup-client.component.scss'],
})
export class SignupClientComponent implements OnInit {
  signUpForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private notification: NzNotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      name: ['', { Validators: [Validators.required] }],
      lastName: ['', { Validators: [Validators.required] }],
      email: ['', { Validators: [Validators.required, Validators.email] }],
      password: ['', { Validators: [Validators.required] }],
      confirmPassword: ['', { Validators: [Validators.required] }],
      phone: [''],
    });
  }

  public submit(){
    this.authService.registerClient(this.signUpForm.value).subscribe({
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
