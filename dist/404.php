<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.min.css">
    <title>O2 - Page Not Found</title>
</head>
<body>
<?php  include_once('includes/forms/callback_form.php'); ?> 

    <section class="not-found">

        <div class="page-hero">
            
            <?/* include_once('includes/preloader.php'); */?> 

            <?php include_once('includes/header.php'); ?>

            <div class="wrapper">

                <div class="not-found-container">
                    <div class="not-found__image">
                        <img src="img/404/404.png" alt="House Image">
                    </div>
                    <div class="not-found__msg">
                        Вибачте, сторінку не знайдено
                    </div>
                    <div class="not-found__btns">
                        <a class="not-found-btn not-found-btn__main" href="/">На головну</a>
                        <a class="not-found-btn not-found-btn__back" href="#">Повернутися на попередню сторінку</a>
                    </div>
                </div>
                
            </div>

        </div>

    </section>

    <? include_once('includes/footer.php'); ?>
    <script src="js/common.min.js"></script>
</body>
</html>