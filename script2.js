// import nodes from './apiscript';


const renderRecipe = () => {
    const markup = `<figure>
    <div class="title">
        <div>
            <h3><a href="https://github.com/Bello4/dice-row-game">dice-row-game</a></h3>
            
            <p></p>
            <div class="update-info">
            <p class="title-lang"><i class="ion-record font-yellow">
            </i> javascript</p>
            <p class="title-lang"><i class="ion-ios-star-outline">
            </i> 20</p>
            <p class="title-lang"><i class="ion-usb">
            </i> 9</p>
            <p class="updated">updated 5days ago</p>
            </div>
        </div>
        <button class="btn-small"><i class="ion-ios-star-outline"></i> Star</button>
    </div>
</figure>
<figure>
    <div class="title">
        <div>
            <h3><a href="https://github.com/Bello4/netflix-clone">netflix-clone</a></h3>
            
            <p> built using ECMA6 script.</p>
            <div class="update-info">
            <p class="title-lang"><i class="ion-record font-yellow">
            </i> javascript</p>
            <p class="title-lang"><i class="ion-ios-star-outline">
            </i> 2</p>
            <p class="title-lang"><i class="ion-usb">
            </i> 3</p>
            <p class="updated">updated 5days ago</p>
            </div>
        </div>
        <button class="btn-small"><i class="ion-ios-star-outline"></i> Star</button>
    </div>
</figure>
<figure>
    <div class="title">
        <div>
            <h3><a href="https://github.com/Bello4/react-recipe-app">react-recipe-app</a></h3>
            
            <p>you can visit site via this link</p>
            <div class="update-info">
            <p class="title-lang"><i class="ion-record font-yellow">
            </i> javascript</p>
            <p class="title-lang"><i class="ion-ios-star-outline">
            </i> 6</p>
            <p class="title-lang"><i class="ion-usb">
            </i> 2</p>
            <p class="updated">updated 5days ago</p>
            </div>
        </div>
        <button class="btn-small"><i class="ion-ios-star-outline"></i> Star</button>
    </div>
</figure>
<figure>
    <div class="title">
        <div>
            <h3><a href="https://github.com/Bello4/css-Flexbox-project">css-Flexbox-project</a></h3>
            
            <p>mastering flexbox.</p>
            <div class="update-info">
            <p class="title-lang"><i class="ion-record font-purple">
            </i>css</p>
            <p class="title-lang"><i class="ion-ios-star-outline">
            </i> 9</p>
            <p class="title-lang"><i class="ion-usb">
            </i> 1</p>
            <p class="updated">updated 5days ago</p>
            </div>
        </div>
        <button class="btn-small"><i class="ion-ios-star-outline"></i> Star</button>
    </div>
</figure>
    `; 
    document.querySelector('.repo-list').insertAdjacentHTML('beforeend', markup);
};
renderRecipe();