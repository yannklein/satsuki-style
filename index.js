// Manage true 100vh for mobiles
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// Add smooth scrolling to # anchors
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// Create and update instagram cards
const insta_imgs = [
  "https://instagram.fkix1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c177.0.1085.1085a/s640x640/119708986_172161037797443_5157795277142176640_n.jpg?_nc_ht=instagram.fkix1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=awGG3OXdIxkAX9-3NMA&oh=51e47b1fe073915ef3f14ad5bffc38c9&oe=5F9D0404",
  "https://instagram.fkix1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/119048673_1229451930721343_8350356667391422889_n.jpg?_nc_ht=instagram.fkix1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=4TmYpOBmMHkAX_OQDwE&oh=79459c294e32590dbfbbc7d062f4e1ec&oe=5F9CEB54",
  "https://instagram.fkix1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/119043181_149651410129429_6724033558750190093_n.jpg?_nc_ht=instagram.fkix1-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=YYOw2jJs0wcAX9pbok8&oh=706bf1a75bd1e0bdd15f6fdcbc11efed&oe=5F9D3C90",
  "https://instagram.fkix1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/119070516_370613260613392_4187645291541469963_n.jpg?_nc_ht=instagram.fkix1-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=o1VS4x0ybgkAX_29uSG&oh=c64f6896e46124fbc79811d4101d0628&oe=5F9F7914",
  "https://instagram.fkix1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/118818252_842396786165250_3716044078996898805_n.jpg?_nc_ht=instagram.fkix1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=cdlLvK-ONSQAX_p-ZR1&oh=1ec168cfc2f862b6005c8cb50395af5a&oe=5F9E7795",
  "https://instagram.fkix1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c180.0.1080.1080a/s640x640/118693064_655283412052958_5348495714988865155_n.jpg?_nc_ht=instagram.fkix1-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=KUIN5SD8RT0AX_OA6r0&oh=c1168e7afd62311d7dd3b902a20b48b3&oe=5F9F057C",
  "https://instagram.fkix1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/117767120_704751886776970_4807161834971084917_n.jpg?_nc_ht=instagram.fkix1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=GK_XN_tiB3kAX9udCM9&oh=d06584b5c21acd51c331fe15e42d5eb4&oe=5F9C1D85",
  "https://instagram.fkix1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/117730372_376866189967217_318311318007296162_n.jpg?_nc_ht=instagram.fkix1-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=qnblM62uEogAX_Wjfz7&oh=6c288c6d98749b74ec14278c2e19f70e&oe=5F9E6D00",
  "https://instagram.fkix1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c2.0.1436.1436a/s640x640/117811948_642753693317580_470367802368103406_n.jpg?_nc_ht=instagram.fkix1-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=uYJ1am1TOPAAX8Pwbfo&oh=c6c61ddb46d7f2f8f6ea17cc0ea466fa&oe=5F9E86EC",
  "https://instagram.fkix1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c176.0.1088.1088a/s640x640/109524543_2892655947527086_1404306766338441933_n.jpg?_nc_ht=instagram.fkix1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=k-sn4-v9oWsAX827N1w&oh=35358038ff6a60050d861ec6f6c4f995&oe=5F9FB20D",
  "https://instagram.fkix1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c119.0.1202.1202a/s640x640/109203968_732221634246036_1738164760199903519_n.jpg?_nc_ht=instagram.fkix1-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=tXa2N_yeNioAX9CbopS&oh=26ed4a321ea66ad4c3c85068377324b8&oe=5F9BDF5B",
  "https://instagram.fkix1-2.fna.fbcdn.net/v/t51.2885-15/e35/c221.0.637.637a/107523454_277503960182260_5069706966527400089_n.jpg?_nc_ht=instagram.fkix1-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=oqbJuvmxm00AX88yn2y&oh=fda51b1b3d8a5de2e5056c12710f2f13&oe=5F9E7AEA"
]
const card_elements = insta_imgs.map(img => {
  return `
    <a href="https://www.instagram.com/lucy_eyelash_beauty/" target="_blank">
      <div class="card-insta" style="background-image: url('${img}')" alt="instagram eylash photo">
      </div>
    </a>
    `;
});
document.querySelector(".cards").innerHTML = card_elements.join('');
