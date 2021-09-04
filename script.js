const menuBtn = document.querySelector('#menu');
const navWrap = document.querySelector('#nav-bar');
const closeIcon = document.getElementById('close-icon');
const seeProjectBtn = document.querySelectorAll('.see-btn');
const displayMsg = document.querySelector('.pop-msg-1');
const overlayBackground = document.querySelector('.overlay');
const closepop = document.querySelector('.closeX');
const closeFunction = function () {
  displayMsg.classList.add('d-none');
  overlayBackground.classList.add('d-none');
};

menuBtn.addEventListener('click', () => {
  menuBtn.classList.add('d-none');
  closeIcon.classList.toggle('d-none');
  navWrap.classList.add('d-block');
  navWrap.classList.add('open');
});

closeIcon.addEventListener('click', () => {
  navWrap.classList.remove('d-block');
  menuBtn.classList.remove('d-none');
  closeIcon.classList.toggle('d-none');
});

for (let i = 0; i < seeProjectBtn.length; i += 1) {
  seeProjectBtn[i].addEventListener('click', () => {
    console.log('mucyo');
    displayMsg.classList.remove('d-none');
    overlayBackground.classList.remove('d-none');
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
}
closepop.addEventListener('click', closeFunction);

/* Add Scroolspy */
const portfolioLink = document.getElementById('portfolio-link');
const aboutLink = document.getElementById('about-link');
const contactLink = document.getElementById('contact-link');
// Call Sections
const header = document.getElementById('header');
const headlineSection = document.getElementById('headline');
const portfolioSection = document.getElementById('works');
const aboutSection = document.getElementById('about');

portfolioLink.addEventListener('click', () => {
  navWrap.classList.remove('open');
  navWrap.classList.remove('d-block');
  menuBtn.classList.remove('d-none');
  closeIcon.classList.add('d-none');
  window.scrollTo(0, header.clientHeight + headlineSection.clientHeight);
});

aboutLink.addEventListener('click', () => {
  navWrap.classList.remove('open');
  navWrap.classList.remove('d-block');
  menuBtn.classList.remove('d-none');
  closeIcon.classList.add('d-none');
  window.scrollTo(
    0,
    header.clientHeight
      + headlineSection.clientHeight
      + portfolioSection.clientHeight,
  );
});

contactLink.addEventListener('click', () => {
  navWrap.classList.remove('open');
  menuBtn.classList.remove('d-none');
  closeIcon.classList.add('d-none');
  navWrap.classList.remove('d-block');
  window.scrollTo(
    0,
    header.clientHeight
      + headlineSection.clientHeight
      + portfolioSection.clientHeight
      + aboutSection.clientHeight,
  );
});

const submitForm = document.getElementById('submit-form');
 const email = document.getElementById('#email');
const span = document.getElementsByTagName('span');
const regex = /^([a-z0-9]+)@([a-z0-9]+)\.([a-z0-9]){2,8}$/;
const regexo = /^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z0-9]){2,8}\.[a-zA-Z]{1,3}$/;
const fullForm = document.forms[1];
 const fname = document.getElementById('fname');
 const lname = document.getElementById('lname');
 const message = document.getElementById('message');
 const infoArr = {
   firstName: '',
   lastName: '',
   email: '',
 };

 fullForm.elements.fname.addEventListener('input', (e) => {
  const fnameKey = fname.value;
  localStorage.setItem('firstName', fnameKey);
  infoArr.firstName = e.target.value;
 })

  fullForm.elements.lname.addEventListener('input', (e) => {
   const lnameKey = lname.value;
   localStorage.setItem('lastName', lnameKey);
   infoArr.lastName = e.target.value;
  });

  fullForm.elements.email.addEventListener('input', (e) => {
  const emailkey = email.value;
      localStorage.setItem('Email', emailkey);
     infoArr.email = e.target.value;
  });

  fullForm.elements.message.addEventListener('input', (e) => {
    const messagekey = message.value;
        localStorage.setItem('Message', messagekey);
       infoArr.email = e.target.value;
    });
   
 window.addEventListener('load', () => {
   fullForm.elements.fname.value = localStorage.getItem('firstName');
   fullForm.elements.lname.value = localStorage.getItem('lastName');
   fullForm.elements.email.value = localStorage.getItem('Email');
   fullForm.elements.message.value = localStorage.getItem('Message');
 })

submitForm.addEventListener('click', (e) => {
  if (regex.test(email.value) || regexo.test(email.value)) {
   localStorage.clear();
  } else {
    span[1].innerText = 'Your email is Invalid';
    span[1].style.color = 'red';
    e.preventDefault();
  }
});


