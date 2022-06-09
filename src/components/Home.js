import React from "react";
const HomeComponent = () => {

    return(
        <div>
            <div className="add-to-cart">
                <img src="https://image.shutterstock.com/image-vector/shopping-cart-icons-web-online-600w-1935296603.jpg" width={100} height={100}></img>
            </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg" alt="Not found" width={200} height={200}></img>
                </div>
                <div className="text-wrapper item">
                   <span>Kitty </span><span> Price: $1000.00</span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    );
}
export default HomeComponent;