# GMNH Miyabi - E-commerce Platform

A modern e-commerce platform built with Next.js, Prisma, and NextAuth.js, featuring a robust authentication system and admin dashboard.

## 🚀 Features

- **User Authentication**
  - Email/Password login
  - OAuth providers (Google, etc.)
  - Role-based access control (User, Staff, Admin)

- **Product Management**
  - Product catalog with categories
  - Product variants and inventory tracking
  - Product reviews and ratings

- **Shopping Experience**
  - Shopping cart functionality
  - Wishlist
  - Order tracking

- **Admin Dashboard**
  - User management
  - Product CRUD operations
  - Order management
  - Analytics and reports

## 🛠️ Tech Stack

- **Frontend**: Next.js 13+ with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Form Handling**: React Hook Form with Zod validation
- **UI Components**: shadcn/ui
- **Testing**: Vitest, React Testing Library

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL
- pnpm (recommended) or npm

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/gmnh-miyabi.git
   cd gmnh-miyabi
   ```

2. Install dependencies
   ```bash
   pnpm install
   # or
   npm install
   ```

3. Set up environment variables
   ```bash
   cp .env.example .env.local
   # Update the environment variables in .env.local
   ```

4. Set up the database
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. Run the development server
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Project Structure

```
src/
├── components/     # Reusable UI components
├── lib/           # Utility functions and configurations
├── pages/         # Next.js pages and API routes
│   ├── api/       # API routes
│   └── auth/      # Authentication pages
├── prisma/        # Prisma schema and migrations
├── styles/        # Global styles
└── types/         # TypeScript type definitions
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [NextAuth.js Documentation](https://next-auth.js.org/)
