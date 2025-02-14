# Job Listing Web App

## 🚀 Overview

This is a **Job Board Web Application** built using **Next.js 15**, allowing users to browse, search, and apply for jobs. It features job listings, filtering, detailed job pages, a save job feature with Context API, and a job application form.

## ✨ Features

- ✅ **Job Listings Page**: Displays paginated job postings (title, company, location, salary).
- ✅ **Search & Filters**: Users can search for jobs by keyword and filter by category.
- ✅ **Job Details Page**: Displays job descriptions, company details, and application instructions.
- ✅ **Save Jobs Feature**: Users can save jobs to `localStorage` (managed with Context API).
- ✅ **Job Application Form**: Users can apply by submitting a form with validation.
- ✅ **Code Quality**: Enforced with Husky and Prettier.
- ❌ **Authentication**: Not implemented.

## 🫠 Tech Stack

- **Framework**: Next.js 15 (React 19)
- **State Management**: Context API
- **Styling**: TailwindCSS
- **Component Library**: HeroUI
- **API Integration**: JSearch API (via RapidAPI)
- **Form Validation**: Zod
- **Utilities**: Day.js, React Toastify, use-debounce
- **Code Quality**: Husky & Prettier

## 📚 Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/KodingnNYoung/job-listing.git
cd job-listing
```

### 2️⃣ Install Dependencies

```sh
npm install
# OR
yarn install
```

### 3️⃣ Set Up Environment Variables

Create a `.env.local` file and add your **Rapid API Key**:

```sh
NEXT_PUBLIC_RAPID_API_KEY=your-rapid-api-key
```

### 4️⃣ Run the Development Server

```sh
npm run dev
# OR
yarn dev
```

The app will be available at `http://localhost:3000`

## 💼 API Usage

This app fetches job listings from the **JSearch API** via RapidAPI.

### 🔹 Fetch Jobs Example (GET Request)

```ts
const fetchJobs = async (query: string) => {
  const response = await fetch(
    `https://jsearch.p.rapidapi.com/search?query=${query}`,
    {
      headers: {
        "X-RapidAPI-Key": process.env.RAPID_API_KEY,
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
    }
  )
  return response.json()
}
```

## 🚀 Deployment

The application is deployed on **Vercel** and can be accessed here:

🔗 **[Live Preview](https://job-listing-chi-beige.vercel.app/)**

To deploy manually, follow these steps:

```sh
npm run build
npm run start
```

Alternatively, push to GitHub and connect to **Vercel Dashboard** for automatic deployment.

## 🎯 Future Improvements

- 🔹 Add **authentication** (NextAuth.js or Firebase Auth)
- 🔹 Implement **unit tests** with Jest & React Testing Library
- 🔹 Support **GraphQL API** integration

## 🐝 License

MIT License. Free to use and modify.
