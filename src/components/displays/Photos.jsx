import React, { Component } from 'react';

class Photos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expandedItemId: null
        };
    }

    handleExpand = (itemId) => {
        this.setState({
            expandedItemId: itemId === this.state.expandedItemId ? null : itemId
        });
    }

    render() {
        const { data } = this.props;
        const { expandedItemId } = this.state;

        return (
            <div className='photo'>
                {data.map((item) => (
                    <div className="photo__item" key={item.id}>
                        {expandedItemId === item.id ? (
                            <div className='expanded-photo'>
                                <img src={item.url} alt={item.title} onClick={() => this.handleExpand(item.id)} />
                            </div>
                        ) : (
                            <div><img src={item.thumbnailUrl} alt={item.title} onClick={() => this.handleExpand(item.id)} />
                                <p>{item.title}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        );
    }
}

export default Photos;
