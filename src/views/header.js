import '../styles/header.css'
import Product1 from './product1';

function Header() {
    return(
        <div>
            <div className="flex">
                <a href='#' className='company_logo'>
                    <img src={require("../images/De_Jeunesse_Logo_transp_120x 1.png")}/>
                </a>
                <div>
                    <input type="text" placeholder="Search" className="search"/>
                </div>
                <a href="#" style={{textDecoration:'none'}} className="home">Home</a>
                <a href='#' style={{textDecoration:'none'}} className="our_story">Our Story</a>
                <a href='#' style={{textDecoration:'none'}} className="our_product">Our products</a>
                <a href='#' style={{textDecoration:'none'}} className="blog">Blog</a>
                <a href='#' style={{textDecoration:'none'}} className="contact_us">Contact Us</a>
                <a href='#' style={{textDecoration:'none'}} className="find_store">Find Store</a>
                <a href='#'>
                    <img src={require("../images/Cart.png")}/>
                </a>
                <a href='#'>
                    <img src={require("../images/Ellipse 2.png")}/>
                </a>
            </div>
        </div>
    );
    
}

export default Header