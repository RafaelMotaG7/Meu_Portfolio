document.addEventListener("DOMContentLoaded", () => {

    /*
     * ==========================================
     * CONFIGURAÇÕES
     * ==========================================
     */

    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


    /*
     * ==========================================
     * 1. SCROLL REVEAL
     * ==========================================
     */

    const revealElements = document.querySelectorAll(
        ".container, .achievement-card, .skill"
    );


    /*
     * Adiciona a classe reveal automaticamente.
     */

    revealElements.forEach((element) => {
        element.classList.add("reveal");
    });


    if (prefersReducedMotion) {

        revealElements.forEach((element) => {
            element.classList.add("active");
        });

    } else if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                });

            },
            {
                threshold: 0.15,
                rootMargin: "0px 0px -50px 0px"
            }
        );


        revealElements.forEach((element) => {
            revealObserver.observe(element);
        });

    } else {

        revealElements.forEach((element) => {
            element.classList.add("active");
        });

    }


    /*
     * ==========================================
     * 2. BARRAS DE PROGRESSO
     * ==========================================
     */

    const progressBars = document.querySelectorAll(".progress");


    if (prefersReducedMotion) {

        progressBars.forEach((bar) => {

            const width = bar.getAttribute("data-width");

            if (width) {
                bar.style.width = width;
            }

        });

    } else if ("IntersectionObserver" in window) {

        const progressObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    const progressBar = entry.target;

                    const width =
                        progressBar.getAttribute("data-width");


                    if (width) {

                        requestAnimationFrame(() => {

                            progressBar.style.width = width;

                        });

                    }

                    observer.unobserve(progressBar);

                });

            },
            {
                threshold: 0.3
            }
        );


        progressBars.forEach((bar) => {
            progressObserver.observe(bar);
        });

    } else {

        progressBars.forEach((bar) => {

            const width =
                bar.getAttribute("data-width");

            if (width) {
                bar.style.width = width;
            }

        });

    }


    /*
     * ==========================================
     * 3. VERIFICAÇÃO DAS BARRAS
     * ==========================================
     */

    progressBars.forEach((bar) => {

        const width =
            bar.getAttribute("data-width");

        if (!width) {

            console.warn(
                "Barra de progresso sem data-width:",
                bar
            );

        }

    });

});
