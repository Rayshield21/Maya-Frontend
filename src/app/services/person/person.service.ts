import { Injectable } from '@angular/core';
import { Person } from 'src/app/interfaces/person.models';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private personList: Person[] = []
  private persons = new BehaviorSubject<Person[]>([])
  private apiURL = "http://localhost:3333/sample"
  private tempPerson = new Subject()
  constructor(private http:HttpClient){}

  initPersons():Observable<Person[]>{
    if(!this.personList || this.personList.length == 0){
      this.getPersons()
    }
    return this.persons.asObservable()
  }

  getPersons(){
    this.http.get<Person[]>(this.apiURL).subscribe(personData=>{
      this.persons.next(personData)
    })
  }

  initializeTempPerson():Observable<any>{
    return this.tempPerson.asObservable()
  }

  retrievePerson(person:Person){
    const {_id} = person
    this.http.get<Person>(`${this.apiURL}/${_id}`).subscribe(person=>{
      this.tempPerson.next(person)
    })
  }

  editPerson(person:Person){
    const {_id} = person
    this.http.put<Person>(`${this.apiURL}/${_id}`, person).subscribe(person=>{
      this.getPersons()
    })
  }

  deletePerson(person:Person){
    const {_id} = person
    this.http.delete<Person>(`${this.apiURL}/${_id}`).subscribe((deletedPerson)=>{
      this.getPersons()
    })
  }

  addPerson(person:Person){
    this.http.post<Person>(this.apiURL, person).subscribe(addedPerson=>{
      this.getPersons()
    })
  }
}
