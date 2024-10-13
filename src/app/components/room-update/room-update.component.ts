import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from '../../room';
import { RoomService } from '../../services/room.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-room-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './room-update.component.html',
  styleUrl: './room-update.component.css',
})
export class RoomUpdateComponent implements OnInit {

  id!: number;
  room!: Room;
  submitted = false;

  constructor(readonly route: ActivatedRoute, readonly router: Router,  readonly roomService: RoomService) {}

  ngOnInit(): void {
    this.room = new Room();

    this.id = this.route.snapshot.params['id'];
    
    this.roomService.getRoom(this.id)
      .subscribe(data => {
        console.log(data)
        this.room = data;
      }, error => console.log(error));
  }

  updateRoom() {
    this.roomService.updateRoom(this.id, this.room)
      .subscribe(data => console.log(data), error => console.log(error));
    this.room = new Room();
    this.gotoList();
  }

  onSubmit() {
    this.updateRoom();    
  }

  gotoList() {
    this.router.navigate(['/rooms']);
  }
}
