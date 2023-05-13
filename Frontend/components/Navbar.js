let Navbar = () => {
  return `
    <nav id="nav" class="nav">
    <div class="container" id="container">
      <div class="logo">
        <a id="logo-href" href="#"
          ><img  id="nav-logo"  src="#" alt=""
        /></a>
      </div>
      <div id="mainListDiv" class="main_list">
        <ul id="navlinks" class="navlinks">
          <li><a id="bookhref" href="./html/Mens_Services.html">Men's Appointment</a></li>
          <li><a id="bookhref1" href="./html/women_services.html">Women's Appointment</a></li>
          <li><a id="viewhref" href="./html/viewAppointment.html"> View Appointment</a></li>
          <li><a id="contacthref" href="./admin-page/admin.html">Admin Panel</a></li>
          <li><a id="loginhref" href="./html/login.html">Login / Signup</a></li>
        </ul>
      </div>
      <span id="navTrigger" class="navTrigger">
        <i></i>
        <i></i>
        <i></i>
      </span>
    </div>
  </nav>
  <div id="visible1"></div>
    `;
};

// async function logout(){
//   await fetch(`https://clumsy-dove-tunic.cyclic.app/user/logout`)
//   .then((res)=> res.json())
//   .then((msg)=> {
//     alert('Logout success')
//     console.log(msg)
//     window.location.href = '../index.html'
//   })
// }

export { Navbar };
