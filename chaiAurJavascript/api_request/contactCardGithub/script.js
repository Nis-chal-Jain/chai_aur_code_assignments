let requestUrl = 'https://api.github.com/users/'

const nameDOM = document.querySelector('#name')
const locationDOM = document.querySelector('#loc')
const followersDOM = document.querySelector('.followers')
const picDOM = document.querySelector('#pic')

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault()
    let username = document.getElementById('username-input').value;
    requestUrl += username;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestUrl)
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const data = JSON.parse(this.responseText)
            const name = data.name
            const pic = data.avatar_url
            const location = data.location
            const followers = data.followers
            nameDOM.innerHTML = `${name}`
            if(location===null){
                locationDOM.innerHTML = `Location not given by user`
            }else{
                locationDOM.innerHTML = `${location}`
            }            
            followersDOM.innerHTML = `Followers: ${followers}`
            picDOM.src = `${pic}`
            requestUrl = 'https://api.github.com/users/'
        }
    }
    xhr.send();
});




