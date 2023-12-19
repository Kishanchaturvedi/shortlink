function showText() {
    var x = document.getElementById("passwordInput");
    var y = document.getElementById("eyeShow");
    if (x.type == "password") {
        y.classList.remove("bi-eye-slash");
        y.classList.add("bi-eye");
        x.type = "text";
    } else {
        x.type = "password";
        y.classList.remove("bi-eye");
        y.classList.add("bi-eye-slash");
    }
}

// function sideBtn() {
//     var sideBtn = document.getElementById("sideBtn");
//     sideBtn.addEventListener("click", function () {

//     })
//     sideBtn.classList.remove("sidenav-bar");
//     sideBtn.classList.add("phoneSide-bar");
// }

// function toggleSideBar() {
//     var sideNav = document.getElementById("sideNav");
//     var toggleDisplay = document.querySelectorAll(".toggle-display")
//     if (sideNav.classList.contains("sidenav-bar")) {
//         sideNav.classList.remove("sidenav-bar");
//         sideNav.classList.add("phoneSide-bar");
//         toggleDisplay.classList.add("d-none");
//     } else {
//         sideNav.classList.remove("phoneSide-bar");
//         sideNav.classList.add("sidenav-bar");
//         toggleDisplay.classList.add("d-block");
//     }
// }




// var rotate = document.getElementById("sideBtn").addEventListener("click", toggleSideBar);
// // document.getElementById("sideBtn").addEventListener("click", toggleSideBar);
// function toggleSideBar() {
//     var sideNav = document.getElementById("sideNav");
//     var elementsToToggle = document.querySelectorAll(".toggle-display");
//     // var sideSpace = dcoument.getElementById("sideSpace");

//     if (sideNav.classList.contains("sidenav-bar")) {
//         sideNav.classList.remove("sidenav-bar");
//         sideNav.classList.add("phoneSide-bar");
//         sideSpace.classList.remove("pl-16rem");
//         sideSpace.classList.add("pl-5rem");

//         // Hide elements with the class "toggle-display"
//         elementsToToggle.forEach(function (element) {
//             element.classList.remove("d-block");
//             element.classList.add("d-none");
//         });
//     } else {
//         sideNav.classList.remove("phoneSide-bar");
//         sideNav.classList.add("sidenav-bar");
//         sideSpace.classList.add("pl-16rem");
//         sideSpace.classList.remove("pl-5rem");

//         // Show elements with the class "toggle-display"
//         elementsToToggle.forEach(function (element) {
//             element.classList.remove("d-none");
//             element.classList.add("d-block");
//         });
//     }
// }



document.getElementById("sideBtn").addEventListener("click", function() {
    var sideNav = document.getElementById("sideNav");
    var sideSpace = document.getElementById("sideSpace");
    var elementsToToggle = document.querySelectorAll(".toggle-display");

    sideNav.classList.toggle("sidenav-bar");
    sideNav.classList.toggle("phoneSide-bar");
    sideSpace.classList.toggle("pl-16rem");
    sideSpace.classList.toggle("pl-5rem");

    elementsToToggle.forEach(function(element) {
        element.classList.toggle("d-block");
        element.classList.toggle("d-none");
    });
});
