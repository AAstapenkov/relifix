// constants

const MAX_OPEN_CARDS = 5;
const IMAGE_PATH = 'images/';
const SALE_TIME_MILLISECONDS = 1000*60*60*24;

const CARD_IMAGES = {
  CARD_1: 'sale-circle.png',
  CARD_2: 'sale-circle (1).png',
  ACE: 'sale-circle (2).png'
}

// Elements

const attemptsCountEl = $('.counter_attempts');

let openCardCount = 0;

$('.card_item').click((e) => {
  handleSelectedCard(e);
});

// Card clicked
function handleSelectedCard(e) {
  
  if (openCardCount  >= MAX_OPEN_CARDS) return; 
  const target = $(e.currentTarget);
  
  if (openCardCount <= MAX_OPEN_CARDS && !target.hasClass('showed-goods')) {
    openCardCount++;
    updateAttempts(MAX_OPEN_CARDS - openCardCount);
    updateCard(openCardCount, target);
  }

  target.addClass('showed-goods');
}

function updateAttempts(count) {
  attemptsCountEl.text(count);
}

function updateCard(count, target) {
  let imgEl = target.find('img');
  let imgFileName = '';
  switch (count) {
      case 1:
        changeImageSrc(imgEl, CARD_IMAGES.CARD_1);
        break;
      case 2:
      case 4:
        changeImageSrc(imgEl, CARD_IMAGES.ACE);
        target.addClass('ace-item');
        break;
      case 3:
        changeImageSrc(imgEl, CARD_IMAGES.CARD_2);
        break;
      case 5:
        changeImageSrc(imgEl, CARD_IMAGES.ACE);
        target.addClass('ace-item');
        $('.card_item.ace-item').addClass('glow');
        showResultWindow();
        showForm();
        break;
  }
}

function changeImageSrc(imgEl, imgFileName) {
  imgEl.attr("src", IMAGE_PATH + imgFileName);
}


function showResultWindow() {
  setTimeout(function () {
      $('.spin-result-wrapper').slideDown('slow');
  }, 2000);
}

function showForm() {
  setTimeout(function () {
      $('.card_wrapper').slideUp();
      $('.rolulete-head').slideUp();
      $('.order_block').slideDown();
      startSaleTimer();
  }, 3000);
}

function startSaleTimer() {
  // Set the date we're counting down to
  var countDownDate = new Date(SALE_TIME_MILLISECONDS + +new Date()).getTime();
  let h = document.querySelector('.bottom__time-h')
  let m = document.querySelector('.bottom__time-m')
  let s = document.querySelector('.bottom__time-s')

  // Update the count down every 1 second
  var x = setInterval(function() {
  
    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    //   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // If the count down is finished, write some text
    if (distance <= 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
      return;
    }
  
    // Display the result in the element with id="demo"
    //   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    //   + minutes + "m " + seconds + "s ";
    h.innerHTML = hours + ' <span>horas</span>';
    m.innerHTML = minutes + ' <span>minutos</span>';
    s.innerHTML = seconds + ' <span>segundos</span>';
  }, 1000);
}

/*document.getElementById('#formAbsolute').onclick = function() {
  document.getElementById('click_form').classList.add('formAbsolute_show');
}*/

$(document).ready(function(){
  $('.click_form').click(function(event) {
    $('.formAbsolute').toggleClass('formAbsolute_show');
  });
});

$('.formAbsolute .icon_close').click(function (e) {
  e.preventDefault();
  $('.formAbsolute').toggleClass('formAbsolute_show');
});





$('#formAbsolute .form-button').click(function (e) {
  e.preventDefault();
  $('#formAbsolute').submit();
  $('#formAbsolute').fadeOut();  
});

$(' .pop-up-button').click(function (e) {
    e.preventDefault();
    $('.spin-result-wrapper').fadeOut();  
});

$('.icon_close').click(function (e) {
    e.preventDefault();
    $('.spin-result-wrapper').fadeOut();
});



$('.link').on('click', function() {
  var el = $(this);
  var dest = el.attr('href'); // получаем направление
  if (dest !== undefined && dest !== '') { // проверяем существование
    $('html').animate({
        scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
      }, 3500 // скорость прокрутки
    );
  }
  return false;
});


$(document).ready(function () {
  $('.carousel-inner-product').slick({
      arrows: false,
      dots: true,
      adaptiveHeight: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
  });

  $('.carousel-inner-comments').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/ep_arrow-up-bold.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/ep_arrow-up-bold (1).png" alt=""></button>',
    arrows: true,
    adaptiveHeight: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
  

  /*$('a[href^="#"]').on('click', function(event) {
      var target = $($(this).attr('href'));
      if (target.length) {
         event.preventDefault();
         var scrollPosition = $(window).scrollTop();
         var scrollDistance = target.offset().top - scrollPosition;
         $('html, body').animate({
            scrollTop: scrollDistance
         }, 4000);
      }
   });*/
});

