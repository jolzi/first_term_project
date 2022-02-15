import React, { Component } from 'react';


class ImageCardInactive extends Component {

    render() {
        return (
            <div id="page" className="App">
                <div id="pageHeader">
                    <h1 id="headerText">
                            <span>F</span>
                            <span>r</span>
                            <span>i</span>
                            <span>e</span>
                            <span>n</span>
                            <span>d</span>
                            <span>l</span>
                            <span>y</span>
                            <span> </span>
                            <span>F</span>
                            <span>r</span>
                            <span>i</span>
                            <span>e</span>
                            <span>n</span>
                            <span>d</span>
                            <span> </span>
                            <span>H</span>
                            <span>e</span>
                            <span>l</span>
                            <span>p</span>
                            <span>e</span>
                            <span>r</span>
                    </h1>
                </div>
                <div id="cardContainer">
                    <article id="card">
                        <img id="thisimage" src={`${this.props.imgSrc}?${this.props.imgHash}`}></img>
                        <div id="buttonLayout">
                            <input type="image" src={this.props.friendSrc} id="beFriendInactive" />
                            <input type="image" src={this.props.notFriendSrc} id="notBeFriendInactive" />
                        </div>

                    </article>
                </div>
            </div>
        );
    }

}
export default ImageCardInactive;