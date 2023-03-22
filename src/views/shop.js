import '../styles/shop.css'

function Shop(){
    return(
        <div>
            <div className='l1_l2'>
            <div className='l1'>Shop By Our</div>
            <div className='l2'>Categories</div></div>
            <div className='flex_shop'>
                <img src={require('../images/shop1.png')}/>
                <div><div>
                    <img src={require('../images/unsplash_Sg7eWHKrxrA.png')}/>
                </div>
                <div className='img_top_pad'>
                    <img src={require('../images/Frame 6.png')}/>
                </div></div>
            </div>
        </div>
    );
}

export default Shop