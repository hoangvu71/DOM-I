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

/////////////////////////////////////////////
/////////////// Change Navigation //////////

// Navigation Text
let Links = document.getElementsByTagName('a');

let navCounter = 0;
let counter = function cout () {
  navCounter++
  return navCounter
}

Array.from(Links)
Array.from(Links).forEach((element) => {
  element.textContent = siteContent["nav"][`nav-item-${counter()}`]
});

// Added Two New Links On Navigation
let newLink = document.createElement('A');
newLink.setAttribute("href", "#");
let homeText = document.createTextNode('Home');
let teamText = document.createTextNode('Team');
newLink.appendChild(homeText);
document.querySelector('nav').prepend(newLink);
newLink = document.createElement('A');
newLink.setAttribute("href", "#");
newLink.appendChild(teamText);
document.querySelector('nav').appendChild(newLink);

// Change Navigation Color
let getAllA = document.getElementsByTagName('a');
for (let i = 0; i < getAllA.length; i++){
  getAllA[i].style.color = "green";
}

/////////////////////////////////////////////
/////////////// Change CTA ///////////////

// Change H1
// Added line breaks
let ctaText = document.querySelector('.cta-text h1');
ctaText.textContent = "DOM";
let lineBreak = document.createElement('br');
ctaText.appendChild(lineBreak);
let createIs = document.createTextNode('Is');
ctaText.appendChild(createIs);
let createAwesome = document.createTextNode('AWESOME');
let lineBreak2 = document.createElement('br');
ctaText.appendChild(lineBreak2);
ctaText.appendChild(createAwesome);

// Change Button
let ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent["cta"]["button"];


// Change Header Image
let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"])

/////////////////////////////////////////////
/////////////// Change Main Content ///////////////

// Change features-h4
let featuresH4 = document.querySelector('.top-content .text-content h4');
featuresH4.textContent = siteContent["main-content"]["features-h4"];

// Change features-content
let featuresContent = document.querySelector(".top-content .text-content p");
featuresContent.textContent = siteContent["main-content"]["features-content"];

// Change about-h4
let aboutH4 = document.querySelector(".top-content .text-content:last-child h4");
aboutH4.textContent = siteContent["main-content"]["about-h4"];

// Change about-content
let aboutContent = document.querySelector('.top-content .text-content:last-child p');
aboutContent.textContent = siteContent["main-content"]["about-content"];

// Change Middle Image
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Change service-h4
let serviceH4 = document.querySelector('.bottom-content .text-content:nth-child(1) h4');
serviceH4.textContent = siteContent["main-content"]["services-h4"];

// Change services-content
let serviceContent = document.querySelector('.bottom-content .text-content:nth-child(1) p');
serviceContent.textContent = siteContent["main-content"]["services-content"];

// Change product-h4
let productH4 = document.querySelector('.bottom-content .text-content:nth-child(2) h4');
productH4.textContent = siteContent["main-content"]["product-h4"];

// Change product-content
let productContent = document.querySelector('.bottom-content .text-content:nth-child(2) p');
productContent.textContent = siteContent["main-content"]["product-content"];

// Change vision-h4
let visionH4 = document.querySelector('.bottom-content .text-content:nth-child(3) h4');
visionH4.textContent = siteContent["main-content"]["vision-h4"];

// Change vision-content
let visionContent = document.querySelector('.bottom-content .text-content:nth-child(3) p');
visionContent.textContent = siteContent["main-content"]["vision-content"];

/////////////////////////////////////////////
/////////////// Change Contact ///////////////

// Change contact-h4
let contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent["contact"]["contact-h4"];

// Change address
let contactPs = document.querySelectorAll('.contact p');
contactPs[0].textContent = siteContent["contact"]["address"];

// Change phone
contactPs[1].textContent = siteContent["contact"]["phone"];

// Change email
contactPs[2].textContent = siteContent["contact"]["email"];

/////////////////////////////////////////////
/////////////// Change Footer ///////////////

// Change copyright
let copyright = document.querySelector('footer p');
copyright.textContent = siteContent["footer"]["copyright"];