/* ================================================================
   TAPFOLIO — CLIENT DATA
   ================================================================
   This is the ONLY file you should ever need to touch per client.
   index.html reads this object and renders the entire page from it.

   Workflow:
   1. Duplicate the Master Template folder, rename it to the client.
   2. Edit the values below (colors, profile, links, vCard info).
   3. Save. Open index.html — done. No build step, ever.
   ================================================================ */

const clientData = {

  // --------------------------------------------------------------
  // THEME — drives every color on the page (buttons, borders,
  // shadows, marquee, background dot-grid, "Save Contact" button)
  // --------------------------------------------------------------
  theme: {
    bgColor: "#FFFFFF",      // page background
    accentColor: "#1a98a6",  // TapFolio brand accent — used on the "Save Contact" button + marquee
    fontColor: "#0A0A0A"     // text, borders, and hard shadows (the "ink" color)
  },

  // --------------------------------------------------------------
  // PROFILE
  // --------------------------------------------------------------
  profile: {
    avatar: "profile.jpeg",
    name: "Ainaa Hanani",
    title: "Student",
    bio: "🍀📖 Always curious to learn, grounded in who I am, positive in perspective, and never far from a good book.",
    location: "Malaysia"
  },

  // --------------------------------------------------------------
  // MARQUEE — the scrolling ticker at the very top of the page
  // --------------------------------------------------------------
  marquee: "TAPFOLIO • NETWORK WITHOUT BOUNDARIES",

  // --------------------------------------------------------------
  // LINKS — rendered top to bottom, in this order.
  // "icon" must match a Lucide icon name from lucide.dev/icons
  // --------------------------------------------------------------
  links: [
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/ainaa-hanani-821280355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", icon: "linkedin" },
    { platform: "Instagram", url: "https://www.instagram.com/ana_hnn1?igsh=MTF0eDY0Mnc2amhzNQ==", icon: "instagram" },
    { platform: "WhatsApp", url: "https://wa.me/qr/JXDGPS4N74L6O1", icon: "message-circle" },
    { platform: "TikTok", url: "https://www.tiktok.com/@hananjy21?_r=1&_t=ZS-991kI7HXkRc", icon: "tiktok" }
  ],

  // --------------------------------------------------------------
  // VCARD — powers the "Save Contact" button. On click, the engine
  // generates a real .vcf file in the browser (no server needed)
  // and triggers a download using this phone/email + the profile
  // name/title above.
  //
  // Values are Base64-encoded to deter automated scrapers.
  // The render engine decodes them at runtime with atob().
  // --------------------------------------------------------------
  vcard: {
    phone_b64: "KzYwMTI1OTI5NjMx",          // Base64 
    email_b64: "YWluYWhhbmFuaW1hcnp1a2lAZ21haWwuY29t" // Base64 
  }

};
