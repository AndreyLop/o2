<section class="contacts main-page">
    <div class="wrapper contacts__wrapper">
        <div class="contacts__tabs">
            <div class="contacts__tab contacts__tab_1" data-tab="our-contacts">Наші контактні дані</div>
            <div class="contacts__tab contacts__tab_active contacts__tab_2" data-tab="get-callback">Замовити дзвінок</div>
            <div class="contacts__tab contacts__tab_3" data-tab="contacts-callback-form">Форма зворотного зв′язку</div>
        </div>
    
        <div id="our-contacts" class="contacts__tab-content contacts__tab-content__hidden">
            <h3 class="heading contacts__heading">
                Наші контактні дані
            </h3>
        </div>
        
        <div id="get-callback" class="contacts__tab-content contacts__tab-content-2">
            <h3 class="heading contacts__heading">
                Замовити телефонний дзвінок
            </h3>
            <div class="contacts__tab-content-form">
                <form id="contacts-form__callback-form">
                    <div class="contacts-form__callback-input contacts-form__callback-input_name">
                        <input type="text" name="name" placeholder="Ваше ім'я:">
                        <div class="validation-error validation-error_required" style="display: none">Данне поле обов'язкове для заповнення</div>
                    </div>
                    <div class="contacts-form__callback-input contacts-form__callback-input_phone">
                        <input type="text" name="phone" placeholder="Ваш телефон:">
                        <div class="validation-error validation-error_required" style="display: none">Данне поле обов'язкове для заповнення</div>
                        <div class="validation-error validation-error_phone-format" style="display: none">Невірний формат телефону</div>
                    </div>
                    <div class="contacts-form__callback-input contacts-form__callback-input_message">
                        <input type="text" name="question" placeholder="Ваше питання:">
                    </div>
                    <input type="submit" value="Відправити" class="contacts__tab-submit-btn">
                </form>
            </div>
        </div>

        <div id="contacts-callback-form" class="contacts__tab-content contacts__tab-content__hidden">
            <h3 class="heading contacts__heading">
                Форма зворотного зв′язку
            </h3>
            <div class="contacts__tab-content-form">
                <form  id="contacts-form__email-form">
                    <input type="text" name="name" placeholder="Ваше ім'я:">
                    <input type="text" name="email" placeholder="Ваш e-mail:">
                    <input type="text" name="question" placeholder="Ваше питання:">
                    <input type="submit" value="Відправити" class="contacts__tab-submit-btn">
                </form>
            </div>
        </div>
    
    </div>
</section>