# Backend API

This directory is prepared for your backend server implementation. You can choose from several popular Node.js frameworks:

## Framework Options

### Express.js (Minimalist)

```bash
cd apps/api
npm init -y
npm install express cors helmet dotenv
npm install -D @types/express @types/cors @types/node typescript ts-node nodemon
```

### NestJS (Enterprise)

```bash
cd apps/api
npm i -g @nestjs/cli
nest new . --skip-git
```

### Fastify (Performance)

```bash
cd apps/api
npm init -y
npm install fastify @fastify/cors @fastify/helmet
npm install -D @types/node typescript ts-node nodemon
```

## Recommended Structure

```
src/
├── controllers/     # Route handlers
├── services/        # Business logic
├── models/          # Data models
├── middleware/      # Custom middleware
├── routes/          # Route definitions
├── utils/           # Utility functions
├── config/          # Configuration files
└── app.ts           # Application entry point
```

## Environment Variables

Create a `.env` file with:

```
NODE_ENV=development
PORT=3001
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
```

## Getting Started

1. Choose your framework and run the setup commands above
2. Create the recommended folder structure
3. Set up your database connection
4. Implement your API routes
5. Update the root `package.json` scripts if needed

## Integration with Frontend

The frontend is already configured to make API calls to `/api` routes. When you implement your backend:

1. Make sure it runs on a different port (e.g., 3001)
2. Update the frontend's API client configuration if needed
3. Handle CORS properly for development

## Database Integration

Popular choices:

- **PostgreSQL** with Prisma
- **MongoDB** with Mongoose
- **SQLite** for development
- **Supabase** for rapid development

The shared `packages/utils` can contain database utilities and types that both frontend and backend can use.
