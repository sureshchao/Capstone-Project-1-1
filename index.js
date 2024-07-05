document.addEventListener("DOMContentLoaded", () => {
    const navbarLinks = document.querySelectorAll(".navbar a");

    navbarLinks.forEach(navbarLink => {
        navbarLink.addEventListener("click", (e) => {
            e.preventDefault();

            const targetId = navbarLink.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // add an offset to the target section to cater to the navbar
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetOffset = targetSection.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetOffset,
                    behavior: "smooth"
                });
            }
        });
    });
});