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
const insta_imgs = ["https://instagram.fkix1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c2.0.1436.1436a/s640x640/117811948_642753693317580_470367802368103406_n.jpg?_nc_ht=instagram.fkix1-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=gxMKq8UKYFsAX_PRm1r&oh=f152d169224b2c1ac7b779a6ef5375dc&oe=5F6727EC","https://instagram.fkix1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c176.0.1088.1088a/s640x640/109524543_2892655947527086_1404306766338441933_n.jpg?_nc_ht=instagram.fkix1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=KUpTdttUniIAX-fhvWx&oh=3936c63681129fc65ff47bd95773fd6d&oe=5F645E8D","https://instagram.fkix1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c119.0.1202.1202a/s640x640/109203968_732221634246036_1738164760199903519_n.jpg?_nc_ht=instagram.fkix1-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=2FleRNud0PMAX85wk-f&oh=df9cab3bfbd170e251e95bb9f54c4683&oe=5F64805B","https://instagram.fkix1-2.fna.fbcdn.net/v/t51.2885-15/e35/c221.0.637.637a/107523454_277503960182260_5069706966527400089_n.jpg?_nc_ht=instagram.fkix1-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=6FgbEwmebYgAX9OfuHz&oh=9533cd08aef64f7e88fe4718a4ef17ba&oe=5F671BEA","https://instagram.fkix1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/107570602_3300488116675554_4327356205445973165_n.jpg?_nc_ht=instagram.fkix1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=rvmcnxra6sEAX-woUls&oh=fd5dae1476a374e0073457d0a02eba28&oe=5F659442","https://instagram.fkix1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c32.0.1015.1015a/s640x640/103825640_114286533456262_3371525434352873038_n.jpg?_nc_ht=instagram.fkix1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=F6leZQtYi8gAX8jkT2a&oh=00a3099e0cba7a92a825647f6598580e&oe=5F647DD1","https://instagram.fkix1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c114.0.852.852a/s640x640/103866338_112753036971651_5950568503019145408_n.jpg?_nc_ht=instagram.fkix1-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=pLl2Cy9rGGwAX8jHTq8&oh=f9ba28d0d7c60a7bdf429f3dcc4a4772&oe=5F65E96E","https://instagram.fkix1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c135.0.810.810a/s640x640/104009624_588353768726520_27268374084215893_n.jpg?_nc_ht=instagram.fkix1-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=pXE_GwmmV_UAX8Lsrs8&oh=ace947d52bcf0fb41e7902341864f1f0&oe=5F646A33","https://instagram.fkix1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.0.1439.1439a/s640x640/82988119_249096733047044_1579772294484735425_n.jpg?_nc_ht=instagram.fkix1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=5HB8PZfQdl8AX8YFECv&oh=42d9a8ca955320e5654e97bffda369f8&oe=5F650E01","https://instagram.fkix1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/103376965_805097076695532_670611553568280984_n.jpg?_nc_ht=instagram.fkix1-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=H75DO9HfeH4AX-yi9Fc&oh=e0b90c3cd3289a9dc3d4bace10c69c2b&oe=5F64CF9A","https://instagram.fkix1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/101952134_290421435448073_320314558836767457_n.jpg?_nc_ht=instagram.fkix1-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=0c2Y5UD-zf0AX_PX-t7&oh=533c11409c34ebbd8e7e7718ff0ab852&oe=5F65662F","https://instagram.fkix1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/100645719_680877552477192_7778226668354083495_n.jpg?_nc_ht=instagram.fkix1-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=YZ-QfiDrwLMAX9m7ooS&oh=8c038c89776b98d49a154b8d9f897722&oe=5F658710"];
const card_elements = insta_imgs.map(img => {
  return `
    <a href="https://www.instagram.com/lucy_eyelash_beauty/">
      <div class="card-insta" style="background-image: url('${img}')" alt="instagram eylash photo">
      </div>
    </a>
    `;
});
document.querySelector(".cards").innerHTML = card_elements.join('');
