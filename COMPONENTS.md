# RepuPro Website - Reusable Components

This document provides comprehensive documentation for all reusable components created for the RepuPro website to improve code maintainability and consistency.

## 📁 Component Structure

```
components/
├── AppHeader.vue          # Main navigation header
├── AppFooter.vue          # Site footer
├── HeroSection.vue        # Hero section with title, description, and CTAs
├── CTASection.vue         # Call-to-action section
├── TestimonialCard.vue    # Individual testimonial card
├── ServiceCard.vue        # Service offering card
├── PricingCard.vue        # Pricing plan card
├── FAQItem.vue           # FAQ question/answer item
├── StatsCard.vue         # Statistics/metrics card
└── ContactForm.vue       # Contact form component

layouts/
└── default.vue           # Default layout using header and footer
```

## 🚀 Quick Start

### 1. Using the Default Layout

```vue
<template>
  <div>
    <!-- Your page content here -->
    <HeroSection 
      title="Your Page Title"
      description="Your page description"
      :cta-buttons="ctaButtons"
    />
  </div>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return {
      ctaButtons: [
        { text: 'Primary Action', path: '/contact', primary: true },
        { text: 'Secondary Action', path: '/services', primary: false }
      ]
    }
  }
}
</script>
```

### 2. Manual Component Usage

```vue
<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <AppHeader />
    
    <!-- Your content -->
    
    <AppFooter />
  </div>
</template>
```

## 📋 Component Reference

### AppHeader.vue

**Purpose**: Main navigation header with logo, navigation links, and dark mode toggle.

**Features**:
- Responsive navigation
- Dark mode toggle
- Mobile menu
- Sticky positioning

**Usage**:
```vue
<AppHeader />
```

**No props required** - automatically handles navigation items and dark mode state.

---

### AppFooter.vue

**Purpose**: Site footer with company info, links, and contact information.

**Features**:
- Company information
- Service links
- Company links
- Contact information
- Dynamic year in copyright

**Usage**:
```vue
<AppFooter />
```

**No props required** - automatically handles all footer content.

---

### HeroSection.vue

**Purpose**: Hero section with title, description, and call-to-action buttons.

**Props**:
- `title` (String, required): Main heading
- `description` (String, required): Subtitle/description
- `ctaButtons` (Array, optional): Array of CTA button objects

**Button Object Structure**:
```javascript
{
  text: 'Button Text',
  path: '/destination-path',
  primary: true // or false
}
```

**Usage**:
```vue
<HeroSection 
  title="Protect Your Business Reputation"
  description="Professional reputation management services to boost your online presence."
  :cta-buttons="[
    { text: 'Get Started', path: '/contact', primary: true },
    { text: 'Learn More', path: '/services', primary: false }
  ]"
/>
```

---

### CTASection.vue

**Purpose**: Call-to-action section with title, description, and buttons.

**Props**:
- `title` (String, required): Section title
- `description` (String, required): Section description
- `buttons` (Array, required): Array of button objects

**Usage**:
```vue
<CTASection 
  title="Ready to Get Started?"
  description="Join hundreds of businesses that trust RepuPro."
  :buttons="[
    { text: 'Start Now', path: '/contact', primary: true },
    { text: 'View Pricing', path: '/pricing', primary: false }
  ]"
/>
```

---

### TestimonialCard.vue

**Purpose**: Individual testimonial card with star rating, quote, and author info.

**Props**:
- `testimonial` (String, required): The testimonial text
- `author` (Object, required): Author information
- `color` (String, optional): Color theme (blue, green, purple, orange, red, teal)

**Author Object Structure**:
```javascript
{
  name: 'John Doe',
  title: 'CEO, Company Name',
  initials: 'JD'
}
```

**Usage**:
```vue
<TestimonialCard 
  testimonial="RepuPro completely transformed our online reputation..."
  :author="{
    name: 'Sarah Johnson',
    title: 'Restaurant Owner, Downtown Bistro',
    initials: 'SJ'
  }"
  color="blue"
/>
```

---

### ServiceCard.vue

**Purpose**: Service offering card with image, description, features, and pricing.

**Props**:
- `service` (Object, required): Service information

**Service Object Structure**:
```javascript
{
  name: 'Online Reviews',
  description: 'Generate authentic positive reviews...',
  image: 'https://example.com/image.jpg',
  price: 'From $299',
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
  ctaText: 'Get Started',
  ctaLink: '/contact'
}
```

**Usage**:
```vue
<ServiceCard :service="serviceData" />
```

---

### PricingCard.vue

**Purpose**: Pricing plan card with features and call-to-action.

**Props**:
- `plan` (Object, required): Pricing plan information

**Plan Object Structure**:
```javascript
{
  name: 'Professional',
  price: '$599',
  period: '/one-time',
  description: 'Comprehensive reputation management',
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
  featured: true, // Optional: highlights the plan
  ctaText: 'Get Started',
  ctaLink: '/contact'
}
```

**Usage**:
```vue
<PricingCard :plan="pricingPlan" />
```

---

### FAQItem.vue

**Purpose**: Individual FAQ question and answer item.

**Props**:
- `question` (String, required): The question
- `answer` (String, required): The answer

**Usage**:
```vue
<FAQItem 
  question="How quickly can you improve my online reputation?"
  answer="Most clients see noticeable improvements within 30 days..."
/>
```

---

### StatsCard.vue

**Purpose**: Statistics/metrics display card.

**Props**:
- `value` (String/Number, required): The statistic value
- `label` (String, required): The statistic label
- `color` (String, optional): Color theme (blue, green, purple, orange, red, teal)

**Usage**:
```vue
<StatsCard 
  value="500+"
  label="Happy Clients"
  color="blue"
/>
```

---

### ContactForm.vue

**Purpose**: Reusable contact form with validation and submission handling.

**Props**:
- `submitButtonText` (String, optional): Custom submit button text (default: "Send Message")

**Events**:
- `form-submitted`: Emitted when form is submitted with form data
- `form-success`: Emitted when form submission is successful
- `form-error`: Emitted when form submission fails

**Usage**:
```vue
<ContactForm 
  submit-button-text="Send Inquiry"
  @form-submitted="handleFormSubmission"
  @form-success="handleSuccess"
  @form-error="handleError"
/>
```

## 🎨 Styling and Theming

### Color Schemes

All components support the following color themes:
- `blue` (default)
- `green`
- `purple`
- `orange`
- `red`
- `teal`

### Dark Mode

All components automatically support dark mode through TailwindCSS classes and the dark mode toggle in the header.

### Responsive Design

All components are mobile-first and responsive, using TailwindCSS breakpoints:
- `sm`: 640px+
- `md`: 768px+
- `lg`: 1024px+
- `xl`: 1280px+

## 🔧 Customization

### Adding New Navigation Items

Edit the `navigationItems` array in `AppHeader.vue`:

```javascript
navigationItems: [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
  { path: '/blog', label: 'Blog' } // Add new items here
]
```

### Modifying Footer Links

Edit the arrays in `AppFooter.vue`:

```javascript
services: [
  { path: '/services', label: 'Online Reviews' },
  // Add or modify service links
],
companyLinks: [
  { path: '/about', label: 'About Us' },
  // Add or modify company links
]
```

### Customizing Contact Form Fields

Modify the form structure in `ContactForm.vue`:

```javascript
form: {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  businessName: '',
  serviceInterest: '',
  message: '',
  // Add new fields here
  customField: ''
}
```

## 📱 Mobile Considerations

### Mobile Menu

The header includes a mobile menu that automatically shows on smaller screens. The menu can be toggled and automatically closes when a link is clicked.

### Touch Targets

All interactive elements meet minimum touch target size requirements (44px) for mobile devices.

### Responsive Images

Service cards and other image-containing components use responsive image classes for optimal loading and display.

## 🚀 Performance Tips

1. **Lazy Loading**: Images in components use proper loading attributes
2. **Component Caching**: Components are designed to be cached by Vue's reactivity system
3. **Minimal Re-renders**: Components use computed properties where appropriate to minimize unnecessary re-renders
4. **Event Handling**: Form components emit events rather than directly calling APIs for better separation of concerns

## 🔍 SEO Considerations

- All components use semantic HTML elements
- Proper heading hierarchy (h1, h2, h3, etc.)
- Alt text for images
- Proper ARIA labels for accessibility
- Meta tags handled at the page level

## 🛠️ Development Workflow

1. **Component Creation**: Create new components in the `components/` directory
2. **Testing**: Test components in isolation before integration
3. **Documentation**: Update this file when adding new components
4. **Consistency**: Follow the established patterns for props, events, and styling

## 📞 Support

For questions about component usage or customization, refer to:
- Vue.js documentation
- TailwindCSS documentation
- Nuxt.js documentation
- Component source code for implementation details
