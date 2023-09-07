import { Injectable } from '@angular/core';
import { userModel } from 'model/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userList: userModel[] = []

  constructor() { }
 
  addNewUser(name: string, age: Number, adress: string, email: string ) {


    this.userList.push(new userModel(name, adress, age,  email))

  }

  getUser(){
    return this.userList
  }

  removeUser(index: number){
    this.userList.splice(index, 1)
  }

  updateUser(index: number, data: userModel){
    const el = this.userList[index]
    const updatedEl = {...el, data}

    this.removeUser(index)

    this.addNewUser(updatedEl.name, updatedEl.age, updatedEl.adress, updatedEl.email)
    
    return updatedEl
  }
}
