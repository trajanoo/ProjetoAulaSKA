import { Routes } from '@angular/router';
import { Terminal } from './terminal/terminal';
import { Imagem } from './imagem/imagem';

export const routes: Routes = [{path: '', component: Terminal}, {path: 'image/:imageUrl', component: Imagem}];
