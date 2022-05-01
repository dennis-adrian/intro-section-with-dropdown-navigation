function getElement(elementId) {
  return document.getElementById(elementId);
}

function toggleFeaturesLabel() {
  const container = getElement('featuresLabelItemsContainer');
  if (!container.innerHTML) {
    getElement('featuresLabelIcon').src = 'images/icon-arrow-up.svg'
    container.innerHTML = featuresLabelContent;
  } else {
    getElement('featuresLabelIcon').src = 'images/icon-arrow-down.svg'
    container.innerHTML = '';
  }
}

function toggleCompanyLabel() {
  const container = getElement('companyLabelItemsContainer');
  if (!container.innerHTML) {
    getElement('companyLabelIcon').src = 'images/icon-arrow-up.svg'
    container.innerHTML = `
      <li>History</li>
      <li>Our Team</li>
      <li>Blog</li>
    `;
  } else {
    getElement('companyLabelIcon').src = 'images/icon-arrow-down.svg'
    container.innerHTML = '';
  }
}

const mobileSidebar = getElement('mobileSidebar');

function toggleMobileSidebar() {
  if (mobileSidebar.style.display === 'block') {
    document.getElementById('mobileHeaderButton').innerHTML = `
    <img
      class='header__menu-icon header__menu-icon--open'
      src='./images/icon-menu.svg'
      alt='menu icon'
    />
    `

    mobileSidebar.style.display = 'none';
  } else {
    document.getElementById('mobileHeaderButton').innerHTML = `
    <img
      class='header__menu-icon header__menu-icon--close'
      src='./images/icon-close-menu.svg'
      alt='menu icon'
    />
    `
    mobileSidebar.style.display = 'block';
  }
}

const mobileNav = `
  <nav class='mobile-sidebar__menu'>
    <div class='menu__header'></div>
    <ul id='navigationList'>
      <li class='navbar-label-with-icon' onclick='toggleFeaturesLabel()'>
        Features
        <img class='icon-right' id='featuresLabelIcon' src='./images/icon-arrow-down.svg'>
      </li>
      <ul class='second-level-list' id='featuresLabelItemsContainer'></ul>
      <li class='list-item-label-with-icon' onclick='toggleCompanyLabel()'>
        Company
        <img class='icon-right' id='companyLabelIcon' src='./images/icon-arrow-down.svg'>
      </li>
      <ul class='second-level-list' id='companyLabelItemsContainer'></ul>
      <li>Careers</li>
      <li>About</li>
    </ul>
  </nav>
`

mobileSidebar.innerHTML = mobileNav;

const featuresLabelContent = `
  <li class='list-item-label-with-icon'>
    <img class='icon-left' src='./images/icon-todo.svg'>
    Todo List
  </li>
  <li class='list-item-label-with-icon'>
    <img class='icon-left' src='./images/icon-calendar.svg'>
    Calendar
  </li>
  <li class='list-item-label-with-icon'>
    <img class='icon-left' src='./images/icon-reminders.svg'>
    Reminders
  </li>
  <li class='list-item-label-with-icon'>
    <img class='icon-left' src='./images/icon-planning.svg'>
    Planning
  </li>
`;
