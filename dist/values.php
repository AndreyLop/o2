<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.min.css">
    <title>O2 - Values</title>
</head>
<body>
<div class="page-wrapper">
    <?php include_once('includes/menu.php'); ?>
    <?php include_once('includes/forms/callback_form.php'); ?> 
    <div class="slideable-page-content">
    <?php include_once('includes/header.php'); ?>
        <section class="values">
            <div class="page-hero">
                <div class="wrapper page-hero__wrapper">
                    <div class="page-hero_nav">
                        <h1 class="page-hero__heading">
                            Цінності
                        </h1>
                        <div class="page-hero__nav-links">
                            <a class="page-hero__nav-link page-hero__nav-link_main" href="/">Головна</a>
                            <span class="page-hero_vertical-line"></span>
                            <a class="page-hero__nav-link page-hero__nav-link_active" href="#">Цінності</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="wrapper">
                <div class="values__ecology animate-me">
                    <div class="values__outer-frame">
                        <div class="values__main-text values__ecology-main-text">
                            <h3 class="values-p__heading heading">Екологічність</h3>
                            <p class="values__paragraph">Ми подбали про органічне включення резиденції у оточуючий природний ландшафт 
                            та обладнали будинки затишними еко-лаунжами із видом на ліс та озеро.</p>
                        </div>
                    </div>
                </div>
                <div class="values__solar-panels animate-me">
                    <div class="values__triangle"></div>
                    <div class="values__solar-panels-inner">
                        <p class="values__paragraph">
                            Також ми віддали перевагу використанню сонячних батарей та інших еко-технологій. 
                            А екологічно чисті продукти з власної ферми – це мрія будь-якого міського жителя!
                        </p>
                    </div>
                </div>
                <div class="values__healthy-life animate-me">
                    <div class="values__healthy-life_image">
                    </div>
                    <div class="values__healthy-life_text">
                        <h3 class="values-p__heading values__healthy-life-container heading">Здоровий спосіб життя</h3>
                        <p class="values__paragraph values__healthy-life-container">О2 residence дарує можливість насолоджуватися свіжим повітрям та щоденними прогулянками мальовничим лісом.</p>
                        <p class="values__paragraph values__healthy-life-paragraph">Також ми створюємо розвинуту інфраструктуру для спорту та активного відпочинку – як в теплу пору року, так і взимку.</p>
                    </div>
                </div>
                <div class="values__children animate-me">
                    <div class="values__outer-frame">
                        <div class="values__main-text values__children-main-text">
                            <h3 class="values-p__heading heading">Діти у центрі уваги</h3>
                            <p class="values__paragraph">Ваші діти мають почувати себе комфортно та безпечно – саме тому ми передбачили безліч розваг для них, а також обладнали усі дитячі майданчики відео-наглядом.</p>
                        </div>
                    </div>
                </div>
                <div class="values__service animate-me">
                    <div class="values__outer-frame">
                        <div class="values__main-text values__service-main-text">
                            <h3 class="values-p__heading heading">Продуманий сервіс</h3>
                            <div class="values__service-paragraphs">
                                <p class="values__paragraph">Ми впевнені, що життя за містом має бути сповнене усіма зручностями, що доступні містянам.</p>
                                <p class="values__paragraph">Усе, що потрібно, знаходиться на території резиденції – вам не потрібно залишати її, щоб придбати щось необхідне.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <? include_once('includes/footer.php'); ?>
    </div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="js/common.min.js"></script>
</body>
</html>