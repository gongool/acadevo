# Acadevo - Modern Learning Management System

Acadevo is a comprehensive learning management system (LMS) designed for educators and content creators who want to create, manage, and monetize online courses. Built with modern web technologies, Acadevo offers an intuitive interface for both educators and students.

## ✨ Features

- 🏫 **Course Management** - Create, edit, and organize courses with ease
- 📚 **Chapter Organization** - Intuitive drag-and-drop interface for organizing content
- 🎬 **Video Hosting** - Seamless video upload and streaming with Mux integration
- 🔐 **Authentication** - Secure user authentication with Clerk
- 💳 **Payments** - Course monetization with Stripe integration
- 📊 **Progress Tracking** - Students can track their progress through courses
- 📋 **Rich Content Editor** - Create engaging content with React Quill
- 📱 **Responsive Design** - Fully responsive interface for all devices
- 📤 **File Uploads** - Easy file uploads via UploadThing
- 📈 **Analytics** - Visualize student progress and course performance

## 🛠️ Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend**: Next.js API routes, Prisma ORM
- **Database**: PostgreSQL (compatible with any database supported by Prisma)
- **Authentication**: Clerk
- **Video Hosting**: Mux
- **Payment Processing**: Stripe
- **State Management**: Zustand
- **Forms**: React Hook Form with Zod validation
- **UI Components**: Radix UI primitives with custom styling
- **Data Visualization**: Recharts

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn
- PostgreSQL database (or any database supported by Prisma)
- Clerk account for authentication
- Mux account for video hosting
- Stripe account for payments
- UploadThing account for file uploads

## 🔧 Installation

1. Clone the repository:

```bash
git clone https://github.com/gongool/acadevo.git
cd acadevo
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up environment variables:

Create a `.env` file in the root directory with the following variables:

```
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/acadevo"

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# MUX
MUX_TOKEN_ID=
MUX_TOKEN_SECRET=

# Uploadthing
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

# Stripe
STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

4. Initialize the database:

```bash
npx prisma generate
npx prisma db push
```

5. Run the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## 🔍 Project Structure

```
acadevo/
├── app/                   # Next.js app directory
│   ├── (auth)/            # Authentication routes
│   ├── (dashboard)/       # Dashboard routes (protected)
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/                # UI components (buttons, forms, etc.)
│   ├── providers/         # Context providers
│   └── ...                # Feature-specific components
├── lib/                   # Utility functions and shared code
├── prisma/                # Prisma schema and migrations
├── public/                # Static assets
└── ...                    # Configuration files
```

## 🏗️ Core Functionality

### Course Creation Flow

1. Educators create a course with basic information
2. Add chapters and organize them with drag-and-drop
3. Upload videos and additional resources for each chapter
4. Set pricing options
5. Publish the course for students

### Student Experience

1. Browse available courses
2. Purchase and enroll in courses
3. Watch video content and access resources
4. Track progress through chapters
5. Complete courses and receive certificates

## 🧩 Key Components

- **Course Dashboard**: Manage all aspects of course creation and monitoring
- **Video Player**: Customized Mux player for optimal video experience
- **Progress Tracking**: Visual indicators of course completion
- **Payment System**: Secure checkout process with Stripe
- **Authentication**: Multi-provider auth system with Clerk

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

Ahmed Jamal - [@gongool](https://twitter.com/gongool) - gongool@hotmail.com

Project Link: [https://github.com/gongool/acadevo](https://github.com/gongool/acadevo)

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/gongool">Ahmed Jamal</a>
</p>
