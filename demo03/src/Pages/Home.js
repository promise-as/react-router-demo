import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Home组件内容</h2>
      <div>
        <ul className="nav nav-tabs">
          <li><Link to="/home/news/" className="list-group-item activeClass">News</Link></li>
          <li><Link to="/home/message/" className="list-group-item">Message</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Home