import { Component, OnInit, OnDestroy } from '@angular/core';
import { UiService } from 'src/app/services/ui/ui.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersonService } from 'src/app/services/person/person.service';
import { Person } from 'src/app/interfaces/person.models';
@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent implements OnInit {
  private minimumAge: number = 18
  action?: string
  tempPerson?: Person
  uiSubscription?: Subscription
  tempPersonSubscription?: Subscription
  personForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.min(this.minimumAge)])
  }, {updateOn: 'blur'})
  
  constructor(private uiService: UiService,
    private personService:PersonService){
    this.uiSubscription = this.uiService.onModalStateChange().subscribe(({show, action}) => { 
      this.action = action
    })
  }

  get name(){
    return this.personForm.get('name')
  }
  get age(){
    return this.personForm.get('age')
  }

  ngOnInit(): void {
    if(this.action === 'Edit'){
      this.tempPersonSubscription = this.personService.initializeTempPerson().subscribe(person=>{
        this.tempPerson = person
        this.personForm.controls['name'].setValue(this.tempPerson?.name)
        this.personForm.controls['age'].setValue(this.tempPerson?.age)
      })
    }
    document.body.classList.add('overflow-hidden')
  }

  ngOnDestroy():void{
    this.uiSubscription?.unsubscribe()
    this.tempPersonSubscription?.unsubscribe()
    document.body.classList.remove('overflow-hidden')
  }

  submit():void{
    console.log(this.personForm.value)
    if(this.action == 'Add'){
      this.personService.addPerson(this.personForm.value)
    }
    if(this.action == 'Edit'){
      const body = {_id: this.tempPerson?._id, ...this.personForm.value}
      this.personService.editPerson(body)
    }
    this.closeModal()
  }

  closeModal():void{
    this.uiService.modalStateChange({show:false, action:''})
  }

}
