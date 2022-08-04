import { Injectable } from '@angular/core';
import { AngularFireAuth }from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth : AngularFireAuth, private router : Router) { }

  // Creating Login method 
  
  login(email : string, password : string) {
    this.fireauth.signInWithEmailAndPassword(email,password).then( res => {
        localStorage.setItem('token','true');

        if(res.user?.emailVerified == true) {
          this.router.navigate(['dashboard']);
        } else {
          this.router.navigate(['/varify-email']);
        }

    }, err => {
        alert(err.message);
        this.router.navigate(['/login']);
    })
  }

  // Creating register method 
  register(email : string, password : string){

    this.fireauth.createUserWithEmailAndPassword(email, password).then( res => {
      alert('Registeration Sucessful');
      this.router.navigate(['/login']);
      this.sendEmailForVarification(res.user);
    }, err=> {
      alert(err.message);
      this.router.navigate(['/register']); 
    })
    }

    // creating logout method
    logout(){
      this.fireauth.signOut().then( () => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);

      }, err=>{
        alert(err.message);
      })
    }

    // forgot password
  forgotPassword(email : string) {
    this.fireauth.sendPasswordResetEmail(email).then(() => {
      this.router.navigate(['/varify-email']);
    }, err => {
      alert('Please enter email');
    })
}

 // email varification
 sendEmailForVarification(user : any) {
  console.log(user);
  user.sendEmailVerification().then((res : any) => {
    this.router.navigate(['/varify-email']);
  }, (err : any) => {
    alert('Please try again. Not able to send verification to your email.')
  })
}

  }
  


