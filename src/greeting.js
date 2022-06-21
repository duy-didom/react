// Nguye class nay duoc xem nhu la Component
import React from "react";
class Greeting extends React.Component {
    //Xay dung phuong thuc tra ve JSX cua component
    // render() {
    //     return (
    //         <div className="greeting">
    //             <h3>Hello {this.props.fullName} </h3>
    //         </div>
    //     );
    // }
    render() {
        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
        };
        return (
            <div style={mystyle}>
                <h3>Hello {this.props.fullName} </h3>
            </div>
        );
    }
}
Greeting.defaultProps = {fullName:"Hi You"}

export default Greeting;
