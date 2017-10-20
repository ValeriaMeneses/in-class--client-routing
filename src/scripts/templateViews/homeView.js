
const renderHomeView = function(){
  return `
    <div class="page page--home">
      <div class="page__inner-container">
        <h1>
          Home Page
        </h1>
        <h3>
          Try these routes!
        </h3>
        <ul>
          <li><a href='/#/about'>/about</a></li>
          <li><a href='/#/friends'>/friends</a></li>
          <li>/friends/:nat</li>
        </ul>
      </div>
    </div>

  `
}


export default renderHomeView
