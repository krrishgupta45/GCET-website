// THESE ARE THE VARIABLES I AM GOING TO USE:

// 1.Buttons
const homeButton=document.getElementById('home');
const notificationsButton=document.getElementById('notifications');
const noticeBoardButton=document.getElementById('notice');
const aboutUsButton=document.getElementById('aboutus');
const profileButton=document.getElementById('profile');
// 2.Sections
const homeSection=document.getElementById('homeSection');
const notificationsSection=document.getElementById('notificationsSection');
const noticeBoardSection=document.getElementById('noticeBoardSection');
const aboutUsSection=document.getElementById('aboutUsSection');
const profileSection=document.getElementById('profileSection');

// THIS WILL BE THE DEFAULT BEHAVIOUR I.E WHEN THE USER OPENS THE WESBITE
homeSection.style.display="flex";
notificationsSection.style.display="none";
noticeBoardSection.style.display="none";
aboutUsSection.style.display="none";
profileSection.style.display="none";

// CHANGING THE WEBSITE BASED ON THE BUTTON CLICKED:

// 1.Home Button:
homeButton.addEventListener('click',function(){
      homeSection.style.display="flex";
      notificationsSection.style.display="none";
      noticeBoardSection.style.display="none";
      aboutUsSection.style.display="none";
      profileSection.style.display="none";
});
// 2.Notifications Button:
notificationsButton.addEventListener('click',function(){
      homeSection.style.display="none";
      notificationsSection.style.display="flex";
      noticeBoardSection.style.display="none";
      aboutUsSection.style.display="none";
      profileSection.style.display="none";
});
// 3.NoticeBoard Button:
noticeBoardButton.addEventListener('click',function(){
      homeSection.style.display="none";
      notificationsSection.style.display="none";
      noticeBoardSection.style.display="flex";
      aboutUsSection.style.display="none";
      profileSection.style.display="none";
});
// 4.About us Button:
aboutUsButton.addEventListener('click',function(){
      homeSection.style.display="none";
      notificationsSection.style.display="none";
      noticeBoardSection.style.display="none";
      aboutUsSection.style.display="flex";
      profileSection.style.display="none";
});
// 5.Profile button:
profileButton.addEventListener('click',function(){
      homeSection.style.display="none";
      notificationsSection.style.display="none";
      noticeBoardSection.style.display="none";
      aboutUsSection.style.display="none";
      profileSection.style.display="flex";
});
