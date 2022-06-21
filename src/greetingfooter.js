import React from 'react';
import "./mystyle.css";
class Footer extends React.Component {
    render() {
        let cssname = 'myfooter';
        return (
            <div className={cssname}>
                <h3>My Coppyright: {this.props.copyright}</h3>
                <h4>Time is: {this.props.nowdate.local}</h4>
            </div>
        );
    }
}

export default Footer;