import React, { Component } from "react";

export default class NewsPage extends Component {
  render() {
    return (
      <main className="p-6 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Latest News</h1>
        <ul className="mt-4 list-disc list-inside text-gray-600 text-left">
          <li>Breaking: Market trends show global shifts.</li>
          <li>Technology: New AI tools shaping industries.</li>
          <li>Sports: Local teams prepare for championships.</li>
        </ul>
      </main>
    );
  }
}