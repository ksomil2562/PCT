const images = [  "pic4.jpg","pic3.jpg","pic2.jpg",  "pic5.jpg","pic1.jpg", "pic6.jpg","pic7.jpg","pic8.jpg"];
let currentIndex = 0;

function showImage(index) {
    const img = document.querySelector('.image-container img');
    img.src = images[index];
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

// Show the first image initially
showImage(currentIndex);
