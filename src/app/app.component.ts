import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RoomListComponent } from "./components/room-list/room-list.component";
import { RoomComponent } from "./components/room/room.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RoomListComponent, RoomComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'APP Sala de Reunião';
}
