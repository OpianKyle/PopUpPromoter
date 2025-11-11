# Groovy Gala Event Page Design Guidelines

## Design Approach
Reference-based approach inspired by modern music event platforms (Spotify Events, Boiler Room, festival landing pages) combined with the vibrant magenta/purple gradient aesthetic from provided references. Energetic, youth-focused design with bold typography and dynamic visual hierarchy.

## Core Visual Identity

### Typography System
- **Hero Headline**: Extra bold display font, 4xl to 6xl size, all-caps "GROOVY GALA" with tight letter spacing
- **Countdown Numbers**: Oversized bold numerals (6xl to 8xl) for dramatic time display
- **Section Headers**: Bold, 3xl to 4xl, mixing uppercase and sentence case for rhythm
- **Body Text**: Clean sans-serif, 16-18px base size for readability against vibrant backgrounds
- **CTA Buttons**: Bold uppercase text, 14-16px with generous letter spacing

### Layout System
Spacing primitives: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 to py-24 on desktop, py-12 on mobile
- Container max-width: max-w-6xl for content, full-width for immersive sections
- Grid systems: Single column on mobile, 2-3 columns on desktop for DJ/highlight cards

## Page Structure & Sections

### 1. Hero Section (100vh)
Full-viewport immersive experience with vibrant gradient background matching reference aesthetic (magenta to purple to deep violet). Center-aligned content with:
- Large "GROOVY GALA" title treatment
- Tagline: "The Ultimate House Party Experience"
- Prominent countdown timer (see Timer Component below)
- Date badge: "Friday, December 5th | 18:00"
- Primary CTA: "Get Early Access" button with blurred background treatment
- Subtle animated gradient background (CSS gradient animation, very subtle movement)

### 2. Event Highlights Section
Three-column grid on desktop (single column mobile) showcasing:
- "Premium Sound System" with speaker icon
- "Exclusive Cocktails & Bar" with drink icon
- "Rooftop Terrace Access" with location icon
Each card: Icon top, bold title, brief description (2-3 lines), background cards with subtle border/shadow

### 3. Featured DJ Section
Two-column layout on desktop:
- Left: Large DJ photo/image (portrait orientation, 600x800px aspect ratio)
- Right: DJ bio content including name in large bold text, genre tags (House, Deep House, Afrobeat), set time, previous venues/achievements
Background: Contrasting dark section to break up vibrant gradients

### 4. Event Details Grid
Four-column stat display on desktop (2x2 grid on mobile):
- "Doors Open: 18:00"
- "Location: [Venue Name]"
- "Capacity: Limited"
- "Dress Code: Stylish Casual"
Large numbers/text with icons, minimal card backgrounds

### 5. Early Access Email Section
Full-width vibrant gradient background section with:
- Centered headline: "Be First in Line"
- Subheading: "Get notified when tickets drop"
- Email input field (large, rounded, with placeholder)
- Submit button: "Notify Me" (full-width on mobile)
- Privacy text below: "We'll only email you about ticket releases"
Form centered, max-w-lg container

### 6. Location/Venue Section
Split layout:
- Map embed or location visual on left
- Venue details on right: Full address, parking info, public transport directions, accessibility notes

### 7. Footer
Simple, compact footer with:
- Social media links (Instagram, Twitter icons)
- "Powered by [Organizer Name]"
- Link to groovygala.crd.co
- Small legal text

## Component Library

### Timer Component
Four-segment display (Days | Hours | Minutes | Seconds):
- Each segment: Large number (6xl-8xl) with small label below
- Separated by colon dividers
- Cards or bordered segments with subtle glow effect
- Updates every second with smooth number transitions

### Email Subscription Form
- Single-line input with integrated button (side-by-side on desktop)
- Large touch target (h-14 minimum)
- Rounded corners (rounded-lg)
- Placeholder: "your@email.com"
- Success state: Replace form with confirmation message and checkmark icon
- Error state: Red border with message below input

### CTA Buttons
All buttons have blurred backgrounds when placed over images:
- Primary: Bold background with backdrop-blur-md, white text
- Secondary: Outlined with backdrop-blur-md background
- Height: h-12 to h-14
- Padding: px-8 to px-12
- Border radius: rounded-full for primary actions

### Event Cards
For highlights and details:
- Subtle background (white/10% or dark/80% depending on section)
- Border or shadow for definition
- Padding: p-6 to p-8
- Icon at top (48x48px), title below, description last
- Hover state: Subtle lift and glow

## Images Required

1. **Hero Background**: Full-width gradient image or CSS gradient (vibrant magenta to purple to deep violet, matching reference aesthetic)
2. **Featured DJ Photo**: Professional portrait shot, energetic pose, 600x800px aspect, high-energy lighting
3. **Event Atmosphere Photo**: Crowd/party scene for secondary hero or background treatment, 1920x1080px
4. **Venue Exterior/Interior**: Location establishing shot, 800x600px
5. **Ambient Background Textures**: Optional subtle noise/grain overlays for depth on gradient sections

## Visual Enhancements
- Gradient overlays on all images for text readability
- Subtle glow effects on timer and CTA elements
- Minimal animations: Timer number flips, gradient shifts, hover states only
- Icon library: Heroicons for all interface icons
- Ensure high contrast between text and vibrant backgrounds (use dark overlays where needed)

## Responsive Behavior
- Hero: Reduce text sizes proportionally, maintain full viewport height
- Multi-column grids: Stack to single column below md breakpoint
- Timer: Reduce number sizes, maintain four-segment layout even on mobile
- Email form: Stack input and button vertically on mobile
- Maintain generous spacing on all viewports (never cramped)