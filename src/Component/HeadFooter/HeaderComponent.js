import './HeadFooter.css';
import logo from '../../Asset/Logo/Logo.png';



function HeaderComponent() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg py-3 fixed-top">
                <div className="container">
                    <a href='#home'><img src={logo} alt="logo"/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end " tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                        <a href='#home' className='ms-md-4'><img src={logo} alt="logo"/></a>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="col-lg-10 navbar-nav mt-3 ms-sm-4 justify-content-end d-flex gap-lg-5 gap-md-3  flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link conferences" aria-current="page" href="#conferences">Conferences</a>
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
                                    <a className="nav-link " href="#schedules">Interviews</a>
                                </li>   
                                                            
                            </ul>
                            <ul className="navbar-nav justify-content-end col-lg-2 flex-grow-1 pe-3">
                            <li className="nav-item register">
                                    <a className="nav-link register-text" href="#register">Register Now</a>
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