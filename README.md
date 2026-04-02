# 🚀 TechBlog

A modern **full-stack tech blog platform** built with **Next.js 16**, **TypeScript**, **Bun**, **Prisma**, and **Better Auth**.

This project includes secure authentication, rich text editing, SEO-friendly blog routes, dynamic slugs, and a clean responsive UI.

---

## ✨ Features

* 🔐 Authentication with **Google** and **GitHub** using Better Auth
* 📝 Rich text article editor with **Jodit Editor**
* 🧠 Session-based UI (Login → Logout)
* 📰 Dynamic blog post routes using **slug-based URLs**
* 🗄️ Database integration with **Prisma + PostgreSQL**
* 🖼️ Optimized user avatars with **Next/Image**
* ⚡ Fast package management and scripts powered by **Bun**
* 🎨 Responsive UI with **Tailwind CSS**
* 🛡️ Type-safe development with **TypeScript**
* 🚀 Ready for deployment on **Vercel**

---

## 🛠️ Tech Stack

* **Framework:** Next.js 16
* **Language:** TypeScript
* **Runtime / Package Manager:** Bun
* **Database ORM:** Prisma
* **Database:** PostgreSQL / Prisma Postgres
* **Authentication:** Better Auth
* **OAuth Providers:** Google, GitHub
* **State Management:** Zustand
* **Rich Text Editor:** Jodit Editor
* **HTTP Client:** Axios
* **Icons:** React Icons
* **Slug Generation:** slugify
* **Styling:** Tailwind CSS

---

## 📂 Project Structure

```bash
src/
 ├── app/
 │   ├── posts/
 │   ├── write/
 │   └── api/
 ├── components/
 ├── lib/
 ├── generated/
 │   └── prisma/
 └── actions/

prisma/
 └── schema.prisma
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL=
BETTER_AUTH_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
```

---

## 🚀 Getting Started

Install dependencies:

```bash
bun install
```

Run development server:

```bash
bun dev
```

Generate Prisma client:

```bash
bunx prisma generate
```

Push schema to database:

```bash
bunx prisma db push
```

---

## 🚀 Deployment

This project is fully compatible with **Vercel**.

If you deploy using **Bun runtime**, add a `vercel.json` file:

```json
{
  "bunVersion": "1.x"
}
```

---

## 📸 Preview

A clean and modern blogging experience with authentication, post creation, dynamic routing, and optimized media.

---

## 👨‍💻 Author

Built by **Rodrigo Bilbao** while learning and building modern full-stack apps with Next.js.
