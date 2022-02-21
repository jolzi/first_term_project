import React, { Component } from 'react';


class ImageCardInactive extends Component {

    render() {
        return (
            <div id="page" className="App">
                <div id="cardContainer">
                    <article id="card">
                        <img id="thisimage" src={`${this.props.imgSrc}?${this.props.imgHash}`}></img>
                        <div id="buttonLayout">
                            <input type="image" src={this.props.notFriendSrc} id="notBeFriendInactive" />
                            <input type="image" src={this.props.friendSrc} id="beFriendInactive" />
                        </div>

                    </article>
                </div>
            </div>
        );
    }

}
export default ImageCardInactive;