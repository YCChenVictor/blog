import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WebDevelopment from './components/WebDevelopment.jsx';
import AuthorProfile from './components/AuthorProfile.jsx';
import titleImg from './assets/img/title.jpeg'
import Article from './components/Article.jsx'
import settings from './data/settings.json'

const Layout = () => {
  const desiredRoutes = Object.entries(settings).map(([key, value], index) => (
    <Route
      key={index}
      path={`blog/${value['url']}`}
      element={<Article filePath={`posts/${value['url']}.md`} />}
    />
  ))
  return (
    <div className="bg-gray-700">
      <Router>
        <nav className="flex flex-wrap items-center justify-center px-2 py-4 mb-6">
          <div className="absolute left-0 top-0">
            <a href="/blog" className="!px-0 !py-0">
              <img className="p-4 w-24 rounded-full" src={titleImg} alt="title" />
            </a>
          </div>
          <div className="ml-auto">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <Link to="/blog/web_development">Web Development</Link>
            </button>
          </div>
        </nav>
        <div>
          <Routes>
            <Route path="/blog" element={<AuthorProfile />}/>
            <Route path="/blog/web_development" element={<WebDevelopment />}/>
            {desiredRoutes}
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default Layout;
