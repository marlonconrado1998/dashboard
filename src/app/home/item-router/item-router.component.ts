import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-item-router',
  templateUrl: './item-router.component.html',
  styleUrls: ['./item-router.component.css']
})
export class ItemRouterComponent implements OnInit {


  items = [{
    name: "Estadísticas",
    img: "",
    listSubItems: ['Resumen', 'Reportes diarios', 'Time outs', 'Seguimiento', 'Detalle de', 'Dashboard', 'Reporte', 'Integración']
  },{
    name: "Catálogos",
    img: "",
    listSubItems: ['Reposiciones', 'Venta de tecnología', 'Planes y paquetes', 'Sugerencia y equipos']
  },{
    name: "Visitas técnicas",
    img: "",
    listSubItems: ['GPS']
  },{
    name: "Usuarios",
    img: "",
    listSubItems: ['Eliminación de usuarios']
  },{
    name: "Administrador",
    img: "",
    listSubItems: ['Banners', 'Tokens', 'Homologación', 'Segmentos', 'Pedidos EXT', 'Pedidos App']
  }];

  constructor() { }

  ngOnInit() {
  }

}
