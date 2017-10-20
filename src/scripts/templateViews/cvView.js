const renderCvView = function(){
  return `
    <div class="page page--cv">
      <div class="page__inner-container">
        <h1>About me</h1>
        <div class="user-card">
          <div class="profile-img">
            <img src="http://flathash.com/yair"/>
          </div>
          <h2 class="user-card__title">
            Mister Handsome
          </h2>
          <hr/>
          <ul class="user-card__info">
            <li><span>&#9906;</span>New York, NY, USA</li>
            <li><span>&#9742;</span>(1)-209.884.3939</li>
            <li><span>&#9993;</span>me@aol.com</li>
            <li><span>&#10011;</span><a href="http://flathash.com/" target="_blank">http://flathash.com/</a></li>
          </ul>
        </div>
      </div>
    </div>

  `
}


export default renderCvView
