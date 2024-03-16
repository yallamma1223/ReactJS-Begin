import React from 'react'
class Product1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: "hello",
        }
    }
    update = (value) => {
        this.setState({ msg: value })
    }





    render() {
        return (
            <div>
                <pre> {JSON.stringify(this.state)}</pre>
                <h3> msg: {this.state.msg}</h3>
                <button onClick={this.update.bind(this, "Good Morning")}>     GM   </button>
                <button onClick={this.update.bind(this, "Good Afternoon")}>       GA </button>
                <button onClick={this.update.bind(this, "Good Evening")}>       GE </button>
                <button onClick={this.update.bind(this, "Good Night")}>    GN    </button>


            </div>
        )





    }



}
export default Product1