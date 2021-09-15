import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor( public messages:Subject<any>) { 
    this.messages=new  Subject<any>()
  }

  addsuccess(message:string){
    this.messages.next(message)
  }

  adderror(message:string){
    this.messages.next(message)
  }

  clearmessage(id:number){

  }
}
