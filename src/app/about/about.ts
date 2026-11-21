import { Component } from '@angular/core';
import { Catalogue } from '../catalogue/catalogue';

@Component({
  selector: 'app-about', // garde le sélecteur/template de ton composant About
  standalone: true,
  imports: [Catalogue],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}