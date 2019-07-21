
function makeMarquee(){

const title = 'Amsterdam London Tokyo Paris Tel Aviv Kyoto Taipei Berlin Capetown';

// join allows to merge the arrays
const marqueeText = new Array(30).fill(title).join(' — ');

let marquee = document.querySelectorAll('.marquee span');

    for(i = 0; i<marquee.length; i++){
    marquee[i].innerHTML = marqueeText;
    }

}

makeMarquee();
