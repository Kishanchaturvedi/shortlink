function formValidation() {
    var email = document.getElementById("emailInput").value;
    var password = document.getElementById("passwordInput").value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // var linkPattern = /(?:https?|ftp):\/\/[\n\S]+/gi;

    if (email == "") {
        document.getElementById("emailError").innerHTML = "Enter your email";
        return false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML = "enter your valid email";
        return false;
    } else {
        document.getElementById("emailError").innerHTML = "";
    }
    if (password == "") {
        document.getElementById("passwordError").innerHTML = "Enter the password";
        return false;
    } else {
        document.getElementById("passwordError").innerHTML = ""

    }
    return true;

}

function urlValidation() {
    var link = document.getElementById("pureUrl").value;
    var shortUrl = document.getElementById("shortUrl").value;
    var title = document.getElementById("title").value;
    var description = document.getElementById("descriptionMsg").value;
    var faviconInput = document.getElementById("faviconInput").value;
    var linkPattern = /(?:https?|ftp):\/\/[\n\S]+/gi;
    var titlePattern = /^.{3,50}$/;
    var descriptionPattern = /^.{35,250}$/;

    if (link == "") {
        document.getElementById("planeUrlError").innerHTML = "Enter your URL";
        return false;
    } else if (!linkPattern.test(link)) {
        document.getElementById("planeUrlError").innerHTML = "Enter a valid URL";
        return false;
    } else {
        document.getElementById("planeUrlError").innerHTML = "";
    }

    if (shortUrl == "") {
        document.getElementById("shortUrlError").innerHTML = "Enter the URL";
        return false;
    } else {
        document.getElementById("shortUrlError").innerHTML = "";
    }

    if (title == "") {
        document.getElementById("titleError").innerHTML = "Enter the title";
        return false;
    } else if (!titlePattern.test(title)) {
        document.getElementById("titleError").innerHTML = "Enter a valid title (between 3 and 50 characters)";
        return false;
    } else {
        document.getElementById("titleError").innerHTML = "";
    }

    if (description == "") {
        document.getElementById("msgError").innerHTML = "Enter the description";
        return false;
    } else if (!descriptionPattern.test(description)) {
        document.getElementById("msgError").innerHTML = "Enter a valid description (between 35 and 250 characters)";
        return false;
    } else {
        document.getElementById("msgError").innerHTML = "";
    }
    if (faviconInput == "") {
        document.getElementById("faviconError").innerHTML = "upload the image"
        return false;
    } else {
        document.getElementById("faviconError").innerHTML = ""
        return true;
    }
}





document.getElementById('faviconInput').addEventListener('change', function () {
    const file = this.files[0]; // Get the selected file

    if (file) {
        const fileSize = file.size; // Size of the file in bytes
        const maxSizeInBytes = 100 * 1024; // 100KB in bytes

        if (fileSize > maxSizeInBytes) {
            alert('Please select a file smaller than 100KB.'); // Display an alert or handle the validation error
            this.value = ''; // Clear the file input
        }
        return false;
    }
});













function logoValidation() {
    var links = document.getElementById("url").value;
    var bgFavicon = document.getElementById("bgImgFavicon").value;
    // var title = document.getElementById("title").value;
    // var description = document.getElementById("descriptionMsg").value;
    var logo = document.getElementById("logo").value;
    var linkPattern = /(?:https?|ftp):\/\/[\n\S]+/gi;
    var titlePattern = /^.{3,50}$/;
    var descriptionPattern = /^.{35,250}$/;

    if (links == "") {
        document.getElementById("urlErrors").innerHTML = "Enter your URL";
        return false;
    } else if (!linkPattern.test(links)) {
        document.getElementById("urlErrors").innerHTML = "Enter a valid URL";
        return false;
    } else {
        document.getElementById("urlErrors").innerHTML = "";
    }

    if (bgFavicon == "") {
        document.getElementById("bgImgErrors").innerHTML = "upload the background image";
        return false;
    } else {
        document.getElementById("bgImgErrors").innerHTML = "";
    }

    if (logo == "") {
        document.getElementById("logoError").innerHTML = "upload the image"
        return false;
    } else {
        document.getElementById("logoError").innerHTML = ""
        return true;
    }
}




document.getElementById('bgImgFavicon').addEventListener('change', function () {
    const file = this.files[0]; // Get the selected file

    if (file) {
        const fileSizes = file.size; // Size of the file in bytes
        const maxSizeInByte = 500 * 1024; // 500KB in bytes

        if (fileSizes > maxSizeInByte) {
            alert('Please select a file smaller than 500KB.'); // Display an alert or handle the validation error
            this.value = ''; // Clear the file input
            return false; // Prevent further processing if the file size exceeds the limit
        }
    }
});

