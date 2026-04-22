# Lingo Dashboard MVP

A premium, mobile-first dashboard for Lingo - Morocco's high-end English speaking system.

## 🎨 Brand Identity

**Colors:**
- Royal Blue: `#5170ff` (Primary brand color, trust & learning)
- Soft Pink: `#ff66c4` (Energy & urgency)
- Clean White: `#FFFFFF` (Premium & minimalist)

**Typography:**
- Headers: **League Spartan** (Bold, 700-900 weights)
- UI Elements: **Poppins** (Regular to Bold, 400-700 weights)

**Tone:** Direct, motivating, bilingual (English + Moroccan Darija in Arabic script)

## 📱 Features

### 1. User Profile Card
- Name, level, and avatar
- **Days of Speaking** streak counter (gamification)
- Motivational tagline

### 2. Next Battle Card (Premium CTA)
- Prominent gradient background with pulse animation
- Session topic, date, and time
- Countdown timer
- "Join Battle Now" CTA button
- Bilingual micro-copy

### 3. Your Evolution (Stats Grid)
- Hours Spent Speaking (progress bar)
- Drills Completed (progress bar)
- 3-Month Goal overall progress
- Visual feedback with brand colors

### 4. Drill Station
- Daily speaking exercises (5-minute tasks)
- Interactive checkmark system
- Cards turn royal blue when completed
- "Unfreeze Your Tongue" CTA
- Voice recording prompts

### 5. Archive & Recordings
- Previous session list
- Watch Recording buttons
- Expandable Key Vocabulary (5 words per session)
- Clean date formatting

### 6. Direct Line Support
- Floating WhatsApp button
- "Talk to Lina" (teacher contact)
- Fixed position, always accessible
- Green WhatsApp branding

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will run on `http://localhost:5173`

## 📂 Project Structure

```
lingo-dashboard/
├── src/
│   ├── components/
│   │   ├── DashboardLayout.jsx      # Main layout wrapper
│   │   ├── ProfileCard.jsx          # User profile with streak
│   │   ├── NextBattleCard.jsx       # Premium session CTA
│   │   ├── StatsGrid.jsx            # Progress statistics
│   │   ├── DrillStation.jsx         # Daily exercises
│   │   ├── ArchiveList.jsx          # Previous sessions
│   │   └── FloatingSupport.jsx      # WhatsApp support button
│   ├── App.jsx                      # Main app component
│   ├── main.jsx                     # React entry point
│   └── index.css                    # Global styles + Tailwind
├── index.html
├── package.json
├── tailwind.config.js               # Brand colors & fonts
├── vite.config.js
└── postcss.config.js
```

## 🎯 Key Design Decisions

### Mobile-First Approach
- 95% of Lingo users access via mobile
- Thumb-friendly buttons (minimum 44px tap targets)
- Single-column layout optimized for narrow screens
- Sticky header for easy navigation

### Moroccan Context
- WhatsApp integration (very popular in Morocco)
- Bilingual UI (English + Darija)
- RTL text support for Arabic script
- Direct phone number format: `212XXXXXXXXX`

### Gamification Elements
- Streak counter ("Days of Speaking")
- Progress bars with percentage
- Visual feedback (cards turning blue)
- Motivational copy ("Unfreeze Your Tongue")

### Premium Feel
- Gradient backgrounds on key CTAs
- Pulse animations for urgency
- Clean white surfaces with minimal borders
- Bold typography hierarchy

## 🔧 Customization

### Update WhatsApp Number
In `FloatingSupport.jsx`:
```javascript
const phoneNumber = '212600000000'; // Replace with actual number
```

### Update Session Data
In `App.jsx`, modify the `userData` state:
```javascript
const [userData] = useState({
  nextSession: {
    date: '2026-04-25',
    time: '19:00',
    topic: 'Professional Email Writing',
    zoomLink: 'https://zoom.us/j/your-meeting-id'
  }
});
```

### Add More Drills
In `DrillStation.jsx`, add to the `drills` array:
```javascript
{
  id: 5,
  title: 'Your New Drill',
  duration: '3 min',
  prompt: 'Describe your prompt here.',
  completed: false
}
```

## 🌐 Integration Points

### Backend API Endpoints (To Implement)
- `GET /api/user/profile` - Fetch user data
- `GET /api/user/stats` - Fetch usage statistics
- `GET /api/sessions/next` - Get next scheduled session
- `GET /api/sessions/archive` - Get previous sessions
- `GET /api/drills/daily` - Get daily drill list
- `POST /api/drills/:id/complete` - Mark drill as complete

### Zoom/Google Meet Integration
- Replace placeholder Zoom links with actual meeting URLs
- Consider deep linking for mobile apps

### WhatsApp Business API
- Upgrade to WhatsApp Business for better support
- Enable automated responses
- Add quick reply templates

## 📝 Micro-copy Philosophy

Instead of generic phrases, Lingo uses bold, motivating language:

| Generic | Lingo Style |
|---------|-------------|
| "Your Progress" | "Your Evolution" |
| "Start Exercise" | "Unfreeze Your Tongue" |
| "View Session" | "Join Battle Now" |
| "Completed Tasks" | "Drills Crushed" |

## 🎨 Color Usage Guide

**Royal Blue (#5170ff)**
- Primary actions (Join Battle, Complete Drill)
- Completed state backgrounds
- Trust & learning elements

**Soft Pink (#ff66c4)**
- Urgent CTAs (Next Session card)
- Energy & motivation
- Secondary metrics

**White + Gray**
- Backgrounds (pure white for premium feel)
- Borders (very subtle, 0.5px)
- Muted text (gray-500, gray-600)

## 🚧 Future Enhancements

- [ ] Voice recording functionality
- [ ] Real-time countdown timer
- [ ] Push notifications for upcoming sessions
- [ ] Vocabulary flashcard system
- [ ] Speaking streak calendar view
- [ ] Achievement badges
- [ ] Social sharing (LinkedIn, Twitter)
- [ ] Dark mode toggle

## 📱 Testing on Mobile

```bash
# Get your local IP
ipconfig getifaddr en0  # Mac
ip addr show           # Linux

# Access from mobile device
http://YOUR_IP:5173
```

## 🤝 Contributing

This is an MVP. Focus areas for improvement:
1. Accessibility (ARIA labels, keyboard navigation)
2. Performance optimization (lazy loading, code splitting)
3. Unit tests (Jest + React Testing Library)
4. E2E tests (Playwright)

## 📄 License

Proprietary - Lingo Morocco © 2026

---

**Built with:** React 18, Vite, Tailwind CSS  
**Optimized for:** Mobile-first, Moroccan market  
**Target audience:** Ambitious English learners in Morocco
