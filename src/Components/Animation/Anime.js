import React, { Component } from "react";
import { anime } from "react-anime";
import ScrollMagic from "scrollmagic";

export default class Animation extends Component {
    constructor(props) {
        super(props);
        this.scrollController = new ScrollMagic.Controller();
    }
    componentDidMount() {
        let scrollController = this.scrollController;

        let time1 = anime.timeline({ autoplay: false });

        // Add animations
        let screen1 = {
            targets: "#animation-image .animate-image1 img",
            opacity: [0, 1],
            scale: [8, 0.8],
            duration: 1000,
            delay: 0,
            easing: "easeInOutSine",
        };

        let screen2 = {
            targets: "#animation-image .animate-image1 img",
            scale: 0.8,
            duration: 8,
        };

        // children-items
        time1.add(screen1).add(screen2);

        let scene2 = new ScrollMagic.Scene({
            triggerElement: "#animation-image",
            duration: 2000,
            triggerHook: 0,
        })

            .on("progress", function (event) {
                time1.seek(time1.duration * event.progress);
            })

            .setPin("#animation-image")
            .addTo(scrollController);
    }
    render() {
        return (
            <>
                <section id="animation-image" class="section">
                    <div class="row no-gutters">
                        <div class="col">
                            <div class="animate-image1">
                                <div class="d-flex justify-content-between">
                                    <img
                                        src="https://sauravkr818.github.io/pc.png"
                                        class="img-fluid"
                                        alt="Responsive"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <script
                    type="text/javascript"
                    src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"
                ></script>
                <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"></script>
                <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js"></script>
            </>
        );
    }
}
