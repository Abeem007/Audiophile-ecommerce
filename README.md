# Audiophile E-commerce Website
A modern, responsive e-commerce web application for audio products, built with Next.js App Router, Tailwind CSS, Convex backend, and EmailJS for contact/email functionality.

# Live Demo
https://audiophille-ecommerce.netlify.app/

# Tech Stack
## Frontend
1. Next.js (App Router)
2. React
3. Typescript
4. Tailwind Css

## Backend/Services
1. Convex – serverless backend & data management
2. EmailJS – contact form email delivery

## Deployment
1. Github
2. Netlify

# Features
1. Fully responsive layout (mobile, tablet, desktop)
2. Product listing & product detail pages
3. Client-side cart management (add, increment, decrement, remove all)
4. Checkout page UI
5. Email contact form using EmailJS
6. Dynamic routes (e.g. /product/[slug], /[social])
7. Smooth UI feedback animations (add-to-cart toast)

# Project Structure
app/
 ├─ layout.tsx
 ├─ page.tsx
 ├─ [social]/page.tsx        # Dynamic social media page
 ├─ checkout/
 ├─ headphones/
 ├─ speakers/
 ├─ earphones/
 ├─ components/
 │   ├─ Navbar.tsx
 │   ├─ Footer.tsx
 │   ├─ CartDropdown.tsx
 ├─ context/
 │   └─ CartContext.tsx
 ├─ providers/
 │   └─ ConvexClientProvider.tsx
 ├─ globals.css
public/
 └─ assets/

## EmailJS Integration
 This project currently uses EmailJS's Test Service. This service is perfect for development and deployment testing, as it allows sends without authentication issues.
 However, emails sent via the Test Service only appear in your EmailJS dashboard Logs and are NOT ALWAYS delivered to real customer inboxes everytime.

## Required Environment Variables
1. NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
2. NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
3. NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id

# Getting Started (Local Setup)
1. Clone the repository
   git clone https://github.com/your-username/audiophile-ecommerce.git
   cd audiophile-ecommerce
2. Install dependencies
   npm install
3. Create '.env.local' file in the project root with the following variables:
    EmailJS (Using Test Service)  
  1. NEXT_PUBLIC_EMAILJS_PUBLIC_KEY= "your_public_key"
  2. NEXT_PUBLIC_EMAILJS_SERVICE_ID= "your_service_id"
  3. NEXT_PUBLIC_EMAILJS_TEMPLATE_ID= "your_template_id"
    Convex
   NEXT_PUBLIC_CONVEX_URL= "https://your-deployment.convex.cloud"
     Replace the values with your own from the Convex and EmailJS dashboards.
  4. Run the dev server
     npm run dev
     Open: http://localhost:3000

## Deployment (Netlify)
1. Push project to GitHub.
2. Log in to Netlify and click "Add new site" > "Import an existing project".
3. Connect to your GitHub repository.
4. Configure the build settings:
   > Build Command: npm run build or yarn build
   > Publish Directory: .next
5. Add Environment Variables: In the Netlify site settings, go to Environment variables and add the same keys from your .env.local file (NEXT_PUBLIC_CONVEX_URL, NEXT_PUBLIC_EMAILJS_*).
6. Click "Deploy site".

## Screenshots
![Screenshot 2026-01-16 at 20 30 25](https://github.com/user-attachments/assets/961fd17e-33c6-4435-a8f1-319003771520)
![Screenshot 2026-01-16 at 20 31 06](https://github.com/user-attachments/assets/83ed0cda-0da7-4fb2-8696-55f768dd1c54)
![Screenshot 2026-01-16 at 20 31 15](https://github.com/user-attachments/assets/d72a9f9b-d746-40ef-8465-6a888110d5a7)
![Screenshot 2026-01-16 at 20 31 45](https://github.com/user-attachments/assets/454884e4-6221-4d1d-8013-94368ce04310)
![Screenshot 2026-01-16 at 20 33 08](https://github.com/user-attachments/assets/054caffd-7205-4afb-a8ef-3cf65e2f3aca)

## License
MIT License

## Acknowledgement
Audiophile design inspiration
 
 
