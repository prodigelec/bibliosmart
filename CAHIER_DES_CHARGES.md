# 📚 BiblioSmart - Cahier des Charges

> Application intelligente de gestion de bibliothèque personnelle avec recommandations IA
> Pour **Laure** et sa famille 💕

---

## 1. Présentation du Projet

### 1.1 Contexte
Application moderne et élégante pour gérer une bibliothèque personnelle avec des suggestions intelligentes basées sur l'IA.

### 1.2 Objectifs
- Gestion complète de la bibliothèque personnelle
- Suggestions de lectures personnalisées (100% gratuit)
- Expérience utilisateur premium (web + mobile)
- Synchronisation cloud en temps réel
- Multi-utilisateurs (famille, amis)
- Multi-langues (Français + English)

### 1.3 Priorités
1. **Phase 1** : Application Web
2. **Phase 2** : Application Mobile

---

## 2. Architecture Technique

### 2.1 Stack Technologique

| Composant | Technologie |
|-----------|-------------|
| **Frontend Web** | Next.js 16 + React 19 |
| **Styling** | Tailwind CSS v4 |
| **Frontend Mobile** | React Native / Expo (Phase 2) |
| **Backend** | Node.js + Express |
| **Base de données** | MongoDB Atlas (Free Tier) |
| **Authentification** | JWT + OAuth2 (Google) + Bcrypt |
| **IA Suggestions** | Algorithme local + Open Library (100% gratuit) |
| **APIs externes** | Google Books, Open Library |
| **i18n** | next-intl (FR/EN) |

### 2.2 Structure du Projet

```
📁 bibliosmart/
├── 📁 frontend/              # Next.js 16 App
│   ├── 📁 app/
│   │   ├── 📁 (auth)/        # Pages authentification
│   │   ├── 📁 (dashboard)/   # Interface principale
│   │   └── layout.tsx
│   ├── 📁 components/
│   ├── 📁 lib/
│   ├── 📁 hooks/
│   ├── 📁 types/
│   └── 📁 styles/
│
├── 📁 backend/               # Node.js + Express API
│   ├── 📁 src/
│   │   ├── 📁 controllers/
│   │   ├── 📁 models/
│   │   ├── 📁 routes/
│   │   ├── 📁 middleware/
│   │   ├── 📁 services/
│   │   └── 📁 utils/
│   └── 📁 config/
│
└── 📁 mobile/                # React Native (futur)
```

### 2.3 Base de Données - MongoDB Atlas

**Free Tier inclut :**
- 512 MB stockage
- Pas de pause d'inactivité
- 500 connexions simultanées
- Backups automatiques

---

## 3. Fonctionnalités

### 3.1 📖 Gestion de la Bibliothèque

| Fonctionnalité | Description | Priorité |
|----------------|-------------|----------|
| Ajout de livres | Scan ISBN, recherche titre/auteur, saisie manuelle | 🔴 Haute |
| Infos automatiques | Couverture, résumé, auteur via Google Books API | 🔴 Haute |
| Organisation | Étagères virtuelles, tags, catégories | 🔴 Haute |
| Statut lecture | À lire, En cours (%), Lu, Abandonné | 🔴 Haute |
| Notes & Citations | Notes privées, citations favorites, évaluation | 🟡 Moyenne |
| Wishlist | Liste de souhaits | 🟡 Moyenne |

### 3.2 🎯 Suggestions Intelligentes (IA)

| Fonctionnalité | Description | Priorité |
|----------------|-------------|----------|
| Analyse préférences | Apprentissage genres/auteurs favoris | 🔴 Haute |
| Recommandations | Suggestions basées sur l'historique | 🔴 Haute |
| Par humeur | "Je veux lire quelque chose de relaxant..." | 🟡 Moyenne |
| Chatbot littéraire | Assistant IA pour conseils | 🟡 Moyenne |
| Livres similaires | "Si vous avez aimé X..." | 🟡 Moyenne |

### 3.3 📊 Statistiques

| Fonctionnalité | Description | Priorité |
|----------------|-------------|----------|
| Dashboard visuel | Graphiques de progression | 🔴 Haute |
| Stats temporelles | Livres par semaine/mois/année | 🟡 Moyenne |
| Année en revue | Récap annuel style Spotify Wrapped | 🟢 Basse |

### 3.4 🎮 Gamification

| Fonctionnalité | Description | Priorité |
|----------------|-------------|----------|
| Challenges | Objectifs personnels (ex: 24 livres/an) | 🟡 Moyenne |
| Badges | Accomplissements débloqués | 🟢 Basse |
| Streaks | Jours consécutifs de lecture | 🟢 Basse |

### 3.5 🔗 Autres

| Fonctionnalité | Description | Priorité |
|----------------|-------------|----------|
| Prêts de livres | Suivi des livres prêtés | 🟡 Moyenne |
| Mode hors-ligne | Consultation sans connexion | 🟢 Basse |
| Dark mode | Thème sombre | 🔴 Haute |

---

## 4. Modèle de Données

### 4.1 User
```typescript
interface User {
  _id: ObjectId;
  email: string;
  pseudo: string;              // Pseudo unique
  name: string;
  avatar?: string;
  password: string;            // Hash bcrypt
  googleId?: string;           // OAuth Google
  twoFactorEnabled: boolean;   // 2FA
  twoFactorSecret?: string;
  language: 'fr' | 'en';       // Langue préférée
  preferences: {
    favoriteGenres: string[];
    readingGoal: number;
    theme: 'light' | 'dark' | 'auto';
  };
  stats: {
    totalBooksRead: number;
    currentStreak: number;
  };
  createdAt: Date;
  lastLogin: Date;
}
```

### 4.2 Book
```typescript
interface Book {
  _id: ObjectId;
  userId: ObjectId;
  isbn?: string;
  title: string;
  authors: string[];
  coverImage?: string;
  pageCount?: number;
  categories: string[];
  description?: string;
  
  // Données personnelles
  status: 'wishlist' | 'to_read' | 'reading' | 'completed' | 'abandoned';
  progress: number;
  rating?: number;
  review?: string;
  notes: { content: string; page?: number; createdAt: Date }[];
  quotes: { text: string; page?: number; createdAt: Date }[];
  shelves: string[];
  tags: string[];
  
  dateAdded: Date;
  dateStarted?: Date;
  dateCompleted?: Date;
}
```

### 4.3 BookLoan
```typescript
interface BookLoan {
  _id: ObjectId;
  bookId: ObjectId;
  borrowerName: string;
  loanDate: Date;
  returnedDate?: Date;
}
```

---

## 5. Design & UX

### 5.1 Direction Artistique
- **Style** : Moderne, épuré, premium
- **Thème** : Tons chauds (beige, marron, or) + accents verts
- **Typographie** : Serif élégante titres, Sans-serif corps
- **Animations** : Subtiles et fluides (Framer Motion)
- **Modes** : Light + Dark

### 5.2 Palette de Couleurs

```css
/* Light Mode */
--primary: #8B7355;        /* Marron chaleureux */
--primary-light: #C4A77D;  /* Or doux */
--accent: #2D5A27;         /* Vert forêt */
--background: #FDF8F3;     /* Crème */
--text: #2C2418;           /* Presque noir */

/* Dark Mode */
--dark-bg: #1A1612;
--dark-surface: #2C2418;
--dark-text: #F5F0E8;
```

### 5.3 Écrans Principaux
1. **Onboarding** - Configuration préférences
2. **Dashboard** - Lecture en cours, stats, suggestions
3. **Bibliothèque** - Grille/liste avec filtres
4. **Détail Livre** - Infos, notes, progression
5. **Suggestions IA** - Recommandations personnalisées
6. **Statistiques** - Analytics visuels
7. **Profil** - Paramètres, objectifs

---

## 6. APIs Externes (100% Gratuites)

| API | Usage | Coût |
|-----|-------|------|
| Google Books API | Métadonnées livres, couvertures | ✅ Gratuit (1000 req/jour) |
| Open Library API | Détails livres, auteurs, sujets | ✅ Gratuit illimité |
| LibraryThing | Recommandations similaires | ✅ Gratuit |

---

## 7. Sécurité (Haute Protection) 🔐

### Authentification
- ✅ Email/Mot de passe + Pseudo unique
- ✅ OAuth2 Google
- ✅ 2FA (Two-Factor Authentication) optionnel
- ✅ JWT avec refresh tokens
- ✅ Sessions sécurisées (HttpOnly cookies)

### Protection des Données
- ✅ Chiffrement mots de passe (bcrypt, 12 rounds)
- ✅ HTTPS obligatoire
- ✅ Validation et sanitization des entrées
- ✅ Protection XSS et CSRF
- ✅ Rate limiting (100 req/15min)
- ✅ Headers sécurisés (Helmet.js)

### Conformité
- ✅ RGPD : export et suppression données
- ✅ Logs d'audit des connexions

---

## 8. Roadmap

### Phase 1 : MVP (4-6 semaines)
- [ ] Setup projet (Next.js 16 + Tailwind v4 + Express)
- [ ] Configuration MongoDB Atlas
- [ ] Authentification (inscription, connexion)
- [ ] CRUD livres basique
- [ ] Intégration Google Books API
- [ ] Design système + Dashboard

### Phase 2 : Core Features (4-6 semaines)
- [ ] Scan ISBN (mobile)
- [ ] Notes et citations
- [ ] Statistiques
- [ ] Étagères et organisation
- [ ] Dark mode

### Phase 3 : Intelligence (3-4 semaines)
- [ ] Algorithme de recommandations local
- [ ] Intégration Open Library pour suggestions
- [ ] Suggestions par genre/auteur/humeur

### Phase 4 : Engagement (2-3 semaines)
- [ ] Gamification
- [ ] Challenges de lecture
- [ ] Notifications

### Phase 5 : Polish (2-3 semaines)
- [ ] Prêts de livres
- [ ] Optimisations
- [ ] Tests et déploiement

---

## 9. Services Cloud (Gratuits)

| Service | Usage |
|---------|-------|
| MongoDB Atlas | Base de données (512 MB) |
| Vercel | Hébergement frontend |
| Railway / Render | Hébergement backend |
| Cloudinary | Stockage images (25 GB) |
