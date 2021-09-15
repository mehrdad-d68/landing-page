import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationlistComponent } from './notificationlist/notificationlist.component';



@NgModule({
  declarations: [
    NotificationlistComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[NotificationlistComponent]
})
export class NotificationsModule { }
