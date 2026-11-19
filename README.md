# MODI'S METAL RACKS & FURNITURES
## Elite Glassmorphism E-Commerce + Corporate Brand Experience
**Established in 2001 &bull; Shivaji Nagar, Bengaluru, India**

*Premium Design. Intelligent Shopping. Effortless Booking.*

---

## 1. Role & Executive Design Vision

Designed and developed by combining the best interaction paradigms of modern digital commerce:
- **Swiggy-Style Shopping Convenience:** Fast 1-thumb mobile navigation, direct **BOOK NOW** buttons, live cart badge, and a sticky mobile checkout summary bar.
- **Apple-Inspired Product Presentation:** Frosted glassmorphism, generous spacing, typography hierarchy (`Poppins` + `Inter`), and layered depth.
- **IndiaMART-Style Discovery & Intent:** Clear technical specifications (height, depth, load capacity per shelf, material gauge), wholesale enquiry buttons, and instant WhatsApp quotes.
- **Modern Fintech Checkout Clarity:** Multi-step visual progress stepper (`01 PRODUCT → 02 ADDRESS → 03 PAYMENT → 04 CONFIRMATION`), transparent delivery calculations, and secure Razorpay payment validation.

---

## 2. Brand Identity & MR Logo Palette

Extracted directly from the official **MR logo** (circular black symbol with vibrant blue horizontal wings):

| Token | Hex / Value | Role & Usage |
|---|---|---|
| **Primary Dark** | `#111318` | Luxury charcoal background, deep contrast text, footer background |
| **Secondary Dark** | `#20252D` | Surface cards, dark elevation |
| **Primary Brand Blue** | `#0753A6` | Active states, primary CTA gradients, stepper active badges |
| **Bright Blue Accent** | `#1689D5` | Focus rings, glowing hover outlines, highlights |
| **Light Blue Accent** | `#56B5E9` | Ambient lighting, secondary tags, subtle borders |
| **Glass Surface** | `rgba(255, 255, 255, 0.78)` | Frosted navigation, floating product cards, checkout panels |
| **Glass Backdrop Blur** | `blur(24px)` | Depth layering over soft blue ambient gradients |
| **Soft Background** | `#F3F7FC` | Subtle contrast sections, chip backgrounds |

---

## 3. Strict 5-Page Architecture

As mandated, the frontend uses **exactly 5 HTML pages**, **ONE shared CSS file**, and **ONE shared frontend JavaScript file**:

```text
iron_racks/
│
├── index.html                  # PAGE 01: Home & E-Commerce Storefront (Swiggy flow)
├── product.html                # PAGE 02: Dedicated Product Details (55/45 Apple split)
├── booking.html                # PAGE 03: Booking & Multi-Step Checkout Flow
├── gallery.html                # PAGE 04: Visual Portfolio (All 60 photos + 6 videos)
├── company.html                # PAGE 05: Company Heritage, 18 Reviews & Contact
│
├── css/
│   └── style.css               # Single Shared Glassmorphic Stylesheet
│
├── js/
│   └── script.js               # Single Shared Master JavaScript
│
├── assets/
│   ├── logo/
│   │   └── logo.png            # Official MR Logo
│   ├── ecom_product/           # Actual Catalog Photos
│   ├── gallery/                # All 60 Real Photos (rack1.jpg to rack60.jpg)
│   └── videos/                 # All 6 Factory Videos (rackvideo01 to 06)
│
├── backend/
│   ├── server.js               # Standalone Express Server
│   ├── routes/
│   │   └── orderRoutes.js      # Order creation, verification & email routes
│   └── services/
│       ├── razorpayService.js  # Razorpay order generation & HMAC signature check
│       └── emailService.js     # Customer confirmation & store alert emails
│
├── api/                        # Vercel Serverless Functions
│   ├── create-order.js
│   ├── verify-payment.js
│   ├── webhook.js
│   ├── send-email.js
│   └── contact.js
│
├── vercel.json                 # Vercel deployment routes & asset caching headers
├── package.json                # Project dependencies & startup scripts
├── sitemap.xml                 # SEO sitemap
├── robots.txt                  # Search engine crawling rules
├── .env.example                # Environment variables template
└── README.md                   # Full documentation manual
```

---

## 4. Page by Page Walkthrough

### 01. Homepage (`index.html`)
- **Floating Glass Navbar:** Frosted glass pill with MR logo, business title, centered navigation links, search, account drawer trigger, and cart trigger with live badge.
- **Editorial E-Commerce Hero:** Left: Badge `ESTABLISHED 2001`, Headline `SMART STORAGE. BUILT TO LAST.` with blue gradient text, copy, `SHOP COLLECTION`, `EXPLORE OUR BUSINESS`, and WhatsApp CTA. Right: Large product visual with floating glass chips (`Quality Metal Construction`, `Five-Shelf Options`, `Practical Storage Solutions`) + ambient blue backlight.
- **Product Shopping Section:**
  - Heading: `FIND YOUR PERFECT RACK`
  - Category selector: `ALL | ANGLE RACKS | WALL RACKS | POWDER COATED | PIPE RACKS` with instant glass pill active state.
  - Product Cards: High-res photograph, name, price, short specs, `View Details`, and direct `BOOK NOW` button taking users straight to `booking.html?product=id`.
- **Trust Strip:** 4 frosted glass cards (`Since 2001`, `Quality Materials`, `Professional Team`, `Customer Focused`).
- **Custom Solution Banner:** `NEED SOMETHING CUSTOMISED?` with direct quote and WhatsApp actions.
- **Customer Reviews Preview:** Genuine 5-star customer excerpts.
- **Gallery Preview:** Real rack photos + video preview card.
- **Footer:** Deep charcoal (`#111318`) with blue highlights, quick links, contact info, WhatsApp, and Google Maps.

### 02. Product Details (`product.html`)
- **Desktop Split:** 55% product media, 45% purchase information.
- **Mobile First:** Product image first, title, price, specs, quantity selector, and **sticky bottom booking CTA bar** showing live price and `BOOK NOW`.
- Full interactive thumbnail gallery, technical specifications table, load capacity information, Add to Cart, Book Now, and WhatsApp Enquiry.

### 03. Booking & Checkout (`booking.html`)
- **Visual Progress Stepper:** `01 PRODUCT → 02 ADDRESS → 03 PAYMENT → 04 CONFIRMATION` with the active step highlighted in brand blue.
- **STEP 01:** Review selected products inside a glass card with image, name, price, quantity increment/decrement, and remove buttons.
- **STEP 02:** "Where Should We Deliver?" with touch-friendly fields (Name, 10-digit Phone, Delivery Address, PIN, Landmark, Email).
- **STEP 03 & 04:** Order summary with transparent delivery charge notice (distance-based via Porter/local transport from Shivaji Nagar) + selectable payment methods (Razorpay Online, Cash on Delivery / Direct Bank Transfer, Instant WhatsApp Booking).
- **Mobile Usability:** Usable with one hand via the **sticky bottom checkout summary bar** showing `Grand Total ₹X,XXX` and `PLACE ORDER →`.
- **Order Confirmation:** Instant success screen with unique Order ID, receipt summary, and 1-tap WhatsApp dispatch to primary (`7892043478`) and secondary (`7090300368`) numbers.

### 04. Visual Portfolio (`gallery.html`)
- **60 Photographs:** Mounts all 60 project photos (`rack1.jpg` to `rack60.jpg`) with category filters (`ALL | Iron Racks | Wall Racks | Powder Coated | Pipe Racks | Storage Solutions`).
- **Interactive Lightbox:** Next / Previous arrow navigation, Escape key close, and high-resolution modal.
- **6 Factory Videos:** All 6 workshop fabrication clips with native HTML5 player controls, video cards, and no intrusive auto-audio playback.

### 05. Corporate Profile (`company.html`)
- **Heritage & Vision:** Full company history founded in 2001 in Shivaji Nagar, Bengaluru, along with core vision and quality commitment.
- **Product & Service Capabilities:** Metal rack manufacturing, wholesale rack supply, slotted angle racks, wall-mounted shelving, pipe racks, supermarket display racks, heavy-duty warehouse storage, and custom metal furniture.
- **All 18 Genuine Customer Reviews:** Rendered with 5-star and critical review filtering.
- **Contact & Map:** Registered business address, direct calling (`7892043478`, `7090300368`), Google Maps embed, and inquiry form with WhatsApp fallback.

---

## 5. Local Setup & Testing

```bash
# 1. Install dependencies
npm install

# 2. Start the local server
npm start
```
Open **`http://localhost:5000`** in your browser.

---

## 6. Vercel Deployment

Deploy with one command using the Vercel CLI:
```bash
vercel --prod
```
Or import the repository into the [Vercel Dashboard](https://vercel.com/new). Serverless functions in `/api` and static assets in root are automatically handled.

### Environment Variables
Configure under **Project Settings &rarr; Environment Variables**:
- `RAZORPAY_KEY_ID`: Your Razorpay Key ID
- `RAZORPAY_KEY_SECRET`: Your Razorpay Key Secret
- `BUSINESS_EMAIL`: `modismetalracks@gmail.com`
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`: For customer confirmation emails
