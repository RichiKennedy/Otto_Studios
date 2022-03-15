// console.log ('burger');
// const navSlide = () => {
// const burger = document.querySelector('.burger');
// const nav = document.querySelector('.nav-links');
// const navLinks = document.querySelectorAll('.nav-links li');

//      //Toggle Nav
//      burger.addEventListener('click', () => {
//        nav.classList.toggle('nav-active');
//        //  animated links
//        navLinks.forEach((link, index) => {
//          console.log(link);
//        if (link.style.animation) {
//         link.style.animation = '';

//        } else { link.style.animation = `navLinkFade 0.5 ease forwards ${index / 0.9 }s`;

//        }

//      });
//       // burger animation
//       burger.classList.toggle('toggle');

//     });

//  }

navSlide();
//  navSlide ();

function navSlide() {
  // retrieving elements
  const burger = document.querySelector(".burger");
  const navBar = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  const clickMe = document.querySelector(".click");

  //Toggle Nav
  //  as soon as someone clicks on the burger evrything inside the curly brackets will run a function
  burger.addEventListener("click", function () {
    // navBar and nav-active are being toggled on and off
    navBar.classList.toggle("nav-active");

    //  animated links
    // for loop
    for (let i = 0; i < navLinks.length; i++) {
      // if i is less than the length of navLink, do this...
      console.log("i :", i, "current link: ", navLinks[i]); // ...log what value i currently as well as the current link
      let link = navLinks[i]; // save the current link in a variable

      if (link.style.animation) {
        // if the current link has any animation...
        link.style.animation = ""; // ...reseting the animation back to its original state
      } else {
        // otherwise...
        link.style.animation = `navLinkFade 0.5 ease forwards ${i / 0.6}s`; // ...set it to the keyframe "navLinkFade"
        // 0.5 = with a duration of 0.5 seconds
        // ease = make it ease in
        // forwards = don't know what forwards does, or if it is needed
        // ${ i / 0.6 }s = with a delay (I think) of i / 0.6 seconds. Since i will be different every loop, the delay will be different for all of the links.

        // I think it would be good if you googled or youtubed "template strings". the `` (template strings) makes it possible to use javascript code or variables within a string and the syntax for that is ${nameOfVariable}.
      }
    }
    // burger animation x
    burger.classList.toggle("toggle");
  });
  // click me button
  clickMe.addEventListener("click", function () {
    // console.log("im being clicked");
    let paragraph = document.querySelector(".paragraph1");
    paragraph.classList.toggle("clickParagraph");
  });
}
