const productContainers = [...document.querySelectorAll('.galleryslider')];
const nxtBtn = [...document.querySelectorAll('.nxtbtn')];
const preBtn = [...document.querySelectorAll('.prebtn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})