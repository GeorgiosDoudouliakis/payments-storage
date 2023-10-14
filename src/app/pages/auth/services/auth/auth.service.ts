/* Place your angular imports here */
import { Injectable } from '@angular/core';

/* Place your RxJs imports here */
import { from } from "rxjs";

/* Place your interface imports here */
import { UserCredentialsInterface } from "../../interfaces";

/* Place any other imports here */
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Injectable()
export class AuthService {
  constructor(private _afAuth: AngularFireAuth) { }

  public logIn(credentials: UserCredentialsInterface) {
    const { email, password } = credentials;
    return from(this._afAuth.signInWithEmailAndPassword(email, password));
  }

  public signUp(credentials: UserCredentialsInterface) {
    const { email, password } = credentials;
    return from(this._afAuth.createUserWithEmailAndPassword(email, password));
  }
}
