# 🌙 Ramadan Countdown 2026

A beautiful, professional countdown timer for the holy month of Ramadan. Track the days, hours, minutes, and seconds until Ramadan with an elegant, feature-rich web application.

![Ramadan Countdown](https://img.shields.io/badge/Ramadan-2026-blue)
![Next.js](https://img.shields.io/badge/Next.js-16.1-black)
![React](https://img.shields.io/badge/React-19.2-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)

## ✨ Features

### 🎯 Core Functionality
- **Dynamic Countdown Timer** - Real-time countdown with days, hours, minutes, and seconds
- **Automatic Date Calculation** - Dynamically calculates the next Ramadan date
- **Visual Progress Bars** - Beautiful gradient progress indicators for each time unit
- **Islamic Calendar Display** - Shows current Hijri date alongside Gregorian date

### 📖 Spiritual Content
- **Inspirational Quotes** - Rotating Quranic verses and Hadiths about Ramadan
- **Arabic Text Support** - Beautiful Arabic typography for Quranic verses
- **Auto-Refresh Content** - New inspirational content every 30 seconds
- **Manual Refresh** - Click to load new quotes instantly

### 🎨 Design & UX
- **Dark/Light Mode** - Seamless theme switching with system preference detection
- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations** - Elegant fade-in and transition effects
- **Premium Aesthetics** - Modern glassmorphism and gradient designs
- **Custom Scrollbar** - Styled scrollbar matching the theme

### 🔗 Social & Sharing
- **Multi-Platform Sharing** - Share on Facebook, Twitter, WhatsApp, Telegram
- **Native Share API** - Uses device's native sharing when available
- **Copy Link** - One-click link copying to clipboard
- **Social Media Links** - Quick access to social platforms

### 📚 Educational
- **Learn More Modal** - Comprehensive information about Ramadan
- **Key Practices** - Detailed explanation of Ramadan observances
- **Beautiful Presentation** - Well-organized, easy-to-read content

### 🚀 Technical Features
- **SEO Optimized** - Comprehensive meta tags and Open Graph support
- **Performance** - Fast loading and smooth animations
- **Accessibility** - ARIA labels and keyboard navigation
- **PWA Ready** - Can be installed as a Progressive Web App

## 🛠️ Tech Stack

- **Framework**: [Next.js 16.1](https://nextjs.org/) - React framework with App Router
- **UI Library**: [React 19.2](https://react.dev/) - Latest React with concurrent features
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/) - Utility-first CSS framework
- **Theme Management**: [next-themes](https://github.com/pacocoursey/next-themes) - Dark mode support
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful, consistent icons
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Production-ready animations
- **Fonts**: Google Fonts (Montserrat, Amiri for Arabic)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ramadan-countdown.git
   cd ramadan-countdown
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
ramadan-countdown/
├── src/
│   ├── app/
│   │   ├── layout.jsx          # Root layout with metadata
│   │   ├── page.jsx             # Main page component
│   │   ├── providers.jsx        # Theme provider
│   │   └── globals.css          # Global styles & animations
│   ├── components/
│   │   ├── Background.jsx       # Animated background
│   │   ├── CountdownTimer.jsx   # Main countdown component
│   │   ├── IslamicDate.jsx      # Hijri date display
│   │   ├── InspirationalQuote.jsx # Quran & Hadith quotes
│   │   ├── LearnMoreModal.jsx   # Educational modal
│   │   ├── ShareButton.jsx      # Social sharing component
│   │   ├── SocialLinks.jsx      # Social media links
│   │   └── ThemeToggle.jsx      # Dark/light mode toggle
│   └── utils/
│       ├── islamicCalendar.js   # Islamic date calculations
│       └── inspirationalContent.js # Quran verses & Hadiths
├── public/                      # Static assets
├── tailwind.config.js          # Tailwind configuration
├── next.config.mjs             # Next.js configuration
└── package.json                # Dependencies
```

## 🎨 Customization

### Update Ramadan Dates
Edit `src/utils/islamicCalendar.js` to update Ramadan dates for future years:

```javascript
const ramadanDates = {
  2025: new Date('2025-02-28T00:00:00'),
  2026: new Date('2026-02-17T00:00:00'),
  2027: new Date('2027-02-07T00:00:00'),
  // Add more years...
};
```

### Add More Quotes
Add Quranic verses or Hadiths in `src/utils/inspirationalContent.js`:

```javascript
export const quranVerses = [
  {
    text: "Your verse translation",
    reference: "Quran X:XX",
    arabic: "Arabic text"
  },
  // Add more...
];
```

### Customize Theme Colors
Modify `tailwind.config.js` and `src/app/globals.css` to change colors and styling.

## 📱 Features in Detail

### Countdown Timer
- Calculates time remaining until next Ramadan
- Updates every second for real-time accuracy
- Shows progress bars for visual feedback
- Displays target date below countdown

### Islamic Calendar
- Converts Gregorian to Hijri dates
- Updates automatically every minute
- Shows both calendars side-by-side

### Inspirational Content
- Curated collection of Quranic verses
- Authentic Hadiths about Ramadan
- Automatic rotation every 30 seconds
- Manual refresh option
- Beautiful Arabic typography

### Share Functionality
- Multiple sharing platforms
- Native share API integration
- Copy link to clipboard
- Responsive share menu

### Learn More Modal
- Comprehensive Ramadan information
- Key practices and observances
- Beautiful, organized layout
- Easy to read and navigate

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with one click

### Deploy to Netlify

1. Push your code to GitHub
2. Import project in [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Quranic verses from authentic translations
- Hadiths from Sahih Bukhari and other authentic sources
- Islamic calendar calculations based on astronomical data
- Design inspiration from modern web applications

## 📞 Contact

For questions or suggestions, please open an issue on GitHub.

---

**May Allah accept our fasting and prayers during Ramadan. Ramadan Kareem! 🌙**
