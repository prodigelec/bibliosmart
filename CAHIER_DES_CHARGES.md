# 📚 BiblioSmart - Cahier des Charges MODERNE

> Application intelligente de gestion de bibliothèque personnelle avec recommandations IA
> Pour **Laure** et sa famille 💕
> **Design Philosophy**: Modern, Bold, Engaging - Pas minimaliste !

---

## 📝 Notes de Mise à Jour (Février 2026)

### ✅ Changements Majeurs Implémentés
- **ORM**: Migration de Mongoose vers **Prisma** pour une meilleure sécurité et performance
- **Sécurité**: Renforcement complet avec protection OWASP Top 10
- **Architecture**: Backend 100% sécurisé et prêt pour la production
- **Authentification**: Système complet avec cookies HttpOnly et refresh tokens
- **Design**: Architecture moderne, riche et engageante (pas minimaliste)

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
Application **moderne et engageante** pour gérer une bibliothèque personnelle avec des suggestions intelligentes basées sur l'IA. L'expérience utilisateur doit être **riche, interactive et visuellement captivante**.

### 1.2 Objectifs
- Gestion complète de la bibliothèque personnelle avec UX moderne
- Suggestions de lectures personnalisées (100% gratuit)
- Expérience utilisateur **premium et engageante** (web + mobile)
- Synchronisation cloud en temps réel
- Multi-utilisateurs (famille, amis)
- Multi-langues (Français + English)
- **Interface riche en interactions** et micro-animations

### 1.3 Priorités
1. **Phase 1** : Application Web avec design moderne
2. **Phase 2** : Application Mobile native

---

## 2. Architecture Technique

### 2.1 Stack Technologique

| Composant | Technologie | Justification |
|-----------|-------------|---------------|
| **Frontend Web** | Next.js 16 + React 19 | App Router, Server Components, streaming |
| **Styling** | Tailwind CSS v4 | Customization avancée, performances |
| **Animations** | Framer Motion + GSAP | Animations fluides et complexes |
| **UI Components** | shadcn/ui + Custom | Base solide + personnalisation |
| **Icons** | Lucide React + Custom SVG | Icons modernes et cohérentes |
| **Frontend Mobile** | React Native / Expo (Phase 2) | Code partagé avec web |
| **Backend** | Node.js + Express | API RESTful performante |
| **ORM** | Prisma | Type-safety, migrations, DX excellent |
| **Base de données** | MongoDB Atlas (Free Tier) | NoSQL flexible, gratuit |
| **Authentification** | JWT + OAuth2 (Google) + Bcrypt | Multi-provider, sécurisé |
| **Validation** | Zod + Express Validator | Type-safe validation |
| **Sécurité** | Rate limiting, CSRF, XSS protection | Production-ready |
| **IA Suggestions** | Algorithme local + Open Library | 100% gratuit, privacy-first |
| **APIs externes** | Google Books, Open Library | Métadonnées riches |
| **i18n** | next-intl (FR/EN) | Internationalization native |
| **State Management** | Zustand + React Query | État global + cache serveur |
| **Forms** | React Hook Form + Zod | Performance + validation |
| **Charts** | Recharts + D3.js | Visualisations riches |
| **Image Optimization** | Next.js Image + Cloudinary | CDN gratuit, optimisation auto |

### 2.2 Structure du Projet MODERNE

```
📁 bibliosmart/
├── 📁 apps/
│   ├── 📁 web/                    # Next.js 16 App (Monorepo approach)
│   │   ├── 📁 app/
│   │   │   ├── 📁 (auth)/         # Auth flows avec animations
│   │   │   ├── 📁 (main)/         # Dashboard & features
│   │   │   ├── 📁 api/            # API routes Next.js
│   │   │   └── layout.tsx
│   │   ├── 📁 components/
│   │   │   ├── 📁 ui/             # shadcn/ui base
│   │   │   ├── 📁 features/       # Feature-specific components
│   │   │   ├── 📁 layouts/        # Layout components
│   │   │   └── 📁 shared/         # Shared utilities
│   │   ├── 📁 lib/
│   │   │   ├── 📁 animations/     # Framer Motion presets
│   │   │   ├── 📁 hooks/          # Custom React hooks
│   │   │   ├── 📁 utils/          # Helpers
│   │   │   └── 📁 constants/      # Design tokens, configs
│   │   ├── 📁 styles/
│   │   │   ├── globals.css        # Tailwind + custom CSS
│   │   │   └── themes/            # Light/Dark themes
│   │   └── 📁 public/
│   │       ├── 📁 illustrations/  # Custom SVG illustrations
│   │       ├── 📁 animations/     # Lottie files
│   │       └── 📁 fonts/          # Custom fonts
│   │
│   └── 📁 mobile/                 # React Native (Phase 2)
│
├── 📁 packages/                   # Shared packages
│   ├── 📁 ui/                     # Shared UI components
│   ├── 📁 config/                 # Shared configs
│   └── 📁 types/                  # TypeScript types
│
└── 📁 backend/                    # Node.js + Express API
    ├── 📁 src/
    │   ├── 📁 controllers/
    │   ├── 📁 models/             # Prisma models
    │   ├── 📁 routes/
    │   ├── 📁 middleware/
    │   ├── 📁 services/
    │   │   ├── ai-suggestions.service.js
    │   │   ├── books.service.js
    │   │   └── stats.service.js
    │   └── 📁 utils/
    └── 📁 prisma/
        ├── schema.prisma
        └── migrations/
```

### 2.3 Base de Données - MongoDB Atlas

**Free Tier inclut :**
- 512 MB stockage (suffisant pour ~50,000 livres)
- Pas de pause d'inactivité
- 500 connexions simultanées
- Backups automatiques
- Analytics intégrés

---

## 3. Design System MODERNE

### 3.1 Direction Artistique

**Philosophy**: **"Magazine Editorial meets Modern SaaS"**

- **Style** : Éditorial moderne, riche, engageant (PAS minimaliste)
- **Inspiration** : Readwise, Notion, Linear, Arc Browser
- **Mood** : Sophistiqué, chaleureux, immersif
- **Typographie** : Expressive et variée
- **Animations** : Fluides, intentionnelles, délicieuses
- **Modes** : Light + Dark (avec transitions fluides)

### 3.2 Palette de Couleurs MODERNE

```css
/* ============================================
   MODERN PALETTE - BiblioSmart
   ============================================ */

/* --- PRIMARY COLORS (Bleu Profond Moderne) --- */
--primary-50: #EFF6FF;
--primary-100: #DBEAFE;
--primary-200: #BFDBFE;
--primary-300: #93C5FD;
--primary-400: #60A5FA;
--primary-500: #1E3A8A;     /* Bleu principal - plus saturé */
--primary-600: #1E40AF;
--primary-700: #1D4ED8;
--primary-800: #1E3A5F;
--primary-900: #0F172A;

/* --- ACCENT COLORS (Or Moderne & Teal Vibrant) --- */
--gold-50: #FFFBEB;
--gold-100: #FEF3C7;
--gold-200: #FDE68A;
--gold-300: #FCD34D;
--gold-400: #FBBF24;
--gold-500: #D4AF37;       /* Or pur - accent principal */
--gold-600: #D97706;
--gold-700: #B45309;

--teal-50: #F0FDFA;
--teal-100: #CCFBF1;
--teal-200: #99F6E4;
--teal-300: #5EEAD4;
--teal-400: #2DD4BF;       /* Teal éclatant */
--teal-500: #14B8A6;
--teal-600: #0D9488;

/* --- SEMANTIC COLORS (Actions & Feedback) --- */
--coral-400: #FF6B6B;      /* Favoris, ratings */
--lavender-400: #A78BFA;   /* Badges, gamification */
--sage-400: #84CC16;       /* Progression, success */
--amber-400: #FBBF24;      /* Warnings, highlights */

/* --- NEUTRAL COLORS (Backgrounds & Text) --- */
/* Light Theme */
--cream-50: #FFFEF9;       /* Background principal */
--cream-100: #FFF8E7;      /* Cards, surfaces */
--cream-200: #FFF4DB;      /* Borders subtle */

--charcoal-900: #1C1917;   /* Texte principal */
--charcoal-800: #292524;   /* Texte secondaire */
--charcoal-700: #44403C;   /* Texte tertiaire */
--charcoal-600: #57534E;   /* Disabled text */

/* Dark Theme */
--dark-bg-900: #0A0A0A;    /* Background principal */
--dark-bg-800: #1A1612;    /* Cards, surfaces */
--dark-bg-700: #2C2418;    /* Borders, dividers */

--dark-text-50: #FAFAF9;   /* Texte principal */
--dark-text-100: #F5F0E8;  /* Texte secondaire */
--dark-text-200: #E7E5E4;  /* Texte tertiaire */

/* --- GRADIENT PRESETS --- */
--gradient-hero: linear-gradient(135deg, #1E3A8A 0%, #2DD4BF 100%);
--gradient-card: linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%);
--gradient-gold: linear-gradient(135deg, #D4AF37 0%, #FBBF24 100%);
--gradient-dark: linear-gradient(135deg, #1A1612 0%, #0A0A0A 100%);
```

### 3.3 Typographie Expressive

```css
/* ============================================
   TYPOGRAPHY SYSTEM - Moderne & Varié
   ============================================ */

/* --- FONT FAMILIES --- */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Inter:wght@400;500;600;700&family=Bebas+Neue&display=swap');

--font-display: 'Playfair Display', Georgia, serif;  /* Titres imposants */
--font-body: 'Inter', -apple-system, sans-serif;      /* Corps de texte */
--font-accent: 'Bebas Neue', Impact, sans-serif;      /* Stats, chiffres */
--font-mono: 'JetBrains Mono', monospace;             /* Code, ISBN */

/* --- FONT SIZES (Scale Fluide) --- */
--text-xs: clamp(0.75rem, 0.7rem + 0.2vw, 0.875rem);      /* 12-14px */
--text-sm: clamp(0.875rem, 0.8rem + 0.3vw, 1rem);         /* 14-16px */
--text-base: clamp(1rem, 0.95rem + 0.3vw, 1.125rem);      /* 16-18px */
--text-lg: clamp(1.125rem, 1rem + 0.5vw, 1.25rem);        /* 18-20px */
--text-xl: clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem);        /* 20-24px */
--text-2xl: clamp(1.5rem, 1.3rem + 0.8vw, 1.875rem);      /* 24-30px */
--text-3xl: clamp(1.875rem, 1.6rem + 1vw, 2.25rem);       /* 30-36px */
--text-4xl: clamp(2.25rem, 2rem + 1.2vw, 3rem);           /* 36-48px */
--text-5xl: clamp(3rem, 2.5rem + 2vw, 4rem);              /* 48-64px */
--text-6xl: clamp(4rem, 3rem + 3vw, 6rem);                /* 64-96px */

/* --- FONT WEIGHTS --- */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
--font-black: 900;

/* --- LINE HEIGHTS --- */
--leading-tight: 1.2;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;

/* --- LETTER SPACING --- */
--tracking-tighter: -0.05em;
--tracking-tight: -0.025em;
--tracking-normal: 0;
--tracking-wide: 0.025em;
--tracking-wider: 0.05em;
--tracking-widest: 0.1em;
```

### 3.4 Spacing & Layout System

```css
/* ============================================
   SPACING SYSTEM - Rich & Intentional
   ============================================ */

/* --- SPACING SCALE (Plus riche que 4-8-16) --- */
--space-0: 0;
--space-px: 1px;
--space-0.5: 0.125rem;  /* 2px */
--space-1: 0.25rem;     /* 4px */
--space-1.5: 0.375rem;  /* 6px */
--space-2: 0.5rem;      /* 8px */
--space-2.5: 0.625rem;  /* 10px */
--space-3: 0.75rem;     /* 12px */
--space-3.5: 0.875rem;  /* 14px */
--space-4: 1rem;        /* 16px */
--space-5: 1.25rem;     /* 20px */
--space-6: 1.5rem;      /* 24px */
--space-7: 1.75rem;     /* 28px */
--space-8: 2rem;        /* 32px */
--space-9: 2.25rem;     /* 36px */
--space-10: 2.5rem;     /* 40px */
--space-11: 2.75rem;    /* 44px */
--space-12: 3rem;       /* 48px */
--space-14: 3.5rem;     /* 56px */
--space-16: 4rem;       /* 64px */
--space-20: 5rem;       /* 80px */
--space-24: 6rem;       /* 96px */
--space-32: 8rem;       /* 128px */

/* --- CONTAINER SIZES --- */
--container-xs: 20rem;    /* 320px */
--container-sm: 24rem;    /* 384px */
--container-md: 28rem;    /* 448px */
--container-lg: 32rem;    /* 512px */
--container-xl: 36rem;    /* 576px */
--container-2xl: 42rem;   /* 672px */
--container-3xl: 48rem;   /* 768px */
--container-4xl: 56rem;   /* 896px */
--container-5xl: 64rem;   /* 1024px */
--container-6xl: 72rem;   /* 1152px */
--container-7xl: 80rem;   /* 1280px */
```

### 3.5 Shadow System (6 Niveaux)

```css
/* ============================================
   SHADOW SYSTEM - Depth & Elevation
   ============================================ */

/* --- LIGHT THEME SHADOWS --- */
--shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 
             0 1px 2px -1px rgba(0, 0, 0, 0.1);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 
             0 2px 4px -2px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 
             0 4px 6px -4px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 
             0 8px 10px -6px rgba(0, 0, 0, 0.1);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

/* --- COLORED SHADOWS (Pour interactions) --- */
--shadow-primary: 0 10px 25px -5px rgba(30, 58, 138, 0.3);
--shadow-gold: 0 10px 25px -5px rgba(212, 175, 55, 0.3);
--shadow-teal: 0 10px 25px -5px rgba(45, 212, 191, 0.3);

/* --- DARK THEME SHADOWS --- */
--shadow-dark-sm: 0 2px 8px rgba(0, 0, 0, 0.5);
--shadow-dark-md: 0 4px 12px rgba(0, 0, 0, 0.6);
--shadow-dark-lg: 0 8px 24px rgba(0, 0, 0, 0.7);
```

### 3.6 Border Radius System

```css
/* ============================================
   BORDER RADIUS - Rounded & Friendly
   ============================================ */

--radius-none: 0;
--radius-sm: 0.25rem;    /* 4px - Subtle */
--radius-md: 0.5rem;     /* 8px - Standard */
--radius-lg: 0.75rem;    /* 12px - Cards */
--radius-xl: 1rem;       /* 16px - Large cards */
--radius-2xl: 1.5rem;    /* 24px - Hero elements */
--radius-3xl: 2rem;      /* 32px - Modals */
--radius-full: 9999px;   /* Pill buttons */
```

### 3.7 Animation Presets

```css
/* ============================================
   ANIMATION SYSTEM - Smooth & Intentional
   ============================================ */

/* --- DURATIONS --- */
--duration-instant: 100ms;
--duration-fast: 200ms;
--duration-normal: 300ms;
--duration-slow: 500ms;
--duration-slower: 700ms;

/* --- EASINGS (Bezier curves) --- */
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);           /* Standard */
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55); /* Bounce effect */
--ease-snappy: cubic-bezier(0.32, 0, 0.67, 0);         /* Quick start */
--ease-gentle: cubic-bezier(0.33, 1, 0.68, 1);         /* Gentle end */

/* --- KEYFRAME PRESETS --- */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes shimmer {
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes pulse-glow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}
```

---

## 4. Composants UI MODERNES

### 4.1 Component Library

#### **Cards System (3 Niveaux d'Élévation)**

```typescript
// BookCard - Modern & Interactive
interface BookCardProps {
  book: Book;
  variant?: 'subtle' | 'medium' | 'elevated';
  interactive?: boolean;
}

// Variants:
// - subtle: shadow-sm, hover:shadow-md
// - medium: shadow-md, hover:shadow-lg (DEFAULT)
// - elevated: shadow-lg, hover:shadow-xl + hover:scale-[1.02]

// Features:
// ✓ 3D hover effect (transform perspective)
// ✓ Progress ring animé
// ✓ Quick actions overlay (fade in)
// ✓ Status badge (coloré, animé)
// ✓ Rating stars interactives
```

#### **Buttons System**

```typescript
// Modern Button Variants
type ButtonVariant = 
  | 'primary'     // Gradient background
  | 'secondary'   // Outlined
  | 'ghost'       // Transparent hover
  | 'gradient'    // Gold gradient
  | 'glow'        // Avec glow effect

// Sizes: xs, sm, md (default), lg, xl

// Features:
// ✓ Ripple effect au click
// ✓ Loading state avec spinner
// ✓ Icon support (left/right)
// ✓ Disabled state smooth
```

#### **Input System**

```typescript
// Modern Input avec animations
interface InputProps {
  label: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'filled' | 'floating';
  withValidation?: boolean;
}

// Features:
// ✓ Floating label animation
// ✓ Icon avec animation
// ✓ Validation visuelle (success/error)
// ✓ Character count animé
// ✓ Focus glow effect
```

#### **Modal/Dialog System**

```typescript
// Modern Modal avec Glassmorphism
interface ModalProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'fullscreen';
  backdrop?: 'blur' | 'dark' | 'light';
  animation?: 'fade' | 'scale' | 'slideUp';
}

// Features:
// ✓ Backdrop blur (glassmorphism)
// ✓ Smooth open/close animations
// ✓ Focus trap
// ✓ Escape key handling
// ✓ Scroll lock
```

### 4.2 Feature Components RICHES

#### **Dashboard Hero Section**

```typescript
// Hero moderne avec personnalisation
<DashboardHero>
  {/* Greeting dynamique avec heure du jour */}
  <DynamicGreeting name="Laure" />
  
  {/* Citation littéraire aléatoire */}
  <QuoteCarousel quotes={literaryQuotes} />
  
  {/* Quick stats animées */}
  <StatsRow>
    <StatCard 
      icon="📖" 
      value={totalBooks} 
      label="Livres" 
      trend="+12%" 
      animated 
    />
    <StatCard 
      icon="🔥" 
      value={currentStreak} 
      label="Jours consécutifs" 
      glowing 
    />
  </StatsRow>
</DashboardHero>
```

#### **Reading Progress Widget**

```typescript
// Widget de progression moderne
<ReadingProgressWidget>
  {/* Livres en cours avec progress ring animé */}
  <CurrentlyReading books={currentBooks}>
    {books.map(book => (
      <BookProgressCard
        key={book.id}
        cover={book.coverImage}
        progress={book.progress}
        // Animations:
        // - Progress ring avec gradient
        // - Hover: zoom cover + show excerpt
        // - Click: open detail modal
      />
    ))}
  </CurrentlyReading>
  
  {/* Graph de lecture hebdomadaire */}
  <WeeklyReadingChart 
    data={weeklyData}
    animated
    interactive
  />
</ReadingProgressWidget>
```

#### **AI Suggestions Carousel**

```typescript
// Carousel moderne de suggestions
<SuggestionsCarousel>
  {/* Scroll snap horizontal */}
  <CarouselTrack snapToCenter>
    {suggestions.map(book => (
      <SuggestionCard
        key={book.id}
        book={book}
        matchScore={book.aiScore}
        // Features:
        // - Parallax effect au scroll
        // - Preview au hover (excerpt + pourquoi suggéré)
        // - Quick add to wishlist
        // - Smooth remove animation
      />
    ))}
  </CarouselTrack>
  
  {/* Navigation dots interactive */}
  <CarouselDots />
</SuggestionsCarousel>
```

#### **Reading Streak Heatmap**

```typescript
// Heatmap style GitHub
<ReadingStreakHeatmap>
  {/* Calendrier des 365 derniers jours */}
  <HeatmapCalendar 
    data={readingActivity}
    // Colors: sage gradient (no activity → max activity)
    colorScale={['#f0f9ff', '#84CC16']}
    // Hover tooltip: "3 livres lus ce jour"
    interactive
  />
  
  {/* Stats de streak */}
  <StreakStats>
    <FireIcon animated={isStreakActive} />
    <StreakCount value={currentStreak} />
    <StreakBest value={longestStreak} />
  </StreakStats>
</ReadingStreakHeatmap>
```

### 4.3 Empty States & Illustrations

```typescript
// Empty states engageants (PAS tristes)
<EmptyState
  illustration={<CustomSVG name="empty-library" />}
  // Illustration custom colorée et animée
  title="Votre bibliothèque attend ses premiers livres"
  description="Commencez par ajouter un livre que vous avez adoré"
  cta={{
    label: "Ajouter mon premier livre",
    icon: <PlusIcon />,
    onClick: openAddBookModal
  }}
  // Animation: float sur l'illustration
/>
```

### 4.4 Loading States

```typescript
// Skeleton loaders animés (PAS de spinners basiques)
<BookCardSkeleton 
  variant="shimmer" // shimmer animation
  count={6}
/>

<LoadingState
  type="pulse" // pulse | shimmer | wave
  message="Chargement de vos livres..."
/>

// Suspense boundaries avec animations
<Suspense fallback={<LibraryGridSkeleton />}>
  <LibraryGrid />
</Suspense>
```

---

## 5. Écrans Principaux MODERNES

### 5.1 **Onboarding Flow** (Première connexion)

```
┌─────────────────────────────────────────────────┐
│  Étape 1/3 - Bienvenue                          │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │
│                                                  │
│  [Illustration animée: Livres qui volent]       │
│                                                  │
│  Bienvenue dans BiblioSmart! 👋                 │
│  Votre bibliothèque personnelle intelligente    │
│                                                  │
│  [ Continuer → ]                                │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  Étape 2/3 - Vos préférences                    │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │
│                                                  │
│  Quels genres aimez-vous?                       │
│  [Chips interactives multi-select avec icons]   │
│  ○ 📚 Fiction      ○ 🔬 Science                │
│  ○ 🕵️ Polar       ○ 💼 Business               │
│  ○ 🎭 Théâtre     ○ 🧘 Développement personnel │
│                                                  │
│  Objectif de lecture annuel:                    │
│  [Slider interactif: 12 à 100 livres]           │
│  ────●─────────── 24 livres                    │
│                                                  │
│  [ ← Retour ]  [ Continuer → ]                 │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  Étape 3/3 - Thème & Langue                     │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │
│                                                  │
│  Thème:                                          │
│  [Toggle animé Light/Dark avec preview]         │
│  ☀️ Clair  ●━━━○  🌙 Sombre                    │
│                                                  │
│  Langue:                                         │
│  ○ 🇫🇷 Français    ○ 🇬🇧 English              │
│                                                  │
│  [ ← Retour ]  [ C'est parti! 🚀 ]             │
└─────────────────────────────────────────────────┘
```

### 5.2 **Dashboard** (Vue principale MODERNE)

```
┌─────────────────────────────────────────────────────────────────┐
│  BiblioSmart                            🔔 👤 Laure      ⚙️     │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  🌅 Bon après-midi, Laure                          ☀️ 14:32     │
│  "La lecture est une porte vers des milliers de vies"           │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  📊 VOS STATS CETTE SEMAINE                              │  │
│  │  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐                │  │
│  │  │ 📖 5 │  │ 🔥12 │  │ ⭐4.3│  │ ✅78%│                │  │
│  │  │Livres│  │Jours │  │Note  │  │Goal  │                │  │
│  │  └──────┘  └──────┘  └──────┘  └──────┘                │  │
│  │  [Mini graph: pages lues par jour, animé]                │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                  │
│  📖 EN COURS DE LECTURE                          [Tout voir →] │
│  ┌────────────┬────────────┬────────────┐                      │
│  │ [Cover]    │ [Cover]    │ [Cover]    │                      │
│  │ Title...   │ Title...   │ Title...   │                      │
│  │ ●●●●●●○○ 78│ ●●●○○○○○ 34│ ●○○○○○○○ 12│   ← Progress ring   │
│  │ [Continuer]│ [Continuer]│ [Continuer]│                      │
│  └────────────┴────────────┴────────────┘                      │
│                                                                  │
│  ✨ SUGGESTIONS POUR VOUS                        [Refresh 🔄]  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  [Carousel horizontal avec snap scroll]                 │   │
│  │  ┌───────┐  ┌───────┐  ┌───────┐  ┌───────┐           │   │
│  │  │[Cover]│  │[Cover]│  │[Cover]│  │[Cover]│           │   │
│  │  │Title  │  │Title  │  │Title  │  │Title  │           │   │
│  │  │93% ♥  │  │87% ♥  │  │91% ♥  │  │88% ♥  │  ← AI %   │   │
│  │  │[+ WL] │  │[+ WL] │  │[+ WL] │  │[+ WL] │           │   │
│  │  └───────┘  └───────┘  └───────┘  └───────┘           │   │
│  │  ○ ○ ● ○ ○  ← Dots navigation                          │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│  🎯 OBJECTIF 2026                                               │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  24 livres                                                │  │
│  │  ████████████████░░░░░░░░░░░░ 18/24 (75%)               │  │
│  │  🎉 Vous êtes en avance sur votre objectif!              │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 5.3 **Bibliothèque** (Vue grille MODERNE)

```
┌─────────────────────────────────────────────────────────────────┐
│  📚 Ma Bibliothèque                                    124 livres│
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  [Barre de recherche avec icon + suggestions temps réel]        │
│  🔍 Rechercher par titre, auteur, ISBN...                       │
│                                                                  │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │ Filtres:                                     [Vue: ▦ ☰ ]   │ │
│  │ ◉ Tous  ○ À lire  ○ En cours  ○ Lus  ○ Wishlist           │ │
│  │                                                              │ │
│  │ 🏷️ Tags: [All ▼] [Fiction ×] [Favoris ×]                  │ │
│  │ ⭐ Note: [Toutes ▼]                                         │ │
│  │ 🗂️ Étagère: [Toutes ▼]                                     │ │
│  │                                                              │ │
│  │ Trier par: [Plus récent ▼]                    [Effacer]    │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                  │
│  ┌─────┬─────┬─────┬─────┬─────┬─────┐  ← Grille responsive   │
│  │[CVR]│[CVR]│[CVR]│[CVR]│[CVR]│[CVR]│                         │
│  │Title│Title│Title│Title│Title│Title│                         │
│  │⭐4.5│⭐4.8│⭐3.9│⭐5.0│⭐4.2│⭐4.6│                         │
│  │ 78% │ ✓   │ ✓   │ ✓   │ 45% │WList│  ← Status              │
│  │[···]│[···]│[···]│[···]│[···]│[···]│  ← Quick menu          │
│  ├─────┼─────┼─────┼─────┼─────┼─────┤                         │
│  │[CVR]│[CVR]│[CVR]│[CVR]│[CVR]│[CVR]│                         │
│  │Title│Title│Title│Title│Title│Title│                         │
│  │⭐4.1│⭐4.9│⭐3.5│⭐4.7│⭐5.0│⭐4.3│                         │
│  │ ✓   │ 91% │WList│ ✓   │ ✓   │ 23% │                         │
│  │[···]│[···]│[···]│[···]│[···]│[···]│                         │
│  └─────┴─────┴─────┴─────┴─────┴─────┘                         │
│                                                                  │
│  [Load more... / Infinite scroll]                               │
│                                                                  │
│  [+ FAB Button: Ajouter un livre]  ← Floating Action Button    │
└─────────────────────────────────────────────────────────────────┘
```

### 5.4 **Détail Livre** (Modal IMMERSIVE)

```
┌───────────────────────────────────────────────────────────────┐
│  ← Retour à la bibliothèque                              [×]  │
├───────────────────────────────────────────────────────────────┤
│                                                                │
│  ┌──────────────┐  L'Alchimiste                              │
│  │              │  Paulo Coelho                               │
│  │   [COVER]    │  ⭐⭐⭐⭐⭐ 4.8 / 5                         │
│  │   IMAGE      │                                             │
│  │   GRANDE     │  📖 Fiction · Philosophique                │
│  │              │  📄 208 pages · 🌍 1988                    │
│  │              │                                             │
│  └──────────────┘  Status: ◉ En cours de lecture             │
│                    Progress: ●●●●●●●○○○ 78%                  │
│                    [────────●───────] 163/208 pages          │
│                                                                │
│  ┌──────────────────────────────────────────────────────────┐ │
│  │  📝 MES NOTES                                  [Éditer]  │ │
│  │  "Un livre magnifique sur la quête de soi..."            │ │
│  │                                                           │ │
│  │  💬 CITATIONS FAVORITES                        [+ Ajouter│ │
│  │  "Quand tu veux quelque chose, tout l'Univers..."        │ │
│  │  "C'est la possibilité de réaliser un rêve qui..."       │ │
│  └──────────────────────────────────────────────────────────┘ │
│                                                                │
│  📖 RÉSUMÉ                                                     │
│  Santiago, un jeune berger andalou, part à la recherche...   │
│  [Texte tronqué] [Lire plus ↓]                               │
│                                                                │
│  🏷️ TAGS                                                      │
│  [Fiction] [Philosophie] [Voyage] [Favoris] [+ Ajouter]      │
│                                                                │
│  🗂️ ÉTAGÈRES                                                  │
│  [Classiques] [À relire] [+ Ajouter à une étagère]           │
│                                                                │
│  📊 HISTORIQUE                                                 │
│  • Ajouté le: 15 janv. 2026                                   │
│  • Commencé le: 20 janv. 2026                                 │
│  • Dernière lecture: Aujourd'hui à 14:30                      │
│                                                                │
│  🔗 ACTIONS                                                    │
│  [Prêter ce livre] [Marquer comme lu] [Supprimer]            │
│                                                                │
│  📚 LIVRES SIMILAIRES                                          │
│  [Mini carousel: 4 suggestions]                               │
│                                                                │
└───────────────────────────────────────────────────────────────┘
```

### 5.5 **Statistiques** (Analytics RICHES)

```
┌─────────────────────────────────────────────────────────────────┐
│  📊 Vos Statistiques                                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Période: [Cette année ▼]  Du 1 jan au 11 fév 2026             │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  OVERVIEW                                                 │  │
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐    │  │
│  │  │   18    │  │  3,240  │  │   4.6   │  │   12    │    │  │
│  │  │ Livres  │  │  Pages  │  │ Note ⭐ │  │ Jours 🔥│    │  │
│  │  │   lus   │  │  lues   │  │ moyenne │  │ de suite│    │  │
│  │  │ +15% ↗  │  │ +22% ↗  │  │ +0.3 ↗  │  │ Record! │    │  │
│  │  └─────────┘  └─────────┘  └─────────┘  └─────────┘    │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  📈 PROGRESSION DE LECTURE                               │  │
│  │  [Line chart animé: pages lues par semaine]              │  │
│  │  ┌─────────────────────────────────────────────────────┐ │  │
│  │  │ Pages                                                │ │  │
│  │  │ 400│                                        ╱╲       │ │  │
│  │  │ 300│                              ╱╲      ╱  ╲      │ │  │
│  │  │ 200│                    ╱╲      ╱  ╲    ╱    ╲     │ │  │
│  │  │ 100│          ╱╲      ╱  ╲    ╱    ╲  ╱      ╲    │ │  │
│  │  │   0└────────────────────────────────────────────────│ │  │
│  │  │     Jan  Fév  Mar  Avr  Mai  Jun  Jul  Aoû  Sep    │ │  │
│  │  └─────────────────────────────────────────────────────┘ │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                  │
│  ┌───────────────────┬──────────────────────────────────────┐  │
│  │  🎭 GENRES        │  👥 AUTEURS                          │  │
│  │  [Donut chart]    │  [Bar chart horizontal]              │  │
│  │                   │  Paulo Coelho    ████████ 8          │  │
│  │   Fiction 45%     │  Haruki Murakami ██████ 6            │  │
│  │   Polar 25%       │  Yuval Noah...   █████ 5             │  │
│  │   Science 20%     │  Stephen King    ████ 4              │  │
│  │   Autre 10%       │  Agatha Christie ███ 3               │  │
│  └───────────────────┴──────────────────────────────────────┘  │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  🔥 ACTIVITÉ DE LECTURE (Heatmap style GitHub)           │  │
│  │  [365 jours de l'année en grid]                          │  │
│  │  Moins ░░▒▒▓▓██ Plus                                     │  │
│  │  Jan │░░▒██▓▒░░▒▓██▒░░▓██▒░░▒▓█                         │  │
│  │  Fév │▒░▓██▒░░▒▓██▒░                                     │  │
│  │  ... │                                                    │  │
│  │  18 jours avec lecture cette année                       │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  🏆 TOP 5 LIVRES DE L'ANNÉE                              │  │
│  │  1. 📖 L'Alchimiste          ⭐ 5.0  👁️ 2 lectures      │  │
│  │  2. 📖 1984                  ⭐ 4.9  💬 8 citations      │  │
│  │  3. 📖 Sapiens               ⭐ 4.8  ⏱️ 12h lecture      │  │
│  │  4. 📖 Le Petit Prince       ⭐ 4.8  ❤️ Favori           │  │
│  │  5. 📖 Harry Potter 1        ⭐ 4.7  🔄 Relecture        │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                  │
│  [📥 Exporter mes stats (PDF)]                                 │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 6. Micro-interactions & Animations

### 6.1 Animations Intentionnelles

```typescript
// Exemples d'animations modernes

// 1. Page transitions (Framer Motion)
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

// 2. Hover effects sur BookCard
.book-card {
  transition: all 0.3s var(--ease-smooth);
}
.book-card:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: var(--shadow-primary);
}

// 3. Progress ring animé
@keyframes progress-fill {
  from { stroke-dashoffset: 100; }
  to { stroke-dashoffset: calc(100 - progress); }
}

// 4. Confettis quand livre terminé
import confetti from 'canvas-confetti';
confetti({
  particleCount: 100,
  spread: 70,
  origin: { y: 0.6 }
});

// 5. Skeleton loading avec shimmer
.skeleton {
  background: linear-gradient(
    90deg,
    #f0f0f0 25%,
    #e0e0e0 50%,
    #f0f0f0 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

// 6. Ripple effect sur boutons
// (Material Design inspired)

// 7. Smooth scroll snap pour carousels
.carousel {
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
}

// 8. Toast notifications avec slide in
const toast = {
  initial: { x: 400, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 400, opacity: 0 }
};
```

### 6.2 Gestures (Mobile-first)

```typescript
// Swipe gestures avec Framer Motion
import { motion } from 'framer-motion';

<motion.div
  drag="x"
  dragConstraints={{ left: 0, right: 0 }}
  onDragEnd={(e, info) => {
    if (info.offset.x > 100) {
      // Swipe right → Marquer comme lu
      markAsRead();
    } else if (info.offset.x < -100) {
      // Swipe left → Ajouter à wishlist
      addToWishlist();
    }
  }}
>
  <BookCard />
</motion.div>
```

---

## 7. Fonctionnalités ENRICHIES

### 7.1 📖 Gestion de la Bibliothèque (Features MODERNES)

| Fonctionnalité | Description | UX Moderne | Priorité |
|----------------|-------------|------------|----------|
| Ajout de livres | Scan ISBN, recherche, saisie manuelle | Modal avec steps + animations | 🔴 Haute |
| Infos automatiques | Couverture, résumé via Google Books | Auto-fill avec loading states | 🔴 Haute |
| Organisation | Étagères virtuelles, tags, catégories | Drag & drop, color coding | 🔴 Haute |
| Statut lecture | À lire, En cours (%), Lu, Abandonné | Quick actions + progress ring | 🔴 Haute |
| Notes & Citations | Notes privées, citations favorites, rating | Rich text editor, quote cards | 🟡 Moyenne |
| Wishlist | Liste de souhaits avec priorités | Swipeable cards, priority sorting | 🟡 Moyenne |
| Recherche avancée | Filtres multiples, recherche floue | Instant search avec highlights | 🔴 Haute |
| Vues multiples | Grille, liste, timeline | Animated transitions entre vues | 🟡 Moyenne |

### 7.2 🎯 Suggestions Intelligentes (IA MODERNE)

| Fonctionnalité | Description | UX Moderne | Priorité |
|----------------|-------------|------------|----------|
| Analyse préférences | ML local sur genres/auteurs | Progress indicators, insights | 🔴 Haute |
| Recommandations | Suggestions basées historique | AI confidence % affiché | 🔴 Haute |
| Par humeur | "Je veux lire quelque chose de..." | Natural language input | 🟡 Moyenne |
| Chatbot littéraire | Assistant IA pour conseils | Conversational UI moderne | 🟡 Moyenne |
| Livres similaires | "Si vous avez aimé X..." | Visual similarity graph | 🟡 Moyenne |
| Discovery feed | Flux personnalisé de nouveautés | Infinite scroll, swipe actions | 🟢 Basse |

### 7.3 📊 Statistiques (Analytics VISUELS)

| Fonctionnalité | Description | UX Moderne | Priorité |
|----------------|-------------|------------|----------|
| Dashboard visuel | Graphiques interactifs | D3.js charts, animations | 🔴 Haute |
| Stats temporelles | Livres par période | Timeline interactive | 🟡 Moyenne |
| Heatmap activité | Calendrier style GitHub | Hover tooltips, zoom | 🟡 Moyenne |
| Comparatifs | Vs objectifs, vs année passée | Comparison sliders | 🟢 Basse |
| Année en revue | Récap annuel type Spotify Wrapped | Fullscreen story format | 🟢 Basse |
| Export stats | PDF/CSV avec visualisations | Branded PDF template | 🟢 Basse |

### 7.4 🎮 Gamification (Engagement MODERNE)

| Fonctionnalité | Description | UX Moderne | Priorité |
|----------------|-------------|------------|----------|
| Challenges | Objectifs personnels | Progress cards avec rewards | 🟡 Moyenne |
| Badges | Accomplissements débloqués | Animated unlock, collection | 🟢 Basse |
| Streaks | Jours consécutifs de lecture | Fire animation, reminders | 🟡 Moyenne |
| Leaderboard | Classement entre amis | Competitive widget | 🟢 Basse |
| Rewards | Points, niveaux | Level up animations | 🟢 Basse |

### 7.5 🔗 Fonctionnalités Sociales

| Fonctionnalité | Description | UX Moderne | Priorité |
|----------------|-------------|------------|----------|
| Prêts de livres | Suivi des livres prêtés | Timeline view, reminders | 🟡 Moyenne |
| Partage de listes | Partager étagères/wishlists | One-click share links | 🟢 Basse |
| Clubs de lecture | Groupes de discussion | Chat interface | 🟢 Basse |
| Recommandations amis | "Laure recommande..." | Social feed | 🟢 Basse |

### 7.6 ⚡ Autres Features MODERNES

| Fonctionnalité | Description | UX Moderne | Priorité |
|----------------|-------------|------------|----------|
| Mode hors-ligne | Consultation sans connexion | Sync indicator, cached data | 🟡 Moyenne |
| Dark mode | Thème sombre auto | Smooth toggle, time-based | 🔴 Haute |
| Shortcuts clavier | Raccourcis power-users | Command palette (Cmd+K) | 🟡 Moyenne |
| Voice input | Dictée notes/recherche | Waveform animation | 🟢 Basse |
| PWA | Install comme app | Install prompt, offline | 🟡 Moyenne |
| Notifications | Rappels, nouveautés | Rich notifications | 🟢 Basse |

---

## 8. Modèle de Données - Prisma ORM (INCHANGÉ)

### 8.1 Configuration Prisma
```prisma
// schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}
```

### 8.2 Modèle User
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
  
  // Préférences de lecture (NOUVEAU)
  favoriteGenres String[] // ['Fiction', 'Polar', ...]
  
  // Statistiques
  totalBooksRead Int @default(0)
  currentStreak  Int @default(0)
  longestStreak  Int @default(0)
  readingGoal    Int @default(24)
  
  // Gamification (NOUVEAU)
  points    Int @default(0)
  level     Int @default(1)
  badges    String[] // IDs des badges débloqués
  
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

### 8.3 Modèle Book (ENRICHI)
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
  language    String?
  
  // Données personnelles
  status      String // 'wishlist' | 'to_read' | 'reading' | 'completed' | 'abandoned'
  progress    Int    @default(0) // Pourcentage (0-100)
  currentPage Int    @default(0) // Page actuelle
  rating      Int?   // 1-5 étoiles
  review      String?
  
  // Notes enrichies (NOUVEAU)
  notes       Json?  // Rich text notes
  quotes      Json[] // Array of {text, page, date}
  
  // Organisation
  shelves String[] // Étagères personnalisées
  tags    String[]
  isFavorite Boolean @default(false)
  
  // Priorité wishlist (NOUVEAU)
  wishlistPriority Int? // 1-5
  
  // Relations
  user      User       @relation(fields: [userId], references: [id], onDelete: Cascade)
  bookLoans BookLoan[]
  
  // Timestamps lecture
  dateAdded     DateTime @default(now())
  dateStarted   DateTime?
  dateCompleted DateTime?
  lastReadAt    DateTime? // NOUVEAU: dernière session de lecture
  
  @@map("books")
}
```

### 8.4 Modèle BookLoan (INCHANGÉ)
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

### 8.5 Modèle Session (INCHANGÉ)
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

### 8.6 Modèle ReadingActivity (NOUVEAU - Pour Heatmap)
```prisma
model ReadingActivity {
  id        String   @id @default(cuid()) @map("_id")
  userId    String
  date      DateTime // Date du jour (sans heure)
  pagesRead Int      @default(0)
  booksRead String[] // IDs des livres lus ce jour
  
  createdAt DateTime @default(now())
  
  @@unique([userId, date])
  @@map("reading_activities")
}
```

---

## 9. APIs Externes (100% Gratuites - INCHANGÉ)

| API | Usage | Limite | Coût |
|-----|-------|--------|------|
| Google Books API | Métadonnées livres, couvertures | 1000 req/jour | ✅ Gratuit |
| Open Library API | Détails livres, auteurs, sujets | Illimité | ✅ Gratuit |
| LibraryThing | Recommandations similaires | 1000 req/jour | ✅ Gratuit |
| Cloudinary | Stockage images, optimisation | 25 GB/mois | ✅ Gratuit |

---

## 10. Sécurité (INCHANGÉE - Déjà Production-Ready) 🔐

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
- ✅ Rate limiting avancé
- ✅ Headers sécurisés (CSP, HSTS, etc.)
- ✅ Protection contre injections NoSQL
- ✅ Protection timing attack
- ✅ Cookies sécurisés (HttpOnly, SameSite: Strict)

### Conformité
- ✅ RGPD : export et suppression données
- ✅ Logs d'audit des connexions

---

## 11. Roadmap MODERNE & Avancement

### ✅ Phase 1 : MVP + Design System (4-6 semaines) - EN COURS
- [x] Setup projet (Next.js 16 + Tailwind v4 + Express)
- [x] Configuration MongoDB Atlas avec Prisma ORM
- [x] Authentification sécurisée complète
- [x] Sécurité renforcée (production-ready)
- [ ] **Design System complet** (composants modernes)
- [ ] **Dashboard moderne** avec animations
- [ ] CRUD livres avec UX riche
- [ ] Intégration Google Books API
- [ ] Dark mode avec transition fluide

### 🔄 Phase 2 : Core Features + UX Rich (4-6 semaines)
- [ ] Recherche avancée avec instant search
- [ ] Statistiques avec charts interactifs
- [ ] Heatmap de lecture (GitHub style)
- [ ] Notes enrichies + citations
- [ ] Étagères avec drag & drop
- [ ] Progress tracking avec animations
- [ ] Skeleton loaders partout
- [ ] Command palette (Cmd+K)

### 📚 Phase 3 : Intelligence + Engagement (3-4 semaines)
- [ ] Algorithme de recommandations ML
- [ ] Intégration Open Library
- [ ] Suggestions par humeur (NLP)
- [ ] Chatbot littéraire
- [ ] Gamification (badges, streaks)
- [ ] Challenges de lecture
- [ ] Social features basiques

### 🎨 Phase 4 : Polish + PWA (2-3 semaines)
- [ ] Animations avancées (GSAP)
- [ ] Micro-interactions partout
- [ ] Illustrations custom
- [ ] Mode hors-ligne (PWA)
- [ ] Notifications push
- [ ] Performance optimization
- [ ] A11y (accessibility)
- [ ] i18n complet (FR/EN)

### 🚀 Phase 5 : Launch + Mobile (3-4 semaines)
- [ ] Tests E2E complets
- [ ] SEO optimization
- [ ] Analytics intégration
- [ ] Déploiement production
- [ ] React Native app (iOS/Android)
- [ ] App Store / Play Store

---

## 12. Statistiques Actuelles du Projet

### 📊 Avancement Global
- **Backend**: ████████████████████ 100% ✅ (Production-ready)
- **Frontend**: ░░░░░░░░░░░░░░░░░░░░ 0% (À démarrer)
- **Design System**: ░░░░░░░░░░░░░░░░░░░░ 0% (Spécifié ici)
- **Sécurité**: ████████████████████ 100% ✅ (Enterprise-grade)
- **Base de données**: ████████████████████ 100% ✅ (Prête)

### 🎯 Prochaines Étapes Immédiates
1. Créer le Design System React (composants de base)
2. Implémenter le Dashboard moderne
3. Créer les animations et transitions
4. Intégrer l'authentification frontend
5. Développer la bibliothèque avec filtres

---

## 13. Services Cloud (Gratuits - INCHANGÉ)

| Service | Usage | Plan Gratuit |
|---------|-------|--------------|
| MongoDB Atlas | Base de données | 512 MB |
| Vercel | Hébergement frontend | Illimité |
| Railway / Render | Hébergement backend | 500h/mois |
| Cloudinary | Stockage images | 25 GB |
| GitHub | Code repository | Illimité |

---

## 14. Checklist Design Moderne ✓

### ✅ Ce qui rend BiblioSmart MODERNE (pas minimaliste)

- ✓ **Animations fluides** partout (Framer Motion + GSAP)
- ✓ **Micro-interactions** intentionnelles
- ✓ **Design System riche** (6 niveaux shadows, gradients)
- ✓ **Typographie expressive** (3 font families)
- ✓ **Couleurs vibrantes** (pas de gris plat)
- ✓ **Glassmorphism** subtil (modals, overlays)
- ✓ **Progress indicators** animés
- ✓ **Skeleton loaders** (pas de spinners)
- ✓ **Empty states** engageants avec illustrations
- ✓ **Charts interactifs** (D3.js, Recharts)
- ✓ **Heatmaps** style GitHub
- ✓ **Carousels** avec snap scroll
- ✓ **Command palette** (Cmd+K)
- ✓ **Swipe gestures** (mobile)
- ✓ **Rich tooltips** avec contexte
- ✓ **Toast notifications** animées
- ✓ **Confettis** pour célébrations
- ✓ **Dark mode** avec transition fluide
- ✓ **3D hover effects** subtils
- ✓ **Loading states** progressifs

---

## 15. Inspirations Design

### Références Visuelles
- **Readwise**: Dashboard de lecture moderne
- **Notion**: Rich editing, clean UI
- **Linear**: Animations fluides, command palette
- **Arc Browser**: Gradients, modern colors
- **Stripe**: Typography, spacing
- **Vercel**: Dark mode, transitions
- **GitHub**: Heatmap, contribution graph
- **Spotify**: Year in review, stats

### Mood Board
- Magazine editorial moderne
- Clean mais pas minimaliste
- Chaleureux et engageant
- Sophistiqué sans être froid
- Playful mais professionnel

---

**Créé avec ❤️ pour Laure et sa famille**
**Version 2.0 - Moderne & Engageant - Février 2026**