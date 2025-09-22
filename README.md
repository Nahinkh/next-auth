# 🏡 Next-Auth – Next.js + MongoDB + Auth.js

A full-stack authentication app built with **Next.js 15 (App Router)**, **MongoDB**, **Auth.js (NextAuth)**, **TailwindCSS**, and **shadcn/ui**.  
Supports **Email/Password** and **OAuth Providers** (Google, GitHub, Facebook).


## 🌐 Live Demo

Check out the live app here: [https://next-auth-gold-eight.vercel.app/](https://next-auth-gold-eight.vercel.app/)

---

## 🚀 Features

- 🔐 User Authentication with **Auth.js**
  - Email & Password (with bcrypt encryption)
  - Google, GitHub, and Facebook login
- 📦 MongoDB + Mongoose for storing users
- 🎨 UI styled with **TailwindCSS + shadcn/ui**
- 🌙 Navbar with Avatar & Session toggle
- 🏗️ Register, Login
- ☁️ Ready for deployment on **Vercel**

---

## 🛠️ Tech Stack

- **Next.js 15** – App Router + Route Handlers
- **Auth.js (NextAuth)** – Authentication
- **MongoDB Atlas** – Database
- **Mongoose** – ODM
- **TailwindCSS + shadcn/ui** – Styling
- **Framer Motion** – Animations

---

## 📂 Project Structure
app/
├── api/
│ └── auth/[...nextauth]/route.ts # Auth.js config
│ └── register/route.ts # Register API
├── dashboard/page.tsx # Protected page
├── register/page.tsx # Register UI
├── sign-in/page.tsx # Login UI
└── page.tsx # Home page

components/
├── Navbar.tsx
├── Footer.tsx
├── Theme Provider
├── Toggle-Button
└── ui/ (shadcn components)

lib/
└── Mongodb.ts

models/
└── User.ts

