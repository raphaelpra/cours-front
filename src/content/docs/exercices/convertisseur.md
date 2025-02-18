---
title: Convertisseur
description: Conversion en temps réel entre Celsius et Fahrenheit
---

### **Convertisseur de Températures avec SolidJS – Sujet détaillé**  

📌 **Objectifs pédagogiques** :  
- Comprendre les concepts fondamentaux de **SolidJS** (réactivité, signal, JSX).  
- Manipuler des **événements et des inputs** dans un composant.  
- Utiliser des **effets réactifs** pour mettre à jour les valeurs en temps réel.  

---

## **Consignes du TP**  

### 🎯 **Objectif de l'application**  
Créer une application qui permet de **convertir une température** en temps réel entre **Celsius** et **Fahrenheit**.

### 🏗 **Fonctionnalités attendues**  
1. **Deux champs d’entrée** :  
   - Un input pour entrer une température en **Celsius**.  
   - Un input pour entrer une température en **Fahrenheit**.  

2. **Conversion automatique** :  
   - Lorsqu'on modifie l’un des inputs, l’autre se met à jour en conséquence.  

3. **Gestion des erreurs** :  
   - Empêcher la saisie de caractères non numériques.  
   - Afficher un message d'erreur si la valeur entrée n’est pas valide.  

---

## **Contraintes techniques**  
🔹 **Utiliser SolidJS** (pas de React).  
🔹 Pas d’appels API externes.  
🔹 Le design reste minimaliste (HTML et CSS de base).  
🔹 **Interactivité fluide** grâce à la réactivité de SolidJS.  

---

## **Déroulement du TP**  

### **1️⃣ Mise en place de SolidJS**  
Si ce n'est pas encore fait, créer un projet SolidJS minimal avec **Vite** :  

```sh
bun create solid@latest convertisseur-temperature
cd convertisseur-temperature
bun install
bun run dev
```

---

### **2️⃣ Architecture du projet**  
Le TP doit contenir **un seul composant principal** qui :  
- Stocke **deux signaux réactifs** pour les températures.  
- Met à jour **dynamiquement** les valeurs.  
- Gère les **événements utilisateur** sur les inputs.  

📂 **Arborescence suggérée** :  
```
/src
 ├── App.jsx   → Composant principal
 ├── index.css → Style basique
 ├── main.jsx  → Point d'entrée SolidJS
```

---

### **3️⃣ Implémentation (sans la solution complète)**  

1️⃣ **Créer des signaux réactifs** pour stocker les températures en Celsius et Fahrenheit.  
2️⃣ **Écouter les changements sur les inputs** et recalculer la température équivalente.  
3️⃣ **Appliquer la conversion** avec les formules :  

   ```
   Fahrenheit = Celsius × 9/5 + 32
   Celsius = (Fahrenheit - 32) × 5/9
   ```

4️⃣ **Mettre à jour automatiquement** l’input opposé sans provoquer de boucle infinie.  
5️⃣ **Gérer les erreurs** si un utilisateur entre un texte invalide.  

---

## **Bonus (optionnel)**  
🔥 **Ajout de fonctionnalités supplémentaires** pour les élèves avancés :  
✅ Un bouton "Réinitialiser" pour remettre à zéro les valeurs.  
✅ Un slider pour ajuster la température (ex : de -50°C à 100°C).  
✅ Une animation qui change la couleur du fond en fonction de la température (ex : bleu pour froid, rouge pour chaud).  

---

## **Évaluation et validation**  
🎯 **Critères de réussite** :  
✔️ Le convertisseur fonctionne sans rafraîchir la page.  
✔️ La conversion est **instantanée** et **précise**.  
✔️ Le code est **lisible et bien structuré** (utilisation correcte des signaux).  