import React, { Component } from 'react';


class ImageCard extends Component {

    render() {
        return (
            <div id="page" className="App">
                
                <div id="cardContainer">
                    <article id="card">
                        <img id="thisImage" src={`${this.props.imgSrc}?${this.props.imgHash}`}></img>
                        <div id="buttonLayout">
                            <input type="image" src="/crayonnotfriend.png" id="notBeFriend" onClick={this.props.notBecomeFriend} />
                            <input type="image" src="/crayonfriend.png" id="beFriend" onClick={this.props.becomeFriend} />
                        </div>

                    </article>
                </div>          
            </div>
        );
    }

}
export default ImageCard;