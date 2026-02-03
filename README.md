# 🎨 Kraft QR

**A modern, privacy-focused QR Code Generator** built as a Progressive Web App.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://kraft-qr.web.app)
[![Angular](https://img.shields.io/badge/Angular-18.2-red)](https://angular.io)
[![License](https://img.shields.io/badge/license-private-blue)](#)

> **No Ads | No Login | No Bullshit**

## ✨ Features

- **🎯 Instant QR Code Generation** - Real-time preview as you type
- **🎨 Full Customization**
  - Custom foreground and background colors
  - Adjustable size (pixels)
  - Variable error correction levels (L, M, Q, H)
- **📱 Progressive Web App**
  - Installable on iOS and Android
  - Works offline with Service Worker
  - Automatic update notifications
- **🚀 Fast & Lightweight** - Built with Angular 18 and Material Design
- **🔒 Privacy First** - No tracking, no data collection, everything runs client-side
- **💾 Easy Download** - One-click download as PNG

## 🛠️ Tech Stack

- **Framework:** Angular 18.2
- **UI Library:** Angular Material 18.2
- **QR Generation:** [qrcode](https://www.npmjs.com/package/qrcode) library
- **Color Picker:** [@ng-matero/extensions](https://www.npmjs.com/package/@ng-matero/extensions)
- **PWA:** Angular Service Worker
- **Hosting:** Firebase Hosting
- **Database:** Firestore (configured)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- Bun (install if needed):
  ```bash
  curl -fsSL https://bun.sh/install | bash
  ```
- Angular CLI 18.2.6

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd kraft-qr

# Install dependencies
bun install
```

### Development Server

```bash
bun run start
# or
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload when you change source files.

### Build for Production

```bash
bun run build
```

Build artifacts will be stored in the `dist/kraft-qr/browser/` directory.

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `bun run start` | Start development server on `http://localhost:4200` |
| `bun run build` | Build the project for production |
| `bun run watch` | Build in watch mode for development |
| `bun run test` | Run unit tests via Karma |
| `bun run lint` | Lint the codebase with ESLint |

## 🏗️ Project Structure

```bash
kraft-qr/
├── src/
│   ├── app/
│   │   ├── navbar/           # Navigation component
│   │   ├── prompt/           # PWA install prompt
│   │   ├── app.component.ts  # Main QR generator logic
│   │   ├── pwa.service.ts    # PWA installation handling
│   │   └── icons.class.ts    # Material icons configuration
│   ├── assets/
│   │   ├── icons/            # PWA icons
│   │   └── manifest.webmanifest
│   └── styles.scss           # Global styles
├── firebase.json             # Firebase hosting config
├── firestore.rules           # Firestore security rules
└── ngsw-config.json          # Service Worker configuration
```

## 🎨 Customization Options

The QR Code can be customized with:

- **Data:** Any text, URL, or data string
- **Size:** Custom pixel dimensions
- **Error Correction Levels:**
  - L (Low) - 7% damage resistance
  - M (Medium) - 15% damage resistance
  - Q (Quartile) - 25% damage resistance
  - H (High) - 30% damage resistance
- **Colors:** Custom foreground and background colors via color picker

## 📱 PWA Features

- **Installable** on mobile devices (iOS/Android) and desktop
- **Offline functionality** with Service Worker
- **Auto-update prompts** when new versions are available
- **Platform-specific install prompts** for iOS and Android

## 🧪 Testing

```bash
# Run unit tests
bun run test

# Run tests in headless mode
ng test --browsers=ChromeHeadless --watch=false
```

## 🚢 Deployment

The app is configured for Firebase Hosting:

```bash
# Build for production
bun run build

# Deploy to Firebase (requires Firebase CLI)
firebase deploy
```

## 📄 License

This project is private. All rights reserved.

## 🤝 Contributing

This is a private project. If you'd like to contribute, please contact the project owner.

## 🙏 Acknowledgments

- Built with [Angular](https://angular.io)
- UI components by [Angular Material](https://material.angular.io)
- QR Code generation by [node-qrcode](https://github.com/soldair/node-qrcode)
- Color picker from [@ng-matero/extensions](https://github.com/ng-matero/extensions)

---

**Made with ❤️ using Angular**
