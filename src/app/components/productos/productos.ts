import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class ProductosComponent implements OnInit {

  productos: any[] = [];
  nuevoProducto = { nombre: '', categoria: '', precio: 0, stock: 0 };
  editando: boolean = false;
  productoEditando: any = { nombre: '', categoria: '', precio: 0, stock: 0 }; 
  constructor(
  private http: HttpClient, 
  private cd: ChangeDetectorRef,
  private authService: AuthService,
  private router: Router
) {}

  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {
  this.http.get<any[]>('https://inventario-backend-production-102b.up.railway.app/api/productos').subscribe(data => {
    this.productos = data;
    this.cd.detectChanges();
  });
}

  agregar(): void {
    this.http.post('https://inventario-backend-production-102b.up.railway.app/api/productos', this.nuevoProducto).subscribe(() => {
      this.cargar();
      this.nuevoProducto = { nombre: '', categoria: '', precio: 0, stock: 0 };
    });
  }
  editar(producto: any): void {
    this.editando = true;
    this.productoEditando = { ...producto };
  }

  guardar(): void {
    this.http.put(`https://inventario-backend-production-102b.up.railway.app/api/productos/${this.productoEditando.id}`, this.productoEditando).subscribe(() => {
      this.cargar();
      this.editando = false;
    });
  }

  cancelar(): void {
    this.editando = false;
  }
  eliminar(id: number): void {
    this.http.delete(`https://inventario-backend-production-102b.up.railway.app/api/productos/${id}`).subscribe(() => {
      this.cargar();
    });
  }
  cerrarSesion(): void {
  this.authService.cerrarSesion();
  this.router.navigate(['/login']);
}
}