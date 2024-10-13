import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomService } from '../../services/room.service';
import { Router } from '@angular/router';
import { Room } from '../../room';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.css'
})
export class RoomListComponent implements OnInit{
  rooms!: Observable<Room[]>

  constructor(readonly roomService: RoomService, readonly router: Router){}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.rooms = this.roomService.getRoomsList();
  }

  deleteRoom(id: number){
    return this.roomService.deleteRoom(id).subscribe(data => {
      console.log(data);
      this.reloadData();
    }, 
    error => console.log(error))
  }

  detailsRoom(id: number) {
      this.router.navigate(['details', id])
  }

  updateRoom(id: number) {
      this.router.navigate(['update', id])
  }

}
