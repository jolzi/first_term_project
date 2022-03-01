import React, { Component } from 'react';


class RecommendCard extends Component {

    render() {
        return (
            <div id="recommendCardContainer">
                <div id="recommendCard">
                    <div id="recommendTextFrame">
                        <div id='recommendText'>
                            Did you enjoy <span id='emphasis'>Friendly Friend Helper</span>? Why don't you try one of our other services?
                        </div>
                    </div>
                    <div id="recommendPictureFrame">
                        <div id="recommendTopPictureFrame">
                            <div id="imageWrap">
                                <a id="picture1Description" href="https://developer.amazon.com/en-US/alexa" target="_blank" rel="noopener noreferrer">
                                    Homely Home Helper
                                </a>
                                <img id="picture1" src='/alexa.webp' title='Homely Home Helper'></img>
                            </div>
                            <div id="imageWrap">
                                <a id="picture1Description" href="https://www.socoslearning.com/" target="_blank" rel="noopener noreferrer">
                                    Optimizey Child-Optimization Helper
                                </a>
                                <img id="picture1" src='/child.png' title='Optimizey Child-Optimization Helper'></img>
                            </div>
                        </div>
                        <div id="recommendBottomPictureFrame">
                            <div id="imageWrap">
                                <a id="picture1Description" href="https://www.sarahthetherapist.org/" target="_blank" rel="noopener noreferrer">
                                    Anxious Anxiety Helper
                                </a>
                                <img id="picture1" src='/sarah.png' title='Anxious Anxiety Helper'></img>
                            </div>
                            <div id="imageWrap">
                                <a id="picture1Description" href="https://www.juiceboxit.com/" target="_blank" rel="noopener noreferrer">
                                    Sexy Sex Helper
                                </a>
                                <img id="picture1" src='/slutbot.png' title='Homely Home Helper'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}
export default RecommendCard;