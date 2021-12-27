import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/app/interfaces/person.models';
import { PersonService } from 'src/app/services/person/person.service';
import { UiService } from 'src/app/services/ui/ui.service';
@Component({
  selector: 'app-person-item',
  templateUrl: './person-item.component.html',
  styleUrls: ['./person-item.component.scss']
})
export class PersonItemComponent implements OnInit {
  @Input() person!: Person
  constructor(private personService: PersonService, private uiService:UiService) { }

  ngOnInit(): void {
  }

  deletePerson(person:Person){
    this.personService.deletePerson(person)
  }

  triggerEdit(person:Person){
    this.personService.retrievePerson(person)
    // console.log(person)
    this.uiService.modalStateChange({show: true, action:'Edit'})
  }

}
