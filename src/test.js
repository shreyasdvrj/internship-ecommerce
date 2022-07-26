import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './test.css'

export class Test extends Component {

    // componentDidMount(){
    //     this.context.getTotal();
    // }
    constructor(props){
        super(props);
}

    render() {
        //  const {cart,increase,reduction,removeProduct,total} = this.context;
        // if(cart.length === 0){
        //     return <h2 style={{textAlign:"center"}}>Nothings Product</h2>
        // }else{
        //     return (
        //         <>
        //             {
        //                 cart.map(item =>(
        //                     <div className="details cart" key={item._id}>
        //                         <img src={item.src} alt=""/>
        //                         <div className="box">
        //                             <div className="row">
        //                                 <h2>{item.title}</h2>
        //                                 <span>${item.price * item.count}</span>
        //                             </div>
        //                             <p>{item.description}</p>
        //                             <p>{item.content}</p>
        //                             <div className="amount">
        //                                 <button className="count" onClick={() => reduction(item._id)}> - </button>
        //                                 <span>{item.count}</span>
        //                                 <button className="count" onClick={() => increase(item._id)}> + </button>
        //                             </div>
        //                         </div>
        //                         <div className="delete" onClick={() => removeProduct(item._id)}>X</div>
        //                     </div>
        //                 ))
        //             }
        //             <div className="total">
        //                 <Link to="/payment">Payment</Link>
        //                 <h3>Total: ${total}</h3>
        //             </div>
        //         </>
        //         )
        //     }\
        const item = {
            _id: "62d8287e37741939c1509586",
            src : "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546910265l/2.jpg",
            title: "Harry",
            price: 200,
            count : 1,
            description : "Harry wixard"
        }
        return(
        <>
            <div className="details cart" key={item._id}>
            <img src={item.src} alt=""/>
            <div className="box">
                <div className="row">
                    <h2>{item.title}</h2>
                    <span>${item.price * item.count}</span>
                </div>
                <p>{item.description}</p>
                {/* <div className="amount">
                    <button className="count" onClick={() => reduction(item._id)}> - </button>
                    <span>{item.count}</span>
                    <button className="count" onClick={() => increase(item._id)}> + </button>
                </div> */}
            </div>
            {/* <div className="delete" onClick={() => removeProduct(item._id)}>X</div> */}
        </div>
          <div className="total">
          <Link to="/payment">Payment</Link>
          <h3>Total:123</h3>
      </div>
      </>);
        }
}

export default Test