import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  username = "username";

  isUsernameEmpty()
  {
    return this.username.length <= 0
  }

  resetUsername()
  {
    this.username = ""
  }
}
