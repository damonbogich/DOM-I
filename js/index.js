const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navItems = document.querySelectorAll('nav a');
navItems[0].textContent = siteContent['nav']['nav-item-1'];
navItems[1].textContent = siteContent['nav']['nav-item-2'];
navItems[2].textContent = siteContent['nav']['nav-item-3'];
navItems[3].textContent = siteContent['nav']['nav-item-4'];
navItems[4].textContent = siteContent['nav']['nav-item-5'];
navItems[5].textContent = siteContent['nav']['nav-item-6'];
navItems.forEach(element =>{
  element.style.color = 'green';
})

let ctaHeader = document.querySelector('.cta  h1');
ctaHeader.textContent = siteContent['cta'] ['h1'];
ctaHeader.style.wordBreak = 'initial';

let ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent['cta']['button'];

let ctaImg = document.querySelector('.cta #cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

let topContentHeaders = document.querySelectorAll('.top-content h4');
topContentHeaders[0].textContent = siteContent['main-content'] ['features-h4'];
topContentHeaders[1].textContent = siteContent['main-content']['about-h4'];

let topContent = document.querySelectorAll('.top-content p')
topContent[0].textContent = siteContent['main-content']['features-content'];
topContent[1].textContent = siteContent['main-content']['about-content'];

let midImg = document.querySelector('.main-content .middle-img');
midImg.src = siteContent['main-content']['middle-img-src'];

let bottomContentHeaders = document.querySelectorAll('.bottom-content h4');
bottomContentHeaders[0].textContent = siteContent['main-content']['services-h4'];
bottomContentHeaders[1].textContent = siteContent['main-content']['product-h4'];
bottomContentHeaders[2].textContent = siteContent['main-content']['vision-h4'];

let bottomContent = document.querySelectorAll('.bottom-content p');
bottomContent[0].textContent = siteContent ['main-content'] ['services-content'];
bottomContent[1].textContent = siteContent ['main-content'] ['product-content'];
bottomContent[2].textContent = siteContent ['main-content'] ['vision-content'];

let contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent ['contact']['contact-h4'];

let contactContent = document.querySelectorAll('.contact p');
contactContent[0].textContent = siteContent ['contact']['address'];
contactContent[1].textContent = siteContent ['contact']['phone'];
contactContent[2].textContent = siteContent ['contact']['email'];


const newContent = document.createElement('a');
newContent.textContent = 'FirstNav';

const parentElement = document.querySelector('nav');
parentElement.prepend(newContent);

const newContent2 = document.createElement('a');
newContent2.textContent = 'LastNav';

parentElement.append(newContent2);

