import { Injectable } from '@angular/core';
import { ServModel } from 'model/firstService';
@Injectable({
  providedIn: 'root'
})
export class FirsServiceService {

  public serviceList : ServModel[] = []

  private daysOfTheWeeks = ["Sun", "Mon", "Tue", "Web", "Thurs", "Fri", "Sat"]

  constructor() { }


  addNewServ(txt: string) {
    const date = new Date()
    const daysOfTheWeeks = this.daysOfTheWeeks[date.getDate()]
    const day = date.getDay()
    const year = date.getFullYear()

    this.serviceList.push(new ServModel(txt, `${daysOfTheWeeks} ${day}, ${year}`))
  }

  
getService() {
  return this.serviceList
}

removeService(index:number){
  this.serviceList.splice(index, 1)
}
}

