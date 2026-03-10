# NeuroBlog Backend

A powerful and scalable Node.js backend API for the NeuroBlog blogging platform. This server handles authentication, blog management, image uploads, and admin operations.

**Frontend Repository:** [NeuroBlog-FE](https://github.com/Yasindu-Navo/NeuroBlog-FE.git)

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Running the Application](#running-the-application)
- [Deployment](#deployment)
- [Contributing](#contributing)

---

## ✨ Features

- **User Authentication** - JWT-based authentication with secure token management
- **Blog Management** - Create, read, update, and delete blog posts
- **Comments System** - Users can comment on blog posts
- **Image Upload** - Integrated ImageKit for efficient image management and optimization
- **Admin Dashboard** - Administrative controls for managing content
- **CORS Support** - Cross-origin requests enabled for frontend integration
- **Input Validation** - Middleware for securing API endpoints
- **Error Handling** - Comprehensive error handling and meaningful error responses

---

## 🛠 Tech Stack

### Backend Framework & Libraries

- **Express.js** (v5.2.1) - Fast, minimalist web framework
- **Node.js** - JavaScript runtime
- **MongoDB** - NoSQL database
- **Mongoose** (v9.2.0) - MongoDB object modeling
- **JWT (jsonwebtoken)** (v9.0.3) - Secure authentication tokens

### File & Image Management

- **Multer** (v2.0.2) - Middleware for file uploads
- **ImageKit** (v6.0.0 & @imagekit/nodejs v7.3.0) - Image optimization and delivery

### Utilities

- **CORS** (v2.8.6) - Cross-Origin Resource Sharing
- **dotenv** (v17.2.4) - Environment variable management
- **Nodemon** (v3.1.11) - Development server auto-reload

---

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or MongoDB Atlas connection string)
- ImageKit account (for image management)

### Setup Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/Yasindu-Navo/NeuroBlog-BE.git
   cd NeuroBlog-BE
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root directory and add your environment variables (see [Environment Variables](#environment-variables))

4. **Verify the setup**
   ```bash
   npm start
   ```
   You should see: `server is running on PORT3000`

---

## 📁 Project Structure

```
NeuroBlog-BE/
├── configs/
│   ├── db.js              # MongoDB connection configuration
│   └── imageKit.js        # ImageKit configuration
├── controllers/
│   ├── adminController.js # Admin-related business logic
│   └── blogController.js  # Blog-related business logic
├── middlewares/
│   ├── auth.js            # JWT authentication middleware
│   └── multer.js          # File upload middleware configuration
├── models/
│   ├── blog.js            # Blog schema and model
│   └── comment.js         # Comment schema and model
├── routes/
│   ├── adminRoutes.js     # Admin API routes
│   └── blogRoutes.js      # Blog API routes
├── server.js              # Application entry point
├── package.json           # Project dependencies
├── .env                   # Environment variables (create this)
└── README.md              # This file
```

### File Descriptions

| File                  | Purpose                                                     |
| --------------------- | ----------------------------------------------------------- |
| `server.js`           | Express app setup, middleware configuration, route mounting |
| `configs/db.js`       | MongoDB connection management via Mongoose                  |
| `configs/imageKit.js` | ImageKit API client initialization                          |
| `controllers/`        | Business logic for handling requests                        |
| `middlewares/`        | Authentication and file upload processing                   |
| `models/`             | Mongoose schemas for Blog and Comment collections           |
| `routes/`             | API endpoint definitions                                    |

---

## 🔑 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Server Configuration
PORT=3000

# Database Configuration
MONGODB_URI=your_mongodb_connection_string

# JWT Configuration
JWT_SECRET=your_jwt_secret_key

# ImageKit Configuration
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

### Getting Your Credentials

- **MongoDB**: Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **ImageKit**: Sign up at [ImageKit.io](https://imagekit.io/) and get your credentials from the dashboard
- **JWT_SECRET**: Generate a random string (use `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`)

---

## 🌐 API Endpoints

### Base URL

```
http://localhost:3000/api
```

### Blog Endpoints

| Method | Endpoint             | Description              |
| ------ | -------------------- | ------------------------ |
| GET    | `/blog`              | Get all blog posts       |
| GET    | `/blog/:id`          | Get a specific blog post |
| POST   | `/blog`              | Create a new blog post   |
| PUT    | `/blog/:id`          | Update a blog post       |
| DELETE | `/blog/:id`          | Delete a blog post       |
| POST   | `/blog/:id/comments` | Add a comment to a post  |
| GET    | `/blog/:id/comments` | Get comments for a post  |

### Admin Endpoints

| Method | Endpoint        | Description               |
| ------ | --------------- | ------------------------- |
| POST   | `/admin/login`  | Admin login               |
| POST   | `/admin/upload` | Upload image via ImageKit |
| GET    | `/admin/stats`  | Get dashboard statistics  |

_Note: Specific endpoint behaviors depend on your controller implementations_

---

## 🚀 Running the Application

### Development Mode

Uses Nodemon for auto-reloading on file changes:

```bash
npm run server
```

### Production Mode

Direct Node.js execution:

```bash
npm start
```

### Testing the API

- Use Postman, Insomnia, or any API client
- Base URL: `http://localhost:3000`
- Health check: `GET http://localhost:3000/` should return "API is working"

---

## 🌍 Frontend Integration

The frontend application is separate and available here:

**[NeuroBlog Frontend Repository](https://github.com/Yasindu-Navo/NeuroBlog-FE.git)**

To run both frontend and backend together:

1. Clone and set up the backend (this repository)
2. Clone and set up the frontend (from the link above)
3. Ensure the frontend is configured to call `http://localhost:3000/api`
4. Run the backend with `npm run server`
5. Run the frontend according to its README

---

## 🚀 Deployment

### Deploy to Heroku

1. Create a Heroku app:

   ```bash
   heroku create your-app-name
   ```

2. Set environment variables:

   ```bash
   heroku config:set MONGODB_URI=your_mongodb_uri
   heroku config:set JWT_SECRET=your_jwt_secret
   heroku config:set IMAGEKIT_PRIVATE_KEY=your_key
   heroku config:set IMAGEKIT_PUBLIC_KEY=your_key
   heroku config:set IMAGEKIT_URL_ENDPOINT=your_endpoint
   ```

3. Deploy:
   ```bash
   git push heroku main
   ```

### Deploy to Other Platforms

Similar environment variable setup is needed for platforms like:

- AWS EC2
- DigitalOcean
- Render
- Railway

---

## 📝 Contributing

Contributions are welcome! If you'd like to improve this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the ISC License - see the package.json file for details.

---

## 🤝 Support

For issues, questions, or suggestions:

- Open an issue on GitHub
- Check existing issues for solutions
- Review the project's documentation

---

**Happy blogging! 🧠✍️**
