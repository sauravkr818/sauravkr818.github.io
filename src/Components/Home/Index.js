import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Index.css";
import { motion } from "framer-motion";
import Card from "./SkillCard";
import Animation from "../Animation/Anime";

export default function Index() {
    const staggerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5,
                delayChildren: 1.5,
            },
        },
    };

    const childVariants = {
        hidden: {
            opacity : 0,
            y : 10,
        },
        visible: {
            opacity : 1,
            y : 0,
            transition:{
                duration: 0.5,                
            }
        }
    }

    const rowVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5,
                delayChildren: 0.5,
            },
        },
    };

    const imageVariants = {
        hidden: {
            opacity : 0,
            y : 50,
        },
        visible: {
            opacity : 1,
            y : 0,
            transition:{
                duration: 0.5,
            }
        }
    }

    const yoyoVariants = {
        hidden: {
            opacity : 0,
        },
        visible: {
            opacity : 1,
            transition:{
                duration: 0.5,
                yoyo:Infinity,
            }
        }
    }

    return (
        <React.Fragment>
            <>
                <div className="container-fluid">
                    <div class="d-flex justify-content-end mb-5 pb-4">
                        <div class="box1"></div>
                    </div>
                    <div class="box2"></div>
                    <div class="box3"></div>
                    <div
                        class="d-flex justify-content-end bottom-0 end-0 position-fixed pe-4 pb-4"
                        style={{ zIndex: "100" }}
                    >
                        <a
                            class="btn alert-primary rounded-circle glass-morphism shadow-lg border"
                            href="#top"
                        >
                            <i
                                class="fa fa-chevron-up fa-lg"
                                style={{ color: "#845ef7" }}
                                aria-hidden="true"
                            ></i>
                        </a>
                    </div>
                    <div class="py-5"></div>
                    <div class="py-md-4"></div>
                    <motion.div 
                    variants={rowVariants}
                                    initial="hidden"
                                    animate="visible"
                    class="row" id="home">
                        <motion.div 
                        variants={imageVariants}
                        class="col-md-6 d-flex justify-content-center justify-content-md-end pe-md-4 mb-2 mb-md-0">
                            <img
                                src="https://i.ibb.co/bz0s6vP/my-img.jpg"
                                alt="my-img"
                                class="img-fluid w-50"
                                style={{ borderRadius: "100%", height: "100%" }}
                            ></img>
                        </motion.div>
                        <motion.div            
                        variants={imageVariants}
                         class="col-md-6 me-auto my-auto">
                            <div class="">
                                <p class="text-dark text-md-start text-center">
                                    Hello World, I'm
                                </p>
                                <h4 class="display-5 text-md-start text-center d-flex justify-content-center justify-content-md-start">
                                    <div class="alert-primary p-2 rounded fw-bold w-78">
                                        SAURAV&nbsp;KUMAR
                                    </div>
                                </h4>
                                <h6
                                    class="text-md-start text-center"
                                    style={{
                                        fontSize: "1.06rem",
                                        lineHeight: "150%",
                                        letterSpacing: "2px",
                                    }}
                                >
                                    FULL STACK WEB DEVELOPER
                                </h6>
                                <motion.div
                                    variants={staggerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    class="d-flex justify-content-center justify-content-md-start"
                                >
                                    <motion.a
                                        
                                        variants={childVariants}
                                        href="https://github.com/sauravkr818"
                                        className="me-4"
                                        alt="github"
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <i
                                                transition={"ease"}
                                                class="fab fa-github fa-2x"
                                            ></i>
                                        </motion.div>
                                    </motion.a>
                                    <motion.a
                                        
                                        variants={childVariants}
                                        href="https://www.instagram.com/s_au.ra_v/"
                                        className="me-4"
                                        alt="insta"
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <i
                                                transition={"ease"}
                                                class="fab fa-instagram fa-2x"
                                                style={{ color: "#f06595" }}
                                            ></i>
                                        </motion.div>
                                    </motion.a>
                                    <motion.a 
                                    variants={childVariants}
                                    href="./" className="me-4">
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <i
                                                transition={"ease"}
                                                class="fab fa-facebook fa-2x"
                                                style={{ color: "#4267B2" }}
                                            ></i>
                                        </motion.div>
                                    </motion.a>
                                    <motion.a 
                                    variants={childVariants}
                                    href="./" className="me-4">
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <i
                                                transition={"ease"}
                                                class="fab fa-linkedin fa-2x"
                                            ></i>
                                        </motion.div>
                                    </motion.a>
                                </motion.div>
                            </div>
                        </motion.div>
                        <div class="my-4"></div>
                        <div class="col-12 d-flex justify-content-center mt-5">
                            <div class="card p-2 border-0 rounded mt-4 mt-lg-0">
                            <div class="card-header bg-white border">Terminal</div>
                                <div class="card-body text-primary text-start" style={{backgroundColor:"#3e3b48"}}>
                                    <p class="rounded text-white">
                                    > 1. The most important part of life is{" "}
                                        <b>Failures</b>
                                    </p>
                                    <p class="text-white rounded">
                                        > 2. And ofcourse your <b>Family </b><motion.b variants={yoyoVariants}
                                    initial="hidden"
                                    animate="visible">|</motion.b>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <h3
                        class="text-center tr"
                        id="aboutme"
                        style={{ marginTop: "80px" }}
                    >
                        My Skills
                    </h3>
                    <div class="line"></div>
                    <div
                        class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4  mb-5"
                        style={{ marginTop: "0px" }}
                        id="2"
                    >
                        <div class="col pt-5 d-flex justify-content-center">
                            <Card
                                iconName="fa-html5"
                                iconColor="rgb(240, 101, 41)"
                                skillName="HTML"
                                cardText="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                                progressBar="bg-danger"
                            />
                        </div>
                        <div class="col pt-5 d-flex justify-content-center">
                            <Card
                                iconName="fa-css3-alt"
                                iconColor="rgb(38, 77, 228)"
                                skillName="CSS"
                                cardText="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                                progressBar="bg-primary"
                            />
                        </div>
                        <div class="col pt-5 d-flex justify-content-center">
                            <Card
                                iconName="fa-js"
                                iconColor="rgb(250, 224, 53)"
                                skillName="JavaScript"
                                cardText="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                                progressBar="bg-warning"
                            />
                        </div>
                        <div class="col pt-5 d-flex justify-content-center">
                            <Card
                                iconName="fa-react fa-spin"
                                iconColor="rgb(99, 148, 238)"
                                skillName="ReactJs"
                                cardText="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                                progressBar="bg-info"
                            />
                        </div>
                        <div class="col pt-5 d-flex justify-content-center">
                            <Card
                                iconName="fa-python"
                                iconColor="rgb(99, 148, 238)"
                                skillName="Python"
                                cardText="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                                progressBar="bg-success"
                            />
                        </div>
                        <div class="col pt-5 d-flex justify-content-center">
                            <Card
                                iconName="fa-cuttlefish"
                                iconColor="rgb(99, 148, 238)"
                                skillName="C"
                                cardText="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                                progressBar="bg-secondary"
                            />
                        </div>
                    </div>
                    <div id="projects"></div>
                    <div class="dropdown-divider alert-success pt-1"></div>
                    <h3 class="text-center mt-5">My Projects</h3>
                    <div class="line"></div>
                    <div class="row row-cols-1 row-cols-md-3 g-4 pb-5 mt-5">
                        <div class="col" id="animation-card">
                            <div
                                class="card h-100 style border-0 rounded"
                                id="animate-image2"
                            >
                                <img
                                    src="https://svgshare.com/i/VD7.svg"
                                    class="card-img-top img-fluid w-75 mx-auto"
                                    alt="..."
                                />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">
                                        This is a wider card with supporting
                                        text below as a natural lead-in to
                                        additional content. This content is a
                                        little bit longer.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 style border-0 rounded">
                                <img
                                    src="https://svgshare.com/i/VCk.svg"
                                    class="card-img-top img-fluid w-75 mx-auto"
                                    alt="..."
                                />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">
                                        This card has supporting text below as a
                                        natural lead-in to additional content.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 style border-0 rounded">
                                <img
                                    src="https://svgshare.com/i/VCV.svg"
                                    class="card-img-top img-fluid w-75 mx-auto"
                                    alt="..."
                                />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">
                                        This is a wider card with supporting
                                        text below as a natural lead-in to
                                        additional content. This card has even
                                        longer content than the first to show
                                        that equal height action.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="py-5" id="contact"></div>
                <div class="container-fluid">
                    <div class="card mb-3 alert-primary pe-md-2 pe-lg-5 border-0">
                        <div class="row no-gutters">
                            <div class="col-md-5 d-flex justify-content-center">
                                <img
                                    src="https://svgshare.com/i/VCU.svg"
                                    class="card-img img-fluid w-75 mx-auto"
                                    alt="forest svg"
                                />
                            </div>
                            <div class="col-md-7 my-auto mx-auto">
                                <div class="card-body">
                                    <div class="jumbotron jumbotron-fluid alert-primary">
                                        <div class="container">
                                            <h2 class="display-4 mb-2 fw-bold text-uppercase">
                                                Lets get Connected
                                            </h2>
                                            <p class="lead">
                                                It's always better to share your
                                                thoughts.
                                            </p>
                                        </div>
                                        <form
                                            action="https://formspree.io/f/myybabrr"
                                            method="POST"
                                        >
                                            <div class="form-floating mb-3">
                                                <input
                                                    type="email"
                                                    class="form-control"
                                                    id="floatingInput"
                                                    placeholder="name@example.com"
                                                    name="_replyto"
                                                />
                                                <label for="floatingInput">
                                                    Email address
                                                </label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <textarea
                                                    class="form-control"
                                                    placeholder="Leave a comment here"
                                                    id="floatingTextarea2"
                                                    style={{
                                                        height: "100px",
                                                    }}
                                                    name="message"
                                                ></textarea>
                                                <label for="floatingTextarea2">
                                                    Your Message
                                                </label>
                                            </div>
                                            <div class="d-grid gap-2 col-md-6 col-2 mx-md-auto me-auto">
                                                <button
                                                    class="btn btn-lg btn-outline-primary fw-bold"
                                                    type="submit"
                                                >
                                                    Send
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div id="themes"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <Animation />
                <div class="py-5"></div>
            </>
        </React.Fragment>
    );
}
