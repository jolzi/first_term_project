import React, {Component} from 'react';


class ImageCard extends Component {

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
                            <input type="image" src="/crayonfriend.png" id="beFriend" onClick={this.props.becomeFriend} />
                            <input type="image" src="/crayonnotfriend.png" id="notBeFriend" onClick={this.props.notBecomeFriend} />
                        </div>
    
                    </article>
                </div>
            </div>
        );
    }

}
export default ImageCard;