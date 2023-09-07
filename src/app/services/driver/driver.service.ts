import { Injectable } from '@angular/core';
import { driverModel } from 'model/driverModel';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  public driverList: driverModel[] = []

  constructor() { }
 
  addNewDriver(name: string, age: Number, adress: string, email: string ) {


    this.driverList.push(new driverModel(name, adress, age,  email))

  }

  getDriver(){
    return this.driverList
  }

  removeDriver(index: number){
    this.driverList.splice(index, 1)
  }

  updateDriver(index: number, data: driverModel){
    const el = this.driverList[index]
    const updatedEl = {...el, data}

    this.removeDriver(index)

    this.addNewDriver(updatedEl.name, updatedEl.age, updatedEl.adress, updatedEl.email)
    
    return updatedEl
  }
}
