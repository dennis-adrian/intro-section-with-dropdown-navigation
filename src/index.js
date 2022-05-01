function getMobileSidebarContainer() {
  return document.getElementById("mobile-sidebar");
}

function getFeaturesLabelItemsContainer() {
  return document.getElementById("featuresLabelItemsContainer");
}

function getFeaturesLabelIcon() {
  return document.getElementById("featuresLabelIcon");
}

function getCompanyLabelIcon() {
  return document.getElementById("companyLabelIcon");
}

function getCompanyLabelItemsContainer() {
  return document.getElementById("companyLabelItemsContainer");
}

function toggleFeaturesLabel() {
  const container = getFeaturesLabelItemsContainer();
  if (!container.innerHTML) {
    getFeaturesLabelIcon().src = "images/icon-arrow-up.svg"
    container.innerHTML = featuresLabelContent;
  } else {
    getFeaturesLabelIcon().src = "images/icon-arrow-down.svg"
    container.innerHTML = "";
  }
}

function toggleCompanyLabel() {
  const container = getCompanyLabelItemsContainer();
  if (!container.innerHTML) {
    getCompanyLabelIcon().src = "images/icon-arrow-up.svg"
    container.innerHTML = `
      <li>History</li>
      <li>Our Team</li>
      <li>Blog</li>
    `;
  } else {
    getCompanyLabelIcon().src = "images/icon-arrow-down.svg"
    container.innerHTML = "";
  }
}
const mobileSidebar = getMobileSidebarContainer();

function toggleMobileSidebar() {
  if (mobileSidebar.style.display === "block") {
    document.getElementById("mobile-header-button").innerHTML = `
    <img
      class="header__menu-icon header__menu-icon--open"
      src="./images/icon-menu.svg"
      alt="menu icon"
    />
    `

    mobileSidebar.style.display = "none";
  } else {
    document.getElementById("mobile-header-button").innerHTML = `
    <img
      class="header__menu-icon header__menu-icon--close"
      src="./images/icon-close-menu.svg"
      alt="menu icon"
    />
    `
    mobileSidebar.style.display = "block";
  }
}

const mobileNav = `
  <nav class="mobile-sidebar__menu">
    <div class="menu__header"></div>
    <ul id="navigationList">
      <li class="list-item-label-with-icon" onclick="toggleFeaturesLabel()">
        Features
        <img class="icon-right" id="featuresLabelIcon" src="./images/icon-arrow-down.svg">
      </li>
      <ul class="second-level-list" id="featuresLabelItemsContainer"></ul>
      <li class="list-item-label-with-icon" onclick="toggleCompanyLabel()">
        Company
        <img class="icon-right" id="companyLabelIcon" src="./images/icon-arrow-down.svg">
      </li>
      <ul class="second-level-list" id="companyLabelItemsContainer"></ul>
      <li>Careers</li>
      <li>About</li>
    </ul>
  </nav>
`

mobileSidebar.innerHTML = mobileNav;

const featuresLabelContent = `
  <li class="list-item-label-with-icon">
    <img class="icon-left" src="./images/icon-todo.svg">
    Todo List
  </li>
  <li class="list-item-label-with-icon">
    <img class="icon-left" src="./images/icon-calendar.svg">
    Calendar
  </li>
  <li class="list-item-label-with-icon">
    <img class="icon-left" src="./images/icon-reminders.svg">
    Reminders
  </li>
  <li class="list-item-label-with-icon">
    <img class="icon-left" src="./images/icon-planning.svg">
    Planning
  </li>
`;