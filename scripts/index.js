function setPhotos() {
    try {
        let photo_grid = document.getElementsByClassName("photoGrid")[0].children;
        
        let index = 1;
        for (let pic of photo_grid) {
            let photo = pic.children[0];
            photo.src = `resources/Gallery/${index}.webp`;
            photo.style.width = "340px";
            photo.style.height = "150px";
            console.log();
            index++;
        }
    } catch (error_) {
        console.error(error_)
    }
}

function setSocials() {
    let WhatsMessage = "Hola he visto tu link tree y quiero saber mas.";
    let social = {
        "Instagram": "https://instagram.com/criterios_reposteriadiferente",
        "Whatsapp": `https://wa.me/+573208722922?text=${encodeURI(WhatsMessage)}`,
        "Facebook": "https://www.facebook.com/Criterios.DI"
    }
    let index = 1;
    let linkTree = document.getElementsByClassName("linkTree")[0].children;
    for (let link of linkTree) {
        console.log(link);
        const htmlLink = document.createElement("a");
        htmlLink.text = Object.keys(social)[index - 1];
        htmlLink.href = Object.values(social)[index - 1];

        link.appendChild(htmlLink);
        index++;
    }
}

setPhotos();
setSocials();