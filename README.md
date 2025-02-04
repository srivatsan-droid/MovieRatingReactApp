Movie Search App

Overview

The Movie Search App allows users to browse popular movies and search for specific films using an API. Users can also mark movies as favorites for quick access.

Features

🔍 Search Movies: Find movies by title using a search bar.

🎥 Popular Movies: Browse a list of trending movies.

❤️ Favorites: Add movies to a favorites list.

🎨 Responsive UI: Clean and simple design for an easy user experience.

Tech Stack

Frontend: React.js

Styling: CSS

Routing: React Router

API: The Movie Database (TMDb) API

Installation & Setup

Clone the Repository:

git clone https://github.com/your-username/movie-search-app.git
cd movie-search-app

Install Dependencies:

npm install

Create a .env File (For API Key):

REACT_APP_TMDB_API_KEY=your_api_key_here

Run the Application:

npm start

Folder Structure

📂 movie-search-app
├── 📂 public         # Static files
├── 📂 src
│   ├── 📂 components  # UI components (MovieCard, NavBar)
│   ├── 📂 pages       # Main pages (Home, Favorites)
│   ├── 📂 service     # API calls
│   ├── 📂 css         # Stylesheets
│   ├── App.jsx       # Main app component
│   ├── main.jsx      # Entry point
│   └── index.css     # Global styles
└── package.json      # Project dependencies

API Usage

The app fetches movies using the TMDb API.

Popular movies are loaded on the home page.

Search functionality queries TMDb for relevant results.

Future Improvements

🔄 Persist favorites in local storage

⭐ User authentication for personalized lists

🌍 Multi-language support

License

This project is open-source and available under the MIT License.
