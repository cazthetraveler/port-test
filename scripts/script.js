// toggle nav

document.querySelector("#nav-toggle").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("open");
});

// smooth scrolling

document.querySelector(".nav-links").querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const container = document.querySelector("." + this.getAttribute("href").split("#")[1] + "-container");
        const yPos = container.offsetTop - document.querySelector(".page-header").offsetHeight;
        window.scrollTo({
            top: yPos,
            behavior: "smooth"
        });
        // take off the open class for nav links
        if (document.querySelector(".nav-links").classList.contains("open")) {
            document.querySelector(".nav-links").classList.remove("open");
        };
    });
});

// mobile open badge container

const windowWidth = window.innerWidth;

if (windowWidth < 1280) {
    deviceType = "mobile";
} else {
    deviceType = "desktop";
};

function isProjectVisible(proj) {
    const project = proj.getBoundingClientRect();
    const projMidY = project.top + project.height / 3;
    const vpMidY = window.innerHeight / 2;
    const tolerance = vpMidY * 0.5;
    const isInMiddleY = Math.abs(projMidY - vpMidY) <= tolerance;
    return isInMiddleY;
};

function set() {
    if (deviceType == "mobile") {
        document.querySelectorAll(".project-card").forEach(project => {
            window.addEventListener("load", () => {
                if (isProjectVisible(project)) {
                    project.classList.add("open");
                } else {
                    project.classList.remove("open");
                };
            });

            window.addEventListener("scroll", () => {
                if (isProjectVisible(project)) {
                    project.classList.add("open");
                } else {
                    project.classList.remove("open");
                };
            });
        });
    } else if (deviceType == "desktop") {
        document.querySelectorAll(".project-card").forEach(project => {
            project.classList.remove("open");
        });
    };
};

window.addEventListener("resize", set);
set();
