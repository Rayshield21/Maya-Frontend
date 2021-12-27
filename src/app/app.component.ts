import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from './services/ui/ui.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Person Logger';
  showForm?: boolean
  action?: string
  subscription?: Subscription
  constructor(private uiService: UiService){
    this.subscription = this.uiService.onModalStateChange().subscribe(({show, action}) => { 
      this.showForm = show
      this.action = action
    })
  }

  ngOnDestroy(){
    this.subscription?.unsubscribe()
  }
}
