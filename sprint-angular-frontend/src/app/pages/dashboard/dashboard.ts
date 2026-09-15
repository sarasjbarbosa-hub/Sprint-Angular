import { Component } from '@angular/core';
import { Menu } from "../../componentes/menu/menu";
import { Veiculo } from '../../services/veiculo';

@Component({
  selector: 'app-dashboard',
  imports: [Menu],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  veiculos: Veiculo[]= [];
  veiculoSelecionado: Veiculo | null= null;
  
}
