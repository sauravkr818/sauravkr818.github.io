import React, { Component } from "react";
import Header from "../global/Header";
import Index from "./Index";

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Index />
            </React.Fragment>
        );
    }
}
