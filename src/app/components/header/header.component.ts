import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui/ui.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = "Person Logger"
  constructor(private uiService: UiService) { 
  }

  ngOnInit(): void {
  }

  toggleAdd(){
    this.uiService.modalStateChange({show: true, action:"Add"});
  }
}
