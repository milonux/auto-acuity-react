//Page404 for for not-found pages

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Page404 extends Component {
  render() {
    return (
     <div className="section section-404 on-dark">
       <div className="container">
         <div className="row">
           <div className="col-sm-8 offset-sm-2">
             <div className="content-404">
               <h1 className="title">404</h1>
               <div class="content-404-sub">
                 <h2 className="sub-title">Page Not Found</h2>
                 <p>Sorry, the page you are looking for cannot be found. Try checking the URL or return back home.</p>
                 <Link to="/"><i className="fa fa-angle-left" />&nbsp;&nbsp;Return Home</Link>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
    )
  }
}

export default Page404
