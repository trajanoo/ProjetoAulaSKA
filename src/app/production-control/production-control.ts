import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-production-control',
  imports: [],
  templateUrl: './production-control.html',
  styleUrl: './production-control.scss'
})
export class ProductionControl {
  @Input() title: string = 'Não definido';
}
