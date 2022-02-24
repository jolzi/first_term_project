import React, { Component } from 'react';


class RecommendCard extends Component {

    render() {
        return (
            <div id="recommendCard">
                <div id="recommendTextFrame">
                    <div id='recommendText'>
                        Did you enjoy <span id='emphasis'>Friendly Friend Helper</span>? Why don't you try out some of our other services?
                    </div>
                </div>
                <div id="recommendPictureFrame">
                    <div id="recommendTopPictureFrame">
                        <div id="imageWrap">
                            <p id="picture1Description">Homely Home Helper.</p>
                            <img id="picture1" src='/alexa.webp' title='Homely Home Helper'></img>
                        </div>
                        <div id="imageWrap">
                            <p id="picture1Description">Stately State Helper</p>
                            <img id="picture1" src='/alexa.webp' title='Homely Home Helper'></img>
                        </div>
                    </div>
                    <div id="recommendBottomPictureFrame">
                    <div id="imageWrap">
                            <p id="picture1Description">Stately State Helper</p>
                            <img id="picture1" src='/alexa.webp' title='Homely Home Helper'></img>
                        </div>
                        <div id="imageWrap">
                            <p id="picture1Description">Stately State Helper</p>
                            <img id="picture1" src='/alexa.webp' title='Homely Home Helper'></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
export default RecommendCard;