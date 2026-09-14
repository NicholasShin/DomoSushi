// Open the temporary image lightbox
function openLightbox(imageSrc, itemName) {
    const lightbox = document.getElementById('menu-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    lightbox.style.display = "flex";
    lightboxImg.src = imageSrc;
    lightboxCaption.innerHTML = itemName;
}

// Close the lightbox modal
function closeLightbox() {
    document.getElementById('menu-lightbox').style.display = "none";
}