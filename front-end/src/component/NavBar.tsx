import "../Style/NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <a href="/" className="logo">
                <h4>
                  <em>Manga</em> Hub
                </h4>
              </a>
              <div className="search-input"></div>
              <ul className="nav">
                <li><a href="/">Home</a></li>
                <li><a href="/cart">Cart</a></li>
                <li><a href="/subscription">Subscription</a></li>
                <li><a href="/profile">Profile</a></li>
                <li>
                  <a href="#" onClick={(e) => { e.preventDefault(); handleLogout(); }} className="logout-link">
                    Logout
                  </a>
                </li>
              </ul>
              <a className="menu-trigger">
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
