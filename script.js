document.addEventListener("DOMContentLoaded", function(){
    const hash = window.location.hash;
    const hashParts = hash.split("-");
    const pageToShow = hashParts[0].substring(1); // On enlève le #
    const partToShow = hashParts[1]+"-"+hashParts[2]; 
    let activePage = pageToShow;
    if(pageToShow) {
        const page = document.getElementById(pageToShow);
        if(page) {
            const pages = document.querySelectorAll(".page");
            pages.forEach(page => {
                page.classList.remove("active");
            });
            page.classList.add("active");
            if(partToShow === "") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            }else{
                const part = document.getElementById(`${pageToShow}-${partToShow}`);
                if(part) {
                    window.scrollTo({
                        top:part.offsetTop
					});
                }
            }
            const menuLinks = document.querySelectorAll("#menu-principal a");
            menuLinks.forEach(link => {
                link.classList.remove("selected");
                if(link.getAttribute("data-page") === pageToShow) {
                    link.classList.add("selected");
                }
            });
        }
    }



    const menuLinks = document.querySelectorAll("#menu-principal a");
    const pages = document.querySelectorAll(".page");


    menuLinks.forEach(link => {
        link.addEventListener("click", function(e){
            e.preventDefault();
            const targetPage = this.getAttribute("data-page");
            activePage = targetPage;

            // Masquer toutes les pages + liens sélectionnés
            pages.forEach(page => {
                page.classList.remove("active");
            });
            menuLinks.forEach(link => {
                link.classList.remove("selected");
            });

            // Afficher la page cible
            const pageToShow = document.getElementById(targetPage);
            if(pageToShow) {
                pageToShow.classList.add("active");
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
            this.classList.add("selected");
        });
    });

    const notes = document.querySelectorAll("sup");

    notes.forEach(note => {
        note.addEventListener("mouseover", function() {
            const currentArticle = this.closest("article");
            if(!currentArticle) return;

            const aside = currentArticle.querySelector("aside");
            if(!aside) return;

            const ol = aside.querySelector("ol");
            if(!ol) return;

            const liElements = aside.querySelectorAll("li");
            if(!liElements) return;

            const noteValue = this.textContent;
            const noteToShow = ol.querySelector(`li:nth-child(${noteValue})`);

            liElements.forEach(li => li.classList.add("is-gris"));
            if(noteToShow) noteToShow.classList.remove("is-gris");
        });

        note.addEventListener("mouseout", function() {
            const currentArticle = this.closest("article");
            if(!currentArticle) return;

            const aside = currentArticle.querySelector("aside");
            if(!aside) return;

            const liElements = aside.querySelectorAll("li");
            if(!liElements) return;

            liElements.forEach(li => li.classList.remove("is-gris"));
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById("menu-principal");
    const body = document.body;
    let lastScrollTop = window.scrollY;

    // Affiche le menu dès le début
    menu.classList.add("visible");
    body.style.paddingTop = `${menu.offsetHeight}px`; // Crée un espace pour le menu

    window.addEventListener("scroll", function() {
        let scrollTop = window.scrollY;
        console.log(scrollTop);
        if (scrollTop < lastScrollTop) {
            // Si on remonte, on affiche le menu
            menu.classList.add("visible");
            body.style.paddingTop = `${menu.offsetHeight}px`; // Ajuste l'espace du body
        } else {
            // Si on descend, on cache le menu
            menu.classList.remove("visible");
            body.style.paddingTop = '0'; // Réduit l'espace en haut
        }

        lastScrollTop = scrollTop;

        // arrow
        const arrow = document.getElementById('arrow');
        if (scrollTop > 0) {
            arrow.classList.remove('is-hidden');
        } else {
            arrow.classList.add('is-hidden');
        }
    
    });


    // zoom sur images
    const images  = document.querySelectorAll('figure img');


    images.forEach(image => {
        image.addEventListener('click',function(e){
            e.preventDefault();
            const imgUrl = image.getAttribute('src');
            const fullscreenFigure = document.getElementById('fullscreen');
            fullscreenFigure.addEventListener('click',function(){
                fullscreenFigure.classList.remove('is-visible');
	  body.classList.remove('no-scroll');
            });
            const fullscreenImage = fullscreenFigure.querySelector("img");
            fullscreenImage.setAttribute('src',imgUrl)
            //
            fullscreenFigure.classList.add('is-visible');
            const sY = window.scrollY;
            fullscreenFigure.style.top = sY +'px';
            //
            body.classList.add('no-scroll');
        })
})
});




document.addEventListener("DOMContentLoaded", function() {
    const changePartBtns = document.querySelectorAll('.change-part');

    changePartBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const currentPart = this.closest('.part');
            if (!currentPart) return;

            const nextPart = currentPart.nextElementSibling;
            if (nextPart && nextPart.classList.contains('part')) {
                // Masquer la partie actuelle
                currentPart.classList.remove('active-part');
                // Afficher la partie suivante
                nextPart.classList.add('active-part');
                window.scrollTo({ top: 0, behavior: "smooth" }); // change to instant to remove animation
            } else {
                // S’il n’y a plus de partie suivante, on passe à la page suivante
                const currentPage = currentPart.closest('.page');
                if (!currentPage) return;
                const nextPage = currentPage.nextElementSibling;
                if (nextPage && nextPage.classList.contains('page')) {
                    currentPage.classList.remove('active');
                    nextPage.classList.add('active');
                    window.scrollTo({ top: 0, behavior: "smooth" }); // change to instant to remove animation
                }
            }
        });
    });
});