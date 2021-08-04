import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(
    public api : ApiService,
    public router : Router,
    public auth: AngularFireAuth
  ) {}

  ngOnInit(): void {
  }

  //form validation
  email = new FormControl('',[Validators.required, Validators.email]);
  password = new FormControl('',[Validators.minLength(6), Validators.required]);

  user:any={};
  hide:boolean=true;

  loading: boolean = false;
  register(user:any) 
  {
    this.loading=true;
    this.auth.createUserWithEmailAndPassword(user.email, user.password).then(res=>{
      this.loading=false;
      alert('Registrasi berhasil');
      this.router.navigate(['/login']);
    }).catch(err=>{
      this.loading=false;
      alert('Ada masalah..')
    });
  }
}
