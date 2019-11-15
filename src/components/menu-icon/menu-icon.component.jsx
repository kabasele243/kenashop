import React from 'react';
import '../header/header.styles.scss'


const iconStyle = {
    fontSize: "2.5em",
    padding: "12px",
    color: 'white',
    cursor: 'pointer'
}

class MenuIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false,

        }


    }

    handleClick = () => {
        this.setState({
            visibility: !this.state.visibility
        })
        console.log(this.state.visibility)
    }


    render() {
        return (
            <div >
                <span className="icon" onClick={this.handleClick} style={iconStyle}>
                    <i className="fas fa-bars "></i>
                </span>
                {
                    this.state.visibility ?
                        <div className='menu-list'>
                            <span className="icon" style={iconStyle} onClick={this.handleClick} >
                                <i className="far fa-window-close"></i>
                            </span>
                            <ul>
                                <li>Shop</li>
                                <li>Contact</li>
                                <li>Sign in</li>
                            </ul>
                        </div> : null
                }
            </div>
        )
    }
}




export default MenuIcon;