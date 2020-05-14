import React from 'react';
import { Route, Link } from 'react-router-dom';

import Getup from './workplace/Getup';
import Money from './workplace/Money';

function Workplace(){
  return(
    <div>
      <div className="topNav">
        <ul>
          <li><Link to="/workplace/getup/">程序员早起攻略</Link></li>
          <li><Link to="/workplace/money/">程序员加薪秘籍</Link></li>
        </ul>
      </div>
      <div className="videoContent">
        <div><h3>职场软技能</h3></div>
        <Route path="/workplace/getup/" component={ Getup } />
        <Route path="/workplace/money/" component={ Money } />
      </div>
    </div>
  )
}

export default Workplace