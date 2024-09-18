<template>
  <nav class="navbar bg-body-tertiary fixed-top">
    <div class="container-fluid">
      <!-- <a class="navbar-brand" href="#">OLWETHU MALUMLA</a> -->
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">HOME</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">ABOUT</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/resume">EDUCATION & EXPERIENCE</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/projects">PROJECTS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">CONTACTS</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <div class="main-content">
    <!-- Your main content goes here -->
  </div>
</template>

<style>
nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  align-items: center;
  padding: 1rem;
  top: 0; /* Add this to ensure the nav is at the top */
  position: fixed; /* This is already set by Bootstrap's fixed-top class */
  width: 100%; /* Add this to ensure the nav takes up the full width */
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #333;
  transition: color 0.2s ease;
}

nav a:hover {
  color: #666;
}

.main-content {
  padding-top: 60px; /* Add this to add some space between the nav and the main content */
}

/* Responsive styles */
@media (max-width: 1200px) and (min-width: 300px) {
  nav {
    flex-direction: row;
  }
  nav a {
    margin: 0 10px;
  }
}

@media (max-width: 300px) {
  nav {
    flex-direction: column;
  }
  nav a {
    margin: 10px 0;
  }
}
</style>