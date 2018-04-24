<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.min.css">
    <title>O2 - Day-In-O2</title>
</head>
<body>
<div class="page-wrapper">
  <?php include_once('includes/menu.php'); ?>
  <?php include_once('includes/forms/callback_form.php'); ?> 
  <div class="slideable-page-content">
  <?php include_once('includes/header.php'); ?>
    <section class="day-in-o2">
      <div class="progress-bar__wrapper">
        <div class="progress-bar">
          <div class="day-in-o2__icon day-in-o2__icon_sun">
            <img src="img/day-in-o2/sun.svg" alt="Sun Icon">
          </div>
          <div class="slide-bar" data-slide="0">
            <div class="slide-circle"></div>
            <div class="slide-time slide-time-first">08:00</div>
          </div>
          <div class="slide-bar" data-slide="1">
            <div class="slide-line"></div>
            <div class="slide-circle"></div>
            <div class="slide-time">08:30</div>
          </div>
          <div class="slide-bar" data-slide="2">
            <div class="slide-line"></div>
            <div class="slide-circle"></div>
            <div class="slide-time">09:00</div>
          </div>
          <div class="slide-bar" data-slide="3">
            <div class="slide-line"></div>
            <div class="slide-circle"></div>
            <div class="slide-time">09:30</div>
          </div>
          <div class="slide-bar" data-slide="4">
            <div class="slide-line"></div>
            <div class="slide-circle"></div>
            <div class="slide-time">11:00</div>
          </div>
          <div class="slide-bar" data-slide="5">
            <div class="slide-line"></div>
            <div class="slide-circle"></div>
            <div class="slide-time">13:00</div>
          </div>
          <div class="slide-bar" data-slide="6">
            <div class="slide-line"></div>
            <div class="slide-circle"></div>
            <div class="slide-time">15:00</div>
          </div>
          <div class="slide-bar" data-slide="7">
            <div class="slide-line"></div>
            <div class="slide-circle"></div>
            <div class="slide-time">17:00</div>
          </div>
          <div class="slide-bar" data-slide="8">
            <div class="slide-line"></div>
            <div class="slide-circle"></div>
            <div class="slide-time">18:00</div>
          </div>
          <div class="slide-bar" data-slide="9">
            <div class="slide-line"></div>
            <div class="slide-circle"></div>
            <div class="slide-time">19:00</div>
          </div>
          <div class="slide-bar" data-slide="10">
            <div class="slide-line"></div>
            <div class="slide-circle"></div>
            <div class="slide-time">20:00</div>
          </div>
          <div class="slide-bar" data-slide="11">
            <div class="slide-line"></div>
            <div class="slide-circle"></div>
            <div class="slide-time">22:00</div>
          </div>
          <div class="day-in-o2__icon day-in-o2__icon_moon">
            <img src="img/day-in-o2/moon.svg" alt="Moon Icon">
          </div>
        </div>
      </div> 
      <div class="di2__slider">
        <div class="di2__slider-item di2__slider-item-1">
          <video onloadeddata="this.play();" muted loop class="di2__slider-item_video">
            <source src="video/nature_video.mp4" type="video/mp4" />
            <source src="video/nature_video.webm" type="video/webm" />
          </video>
          <div class="di2__slider-msg-wrapper">
            <div class="di2__slider-msg">
              <div class="di2__slider-msg_time">08:00</div>
              <div class="di2__slider-msg_text">Прокинутися під співи птахів</div>
            </div>
          </div>
        </div>
        <div class="di2__slider-item di2__slider-item-2">
          <video muted loop class="di2__slider-item_video">
            <source src="video/restaraunt_video.mp4" type="video/mp4">
          </video>
          <div class="di2__slider-msg-wrapper">
            <div class="di2__slider-msg">
                <div class="di2__slider-msg_time">08:30</div>
                <div class="di2__slider-msg_text">Поснідати із видом на ліс</div>
              </div>
            </div>
          </div>
        <div class="di2__slider-item di2__slider-item-3">
          <video muted loop class="di2__slider-item_video">
            <source src="video/nature_video.mp4" type="video/mp4">
          </video>
          <div class="di2__slider-msg-wrapper">  
            <div class="di2__slider-msg">
                <div class="di2__slider-msg_time">09:00</div>
                <div class="di2__slider-msg_text">Відвести дітей до дитячого садку або школи</div>
              </div>
            </div>
          </div>
        <div class="di2__slider-item di2__slider-item-4">
          <video muted loop class="di2__slider-item_video">
            <source src="video/restaraunt_video.mp4" type="video/mp4">
          </video>
          <div class="di2__slider-msg-wrapper">
            <div class="di2__slider-msg">
              <div class="di2__slider-msg_time">09:30</div>
              <div class="di2__slider-msg_text">Пробіжка навколо озера</div>
            </div>
          </div>
        </div>
        <div class="di2__slider-item di2__slider-item-5">
          <video muted loop class="di2__slider-item_video">
            <source src="video/nature_video.mp4" type="video/mp4">
          </video>
          <div class="di2__slider-msg-wrapper">
            <div class="di2__slider-msg">
                <div class="di2__slider-msg_time">11:00</div>
                <div class="di2__slider-msg_text">Пробіжка навколо озера</div>
              </div>
          </div>
        </div>
        <div class="di2__slider-item di2__slider-item-6">
          <video muted loop class="di2__slider-item_video">
            <source src="video/restaraunt_video.mp4" type="video/mp4">
          </video>
          <div class="di2__slider-msg-wrapper">
            <div class="di2__slider-msg">
                <div class="di2__slider-msg_time">13:00</div>
                <div class="di2__slider-msg_text">Влаштувати пікнік на природі</div>
              </div>
          </div>
        </div>
        <div class="di2__slider-item di2__slider-item-7">
          <video muted loop class="di2__slider-item_video">
            <source src="video/nature_video.mp4" type="video/mp4">
          </video>
          <div class="di2__slider-msg-wrapper">
            <div class="di2__slider-msg">
              <div class="di2__slider-msg_time">15:00</div>
              <div class="di2__slider-msg_text">Прогулятися лісом</div>
            </div>
          </div>
        </div>
        <div class="di2__slider-item di2__slider-item-8">
          <video muted loop class="di2__slider-item_video">
            <source src="video/restaraunt_video.mp4" type="video/mp4">
          </video>
          <div class="di2__slider-msg-wrapper">
            <div class="di2__slider-msg">
              <div class="di2__slider-msg_time">17:00</div>
              <div class="di2__slider-msg_text">Сходити за покупками до магазину у сусідньому будинку</div>
            </div>
          </div>
        </div>
        <div class="di2__slider-item di2__slider-item-9">
          <video muted loop class="di2__slider-item_video">
            <source src="video/nature_video.mp4" type="video/mp4">
          </video>
          <div class="di2__slider-msg-wrapper">
            <div class="di2__slider-msg">
                <div class="di2__slider-msg_time">18:00</div>
                <div class="di2__slider-msg_text">Покататися на велосипедах із дітьми</div>
              </div>
          </div>
        </div>
        <div class="di2__slider-item di2__slider-item-10">
          <video muted loop class="di2__slider-item_video">
            <source src="video/restaraunt_video.mp4" type="video/mp4">
          </video>
          <div class="di2__slider-msg-wrapper">
            <div class="di2__slider-msg">
                <div class="di2__slider-msg_time">19:00</div>
                <div class="di2__slider-msg_text">Приготувати вечерю з власних еко-продуктів</div>
              </div>
          </div>
        </div>
        <div class="di2__slider-item di2__slider-item-11">
          <video muted loop class="di2__slider-item_video">
            <source src="video/nature_video.mp4" type="video/mp4">
          </video>
          <div class="di2__slider-msg-wrapper">
              <div class="di2__slider-msg">
                <div class="di2__slider-msg_time">20:00</div>
                <div class="di2__slider-msg_text">Сімейна вечеря</div>
              </div>
          </div>
        </div>
        <div class="di2__slider-item di2__slider-item-12">
          <video muted loop class="di2__slider-item_video">
            <source src="video/restaraunt_video.mp4" type="video/mp4">
          </video>
          <div class="di2__slider-msg-wrapper">
            <div class="di2__slider-msg">
              <div class="di2__slider-msg_time">22:00</div>
              <div class="di2__slider-msg_text">Пробіжка перед сном</div>
            </div>
          </div>
        </div>
      </div>
      </section>
      <?/* include_once('includes/footer.php'); */?>
  </div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="js/common.min.js"></script>
<script src="js/day-in-o2.min.js"></script>
</body>
</html>