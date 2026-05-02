# 🏗️ Jaybhadra Builders Website — Setup & Deployment Guide

## 📁 Project Structure

```
jaybhadra-builders/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles + animations
│   │   ├── layout.tsx           # SEO meta tags, fonts
│   │   └── page.tsx             # Main page (assembles all sections)
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Navbar.tsx       # Sticky, animated navbar
│   │   │   ├── HeroSection.tsx  # Hero with stats
│   │   │   ├── WhyUsSection.tsx # 4-card Why Choose Us
│   │   │   ├── ProjectsSection.tsx  # Filtered projects grid
│   │   │   ├── AboutSection.tsx # About + counters
│   │   │   ├── ServicesSection.tsx  # 6 service cards
│   │   │   ├── TestimonialsSection.tsx  # Carousel
│   │   │   ├── ContactSection.tsx   # Lead capture form
│   │   │   └── Footer.tsx       # Footer with links
│   │   └── ui/
│   │       ├── LoadingScreen.tsx    # Animated loader
│   │       ├── FloatingActions.tsx  # WhatsApp + Call buttons
│   │       └── SiteVisitModal.tsx   # Popup modal
│   └── lib/
│       ├── firebase.ts          # Firebase config
│       ├── leadService.ts       # CRM + email + WhatsApp
│       └── data.ts              # All content/data
├── .env.example                 # Environment variables template
├── next.config.js
├── tailwind.config.js
└── package.json
```

---

## 🚀 Step 1 — Install & Run Locally

```bash
cd jaybhadra-builders
npm install
cp .env.example .env.local
# Fill in .env.local with your values (see Step 2)
npm run dev
# Visit http://localhost:3000
```

---

## 🔥 Step 2 — Firebase Setup

### 2.1 Create Firebase Project
1. Go to https://console.firebase.google.com
2. Click "Add Project" → Name: `jaybhadra-builders`
3. Enable Google Analytics (optional)

### 2.2 Enable Firestore
1. Build → Firestore Database → Create Database
2. Start in **production mode**
3. Choose region: `asia-south1` (Mumbai)

### 2.3 Firestore Security Rules
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /leads/{leadId} {
      allow create: if true;  // Anyone can submit a lead
      allow read, update, delete: if request.auth != null;  // Only admin
    }
  }
}
```

### 2.4 Get Config Keys
1. Project Settings → General → Your Apps → Web App
2. Add app → Register → Copy the firebaseConfig object
3. Paste values into `.env.local`

---

## 📧 Step 3 — EmailJS Setup

1. Go to https://www.emailjs.com → Sign up (free: 200 emails/month)
2. Add Email Service (Gmail recommended)
3. Create Admin Lead Template:
   ```
   Subject: 🏗️ New Lead — {{from_name}}
   Body:
   Name: {{from_name}}
   Phone: {{from_phone}}
   Email: {{from_email}}
   Interested In: {{interested_in}}
   Budget: {{budget}}
   Message: {{message}}
   ```
4. Create User Confirmation Template:
   ```
   Subject: Thank you for contacting Jaybhadra Builders!
   Body:
   Dear {{to_name}},
   Thank you for reaching out to Jaybhadra Builders.
   Our team will call you within 2 hours.
   📞 +91 98765 43210
   ```
5. Add SDK to `src/app/layout.tsx` head:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   <script>emailjs.init("your_public_key")</script>
   ```

---

## 💬 Step 4 — WhatsApp Integration

### Option A: Direct WhatsApp (current implementation)
- Opens WhatsApp with pre-filled message
- Works on mobile and desktop
- No additional setup needed

### Option B: WhatsApp Business API (advanced)
- For automated replies without user interaction
- Sign up at https://business.whatsapp.com
- Use services like Twilio, WATI, or Meta Cloud API
- Replace `sendWhatsAppToAdmin()` in `leadService.ts` with API call

---

## 🌐 Step 5 — Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# For production
vercel --prod
```

### Add Environment Variables in Vercel:
1. Go to your Vercel project → Settings → Environment Variables
2. Add ALL variables from `.env.example` with their real values
3. Redeploy after adding variables

### Custom Domain:
1. Vercel Dashboard → Domains → Add `jayabhadrabuilders.com`
2. Update DNS records with your registrar

---

## 📊 Step 6 — View Leads in Firebase

1. Go to Firebase Console → Firestore Database
2. View `leads` collection
3. Each document contains:
   - name, phone, email
   - interestedIn, budget, message
   - source (which page/section)
   - createdAt (timestamp)
   - status ('new')

---

## 🔧 Step 7 — Customization

### Update Business Info:
Edit `src/lib/data.ts` → `COMPANY` object:
```ts
phone: '+91 XXXXX XXXXX',
whatsapp: '91XXXXXXXXXX',  // no + sign
email: 'your@email.com',
address: 'Your address...',
```

### Add/Edit Projects:
Edit `src/lib/data.ts` → `PROJECTS` array

### Add Testimonials:
Edit `src/lib/data.ts` → `TESTIMONIALS` array

### Change Colors:
Edit `tailwind.config.js` → `colors` object

---

## 📱 Features Checklist

- [x] Luxury dark + gold design
- [x] Animated loading screen
- [x] Sticky navbar with mobile menu
- [x] Hero with animated stats counter
- [x] Why Choose Us with hover effects
- [x] Projects grid with filters (All/Residential/Commercial/Ongoing/Completed)
- [x] About section with counter animation
- [x] Services grid with hover effects
- [x] Testimonials auto-carousel
- [x] Lead capture form (Name/Phone/Email/Interest/Budget/Message)
- [x] Firebase Firestore CRM storage
- [x] WhatsApp admin notification on form submit
- [x] Site Visit booking modal
- [x] Floating WhatsApp button
- [x] Floating Call button with pulse animation
- [x] Click-to-call on mobile
- [x] Google Maps embed
- [x] SEO meta tags + JSON-LD structured data
- [x] Fully responsive (mobile-first)
- [x] Smooth scroll navigation
- [x] Urgency badges ("Limited units available!")
- [x] Trust badges

---

## 🆘 Common Issues

**Firebase permission denied**: Check Firestore security rules allow `create`

**Images not loading**: Add domains to `next.config.js` images.domains

**WhatsApp not opening**: Ensure phone number has country code (91xxxxxxxxxx)

**Build fails**: Check all imports are correct, run `npm run build` locally first
