import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import NewsPage from "../components/newspage";

export default class Home extends Component {
  render() {
    return (
      <Router>
        {/* Header Navbar */}
        <header className="bg-gray-100 border-b border-gray-300">
          <nav className="flex space-x-6 p-4">
            <Link to="/" className="px-3 py-2 text-blue-700 font-semibold hover:underline">
              Home
            </Link>
            <Link to="/news" className="px-3 py-2 text-blue-700 hover:underline">
              News
            </Link>
          </nav>
        </header>

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <main className="p-6 text-center">
                <h1 className="text-2xl font-bold text-gray-800">Welcome to My Homepage</h1>
                <p className="mt-4 text-gray-600">A simple single‑page React app.</p>
              </main>
            }
          />
          <Route path="/news" element={<NewsPage />} />
        </Routes>

        {/* Footer */}
        <footer className="fixed bottom-0 w-full text-center text-gray-500 text-sm bg-gray-100 border-t border-gray-300 py-2">
          <p>All rights reserved.</p>
        </footer>
      </Router>
    );
  }
}
