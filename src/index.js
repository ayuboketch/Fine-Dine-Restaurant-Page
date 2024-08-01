const button = document.querySelectorAll("button");
const navBar = document.querySelector("nav");
const body = document.querySelector("body");
const content = document.querySelector("#content");

function createDiv(className) {
    const newElement = document.createElement("div");
    newElement.classList.add(className);
    return newElement;
}

function firstButtonNav() {
    const buttonTexts = ["Home", "Menu", "About", "Contact"];
    for (let i = 0; i < buttonTexts.length; i++) {
        const navButton = navBar.querySelector(`.button${i + 1}`);
        const newElement = createDiv("nav-button");
        newElement.innerHTML = `<a href="#" class="navButton">${buttonTexts[i]}</a>`;
        navButton.appendChild(newElement);
    }
}
firstButtonNav();

function createHeroSection() {
    const heroSection = createDiv("hero-section");
    const heroText = createDiv("hero-text");
    const newElement = document.createElement("h1");
    const newElement2 = document.createElement("div");
    const newElement3 = document.createElement("div");
    const newElement4 = document.createElement("div");
    newElement.classList.add("hero-text");
    newElement2.classList.add("hero-div1");
    newElement3.classList.add("hero-div2");
    newElement4.classList.add("hero-div3");
    heroSection.appendChild(heroText);
    heroText.appendChild(newElement);
    newElement.classList.add("hero-text");
    newElement.innerHTML = "<h1>Welcome to our Restaurant</h1>";
    newElement3.innerHTML = `<h1>Welcome to El Restaurante!</h1>
                                <h2>Experience Culinary Excellence</h2>
                                <p>At El Restaurante, we invite you to indulge in a culinary journey like no other.<br> Our chefs craft exquisite dishes using the finest ingredients, blending flavors to create unforgettable meals.</p>
                                <h2>Savor Every Moment</h2>
                                <p>Join us for a delightful dining experience where every dish is a masterpiece, and every moment is cherished.<br> From our cozy ambiance to our impeccable service, we ensure your visit is memorable.</p>
                                <h2>Reserve Your Table Today</h2>
                                <p>Explore our menu, discover our special offers, and make a reservation to enjoy the best of [cuisine type] cuisine. We can't wait to welcome you!.</p>`;
    newElement4.innerHTML = "<img class='hero-image' src='./Icons/delicious food.webp' alt='fine dining meal'>";
    heroText.appendChild(newElement);
    heroSection.appendChild(newElement2);
    newElement2.appendChild(newElement3);
    newElement2.appendChild(newElement4);
    content.appendChild(heroSection);
}
createHeroSection();

function bodyContent() {
    const bodyContent = createDiv("body-content");
    const newElement = document.createElement("h1");
    newElement.innerHTML = `
    <div class="mainContent">
        <div class="foodDiv">
            <img class="foodImage" src="./Icons/easy-chicken-curry-aa22a0b.webp" alt="Chicken Curry"><a href="https://www.bbcgoodfood.com/recipes/easy-chicken-curry" alt="Chicken Curry" target="_blank"></a></img>
            <div class="foodDivText" >Delicious Chicken Curry</div>
        </div>
        <div class="foodDiv">
            <img class="foodImage" src="./Icons/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg" alt="Chorizo Mozarella"><a href="https://www.bbcgoodfood.com/recipes/easy-chicken-curry" alt="Chicken Curry" target="_blank"></a></img>
            <div class="foodDivText" >The Best Chorizo Mozarella</div>
        </div>
        <div class="foodDiv">
            <img class="foodImage" src="./Icons/Vanilla-Cardamom-Kulfi-PTR-Featured-680x900.jpg" alt="delicious food"><a href="https://www.bbcgoodfood.com/recipes/easy-chicken-curry" alt="Chicken Curry" target="_blank"></a></img>
            <div class="foodDivText" >Vanilla Cardamom Kulfi</div>
        </div>
        <div class="foodDiv">
            <img class="foodImage" src="./Icons/Prawn-harissa-spaghetti--b3b0fdd.jpg" alt="Spaghetti"><a href="https://www.bbcgoodfood.com/recipes/easy-chicken-curry" alt="Chicken Curry" target="_blank"></a></img>
            <div class="foodDivText" >Prawn Harissa Spaghetti</div>
        </div>
    </div>`;
    bodyContent.appendChild(newElement);

    content.appendChild(bodyContent);
}
bodyContent();

function createFooter() {
    const footer = createDiv("footer");
    const newElement = document.createElement("h1");
    newElement.innerHTML = `       
   <div class="footer">
        <div class="social-media">
            <a href="https://facebook.com" target="_blank"> <img class="socialIcons" src="./Icons/facebook.png" alt="facebook Icon"></a></img>
            <a href="https://twitter.com" target="_blank"> <img class="socialIcons" src="./Icons/Twitter X.png" alt="twitter Icon"></a></img>
            <a href="https://instagram.com" target="_blank"> <img class="socialIcons" src="./Icons/insta.png" alt="instagram Icon"></a></img>
            <a href="https://youtube.com" target="_blank"> <img class="socialIcons" src="./Icons/youtube.png" alt="YouTube Icon"></a></img>
            <a href="https://tiktok.com" target="_blank"> <img class="socialIcons" src="./Icons/tiktok.png" alt="TikTok Icon"></a></img>
            <a href="https://linkedin.com" target="_blank"> <img class="socialIcons" src="./Icons/linkedin.png" alt="LinkedIn Icon"></a></img>
            <a href="https://gmail.com" target="_blank"> <img class="socialIcons" src="./Icons/google.png" alt="G-Mail Icon"></a></img>
            <div class="footer-links">
                <a href="#">Legal Stuff</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Security</a>
                <a href="#">Website Accessibility</a> 
            </div>  
            <div class="copyright">
                <p>Copyright © 2024 Your's Restaurant, Inc.</p>
            </div>
        </div>
    </div>`;
    footer.appendChild(newElement);
    content.appendChild(footer);
}
createFooter();