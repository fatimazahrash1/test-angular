import { Component, signal, computed } from '@angular/core';
import { Produit } from '../models/produit.model';
import { ProduitCard } from '../produit-card/produit-card';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [ProduitCard],
  templateUrl: './catalogue.html',
  styleUrl: './catalogue.css',
})
export class Catalogue {
  produits = signal<Produit[]>([
    { id: 1, nom: 'Casque audio', prix: 299 },
    { id: 2, nom: 'Souris sans fil', prix: 120 },
    { id: 3, nom: 'Clavier mécanique', prix: 380 },
    { id: 4, nom: 'Tapis de souris', prix: 60 },
  ]);

  panier = signal<Produit[]>([]);

  nombreArticles = computed(() => this.panier().length);
  totalPanier = computed(() =>
    this.panier().reduce((acc, item) => acc + item.prix, 0)
  );

  // ✅ Mise à jour propre avec update() (nouvelle référence de tableau)
  ajouterAuPanier(produit: Produit) {
    this.panier.update((liste) => [...liste, produit]);
  }

  // ⚠️ Piège : mute le tableau interne sans notifier le signal
  ajouterAvecPushPiege(produit: Produit) {
    this.panier().push(produit);
  }

  // ✅ Remplace la valeur du signal avec set()
  viderPanier() {
    this.panier.set([]);
  }
}