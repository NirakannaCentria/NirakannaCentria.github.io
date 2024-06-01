function showMore(section) {
    let moreInfo = document.getElementById(section + '-more');
    moreInfo.style.display = 'block';
    moreInfo.previousElementSibling.style.display = 'none'; // Hide preview text
    moreInfo.nextElementSibling.style.display = 'none'; // Hide the "Read More" button
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}