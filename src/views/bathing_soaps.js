import '../styles/bathing_soaps.css'
import '../styles/collection.css'


function Bathing(){
    return(
        <div className='bathing'>
            <div className='lineb1'>bathing soaps</div>
            <div className='lineb2'>Organic Collection Best Sellers</div>
            <div className='collection1'>
                <div>
                    <img src={require('../images/SB - Aloecado Soap (transp).png')}/>
                    <div className='item_name'>Aloecado</div>
                    <div className='item_cost'>$17.30</div>
                    <div>
                        <img src={require('../images/Star 1.png')}/>
                        <img src={require('../images/Star 1.png')}/>
                        <img src={require('../images/Star 1.png')}/>
                        <img src={require('../images/Star 1.png')}/>
                        <img src={require('../images/Star 1.png')}/>
                    </div>
                </div>
                <div>
                    <img src={require('../images/SB - Lavender Lust Soap (transp).png')}/>
                    <div className='item_name'>Lavender Lust</div>
                    <div className='item_cost'>$17.30</div>
                    <div>
                        <img src={require('../images/Star 1.png')}/>
                        <img src={require('../images/Star 1.png')}/>
                        <img src={require('../images/Star 1.png')}/>
                        <img src={require('../images/Star 1.png')}/>
                        <img src={require('../images/Star 1.png')}/>
                    </div>
                </div>
                <div>
                    <img src={require('../images/SB - Activated Charcoal & Pink Rose Clay Soap (transp).png')}/>
                    <div className='item_name'>Charcoal & Pink Rose Clay </div>
                    <div className='item_cost'>$17.30</div>
                    <div>
                        <img src={require('../images/Star 1.png')}/>
                        <img src={require('../images/Star 1.png')}/>
                        <img src={require('../images/Star 1.png')}/>
                        <img src={require('../images/Star 1.png')}/>
                        <img src={require('../images/Star 1.png')}/>
                    </div>
                </div>
                <div>
                    <img src={require('../images/SB - Honey & Turmeric Soap (transp).png')}/>
                    <div className='item_name'>Honey & Turmeric</div>
                    <div className='item_cost'>$17.30</div>
                    <div>
                        <img src={require('../images/Star 1.png')}/>
                        <img src={require('../images/Star 1.png')}/>
                        <img src={require('../images/Star 1.png')}/>
                        <img src={require('../images/Star 1.png')}/>
                        <img src={require('../images/Star 1.png')}/>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Bathing