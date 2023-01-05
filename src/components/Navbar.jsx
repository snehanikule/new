import React, {useState} from 'react'

const Navbar = () => {
    const[show, setShow] =useState(false)
    return (
        <>
        <section className='navbar-bg'>
        <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container">
    <a class="navbar-brand" href="#">Untitled UI</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
    onClick={()=>setShow(!show)}>
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class={`collapse navbar-collapse ${show ? "show" : " "}`} >
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </a>
          <ul className="dropdown-menu">
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Resources
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        
        </ul>
        <form className="d-flex" role="search">
        <button className="btn btn-outline-success log" type="submit">Login</button>
        <button className="btn btn-outline-success sub" type="submit">Sign up</button>
      </form>
        
      
    </div>
  </div>
</nav>
</section>
        </>
    )
}

export default Navbar;