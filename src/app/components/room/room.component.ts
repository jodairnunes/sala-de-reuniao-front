import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { Router, RouterLink } from '@angular/router';
import { Room } from '../../room';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css',
})
export class RoomComponent implements OnInit {
  room: Room = new Room();
  submitted = false;

  constructor(
    private readonly roomService: RoomService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  newRoom(): void {
    this.submitted = false;
    this.room = new Room();
  }

  save() {
    this.roomService.createRoom(this.room).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
    this.room = new Room();
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['']);
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
