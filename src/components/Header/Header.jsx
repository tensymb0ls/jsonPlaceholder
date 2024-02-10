import React, { Component } from 'react';
import Arrow from '../icons/Arrow';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpand: false,
            style: { transform: 'scaley(-1)' },
        };
    }

    handleExpand = () => {
        console.log('click');
        this.setState((prevState) => ({
            isExpand: !prevState.isExpand,
            style: prevState.style.transform === ' ' ? { transform: 'scaley(-1)' } : { transform: ' ' },
        }));
    }


    render() {
        const { changeState } = this.props;
        const { isExpand, style } = this.state;

        return (
            <nav className={`${isExpand ? 'nav-transform' : 'no-nav-transform'}`}>
                <ul className={`navigation-list`}>
                    <li onClick={() => changeState('posts')}>Posts</li>
                    <li onClick={() => changeState('comments')}>Comments</li>
                    <li onClick={() => changeState('photos')}>Photos</li>
                    <li onClick={() => changeState('todos')}>Todos</li>
                    <li onClick={() => changeState('users')}>Users</li>
                </ul>
                <Arrow onClick={this.handleExpand} style={style} />
            </nav>
        );
    }
}

export default Header;
