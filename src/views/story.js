import '../styles/story.css'

function Story(){
    return(
        <div>
            <div className='story_flex'>
                <div className='story_text'>
                    <div className='our'>Our</div>
                    <div className='story'>Story</div>
                    <p className='quote'>"This all started because of a need!"</p>
                    <p className='para1'>I started De Jeunésse in my dormitory room at the University of West Indies on the sweet Island of Trinidad and Tobago. I needed to find a way to make some cash in order to pay for my schooling. Additionally, My sister was suffering from extremely dry skin - and I thought, "Why not kill two birds with one stone?" So I got my sister on board. And the rest, as they say is history.</p>
                    <p className='para1'>First, we experimented with Cocoa Butter, Coconut Oil and Shea Butter. This then became an obsession for us as creating and formulating recipes for the Body Butter was challenging but also rewarding.</p>
                    <p className='para1'>Our Motto is</p>
                    <p className='quote'>"Maintaining Your Youthfulness the Natural Way"</p> 

                    <p className='para1'>as we source local herbs, spices, oils and butter of high quality ensuring that the end product is a memorable one. Our products are 100% handmade focusing on quality rather than quantity."</p>
                    <p className='final_line'>Co-founder of De Jeunésse, Shenelle Hills-Fife</p>
                </div>
                <div>
                    <img src={require('../images/Group 19.png')} className="story_image"/>
                </div>
            </div>
        </div>
    );
}

export default Story