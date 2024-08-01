(() => {
    document.querySelectorAll("button");
    var e,
        a,
        n,
        o,
        i,
        t,
        c = document.querySelector("nav"),
        s =
            (document.querySelector("body"),
            document.querySelector("#content"));
    function r(e) {
        var a = document.createElement("div");
        return a.classList.add(e), a;
    }
    !(function () {
        for (
            var e = ["Home", "Menu", "About", "Contact"], a = 0;
            a < e.length;
            a++
        ) {
            var n = c.querySelector(".button".concat(a + 1)),
                o = r("nav-button");
            (o.innerHTML = '<a href="#" class="navButton">'.concat(
                e[a],
                "</a>"
            )),
                n.appendChild(o);
        }
    })(),
        (e = r("hero-section")),
        (a = r("hero-text")),
        (n = document.createElement("h1")),
        (o = document.createElement("div")),
        (i = document.createElement("div")),
        (t = document.createElement("div")),
        n.classList.add("hero-text"),
        o.classList.add("hero-div1"),
        i.classList.add("hero-div2"),
        t.classList.add("hero-div3"),
        e.appendChild(a),
        a.appendChild(n),
        n.classList.add("hero-text"),
        (n.innerHTML = "<h1>Welcome to our Restaurant</h1>"),
        (i.innerHTML =
            "<h1>Welcome to El Restaurante!</h1>\n                                <h2>Experience Culinary Excellence</h2>\n                                <p>At El Restaurante, we invite you to indulge in a culinary journey like no other.<br> Our chefs craft exquisite dishes using the finest ingredients, blending flavors to create unforgettable meals.</p>\n                                <h2>Savor Every Moment</h2>\n                                <p>Join us for a delightful dining experience where every dish is a masterpiece, and every moment is cherished.<br> From our cozy ambiance to our impeccable service, we ensure your visit is memorable.</p>\n                                <h2>Reserve Your Table Today</h2>\n                                <p>Explore our menu, discover our special offers, and make a reservation to enjoy the best of [cuisine type] cuisine. We can't wait to welcome you!.</p>"),
        (t.innerHTML =
            "<img class='hero-image' src='./Icons/delicious food.webp' alt='fine dining meal'>"),
        a.appendChild(n),
        e.appendChild(o),
        o.appendChild(i),
        o.appendChild(t),
        s.appendChild(e),
        (function () {
            var e = r("body-content"),
                a = document.createElement("h1");
            (a.innerHTML =
                '\n    <div class="mainContent">\n        <div class="foodDiv">\n            <img class="foodImage" src="./Icons/easy-chicken-curry-aa22a0b.webp" alt="Chicken Curry"><a href="https://www.bbcgoodfood.com/recipes/easy-chicken-curry" alt="Chicken Curry" target="_blank"></a></img>\n            <div class="foodDivText" >Delicious Chicken Curry</div>\n        </div>\n        <div class="foodDiv">\n            <img class="foodImage" src="./Icons/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg" alt="Chorizo Mozarella"><a href="https://www.bbcgoodfood.com/recipes/easy-chicken-curry" alt="Chicken Curry" target="_blank"></a></img>\n            <div class="foodDivText" >The Best Chorizo Mozarella</div>\n        </div>\n        <div class="foodDiv">\n            <img class="foodImage" src="./Icons/Vanilla-Cardamom-Kulfi-PTR-Featured-680x900.jpg" alt="delicious food"><a href="https://www.bbcgoodfood.com/recipes/easy-chicken-curry" alt="Chicken Curry" target="_blank"></a></img>\n            <div class="foodDivText" >Vanilla Cardamom Kulfi</div>\n        </div>\n        <div class="foodDiv">\n            <img class="foodImage" src="./Icons/Prawn-harissa-spaghetti--b3b0fdd.jpg" alt="Spaghetti"><a href="https://www.bbcgoodfood.com/recipes/easy-chicken-curry" alt="Chicken Curry" target="_blank"></a></img>\n            <div class="foodDivText" >Prawn Harissa Spaghetti</div>\n        </div>\n    </div>'),
                e.appendChild(a),
                s.appendChild(e);
        })(),
        (function () {
            var e = r("footer"),
                a = document.createElement("h1");
            (a.innerHTML =
                '       \n   <div class="footer">\n        <div class="social-media">\n            <a href="https://facebook.com" target="_blank"> <img class="socialIcons" src="./Icons/facebook.png" alt="facebook Icon"></a></img>\n            <a href="https://twitter.com" target="_blank"> <img class="socialIcons" src="./Icons/Twitter X.png" alt="twitter Icon"></a></img>\n            <a href="https://instagram.com" target="_blank"> <img class="socialIcons" src="./Icons/insta.png" alt="instagram Icon"></a></img>\n            <a href="https://youtube.com" target="_blank"> <img class="socialIcons" src="./Icons/youtube.png" alt="YouTube Icon"></a></img>\n            <a href="https://tiktok.com" target="_blank"> <img class="socialIcons" src="./Icons/tiktok.png" alt="TikTok Icon"></a></img>\n            <a href="https://linkedin.com" target="_blank"> <img class="socialIcons" src="./Icons/linkedin.png" alt="LinkedIn Icon"></a></img>\n            <a href="https://gmail.com" target="_blank"> <img class="socialIcons" src="./Icons/google.png" alt="G-Mail Icon"></a></img>\n            <div class="footer-links">\n                <a href="#">Legal Stuff</a>\n                <a href="#">Privacy Policy</a>\n                <a href="#">Security</a>\n                <a href="#">Website Accessibility</a> \n            </div>  \n            <div class="copyright">\n                <p>Copyright © 2024 Your\'s Restaurant, Inc.</p>\n            </div>\n        </div>\n    </div>'),
                e.appendChild(a),
                s.appendChild(e);
        })();
})();
