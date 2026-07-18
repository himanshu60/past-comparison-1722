let Navbar = () => {
  return `
    <nav id="nav" class="nav" role="navigation" aria-label="Main">
    <div class="container" id="container">
      <div class="logo">
        <a id="logo-href" href="#" aria-label="Locks & Looks home"
          ><img  id="nav-logo"  src="#" alt="" /><span class="logo-text">Locks &amp; Looks</span
        /></a>
      </div>
      <div id="mainListDiv" class="main_list drawer">
        <ul id="navlinks" class="navlinks">
          <li class="nav-link-item"><a id="bookhref" class="nav-link" href="./html/Mens_Services.html">Men's Appointment</a></li>
          <li class="nav-link-item"><a id="bookhref1" class="nav-link" href="./html/women_services.html">Women's Appointment</a></li>
          <li class="nav-link-item"><a id="viewhref" class="nav-link" href="./html/viewAppointment.html">View Appointment</a></li>
          <li class="nav-link-item"><a id="contacthref" class="nav-link" href="./admin-page/admin.html">Admin Panel</a></li>
          <li class="nav-link-item"><a id="loginhref" class="nav-link" href="./html/login.html">Login / Signup</a></li>
        </ul>
      </div>
      <span id="navTrigger" class="navTrigger" role="button" tabindex="0" aria-label="Toggle navigation menu" aria-expanded="false">
        <i></i>
        <i></i>
        <i></i>
      </span>
    </div>
  </nav>
  <div id="visible1"></div>
    `;
};

export { Navbar };
