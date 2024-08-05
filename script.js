const toggleButton = document.getElementsByClassName('toggle-button')[0];
const toggleButtonIcon = document.querySelector('.toggle-button i');
const dropDownMenu = document.getElementsByClassName('dropdown')[0];

toggleButton.addEventListener('click', function() {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');
    toggleButtonIcon.className = isOpen ? document.body.style.position = 'fixed' : document.body.style.position = '';
    toggleButtonIcon.className = isOpen ? 'fa-solid fa-x' : 'fa-solid fa-bars';
});

