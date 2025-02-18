---
title: solid-js
description: Introduction à Solid JS
---

# 📚 **Cours : Introduction à SolidJS**

---
## 📌 **1. Qu’est-ce que SolidJS ?**

### 🔹 Présentation
**SolidJS** est un framework JavaScript réactif permettant de créer des interfaces utilisateur performantes. Il se distingue par :
- **Son approche réactive** basée sur des **signals**.
- **L’absence de Virtual DOM**, contrairement à React.
- **Sa compilation optimale**, générant un code performant.

### 🔹 Pourquoi utiliser SolidJS ?
| ✅ Avantages | ❌ Inconvénients |
|-------------|----------------|
| Très performant, pas de Virtual DOM | Écosystème plus restreint que React |
| Syntaxe proche de React (JSX) | Moins de ressources et de tutoriels |
| Gestion d'état simple avec `createSignal()` | Adoption plus récente, moins populaire |

---

## 🔧 **2. Installation et Configuration de SolidJS**

### **🔹 Installation avec Vite**
```bash
bun create vite@latest mon-projet --template solid
```
Puis, installez les dépendances :
```bash
cd mon-projet
bun install
```

### **🔹 Structure d’un projet SolidJS**
```
mon-projet/
├── index.html
├── src/
│   ├── main.jsx  # Point d'entrée
│   ├── App.jsx   # Composant principal
├── package.json
└── vite.config.js
```

---

## 🏗️ **3. Bases de SolidJS**

### **🔹 3.1. Composants**
Un composant SolidJS est une **fonction retournant du JSX** :
```jsx
function App() {
  return <h1>Bienvenue sur SolidJS 🚀</h1>;
}
export default App;
```

### **🔹 3.2. Signals : Gestion de l'état**
SolidJS utilise `createSignal()` pour gérer l’état local :
```jsx
import { createSignal } from "solid-js";

function Counter() {
  const [count, setCount] = createSignal(0);

  return (
    <div>
      <p>Compteur : {count()}</p>
      <button onClick={() => setCount(count() + 1)}>Incrémenter</button>
    </div>
  );
}

export default Counter;
```
⚠️ **Remarque** : `count()` est une fonction, pas une variable !

### **🔹 3.3. Effets réactifs**
Avec `createEffect()`, on exécute du code lorsqu’un signal change :
```jsx
import { createSignal, createEffect } from "solid-js";

function App() {
  const [name, setName] = createSignal("Alice");

  createEffect(() => {
    console.log(`Nom mis à jour : ${name()}`);
  });

  return (
    <input type="text" value={name()} onInput={(e) => setName(e.target.value)} />
  );
}

export default App;
```

---

## ⚙️ **4. Concepts avancés**

### **🔹 4.1. Props dans les composants**
```jsx
function Greeting(props) {
  return <h2>Salut, {props.name} !</h2>;
}

export default function App() {
  return <Greeting name="SolidJS" />;
}
```

### **🔹 4.2. Directives conditionnelles et boucles**
Afficher une liste :
```jsx
const users = ["Alice", "Bob", "Charlie"];

function App() {
  return (
    <ul>
      {users.map((user) => (
        <li>{user}</li>
      ))}
    </ul>
  );
}
```

### **🔹 4.3. Création d’un Store réactif**
SolidJS propose `createStore()` pour gérer des objets complexes :
```jsx
import { createStore } from "solid-js/store";

function App() {
  const [user, setUser] = createStore({ name: "Alice", age: 25 });

  return (
    <div>
      <p>Nom : {user.name}</p>
      <button onClick={() => setUser("age", user.age + 1)}>Vieillir</button>
    </div>
  );
}

export default App;
```

---

## 🛠️ **5. Exercice pratique**
### 🎯 Objectif :  
Créer une **To-Do List interactive** en SolidJS.

#### ✅ Fonctionnalités :
- Ajouter une tâche
- Supprimer une tâche
- Marquer une tâche comme complétée

> 🔗 **Défi Bonus :** Sauvegarder les tâches dans `localStorage`.

---

## 📚 **6. Ressources supplémentaires**
- **Documentation officielle** : [solidjs.com](https://solidjs.com/)
- **Tutoriels interactifs** : [playground.solidjs.com](https://playground.solidjs.com/)
- **Comparaison avec React** : [article détaillé](https://dev.to/solidjs)

---

### **🚀 Conclusion**
SolidJS est une excellente alternative aux frameworks classiques comme React, offrant **une approche réactive, ultra-performante et facile à prendre en main**.

👉 **Prêt à coder avec SolidJS ?** 💻🔥