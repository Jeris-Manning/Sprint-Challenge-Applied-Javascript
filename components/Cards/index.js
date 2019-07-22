// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then((response) => {
    let articleList = response.data.articles;
    let sectionList = Object.keys(articleList);
    let sectionHolder = [];
    let articleHolder = [];
    sectionList.forEach((muppet) => {
      sectionHolder.push(articleList[muppet]);
    });

    sectionHolder.forEach((item) => {
      articleHolder.push(...item);
    });

    articleHolder.forEach((unit) => {
      let newCard = document.createElement('div');
      newCard.classList.add('card');
      document.querySelector('.cards-container').appendChild(newCard);
      let newHeadline = document.createElement('div');
      newHeadline.classList.add('headline');
      newHeadline.innerText = unit.headline;
      newCard.appendChild(newHeadline);
      let newAuthor = document.createElement('div');
      newAuthor.classList.add('author');
      newCard.appendChild(newAuthor);
      let newImageContainer = document.createElement('div');
      newImageContainer.classList.add('img-container');
      newAuthor.appendChild(newImageContainer);
      let newImage = document.createElement('img');
      newImage.src = unit.authorPhoto;
      newImageContainer.appendChild(newImage);
      let newSpan = document.createElement('span');
      newSpan.innerText = `By ${unit.authorName}`;
      newAuthor.appendChild(newSpan);
    });

    // console.log(articleHolder);
  });
