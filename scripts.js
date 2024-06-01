function toggleContent(section) {
    let box = document.getElementById(section);
    let preview = box.querySelector('.text-preview');
    let moreInfo = box.querySelector('.more-info');
    let button = box.querySelector('button');

    if (box.classList.contains('expanded')) {
        // Collapse the box
        box.classList.remove('expanded');
        preview.style.display = '-webkit-box';
        moreInfo.style.display = 'none';
        button.textContent = 'Read More';
    } else {
        // Expand the box
        box.classList.add('expanded');
        preview.style.display = 'none';
        moreInfo.style.display = 'block';
        button.textContent = 'Show Less';
    }
}
