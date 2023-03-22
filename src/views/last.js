import '../styles/last.css'

function Last(){
    return(
        <div>
        <div className='last_flex '>
            <div>
                <div className='last_heading'>DeJeunesse</div>
                <div className='last_body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus, netus vestibulum diam</div>
                <div className='last_body'><img src={require('../images/Pin 24px.png')}/> Location</div>
                <div className='last_body'><img src={require('../images/Vector.png')}/> +12 8909 821</div>
                <a href='www.DeJeunesse.com' className='last_body'>www.DeJeunesse.com</a>
            </div>        
            <div>
                <div className='last_heading'>Links</div>
                <div className='last_body'>Home</div>
                <div className='last_body'>Products</div>
                <div className='last_body'>Our Story</div>
                <div className='last_body'>Blog</div>
                <div className='last_body'>Find A Store</div>
            </div>        
            <div>
                <div className='last_heading'>Stay Connected</div>
                <div className='last_body'>Facebook</div>
                <div className='last_body'>Instagram</div>
                <div className='last_body'>Twitter</div>
            </div>
            <div>
                <div className='last_heading'>Stay Updated</div>
                <div className='form_div'>
                    <input type='text' placeholder='Enter your Email' className='last_form'/>
                   <span className='greenbg'><img src={require('../images/carbon_send-alt-filled.png')}/></span>
                </div>
                <div className='last_heading'>Payments Accepted</div>
            </div>
            
        </div>
        <div className='copyright'>© 2021, dejeunesse</div>
        </div>
    );
}
//carbon_send-alt-filled.png
export default Last