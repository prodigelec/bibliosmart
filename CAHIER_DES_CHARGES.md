# 📚 BiblioSmart - Cahier des Charges

> Application intelligente de gestion de bibliothèque personnelle avec recommandations IA
> Pour **Laure** et sa famille 💕

---

## 📝 Notes de Mise à Jour (Février 2026)

### ✅ Changements Majeurs Implémentés
- **ORM**: Migration de Mongoose vers **Prisma** pour une meilleure sécurité et performance
- **Sécurité**: Renforcement complet avec protection OWASP Top 10
- **Architecture**: Backend 100% sécurisé et prêt pour la production
- **Authentification**: Système complet avec cookies HttpOnly et refresh tokens

### 🔒 Nouvelles Protections de Sécurité
- Rate limiting intelligent (5 login/15min, 3 register/h)
- Protection CSRF avec tokens uniques
- Prévention des injections NoSQL
- Validation forte des mots de passe (12+ caractères, spéciaux)
- Headers de sécurité (CSP, HSTS, X-Content-Type-Options)
- Protection timing attack contre l'énumération d'utilisateurs

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
| **ORM** | Prisma (remplace Mongoose) |
| **Base de données** | MongoDB Atlas (Free Tier) |
| **Authentification** | JWT + OAuth2 (Google) + Bcrypt |
| **Validation** | Express Validator |
| **Sécurité** | Rate limiting, CSRF, XSS protection, NoSQL injection prevention |
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

## 4. Modèle de Données - Prisma ORM

### 4.1 Configuration Prisma
```prisma
// schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

// Modèles définis ci-dessous
```

### 4.2 Modèle User
```prisma
model User {
  id        String   @id @default(cuid()) @map("_id")
  email     String   @unique
  pseudo    String   @unique
  name      String
  avatar    String?
  password  String
  googleId  String?
  
  // Sécurité
  twoFactorEnabled Boolean @default(false)
  twoFactorSecret String?
  
  // Préférences
  language String @default("fr") // 'fr' | 'en'
  theme    String @default("light") // 'light' | 'dark' | 'auto'
  
  // Statistiques
  totalBooksRead Int @default(0)
  currentStreak  Int @default(0)
  readingGoal    Int @default(24) // Objectif annuel
  
  // Relations
  books      Book[]
  bookLoans  BookLoan[]
  sessions   Session[]
  
  // Timestamps
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt
  lastLogin  DateTime?
  
  @@map("users")
}
```

### 4.3 Modèle Book
```prisma
model Book {
  id        String   @id @default(cuid()) @map("_id")
  userId    String
  
  // Métadonnées (Google Books API)
  isbn        String?
  title       String
  authors     String[]
  coverImage  String?
  pageCount   Int?
  categories  String[]
  description String?
  publisher   String?
  publishedDate String?
  
  // Données personnelles
  status      String // 'wishlist' | 'to_read' | 'reading' | 'completed' | 'abandoned'
  progress    Int    @default(0) // Pourcentage (0-100)
  rating      Int?   // 1-5 étoiles
  review      String?
  
  // Organisation
  shelves String[] // Étagères personnalisées
  tags    String[]
  
  // Relations
  user      User       @relation(fields: [userId], references: [id], onDelete: Cascade)
  bookLoans BookLoan[]
  
  // Timestamps lecture
  dateAdded     DateTime @default(now())
  dateStarted   DateTime?
  dateCompleted DateTime?
  
  @@map("books")
}
```

### 4.4 Modèle BookLoan
```prisma
model BookLoan {
  id        String   @id @default(cuid()) @map("_id")
  bookId    String
  userId    String
  
  borrowerName String
  loanDate     DateTime @default(now())
  dueDate      DateTime?
  returnedDate DateTime?
  
  // Relations
  book Book @relation(fields: [bookId], references: [id], onDelete: Cascade)
  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  @@map("book_loans")
}
```

### 4.5 Modèle Session (Sécurité)
```prisma
model Session {
  id        String   @id @default(cuid()) @map("_id")
  userId    String
  
  token       String   @unique
  refreshToken String?
  expiresAt   DateTime
  
  // Sécurité
  ipAddress   String?
  userAgent   String?
  
  // Relations
  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  @@map("sessions")
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
- ✅ Rate limiting avancé (5 login/15min, 3 register/h)
- ✅ Headers sécurisés (CSP, HSTS, X-Content-Type-Options)
- ✅ Protection contre les injections NoSQL
- ✅ Protection timing attack (énumération d'utilisateurs)
- ✅ Cookies sécurisés (HttpOnly, SameSite: Strict)
- ✅ Validation forte des mots de passe (12+ caractères, spéciaux)

### Conformité
- ✅ RGPD : export et suppression données
- ✅ Logs d'audit des connexions

---

## 8. Roadmap & Avancement

### ✅ Phase 1 : MVP (4-6 semaines) - EN COURS
- [x] Setup projet (Next.js 16 + Tailwind v4 + Express)
- [x] Configuration MongoDB Atlas avec Prisma ORM
- [x] Authentification sécurisée (inscription, connexion, protection avancée)
- [x] Sécurité renforcée (rate limiting, CSRF, XSS, NoSQL injection)
- [ ] CRUD livres basique
- [ ] Intégration Google Books API
- [ ] Design système + Dashboard

### 🔄 Phase 2 : Core Features (4-6 semaines)
- [ ] Scan ISBN (mobile)
- [ ] Notes et citations
- [ ] Statistiques
- [ ] Étagères et organisation
- [ ] Dark mode

### 📚 Phase 3 : Intelligence (3-4 semaines)
- [ ] Algorithme de recommandations local
- [ ] Intégration Open Library pour suggestions
- [ ] Suggestions par genre/auteur/humeur

### 🎮 Phase 4 : Engagement (2-3 semaines)
- [ ] Gamification
- [ ] Challenges de lecture
- [ ] Notifications

### 🎨 Phase 5 : Polish (2-3 semaines)
- [ ] Prêts de livres
- [ ] Optimisations
- [ ] Tests et déploiement

---

## 9. Avancement Technique Détaillé

### ✅ Backend - Node.js + Express + Prisma (COMPLET)
- **Architecture**: Structure MVC avec middlewares sécurisés
- **Base de données**: MongoDB Atlas + Prisma ORM configurés
- **Authentification**: JWT + cookies HttpOnly + refresh tokens
- **Sécurité**: Protection complète OWASP Top 10
  - Rate limiting intelligent (endpoint-specific)
  - Protection CSRF avec tokens uniques
  - Prévention XSS et injections NoSQL
  - Validation forte des mots de passe
  - Headers de sécurité (CSP, HSTS, etc.)
- **APIs RESTful**: Routes auth complètes avec validation
- **Tests**: Protection contre attaques testées et validées

### 🔄 Frontend - Next.js 16 + Tailwind v4 (EN PRÉPARATION)
- **Structure**: App Router avec organisation par features
- **Authentification**: Intégration avec backend sécurisé
- **Design System**: Components réutilisables avec Tailwind
- **Internationalisation**: Support FR/EN avec next-intl

### 📊 Statistiques Actuelles
- **Backend**: 100% complet et sécurisé
- **Frontend**: 0% (à démarrer)
- **Sécurité**: Niveau production atteint
- **Base de données**: Prête pour l'échelle

---

---

## 10. Services Cloud (Gratuits)

| Service | Usage |
|---------|-------|
| MongoDB Atlas | Base de données (512 MB) |
| Vercel | Hébergement frontend |
| Railway / Render | Hébergement backend |
| Cloudinary | Stockage images (25 GB) |
