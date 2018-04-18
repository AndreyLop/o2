<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.min.css">
    <title>O2 - Location</title>
</head>
<body>
<?php  include_once('includes/forms/callback_form.php'); ?> 

    <section class="location">

        <div class="page-hero">
            
            <?php include_once('includes/header.php'); ?>

            <div class="wrapper page-hero__wrapper">

                <div class="page-hero_nav">
                    <h1 class="page-hero__heading">
                        Розташування
                    </h1>
                    <div class="page-hero_nav-links">
                        <a class="page-hero_nav-links-main" href="/">Головна</a>
                        <span class="page-hero_vertical-line"></span>
                        <a class="page-hero_nav-links-active" href="/">Розташування</a>
                    </div>
                </div>

            </div>

        </div>

        <div class="wrapper">

           <div class="location__about">
               <div class="location__about-image"></div>
               <div class="location__about-text">
                    <h3 class="location__heading heading">
                       О2 residence – це нова якість життя для тих, хто прагне гармонії.</h3>
                    <p class="location__paragraph">
                        Житловий комплекс О2 residence розташований серед мальовничого лісу, що всього у 20 кілометрах 
                        від межі Києва. Усі привілеї заміського життя тепер доступні у безпосередній близькості від міста!
                    </p>
               </div>
           </div>

           <div class="location__forest">
                <div class="location__forest-text">
                    <p class="location__paragraph">
                        <span>Величний сосновий ліс, казкове озеро, птахи та звірята –</span> ось ваші нові сусіди! Досягнувши максимальної 
                        близькості до природи, ми зуміли сповнити резиденцію усіма зручностями сучасного житлового комплексу.
                    </p>
                </div>
                <div class="location__forest-image">
                </div>
           </div>

           <div class="location_map-form">
               <div class="location__map" id="location__map"></div>
               <div class="address">
                   <div class="address__outer-frame address__outer-frame-1">
                       <div class="address__inner-frame">
                           <div class="address__left">
                                Відділ продажу
                           </div>
                           <div class="address__right">
                                Адреса: Київ, Бориспільська траса 252 А (метро Бориспільська)
                           </div>
                       </div>
                   </div>
                   <div class="address__outer-frame address__outer-frame-2">
                       <div class="address__inner-frame">
                           <div class="address__left">
                                Адреса ЖК О2 Residence
                           </div>
                           <div class="address__right">
                                Адреса: Київ, Бориспільська траса 252 А (метро Бориспільська)
                           </div>
                       </div>
                   </div>
                   <div class="location__form-outer-frame">
                       <div class="location__form-inner-frame">
                        <form action="">
                            <h4 class="location__form-heading">Зворотній дзвінок</h4>
                            <div class="location__form-inputs">
                                <div class="location__form-input-container">
                                    <input type="text" name="name" placeholder="Введіть ім’я:" required>
                                    <span class="location___input-requred0icon">*</span>
                                </div><!--
                                --><div class="location__form-input-container">
                                    <input type="text" name="telephone" placeholder="Введіть ім’я:" required>
                                    <span class="location___input-requred0icon">*</span>
                                </div><!--
                                --><div class="location__form-input-container">
                                    <input type="email" name="email" placeholder="Введіть e-mail:">
                                </div><!--
                                --><div class="location__form-input-container">
                                    <input type="submit" value="Надіслати">
                                </div>
                            </div>
                        </form>
                       </div>
                   </div>
               </div>
           </div>
            
        </div>

    </section>

    <? include_once('includes/footer.php'); ?>
    <?php 
    /* 
    login: oTwoApiAcc@gmail.com
    password: 8Z($qT\r8}$gpmf
    */
    ?>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBeZ7W_mpcc25BT0seg7opc8JCzonurxEc"></script>
    <script src="js/common.min.js"></script>
    <script src="js/location.min.js"></script>
</body>
</html>