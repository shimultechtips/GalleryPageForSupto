// array of images
const images = [
    'https://file-rajshahi.portal.gov.bd/files/ppi.pabna.gov.bd/photogallery/92083a44_fb85_47da_8ac4_b64823af46fe/3aaec5dbe15c37910d421c35081cc976.jpg',    // index 0 --> images[0]
    'https://file-rajshahi.portal.gov.bd/files/ppi.pabna.gov.bd/photogallery/92083a44_fb85_47da_8ac4_b64823af46fe/8ec3417cc43a2a0f7de3c6b82a9f8191.jpg',    // index 1 --> images[1]
    'https://file-rajshahi.portal.gov.bd/files/ppi.pabna.gov.bd/photogallery/92083a44_fb85_47da_8ac4_b64823af46fe/2cbc2c442f70ea41c438a83e63d9f092.jpg',    // index 2 --> images[2]
    'https://file-rajshahi.portal.gov.bd/files/ppi.pabna.gov.bd/photogallery/92083a44_fb85_47da_8ac4_b64823af46fe/fdd34149f8164a029e70e4d3143527f0.jpg',    // index 3 --> images[3]
    'https://file-rajshahi.portal.gov.bd/files/ppi.pabna.gov.bd/photogallery/92083a44_fb85_47da_8ac4_b64823af46fe/a819122da39ea77a090fd02c791d64fc.jpg'     // index 4 --> images[4]
];
const firstImage = 0;
const lastImage = images.length - 1;
let currentImage = 0;
// next
const nextBtn = document.getElementById('next');
nextBtn.addEventListener('click', () => {

    // get image tag
    const imageTag = document.getElementById('image');
    currentImage++; // 1
    if (currentImage >= lastImage) {
        currentImage = 4;
    }
    imageTag.src = images[currentImage];
    document.getElementById('info').innerHTML = (currentImage + 1) + '/5';

});
// prev
const preBtn = document.getElementById('prev');
preBtn.addEventListener('click', () => {

    // get image tag
    const imageTag = document.getElementById('image');
    currentImage--; // 1
    if (currentImage <= firstImage) {
        currentImage = 0;
    }
    imageTag.src = images[currentImage];
    document.getElementById('info').innerHTML = (currentImage + 1) + '/5';

});