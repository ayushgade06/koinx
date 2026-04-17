# KoinX Tax Loss Harvesting Tool

A professional-grade, high-fidelity React dashboard for optimizing tax liabilities through strategic tax loss harvesting. Designed for the KoinX Frontend Intern Assignment.

## 🚀 Live Demo
[Deplolyed Link (Vercel/Netlify)](#)

## ✨ Features
- **Real-time Tax Calculations**: Instantly see how specific holdings impact your short-term and long-term capital gains.
- **Dynamic Portfolio Optimization**: Select/deselect assets to see optimized "After Harvesting" projections.
- **Dual Theme Support**: Premium Light and Dark mode implementation with a minimalistic aesthetic toggle.
- **Custom Aesthetic Tooltips**: High-fidelity, perfectly aligned tooltips for price data, providing precision on hover (matches Figma prototype).
- **Advanced Data Table**:
  - Real-time selection tracking.
  - Multi-column sorting (Asset, STCG, LTCG).
  - "View All" functionality for large portfolios.
  - Automatic "Amount to Sell" population.
- **Micro-interactions**: Expandable disclaimers, info modals, sliding theme toggles, and smart loading states.

## 🛠️ Tech Stack
- **Framework**: React 18 with Vite
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS
- **State Management**: Context API (Prop-drill free architecture)
- **Icons/Assets**: Lucide-inspired components & CoinGecko Oracle images.
- **Formatting**: Intl API for robust currency and number formatting ($ USD & Indian locale ready).

## 💡 Implementation Details & Bonus Points
- ✅ **Mobile Responsiveness**: Fully fluid layout that adapts from ultra-wide monitors to mobile screens.
- ✅ **Clean Architecture**: Decoupled business logic (calculations) from UI components for high maintainability.
- ✅ **Visual Feedback**: Transition effects on row selection, hover states, and loading animations.
- ✅ **Sorting & Batching**: Implemented logical sorting and "Select All" batching functionality.
- ✅ **API Mocking**: Robust service layer using Promises to simulate real-world API latencies and error boundaries.

## 📸 Screenshots
*(Add your screenshots here after deploying)*

| Pre-Harvesting State | Selection Interaction |
| --- | --- |
| ![Dashboard Overview](https://via.placeholder.com/800x450?text=KoinX+Dashboard) | ![Harvesting Logic](https://via.placeholder.com/800x450?text=Selection+Interaction) |

## ⚙️ Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/ayushgade06/koinx.git
   cd koinx
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 📝 Assumptions
- **Price Reliability**: Used CoinGecko as the primary oracle for asset logos and current prices.
- **Tax Rules**: Followed the provided logic where STCG and LTCG are calculated independently before being summed for "Realised Capital Gains."
- **Currency**: Matched the visual requirement for USD ($) as per the design prototype, while maintaining logic for local alternatives.
- **Sorting**: Implemented descending order as default for financial gains to prioritize high-impact assets first.

---
Developed with by [Ayush Gade](https://github.com/ayushgade06)

