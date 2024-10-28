document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const images = document.querySelectorAll('.column img');

    console.log(images); // Log images NodeList

    function openModal(index) {
        if (index < 0 || index >= images.length) {
            console.error("Index out of bounds: " + index);
            return;
        }
        currentIndex = index;
        const modal = document.getElementById("myModal");
        const modalImg = document.getElementById("img01");

        modal.style.display = "flex"; // Use flex to center content
        modalImg.src = images[currentIndex].src;
    }

    function closeModal() {
        document.getElementById("myModal").style.display = "none";
    }

    function changeImage(n) {
        currentIndex += n;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        } else if (currentIndex >= images.length) {
            currentIndex = 0;
        }

        if (images[currentIndex]) {
            const modalImg = document.getElementById("img01");
            modalImg.src = images[currentIndex].src;
        }
    }

    // Expose functions to global scope for HTML onclick handlers
    window.openModal = openModal;
    window.closeModal = closeModal;
    window.changeImage = changeImage;
});