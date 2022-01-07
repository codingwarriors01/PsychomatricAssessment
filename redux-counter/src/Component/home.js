import React from 'react'

function Home(props) {
    return (
        <div>
           
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://static.toiimg.com/thumb/resizemode-4,msid-86550242,imgsize-49546,width-720/86550242.jpg" alt="" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                        Add To Cart</button><br/>

                        <button 
                    onClick={
                        ()=>{props.removeToCartHandler({})}
                        }>
                        Remove To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home