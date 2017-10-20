const renderFriendsView = function(pageTitle, amigosList){

  return `
    <div class="page page--friends">
      <div class="page__inner-container">
        <h1>
          ${pageTitle}
        </h1>
        <div class="friends-container">
          ${ _createFriendCardsHtml(amigosList)}
        </div>

      </div>
    </div>

  `
}


const _createFriendCardsHtml = function(friendsList){
  let str = ''
  friendsList.forEach(function createFriendCard(friendObj){
    str += `
      <div class="friend-card">
        <a href='/#/friends/${friendObj.nat}'>
          <img src="https://robohash.org/${friendObj.email}?set=set4"/>
          <h4>${friendObj.email}</h4>
          <h5> <span>${friendObj.nat}</span> | ${friendObj.phone}</h5>
        </a>
      </div>
    `
  })

  return str
  /*
    function will create html like:
    <div class="friend-card">
      <img src="https://robohash.org/shanav@mail.com?set=set4"/>
      <h4>shanav@mail.com</h4>
      <h5> <span>AU</span> | 83820022</h5>
    </div>
    <div class="friend-card">
      <img src="https://robohash.org/billyg@mail.com?set=set4"/>
      <h4>billyg@mail.com</h4>
      <h5> <span>GB</span> | 339300202</h5>
    </div>
    ...

  */
}


export default renderFriendsView
