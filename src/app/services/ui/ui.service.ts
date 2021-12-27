import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UiService {
  private subject = new BehaviorSubject<any>({
    show: false,
    action: ''
  })
  constructor() { }

  modalStateChange(modalState:object):void{
   this.subject.next(modalState)
  }

  onModalStateChange():Observable<any>{
    return this.subject.asObservable()
  }
}
