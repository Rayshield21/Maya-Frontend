import { Component, OnInit, Input} from '@angular/core';
import { faTrashAlt, faEdit, faTimes, faUserPlus, faUser } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html'  ,
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  // Declare all icons that will be used throughout the app
  // This will serve as a global icon container to reduce redundant fontawesome imports and   declarations per component. Just call app-icon with a declared fontawesome value as iconName.
  @Input() iconName: string = ''
  faTrashAlt = faTrashAlt
  faEdit = faEdit
  faTimes = faTimes
  faUserPlus = faUserPlus
  constructor() { }

  ngOnInit(): void {
  }

}
