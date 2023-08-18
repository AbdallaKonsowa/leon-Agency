// show and hide Menu \\
const styleSheet = document.styleSheets[0];
let linksMenu = document.querySelector(".links");
let firstUl = document.querySelector("#menu");

let landing = document.querySelector(".landing");
let is_hidden = true;
linksMenu.onclick = function () {
  if (is_hidden) {
    is_hidden = !is_hidden;
    firstUl.style.setProperty("display", "block");
  } else {
    is_hidden = !is_hidden;
    firstUl.style.removeProperty("display");
  }
};

// So we can click any where To hise menu
landing.onclick = () => {
  if (!is_hidden) {
    is_hidden = !is_hidden;
    firstUl.style.removeProperty("display");
  }
};

let sunAndMoon = document.querySelector("#sunAndMoon");
sunAndMoon.onclick = function () {
  let classValue = sunAndMoon.getAttribute("class");
  if (classValue === "fa-solid fa-sun fa-xl") {
    // Dark Mood
    sunAndMoon.setAttribute("class", "fa-solid fa-moon fa-xl");
    sunAndMoon.setAttribute("style", "color: #fff");

    changeProperty("--white-color", "#9d9d9d");
    changeProperty("--heading-color", "#000");
    changeProperty("--icon-color", "#fff");
  } else if (classValue === "fa-solid fa-moon fa-xl") {
    // Light Mood
    sunAndMoon.setAttribute("class", "fa-solid fa-sun fa-xl");
    sunAndMoon.removeAttribute("style");

    changeProperty("--white-color", "#fff");
    changeProperty("--heading-color", "#ebeced");
    changeProperty("--icon-color", "#333");
  }
};

// Change Any Property in Css file by passing it's name and the new value
function changeProperty(variableName, newValue) {
  // Loop through the rules of each style sheet
  for (let j = 0; j < styleSheet.cssRules.length; j++) {
    const rule = styleSheet.cssRules[j];

    // Check if the rule is a CSS variable declaration
    if (rule instanceof CSSStyleRule && rule.selectorText === ":root") {
      // Loop through the style declarations of the rule
      for (let k = 0; k < rule.style.length; k++) {
        const propertyName = rule.style[k];

        // Check if the style declaration is the desired variable
        if (propertyName === variableName) {
          // Set the new value to the CSS variable
          rule.style.setProperty(propertyName, newValue);
        }
      }
    }
  }
}
//

window.addEventListener("scroll", function () {
  var scrollToTopButton = document.getElementById("scrollToTopButton");

  if (window.scrollY > 300) {
    // Show the button when the user scrolls down a certain amount
    scrollToTopButton.style.display = "block";
  } else {
    // Hide the button when the user is near the top
    scrollToTopButton.style.display = "none";
  }
});

document
  .getElementById("scrollToTopButton")
  .addEventListener("click", function (e) {
    e.preventDefault();
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
