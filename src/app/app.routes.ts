import { Routes } from '@angular/router';
import { RoomListComponent } from './components/room-list/room-list.component';
import { RoomComponent } from './components/room/room.component';
import { RoomUpdateComponent } from './components/room-update/room-update.component';
import { RoomDetailsComponent } from './components/room-details/room-details.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'rooms', pathMatch: 'full' },
	{ path: 'rooms', component: RoomListComponent },
	{ path: 'add', component: RoomComponent },
	{ path: 'update/:id', component: RoomUpdateComponent },
	{ path: 'details/:id', component: RoomDetailsComponent },
];
