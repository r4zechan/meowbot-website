/*
==========================================
 MeowBot Website V2
 Main JavaScript
 Developer: r4z3_chan
==========================================
*/


document.addEventListener(
    "DOMContentLoaded",
    () => {


        /*
        ==========================
        MOBILE NAVIGATION
        ==========================
        */


        const menuButton =
            document.querySelector(
                ".menu-toggle"
            );


        const navbar =
            document.querySelector(
                ".navbar"
            );



        if (
            menuButton &&
            navbar
        ) {


            menuButton.addEventListener(
                "click",
                () => {


                    navbar.classList.toggle(
                        "active"
                    );


                    menuButton.classList.toggle(
                        "open"
                    );


                }
            );



            const links =
                document.querySelectorAll(
                    ".navbar a"
                );



            links.forEach(
                link => {


                    link.addEventListener(
                        "click",
                        () => {


                            navbar.classList.remove(
                                "active"
                            );


                            menuButton.classList.remove(
                                "open"
                            );


                        }
                    );


                }
            );


        }






        /*
        ==========================
        AUTO YEAR FOOTER
        ==========================
        */


        const year =
            document.querySelector(
                ".current-year"
            );



        if(year){


            year.textContent =
                new Date()
                .getFullYear();


        }






        /*
        ==========================
        SCROLL REVEAL
        ==========================
        */


        const revealElements =
            document.querySelectorAll(
                ".card, .about-content, section h2"
            );



        const observer =
            new IntersectionObserver(
                entries => {


                    entries.forEach(
                        entry => {


                            if(
                                entry.isIntersecting
                            ){


                                entry.target.classList.add(
                                    "visible"
                                );


                            }


                        }
                    );


                },
                {
                    threshold:0.15
                }
            );



        revealElements.forEach(
            element => {


                element.classList.add(
                    "hidden"
                );


                observer.observe(
                    element
                );


            }
        );






        /*
        ==========================
        SMOOTH ANCHOR FIX
        ==========================
        */


        document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(
            anchor => {


                anchor.addEventListener(
                    "click",
                    function(e){


                        const target =
                            document.querySelector(
                                this.getAttribute(
                                    "href"
                                )
                            );



                        if(target){


                            e.preventDefault();



                            target.scrollIntoView(
                                {
                                    behavior:
                                    "smooth"
                                }
                            );


                        }


                    }
                );


            }
        );






    }
);
