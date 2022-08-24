document.getElementById('apply-bg').addEventListener('click', function(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.backgroundColor = 'lightseagreen'
    }
})
document.getElementById('center-third').addEventListener('click', function(){
   const thirdFriend = document.getElementById('third-friend');
   thirdFriend.style.textAlign = 'center'
})
document.getElementById('add-friend').addEventListener('click', function(){
    const frirendContainer = document.getElementById('friends');
    const div = document.createElement('div');
    div.classList.add('friend')
    div.innerHTML = `
        <h3 class="friend-name">Friend-6</h3>
        <p>new friend added</p>
    `;
    frirendContainer.appendChild(div);
})