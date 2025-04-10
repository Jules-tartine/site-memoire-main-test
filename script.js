document.addEventListener("DOMContentLoaded", function(){
    const menuLinks = document.querySelectorAll("#menu-principal a");
    const pages = document.querySelectorAll(".page");

    menuLinks.forEach(link => {
        link.addEventListener("click", function(e){
            e.preventDefault();
            const targetPage = this.getAttribute("data-page");

            // Masquer toutes les pages
            pages.forEach(page => {
                page.classList.remove("active");
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
    const menuLinks = document.querySelectorAll("#menu-principal a");
    const pages = document.querySelectorAll(".page");
    const partTitles = document.querySelectorAll(".part-title");
    const parts = document.querySelectorAll(".part");

    // Gestion du menu principal (Changement de page)
    menuLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute("data-page");

            // Masquer toutes les pages
            pages.forEach(page => page.classList.remove("active"));

            // Afficher la page cible
            const pageToShow = document.getElementById(targetPage);
            if (pageToShow) {
                pageToShow.classList.add("active");
            }
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
            });
            const fullscreenImage = fullscreenFigure.querySelector("img");
            fullscreenImage.setAttribute('src',imgUrl)
            //
            fullscreenFigure.classList.add('is-visible');
            const sY = window.scrollY;
            fullscreenFigure.style.top = sY +'px';
            //
            document.body.style.add('overflow-y','hidden');
        })
})


});




const images  = document.querySelectorAll('figure img');


images.forEach(image => {
    image.addEventListener('click',function(e){
        e.preventDefault();
        const imgUrl = image.getAttribute('src');
        const fullscreenFigure = document.getElementById('fullscreen');
        fullscreenFigure.addEventListener('click',function(){
            fullscreenFigure.classList.remove('is-visible');
        });
        const fullscreenImage = fullscreenFigure.querySelector("img");
        fullscreenImage.setAttribute('src',imgUrl)
        //
        fullscreenFigure.classList.add('is-visible');
        const sY = window.scrollY;
        fullscreenFigure.style.top = sY +'px';
        //
        document.body.style.add('overflow-y','hidden');
    })
})

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
