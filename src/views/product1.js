//Turmeric and Lemon Face & Body Cleansing Bar
import React, { useState } from "react";
import "../styles/product1.css"

function Product1(){
    const [count, setCount] = useState(1);

  // Create handleIncrement event handler
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  //Create handleDecrement event handler
  const handleDecrement = () => {
    setCount(prevCount => Math.max(prevCount - 1,0));
  }

    return(
        <div>
            <div className="product_flex">
                <div className="product_image_div">
                    <img src={require("../images/672A6954.png")}/>
                    <div className="scroll_image_div">
                        <img src={require("../images/Rectangle 725.png")} className="scroll_image"/>
                        <img src={require("../images/Rectangle 725.png")} className="scroll_image"/>
                        <img src={require("../images/Rectangle 723.png")} className="scroll_image"/>
                    </div>
                </div>
                <div className="product_text">
                    <div className="product_name">Turmeric and Lemon Face & Body Cleansing Bar</div>
                    <p className="product_prize">Rs 440.30</p>
                    <div className="product_description"><p>Turmeric & Lemon for face and body helps to invigorate the skin to create a healthy glow while acting as a natural anti-bacterial agent. As part of our Caribbean fusion line we infused the Turmeric and rough skin lemon zest in olive oil to soften and even the skin tone back to its natural texture.</p>

                    <p>Ingredients: Water, Olive Oil, Coconut Oil, Palm Oil, Castor Oil, Fragrance Oil, Vegetable Glycerin, Turmeric powder, Lemon Zest.</p></div>
                    <div className="pick_quantity">PICK QUANTITY</div>
                    <div className="product_quantity">
                    <span className="product_minus" onClick={handleDecrement}> - </span>
                    <span className="number"> {count} </span>
                    <span className="product_plus" onClick={handleIncrement}> + </span>
                    </div>
                    <div className="flex_button">
                        <span className="add_span"><button className="product_add">Add To Cart</button></span>
                        <span><button className="product_buy">Buy Now</button></span>
                    </div>
                </div>
            </div>            
        </div>
    );
}

export default Product1