import React from "react";
import OrderCard from "./orderCard";
import "./orderHistory.css"
import img from '../Product/bookimgAsProduct.jpg'
class OrderHistory extends React.Component {
    render() { 
        return (
            <div className="order-history">
                <OrderCard image={img} title="Author" price="250" id="abcd"/>
                <OrderCard image={img} title="Author" price="250" id="abcd"/>
    
            </div>
        );
    }
}
 
export default OrderHistory;