import React from "react";
class MyButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Please Click me!",
            clickCount: 0
        };
    }
    updateCount() {
        this.setState((prevStage, props) => {
            return {
                clickCount: prevStage.clickCount + 1,
                text: "Clicked"
            };
        });
    }
    render() {
        return (
            <button onClick={() => this.updateCount()}>
                {this.state.text} : {this.state.clickCount}
            </button>
        );
    }
}
export default MyButton;