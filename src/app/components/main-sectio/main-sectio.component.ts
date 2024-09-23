import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms'; 
import { Mascota } from '../../models/mascota';
@Component({
  selector: 'app-main-sectio',
  standalone: true,
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    CommonModule 
  ],
  templateUrl: './main-sectio.component.html',
  styleUrl: './main-sectio.component.scss'
})
export class MainSectioComponent implements OnInit {
  mascotaArray: Mascota[] = [
    { id: 1, name: 'Toby', type: ['Dalmata', 'Pastor Alemán', 'Gran Danés'] },
    { id: 2, name: 'Kira', type: ['Doberman', 'Rottweiler', 'Pastor Belga'] },
    { id: 3, name: 'Puchis', type: ['Maltés', 'Rottweiler', 'Dalmata'] },
    { id: 4, name: 'Dante', type: ['Pastor alemán', 'Chihuahua', 'Pastor Belga', 'Dalmata'] }
  ];

  nuevaMascota: Mascota = { id: 0, name: '', type: [] };
  typeString: string = '';

  ngOnInit(): void {}

  deleteMascota(id: number) {
    this.mascotaArray = this.mascotaArray.filter(mascota => mascota.id !== id);
  }

  agregarMascota() {
    const type = this.typeString.split(',').map(type => type.trim());

    // Validamos que todos los campos estén completos
    if (this.nuevaMascota.id > 0 && this.nuevaMascota.name && type.length > 0) {
      // Asignamos los tipos
      this.nuevaMascota.type = type;
      // Agregamos la nueva mascota al array
      this.mascotaArray.push({ ...this.nuevaMascota });
      // Reiniciamos los campos del formulario
      this.nuevaMascota = { id: 0, name: '', type: [] };
      this.typeString = '';
    } else {
      alert('Todos los campos son obligatorios');
    }
  }

  trackById(index: number, mascota: Mascota): number {
    return mascota.id;
  }
}



