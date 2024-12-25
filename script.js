function scrollToHome(){
    document.getElementById('Home').scrollIntoView({behavior: 'smooth'})
}
const images = document.querySelectorAll('img[id^="image"]'); // Chọn tất cả ảnh có id bắt đầu bằng "image"
const overlays = document.querySelectorAll('.overlay');
const closeButtons = document.querySelectorAll('.close-button');
const textsimages = document.querySelectorAll('p[id^="textimage"]');
// Gán sự kiện click cho từng ảnh
images.forEach(image => {
    image.addEventListener('click', () => {
        const targetOverlayId = 'overlay' + image.id.slice(5); // Tạo ID overlay tương ứng
        const targetOverlay = document.getElementById(targetOverlayId);
        if (targetOverlay) {
            targetOverlay.style.display = 'flex';
        }
    });
});
textsimages.forEach(textimage =>{
    textimage.addEventListener('click', () =>{
        const targetOverlayId = 'overlay' + textimage.id.slice(9); // Tạo ID overlay tương ứng
        const targetOverlay = document.getElementById(targetOverlayId);
        if (targetOverlay) {
            targetOverlay.style.display = 'flex';
        }
    })
})

// Gán sự kiện click cho nút đóng của từng overlay
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetOverlayId = button.dataset.target;
        const targetOverlay = document.getElementById(targetOverlayId);
        if (targetOverlay) {
            targetOverlay.style.display = 'none';
        }
    });
});

// Đóng overlay khi click ra ngoài nội dung
overlays.forEach(overlay => {
    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            overlay.style.display = 'none';
        }
    });
});