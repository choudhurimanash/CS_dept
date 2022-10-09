import './App.css';

function App() {
  return (
    <>
      <div className="headerLogo" align="center">
         <img src="GU-logo.png" alt="..." />
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
        <img className="logo-img" src="GU.png" width="40" height="40" alt="GUlogo" align="center"/>
          <a className="navbar-brand" href="/">GU</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/"><i className="fa fa-fw fa-home"></i>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/"><i className="fa fa-fw fa-user-secret"></i>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/"><i className="fa fa-fw fa-envelope"></i>Contact</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa fa-fw fa-user"></i>Faculty
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Staff</a></li>
                  <li><a className="dropdown-item" href="/">Contact</a></li>
                  <li><a className="dropdown-item" href="/">Image collection</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa fa-fw fa-child"></i>Student
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Students</a></li>
                  <li><a className="dropdown-item" href="/">Image collection</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa fa-fw fa-bell"></i>Event
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Notification</a></li>
                  <li><a className="dropdown-item" href="/">Upcoming events</a></li>
                </ul>
              </li>
            </ul>
            <div className="mx-2">
                <button className="btn text-light" href="/">Student Login</button>
                <button className="btn btn-primary" href="/">SignUp</button>
            </div>
          </div>
        </div>
      </nav>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="CS.png" className="d-block w-100" alt="..."/>
            </div>
          </div>
        </div>
        
        <div className="mt" align="center">
          <hr></hr>
          <span>© 2022 CS&IT. Design and Coded by Manash <a href="gauhatiuniversity.com">gauhatiuniversity</a></span>
        </div>
    </>
  );
}

export default App;
