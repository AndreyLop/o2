<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.min.css">
    <title>O2 - News Open</title>
</head>
<body>
<?php  include_once('includes/forms/callback_form.php'); ?> 

    <section class="news-open">

        <div class="page-hero">
            
            <?/* include_once('includes/preloader.php'); */?> 

            <?php include_once('includes/header.php'); ?>

            <div class="wrapper page-hero__wrapper">

                <div class="page-hero_nav">
                    <h1 class="page-hero__heading">
                        Заголовок для нової новини у два рядки тексту на одну новину
                    </h1>
                    <div class="page-hero_nav-links">
                        <a class="page-hero_nav-links-main" href="/">Головна</a>
                        <span class="page-hero_vertical-line"></span>
                        <a class="page-hero_nav-links-main" href="/">Новини</a>
                        <span class="page-hero_vertical-line"></span>
                        <a class="page-hero_nav-links-active" href="#">Заголовок для нової новини у два рядки тексту на одну новину<span class="btn_arrow"></span></a>
                    </div>
                </div>

            </div>

        </div>

        <div class="wrapper">

            <div class="news-open__images-container">
                <div class="news-open__images">
                    <div class="news-open__image news-open__image-1">
                        <img src="img/news/news_open_1.jpg" alt="News Open Image 1">
                    </div>
                    <div class="news-open__image news-open__image-2">
                        <img src="img/news/news_open_1.jpg" alt="News Open Image 1">
                    </div>
                    <div class="news-open__image news-open__image-3">
                        <img src="img/news/news_open_1.jpg" alt="News Open Image 1">
                    </div>
                </div>

                <div class="slider_arrows advantages-slider_arrows">
                    <div class="slider_arrow slider_arrow-left news-open__slider_arrow-left">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="33" viewBox="0 0 24 33">
                            <defs>
                                <path id="right" d="M1493.74 3513.05a2.42 2.42 0 0 1 0-3.45l2.9-2.87a2.47 2.47 0 0 1 3.48 0l12.16 12.06c.96.95.96 2.5 0 3.44l-12.16 12.06c-.96.95-2.52.95-3.48 0l-2.9-2.87a2.42 2.42 0 0 1 0-3.44l7.54-7.47z"/>
                                <path id="left" d="M425.26 4067.95c.96.95.96 2.5 0 3.44l-2.9 2.87c-.96.96-2.52.96-3.48 0l-9.23-9.14a2.48 2.48 0 0 1-.04-.04l-2.9-2.87a2.42 2.42 0 0 1 0-3.45l12.17-12.05a2.47 2.47 0 0 1 3.48 0l2.9 2.87c.96.95.96 2.5 0 3.44l-7.53 7.47z"/>
                            </defs>
                            <use transform="translate(-404 -4044)" xlink:href="#left"/>
                        </svg>
                    </div>
                    <div class="slider_arrow slider_arrow-right news-open__slider_arrow-right">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="33" viewBox="0 0 24 33">
                            <use transform="translate(-1491 -3504)" xlink:href="#right"/>
                        </svg>
                    </div>
                </div> <!-- slider_arrows end-->
            </div>

            <div class="news-open__text">
                <p class="news-open__paragraph">
                    Lorem Ipsum - це текст-"риба", що використовується в друкарстві та дизайні. Lorem Ipsum є, фактично, стандартною "рибою" аж з XVI сторіччя, коли невідомий друкар взяв шрифтову гранку та склав на ній підбірку зразків шрифтів. "Риба" не тільки успішно пережила п'ять століть, але й прижилася в електронному верстуванні, залишаючись по суті незмінною. Вона популяризувалась в 60-их роках минулого сторіччя завдяки виданню зразків шрифтів Letraset, які містили уривки з Lorem Ipsum, і вдруге - нещодавно завдяки програмам комп'ютерного верстування на кшталт Aldus Pagemaker, які використовували різні версії Lorem Ipsum.
                </p>
                <p class="news-open__paragraph">
                    Вже давно відомо, що читабельний зміст буде заважати зосередитись людині, яка оцінює композицію сторінки. Сенс використання Lorem Ipsum полягає в тому, що цей текст має більш-менш нормальне розподілення літер на відміну від, наприклад, "Тут іде текст. Тут іде текст." Це робить текст схожим на оповідний. Багато програм верстування та веб-дизайну використовують Lorem Ipsum як зразок і пошук за терміном "lorem ipsum" відкриє багато веб-сайтів, які знаходяться ще в зародковому стані. Різні версії Lorem Ipsum з'явились за минулі роки, деякі випадково, деякі було створено зумисно (зокрема, жартівливі).
                </p>
                <p class="news-open__paragraph">
                    На відміну від поширеної думки Lorem Ipsum не є випадковим набором літер. Він походить з уривку класичної латинської літератури 45 року до н.е., тобто має більш як 2000-річну історію. Річард Макклінток, професор латини з коледжу Хемпдін-Сидні, що у Вірджінії, вивчав одне з найменш зрозумілих латинських слів - consectetur - з уривку Lorem Ipsum, і у пошуку цього слова в класичній літературі знайшов безсумнівне джерело. Lorem Ipsum походить з розділів 1.10.32 та 1.10.33 цицеронівського "de Finibus Bonorum et Malorum" ("Про межі добра і зла"), написаного у 45 році до н.е. Цей трактат з теорії етики був дуже популярним в епоху Відродження. Перший рядок Lorem Ipsum, "Lorem ipsum dolor sit amet..." походить з одного з рядків розділу 1.10.32.
                </p>
                <div class="news-open__text-btns">
                    <a href="#" class="btn btn_lightgreen btn_choose-apartment">Обрати квартиру</a>
                    <a href="#" class="btn btn_transparent btn_back-to-news"><span class="btn_back-to-news-arrow"></span>Повернутися до новин</a>
                </div>
            </div>

            <div>
                <h3 class="news-open__more-news-heading heading">Читайте також</h3>
                <ul class="news__list">
                    <li class="news__item">
                        <div class="news__item-image news__item-image-1"></div>
                        <div class="news__item-text">
                            <h4 class="news__item-heading heading">Заголовок для нової новини у два рядки тексту на одну новину</h4>
                            <p class="news__item-paragraph">Житловий комплекс О2 residence складається з 12 будинків, у яких розташовані 800 квартир. Ми пропонуємо квартири різних розмірів та конфігурацій, а вільне планування дозволить вам створити простір для життя своєї мрії...</p>
                            <a href="#" class="btn btn_lightgreen btn_news">Читати далі<span class="btn_arrow"></span></a>
                        </div>
                    </li>
                    <li class="news__item">
                        <div class="news__item-image news__item-image-2"></div>
                        <div class="news__item-text">
                        <h4 class="news__item-heading heading">Заголовок для нової новини у два рядки тексту на одну новину</h4>
                        <p class="news__item-paragraph">Житловий комплекс О2 residence складається з 12 будинків, у яких розташовані 800 квартир. Ми пропонуємо квартири різних розмірів та конфігурацій, а вільне планування дозволить вам створити простір для життя своєї мрії...</p>

                            <a href="#" class="btn btn_lightgreen btn_news">Читати далі<span class="btn_arrow"></span></a>
                        </div>
                    </li>
                </ul>
            </div>
            
        </div>

    </section>

    <? include_once('includes/footer.php'); ?>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="js/common.min.js"></script>
    <script src="js/news.min.js"></script>
</body>
</html>