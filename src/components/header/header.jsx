import "../header/header.css"

const Header = () =>{
    return(
        <div class="main">
            <div class="logo">
                <img src="/images/logo.png" alt="" />
            </div>
            <div class="menu">
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;