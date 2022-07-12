let slider = document.querySelector('.slider-string');
let slideLeft = document.querySelector('.arrow-left');
let slideRight = document.querySelector('.arrow-right');

let elemCount = document.getElementsByClassName('feedback__item');
let offSet = 0;

slideRight.onclick = function() {
    offSet -= 100;
    if (offSet < ((elemCount.length-1)*-100)) {
        offSet = 0;
    }
    slider.style.left = offSet + '%';
}
slideLeft.onclick = function() {
    offSet += 100;
    if (offSet > 0) {
        offSet = ((elemCount.length-1)*-100);
    }
    slider.style.left = offSet + '%';
}

// Управление скроллом страницы

let aboutScroll = document.getElementById('about');
let servicesScroll = document.getElementById('services');
let blogScroll = document.getElementById('blog');
let teamScroll = document.getElementById('team');
let faqScroll = document.getElementById('faq');
let contactsScroll = document.getElementById('contacts');

aboutScroll.addEventListener ('click', function(e) {
    e.preventDefault();
    const about = document.querySelector('.weare');
    about.scrollIntoView({block: "start", behavior: "smooth"});
})
servicesScroll.addEventListener ('click', function(e) {
    e.preventDefault();
    const services = document.querySelector('.our-services');
    services.scrollIntoView({block: "start", behavior: "smooth"});
})
blogScroll.addEventListener ('click', function(e) {
    e.preventDefault();
    const blog = document.querySelector('.works');
    blog.scrollIntoView({block: "start", behavior: "smooth"});
})
teamScroll.addEventListener ('click', function(e) {
    e.preventDefault();
    const team = document.querySelector('.team');
    team.scrollIntoView({block: "start", behavior: "smooth"});
})
faqScroll.addEventListener ('click', function(e) {
    e.preventDefault();
    const faq = document.querySelector('.faq');
    faq.scrollIntoView({block: "start", behavior: "smooth"});
})
contactsScroll.addEventListener ('click', function(e) {
    e.preventDefault();
    const contacts = document.querySelector('.contacts');
    contacts.scrollIntoView({block: "start", behavior: "smooth"});
})

// Управление фильтром секции Latest Works

let illu = document.querySelector('.illu-item');
let brand = document.querySelector('.brand-item');
let photo = document.querySelector('.photo-item');
let design = document.querySelector('.design-item');

let allFilter = document.getElementById('all');
let illuFilter = document.getElementById('illu');
let brandFilter = document.getElementById('branding');
let photoFilter = document.getElementById('photo');
let designFilter = document.getElementById('design');

illuFilter.addEventListener('click', function(e){
    e.preventDefault();
    illu.style.display = 'flex';
    brand.style.display = 'none';
    photo.style.display = 'none';
    design.style.display = 'none';
})
brandFilter.addEventListener('click', function(e){
    e.preventDefault();
    brand.style.display = 'flex';
    illu.style.display = 'none';
    photo.style.display = 'none';
    design.style.display = 'none';
})
photoFilter.addEventListener('click', function(e){
    e.preventDefault();
    photo.style.display = 'flex';
    brand.style.display = 'none';
    illu.style.display = 'none';
    design.style.display = 'none';
})
designFilter.addEventListener('click', function(e){
    e.preventDefault();
    design.style.display = 'flex';
    brand.style.display = 'none';
    photo.style.display = 'none';
    illu.style.display = 'none';
})
allFilter.addEventListener('click', function(e){
    e.preventDefault();
    photo.style.display = 'flex';
    brand.style.display = 'flex';
    illu.style.display = 'flex';
    design.style.display = 'flex';
})