import React, { Component } from 'react';


class Header extends Component {

    render() {
        return (
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

                <div id="sunContainer">
                    <img id="sunLeft" src="/sun.png"></img>
                    <img id="sunRight" src="/sun.png"></img>
                </div>

            </div>
        );
    }

}
export default Header;