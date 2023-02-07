function HeaderComponent() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    <p className="navbar-brand">M3</p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end " tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                        <p className="navbar-brand">M3</p>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body border ">
                            <ul className="col-10 navbar-nav justify-content-end d-flex gap-5 flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#conferences">Conferences</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#mission">Mission</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#tickets">Tickets</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#schedules">Schedules</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#schedules">Speakers</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#schedules">Interviews</a>
                                </li>   
                                                            
                            </ul>
                            <ul className="navbar-nav justify-content-end border col-2 flex-grow-1 pe-3">
                            <li className="nav-item">
                                    <a className="nav-link" href="#register">Register Now</a>
                                </li>  
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default HeaderComponent;