import React, { Component } from 'react';


class OnboardingCard extends Component {

    render() {
        return (
            <div className="App">
                <div id="cardContainer">
                    <article id="card">
                        <div id="textContainer" src={`${this.props.imgSrc}?${this.props.imgHash}`}>
                            <div id="text">
                               {this.props.greetingText}
                            </div>
                        </div>
                        <div id="buttonLayout">
                            <input type="image" src="/crayonnotfriend.png" id="notBeFriend" onClick={this.props.notBecomeFriend} style={{opacity: this.props.notFriendOpacity}}/>
                            <input type="image" src="/crayonfriend.png" id="beFriend" onClick={this.props.becomeFriend} style={{opacity: this.props.friendOpacity}}/>
                        </div>

                    </article>
                </div>
            </div>

        );
    }

}
export default OnboardingCard;