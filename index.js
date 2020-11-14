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
// const insta_imgs = ["https://instagram.fkix1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/121374386_1154926188259359_4467084500950857504_n.jpg?_nc_ht=instagram.fkix1-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=9CnCuemP1aIAX8Cxrjt&_nc_tp=24&oh=1783239cc3212208922f4fed0e88cace&oe=5FD8D4A1",
// "https://instagram.fkix1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c2.0.1436.1436a/s640x640/121505720_643929636486047_6455628888800758590_n.jpg?_nc_ht=instagram.fkix1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=bbreC02874wAX_yMFrd&_nc_tp=24&oh=1b9df8b882a839541ca4ef5dfe98bfa0&oe=5FD9DC67",
// "https://instagram.fkix1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/121058771_787130242110226_5982007285426767603_n.jpg?_nc_ht=instagram.fkix1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=EKatZMz7e-oAX_6vKJD&_nc_tp=24&oh=df2a55f663330783f8b7519c06ab3e1a&oe=5FD837C8",
// "https://instagram.fkix1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/121217244_1060384061081084_1679955178403862243_n.jpg?_nc_ht=instagram.fkix1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=5mqyflVOLM4AX9ILEZD&_nc_tp=24&oh=ac9ac03bf456ec6181a36e6fe322cadc&oe=5FD947CA",
// "https://instagram.fkix1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.0.1439.1439a/s640x640/120846203_116434006744067_3748157219615181600_n.jpg?_nc_ht=instagram.fkix1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=NNKGkPMTO2YAX_sH1jO&_nc_tp=24&oh=f3dc37661c4b6da3aaddb9f340846e90&oe=5FD8AA8F",
// "https://instagram.fkix1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c1.0.1438.1438a/s640x640/120634930_665200141091499_8816457741751684731_n.jpg?_nc_ht=instagram.fkix1-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=mG9laZzSPqYAX_z0Qpj&_nc_tp=24&oh=b8575357dac99d05ae492d9881c4106e&oe=5FDB73F0",
// "https://instagram.fkix1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/120397131_689525638324818_1172977335625762593_n.jpg?_nc_ht=instagram.fkix1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=ugYoQWgorbQAX9bLnXv&_nc_tp=24&oh=6ca860e4853251bda9f93ee43a840877&oe=5FDA81E6",
// "https://instagram.fkix1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c177.0.1085.1085a/s640x640/119708986_172161037797443_5157795277142176640_n.jpg?_nc_ht=instagram.fkix1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=8CqXGcXjULMAX9I7owh&_nc_tp=24&oh=6f52332cb052e0cea85f008ec5e822c6&oe=5FD85784",
// "https://instagram.fkix1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/119048673_1229451930721343_8350356667391422889_n.jpg?_nc_ht=instagram.fkix1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=s3bSoy-kERUAX_zIKbE&_nc_tp=24&oh=d0bc9f4cf9ce4326782c70522b71cc81&oe=5FD83ED4",
// "https://instagram.fkix1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/119043181_149651410129429_6724033558750190093_n.jpg?_nc_ht=instagram.fkix1-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=OlnpDvZiqw4AX8Fe62l&_nc_tp=24&oh=3e17837824067975c1a0b508deecf621&oe=5FD89010",
// "https://instagram.fkix1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/119070516_370613260613392_4187645291541469963_n.jpg?_nc_ht=instagram.fkix1-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=ZUWlsWHT2SYAX9ORFzN&_nc_tp=24&oh=066d1899001d9fa04c64ba29dd374ae5&oe=5FDACC94",
// "https://instagram.fkix1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/118818252_842396786165250_3716044078996898805_n.jpg?_nc_ht=instagram.fkix1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=9-doq8OEqDQAX9Z6TR4&_nc_tp=24&oh=edb0fa8224f1e8efff808a2850697eec&oe=5FD9CB15"]

const buildCards = (data) => {
// console.log(data.edge_owner_to_timeline_media.edges[0].node);
const insta_imgs = data.edge_owner_to_timeline_media.edges
const card_elements = insta_imgs.map(img => {
  return `
    <a href="https://www.instagram.com/lucy_eyelash_beauty/" target="_blank">
      <div class="card-insta" style="background-image: url('${img.node.display_url}')" alt="instagram eylash photo">
      </div>
    </a>
    `;
});
document.querySelector(".cards").innerHTML = card_elements.join('');
};

new InstagramFeed({
    'username': 'lucy_eyelash_beauty',
    'display_profile': false,
    'display_biography': false,
    'display_gallery': true,
    'display_captions': false,
    'callback': buildCards,
    'styling': true,
    'items': 8,
    'items_per_row': 4,
    'margin': 1
});
