# iBikers - Bike Rental Application

## Deployment Guide for Netlify

This guide will help you deploy both the frontend and backend of the iBikers application to Netlify.

### Prerequisites

1. A Netlify account
2. A MongoDB Atlas account (for the database)
3. Git repository with your iBikers code

### Step 1: Prepare Your MongoDB Database

1. Create a MongoDB Atlas cluster if you don't have one already
2. Create a database named `ibikers`
3. Set up a database user with read/write permissions
4. Add your IP address to the IP access list or allow access from anywhere
5. Get your MongoDB connection string

### Step 2: Set Up Environment Variables

1. The `.env.example` file contains the environment variables needed for the application
2. **IMPORTANT: Do not commit your actual .env files to the repository**
3. Instead, add these environment variables in the Netlify dashboard under "Site settings" > "Environment variables"
4. Required environment variables include:
   - `MONGODB_URI` - Your MongoDB connection string
   - `EMAIL_USER` - Email for sending booking confirmations
   - `EMAIL_PASS` - App password for the email account
   - `JWT_SECRET` - Secret for JWT authentication

### Step 3: Deploy to Netlify

#### Using the Netlify UI

1. Log in to your Netlify account
2. Click "New site from Git"
3. Connect to your Git provider and select your repository
4. Configure the build settings:
   - Base directory: `/`
   - Build command: `npm run build`
   - Publish directory: `frontend/dist`
5. Add the environment variables from your `.env` file in the Netlify UI under "Site settings" > "Environment variables"
6. Click "Deploy site"

#### Using the Netlify CLI

1. Install the Netlify CLI: `npm install -g netlify-cli`
2. Log in to Netlify: `netlify login`
3. Initialize your site: `netlify init`
4. Follow the prompts to set up your site
5. Deploy your site: `netlify deploy --prod`

### Step 4: Verify Your Deployment

1. Once deployed, Netlify will provide you with a URL for your site
2. Visit the URL to ensure your frontend is working correctly
3. Test the API endpoints to ensure your backend functions are working correctly

### Troubleshooting

- If your API calls are failing, check the Netlify function logs in the Netlify dashboard
- Ensure your environment variables are correctly set in Netlify
- Check that your MongoDB connection string is correct and that your IP is allowed to access the database

## Local Development

### Install Dependencies

```bash
npm run install:all
```

### Run Frontend and Backend

```bash
# Run frontend
npm run dev:frontend

# Run backend
npm run dev:backend
```

### Build for Production

```bash
npm run build
```

## Project Structure

- `/frontend` - React frontend application
- `/backend` - Express backend API
- `/netlify/functions` - Serverless functions for Netlify deployment
- `netlify.toml` - Netlify configuration file