import React, { Component } from "react";
import "./Card.css";

export default class Card extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="card h-100 shadow animate w-75 border-0 rounded slide-right">
                    <div class="card-header bg-white border-0 mx-auto">
                        <i
                            class={`fab ${this.props.iconName} fa-3x`}
                            style={{ color: `${this.props.iconColor}` }}
                        ></i>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-center text-primary">
                            {this.props.skillName}
                        </h5>

                        <p class="card-text">{this.props.cardText}</p>
                        <div
                            class="progress w-75 ms-4"
                            style={{ height: "6px" }}
                        >
                            <div
                                className={` progress-bar progress-bar-striped progress-bar-animated ${this.props.progressBar}`}
                                role="progressbar"
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: "75%" }}
                            ></div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
