// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
  let pageHeader = document.createElement('div');
  pageHeader.classList.add('header');
  let headerDate = document.createElement('span');
  headerDate.classList.add('date');
  headerDate.innerText = "SMARCH 28, 2019"
  let titleHeader = document.createElement('h1');
  titleHeader.innerText = "Lambda Times";
  let temperatureHeader = document.createElement('span');
  temperatureHeader.classList.add('temp');
  temperatureHeader.innerText = "98°"
  pageHeader.appendChild(headerDate);
  pageHeader.appendChild(titleHeader);
  pageHeader.appendChild(temperatureHeader);
  document.querySelector('.header-container').appendChild(pageHeader);
  
}

Header();
