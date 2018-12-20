
import { Component, OnInit } from '@angular/core';

// models 
import { Item } from './item.model';

@Component({
  selector: 'home-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  items: Item[] = [{
    name: "Estadísticas",
    img: "./../../../assets/icons/icon_estadisticas.svg",
    listSubItems: ['Resumen', 'Reportes diarios', 'Time outs', 'Seguimiento', 'Detalle de', 'Dashboard', 'Reporte', 'Integración']
  }, {
    name: "Catálogos",
    img: "./../../../assets/icons/icon_catalogo.svg",
    listSubItems: ['Reposiciones', 'Venta de tecnología', 'Planes y paquetes', 'Sugerencia y equipos']
  }, {
    name: "Visitas técnicas",
    img: "./../../../assets/icons/icon_visitatecnica.svg",
    listSubItems: ['GPS']
  }, {
    name: "Usuarios",
    img: "./../../../assets/icons/icon_usuarios.svg",
    listSubItems: ['Eliminación de usuarios']
  }, {
    name: "Administrador",
    img: "./../../../assets/icons/icon_administrador.svg",
    listSubItems: ['Banners', 'Tokens', 'Homologación', 'Segmentos', 'Pedidos EXT', 'Pedidos App']
  }];

  constructor() { }

  ngOnInit() {
  }

}
