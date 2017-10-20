import { Router } from 'director/build/director';
import request from 'superagent';

import renderCv from './templateViews/cvView';
import renderFriends from './templateViews/friendsView';
import renderHome from './templateViews/homeView';

const appContainer = document.querySelector('#app-container')

appContainer.innerHTML =  renderHome()

function showCvView() {
  // appContainer.innerHTML = renderCv
  appContainer.innerHTML = renderCv()
  // console.log('This is my CV')
}

function showFriendsView() {
  // console.log('Show my friends')
  request
    .get('https://randomuser.me/api/?results=12&inc=nat,email,phone')
    .then(data => {
      return data.body.results
    })
    .then(friends => {
      appContainer.innerHTML = renderFriends('My friends', friends)
    })
}

function showFriendsByNationality(nationality) {
  // console.log(`Looking for ${nationality}`)
  request
    .get(`https://randomuser.me/api/?results=12&inc=nat,email,phone&nat=${nationality}`)
    .then(data => {
      return data.body.results
    })
    .then(nationalityList => {
      appContainer.innerHTML = renderFriends(`My friends from ${nationalityList[0].nat}`, nationalityList)
    })
}

const routes = {
  '/about': showCvView,
  '/friends': showFriendsView,
  '/friends/:nationality': showFriendsByNationality
};

const router = Router(routes);
router.init('/');
