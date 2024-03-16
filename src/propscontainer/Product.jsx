import React from 'react'
class Product extends React.Component {
    state = {
        product: {
            name: "oppo A55",
            price: 45454,
            image: "https://rukminim2.flixcart.com/image/224/224/xif0q/mobile/b/h/c/-original-imagth5xwrg4gfyp.jpeg?q=90",
            qty: 1
        },
        user: {}

    }
    increHandler = () => {
        this.setState({
            product: {
                ...this.state.product, qty: this.state.product.qty + 1
            }
        })
    }
    decreHandler = () => {
        this.setState({
            qty: this.state.product.qty - 1
        })
    }

    render() {
        return (
            <div> <div className='container' mt-5>
                <div className='row'>
                    <div className='col-10'>
                        <table className='table'>
                            <thead className='bg-dark text-white'>
                                <th> Name</th>
                                <th> Price</th>
                                <th> Image</th>
                                <th>QTY </th>
                                <th> Total</th>


                            </thead>
                            <tbody>

                                <td> {this.state.product.name}</td>
                                <td> {this.state.product.price}</td>
                                <td> <img src={this.state.product.image} height={"100px"} alt="image" /> </td>
                                <td><i onClick={this.decreHandler} className='fa fa-minus-circle'></i> {this.state.product.qty}<i onClick={this.increHandler} className='fa fa-plus-circle'></i></td>
                                <td> {this.state.product.qty * this.state.product.price}</td>
                            </tbody>

                        </table>
                    </div>
                </div>

            </div></div>
        )
    }


}
export default Product