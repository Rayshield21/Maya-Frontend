import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonService } from 'src/app/services/person/person.service';
import { Person } from 'src/app/interfaces/person.models';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {
  persons?: Person[]
  personSub: Subscription
  constructor(private personService: PersonService) {
    this.personSub = this.personService.initPersons().subscribe(persons => this.persons = persons)
  }

  ngOnInit(): void {
    // this.getPersons();
  }
  
  ngOnDestroy(){
    this.personSub.unsubscribe()
  }

}
