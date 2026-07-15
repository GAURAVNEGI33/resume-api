# Resume API

A REST API for an AI Resume Builder built with Node.js + Express.

## How to Run

```bash
npm install
node app.js
```

Server runs on: `http://localhost:3000`

## Routes

### Auth

- POST `/api/auth/register`
- POST `/api/auth/login`
- POST `/api/auth/logout`
- POST `/api/auth/forgot-password`
- POST `/api/auth/reset-password`

### Users

- GET `/api/users/me`
- PUT `/api/users/me`
- DELETE `/api/users/me`

### Documents

- GET `/api/documents`
- POST `/api/documents`
- POST `/api/documents/import`
- GET `/api/documents/:id`
- PUT `/api/documents/:id`
- POST `/api/documents/:id/duplicate`
- DELETE `/api/documents/:id`

### Sections

- POST `/api/documents/:id/sections`
- PATCH `/api/documents/:id/sections/:sectionId`
- DELETE `/api/documents/:id/sections/:sectionId`
- POST `/api/documents/:id/sections/:sectionId/items`
- PATCH `/api/documents/:id/sections/:sectionId/items/:itemId`
- DELETE `/api/documents/:id/sections/:sectionId/items/:itemId`

### Versions

- GET `/api/documents/:id/versions`
- POST `/api/documents/:id/versions`
- POST `/api/documents/:id/versions/:versionId/restore`

### Templates

- GET `/api/templates`
- GET `/api/templates/:id`

### AI

- POST `/api/ai/bullets`
- POST `/api/ai/summary`
- POST `/api/ai/rewrite`
- POST `/api/ai/prompt`

### Applications

- GET `/api/applications`
- POST `/api/applications`
- PATCH `/api/applications/:id`
- DELETE `/api/applications/:id`

## Status

All API endpoints tested and working with correct JSON responses and status codes.
