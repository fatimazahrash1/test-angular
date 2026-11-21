import { Component, input, output } from '@angular/core';
import { Produit } from '../models/produit.model';

@Component({
  selector: 'app-produit-card',
  standalone: true,
  templateUrl: './produit-card.html',
  styleUrl: './produit-card.css',
})
export class ProduitCard {
  produit = input.required<Produit>();
  ajoute = output<Produit>();

  ajouterAuPanier() {
    this.ajoute.emit(this.produit());
  }
}