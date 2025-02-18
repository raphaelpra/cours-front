---
title: "Introduction à Vite avec SolidJS et Bun"
description: "Découvrez pourquoi et comment utiliser Vite avec SolidJS et Bun pour un développement web rapide et optimisé."
---

## Pourquoi un outil comme Vite est-il nécessaire ?

### Évolution du développement web

Les sites web ont évolué au fil du temps :

- **Sites web statiques** : Composés uniquement de fichiers HTML, CSS et JavaScript simples, sans logique dynamique. Faciles à héberger, mais limités en fonctionnalités.
- **Sites web dynamiques** : Avec l’essor des applications interactives, JavaScript est devenu essentiel, introduisant des frameworks et des dépendances.

### Défis du développement moderne

- **Multiplication des fichiers et dépendances** : Gérer manuellement plusieurs fichiers devient inefficace.
- **Problèmes de performance** : Charger plusieurs scripts impacte le temps de chargement.
- **Maintenance difficile** : Sans outils adéquats, le code devient ingérable.

### Pourquoi utiliser un bundler comme Vite ?

- **Développement rapide** : Serveur de développement ultra-rapide avec rechargement instantané des modifications.
- **Hot Module Replacement (HMR)** : Mise à jour en temps réel sans recharger la page entière.
- **Optimisation automatique** : Génère un bundle optimisé pour la production.

## Qu'est-ce que Vite ?

- **Vite** est un outil de build rapide pour les applications web modernes.
- Conçu par Evan You (créateur de Vue.js), mais compatible avec **SolidJS, React, Svelte, Preact**, etc.
- Remplace Webpack en offrant un **temps de démarrage quasi instantané**.

## Pourquoi SolidJS ?

- **Framework JavaScript réactif ultra-performant**.
- **Pas de virtual DOM**, ce qui le rend plus rapide que React.
- **Simplicité** : API minimale et syntaxe proche de React.
- **Compilation en code optimal**, contrairement aux frameworks traditionnels.

## Installation de Bun

Avant de commencer, installons **Bun**, un runtime JavaScript rapide qui remplace Node.js et npm :

```bash
curl -fsSL https://bun.sh/install | bash
```

Vérifions l’installation :

```bash
bun --version
```

## Création d'un projet Vite avec SolidJS et Bun

1. **Créer un projet Vite avec SolidJS** :

```bash
bun create vite@latest mon-projet --template solid
```

2. **Aller dans le dossier du projet** :

```bash
cd mon-projet
```

3. **Installer les dépendances avec Bun** :

```bash
bun install
```

## Structure d'un projet Vite + SolidJS

```
mon-projet/
├── index.html
├── src/
│   ├── main.jsx
│   ├── App.jsx
├── package.json
├── vite.config.js
└── bun.lockb
```

- `index.html` : Fichier principal du projet.
- `src/main.jsx` : Point d'entrée de l'application.
- `src/App.jsx` : Composant principal SolidJS.
- `vite.config.js` : Configuration de Vite.
- `bun.lockb` : Fichier de verrouillage des dépendances pour Bun.

## Exemple de code avec SolidJS

Dans **src/App.jsx** :

```jsx
import { createSignal } from "solid-js";

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <div>
      <h1>Bonjour SolidJS avec Vite !</h1>
      <p>Compteur : {count()}</p>
      <button onClick={() => setCount(count() + 1)}>Incrémenter</button>
    </div>
  );
}

export default App;
```

## Configuration de Vite pour SolidJS

Le fichier **vite.config.js** :

```javascript
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000
  },
  build: {
    target: "esnext",
    outDir: "dist"
  }
});
```

## Commandes essentielles avec Bun

- **Démarrer le serveur de développement** :

```bash
bun run dev
```

- **Générer le build de production** :

```bash
bun run build
```

- **Prévisualiser le build** :

```bash
bun run serve
```

## Pourquoi utiliser Bun avec Vite ?

| Fonctionnalité        | npm + Node.js  | Bun         |
|----------------------|---------------|------------|
| Installation rapide  | ❌ Lent        | ✅ Très rapide |
| Gestion des dépendances | ❌ Complexe   | ✅ Simple |
| Exécution des scripts | ❌ Relativement lent | ✅ Ultra-rapide |
| Intégration avec Vite | ✅ Bonne       | ✅ Excellente |

## Résumé

- **Vite** : Un bundler ultra-rapide pour le développement web.
- **SolidJS** : Un framework réactif performant, sans Virtual DOM.
- **Bun** : Une alternative rapide à Node.js et npm.

Vite + SolidJS + Bun = **Un combo puissant pour le développement moderne !** 🚀

## Ressources supplémentaires

- **Documentation Vite** : [vitejs.dev](https://vitejs.dev/)
- **Documentation SolidJS** : [solidjs.com](https://solidjs.com/)
- **Documentation Bun** : [bun.sh/docs](https://bun.sh/docs)

## Questions ?

N'hésitez pas à poser vos questions ou à demander des démonstrations supplémentaires !
```

### 📌 Modifications apportées :
- Ajout d’un **header YAML** (`title` et `description`) compatible avec Astro.
- Suppression du format "slides" et transformation en **article Markdown**.
- Conservation d’une **structure claire et lisible** adaptée à un site web.

Ce fichier est prêt à être intégré directement dans un projet **Astro** ! 🚀