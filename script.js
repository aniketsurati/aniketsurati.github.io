const toggleButton = document.getElementsByClassName('toggle-button')[0];
const toggleButtonIcon = document.querySelector('.toggle-button i');
const dropDownMenu = document.getElementsByClassName('dropdown')[0];

toggleButton.addEventListener('click', function() {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');
    toggleButtonIcon.className = isOpen ? document.body.style.position = 'fixed' : document.body.style.position = '';
    toggleButtonIcon.className = isOpen ? 'fa-solid fa-x' : 'fa-solid fa-bars';

    if (!isOpen) {
        // Reset project dropdown menu state
        mobileProjectDropdown.style.display = 'none';
        mobileProjectButton.style.color = '';
        mobileProjectButton.querySelector('i').className = 'fa-solid fa-caret-down';
    }
});


const mobileProjectButton = document.querySelector('.drop-project .project-button');
const mobileProjectIcon = document.querySelector('.drop-project .project-button i');
const mobileProjectDropdown = document.querySelector('.drop-project .project-menu');

mobileProjectButton.addEventListener('click', function() {
    const isOpen = mobileProjectDropdown.style.display === 'flex';
    mobileProjectDropdown.style.display = isOpen ? 'none' : 'flex';
    mobileProjectDropdown.style.flexDirection = 'column';
    mobileProjectButton.style.color = isOpen ? '' : '#0f2424';
    mobileProjectButton.querySelector('i').className = isOpen ? 'fa-solid fa-caret-down' : 'fa-solid fa-caret-up';
});

