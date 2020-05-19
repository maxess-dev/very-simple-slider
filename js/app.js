// Charge le DOM et démarre le slider
window.addEventListener("DOMContentLoaded", () => {
    slideShow()
});

// Création du slider
function slideShow(){
    
    // On stock les photos du slider dans un array
    const pic = ["img/surf-1.jpg","img/surf-2.jpg","img/surf-3.jpg","img/surf-4.jpg","img/surf-5.jpg"]

    // On sélectionne la balise img
    let img = document.getElementsByTagName("img")[0]

    let count = -1;

    (function showSlide() {

        if(count >= pic.length-1){
            count = -1;
        }

        count++;

        img.setAttribute("src",pic[count]); // On change l'attribut src de la balise img

        setTimeout(showSlide,2000) // Tous les 2 secs
    })()

 

}




