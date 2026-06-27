<template>
  <footer class="footer">
    <!-- Мобильный футер -->
    <div class="mobile-footer">
      <div class="mobile-footer-top">
        <img src="/images/Logo_small.svg" alt="Logo small">
      </div>
      <div class="mobile-footer-columns">
        <div class="mobile-footer-col">
          <h4 class="mobile-footer-title">Популярные категории</h4>
          <ul class="mobile-footer-links">
            <li><a href="/catalog/computers">Компьютерные поставки и комплектующие</a></li>
            <li><a href="/catalog/office">Принтеры и МФУ</a></li>
            <li><a href="/catalog/computers">Видеокарты</a></li>
            <li><a href="/catalog/consumables">Картриджи</a></li>
            <li><a href="/catalog/sale">Акции</a></li>
          </ul>
        </div>
        <div class="mobile-footer-col">
          <h4 class="mobile-footer-title">Информация</h4>
          <ul class="mobile-footer-links">
            <li><a href="#">Доставка и оплата</a></li>
            <li><a href="#">Гарантии</a></li>
            <li><a href="#">Отзывы</a></li>
            <li><a href="#">О компании СВС</a></li>
            <li><a href="#">Политика конфиденциальности</a></li>
          </ul>
        </div>
        <div class="mobile-footer-col mobile-footer-contacts">
          <h4 class="mobile-footer-title">Контакты</h4>
          <div class="mobile-footer-phone">
            <img src="/images/Phone.svg" alt="Phone">
            <a href="tel:+74957230969">+7 495 723-09-69</a>
          </div>
          <div class="mobile-footer-email">
            <img src="/images/Letter.svg" alt="Letter">
            <a href="mailto:Svs93@mail.ru">Svs93@mail.ru</a>
          </div>
          <div class="mobile-footer-address">
            <img src="/images/Location.svg" alt="Location">
            <p>г. Жуковский<br><span>ул. Московская, 1</span></p>
          </div>
        </div>
      </div>
    </div>

    <!-- Десктопный футер -->
    <div class="container footer-inner">
      <div class="footer-col footer-about">
        <img src="/images/Logo_small.svg" alt="Logo small">
        <p class="footer-about-text">СВС - надежный поставщик компьютерной техники рядом с вами 28 лет в Жуковском</p>
      </div>
      <div class="footer-col">
        <h4 class="footer-heading">Популярные категории</h4>
        <ul class="footer-links">
          <li><a href="/catalog/computers">Компьютерные поставки и комплектующие</a></li>
          <li><a href="/catalog/office">Принтеры и МФУ</a></li>
          <li><a href="/catalog/computers">Видеокарты</a></li>
          <li><a href="/catalog/consumables">Картриджи</a></li>
          <li><a href="/catalog/sale">Акции</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4 class="footer-heading">Услуги</h4>
        <ul class="footer-links">
          <li><a href="#">Поставки картриджей в офис</a></li>
          <li><a href="/commissioning">Пуско-наладка оборудования</a></li>
          <li><a href="#">Аудит парка печатной техники</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4 class="footer-heading">Информация</h4>
        <ul class="footer-links">
          <li><a href="#">Доставка и оплата</a></li>
          <li><a href="#">Гарантии</a></li>
          <li><a href="#">Отзывы</a></li>
          <li><a href="#">О компании СВС</a></li>
          <li><a href="#">Политика конфиденциальности</a></li>
        </ul>
      </div>
      <div class="footer-col footer-social">
        <div class="social-icons">
          <a href="#"><img src="/images/Instagram.svg" alt="Instagram"></a>
          <a href="#"><img src="/images/Facebook.svg" alt="Facebook"></a>
          <a href="#"><img src="/images/Whatsapp_footer.svg" alt="Whatsapp"></a>
          <a href="#"><img src="/images/Vk.svg" alt="Vk"></a>
          <a href="#"><img src="/images/Man.svg" alt="Man"></a>
        </div>
      </div>
      <div class="footer-col footer-contacts-col">
        <h4 class="footer-heading">Контакты</h4>
        <div class="footer-phone">
          <img src="/images/Phone.svg" alt="Phone" class="phone-icon">
          <a href="tel:+74957230969">+7 495 723-09-69</a>
        </div>
        <div class="footer-email">
          <img src="/images/Letter.svg" alt="Letter">
          <a href="mailto:Svs93@mail.ru">Svs93@mail.ru</a>
        </div>
        <div class="footer-address">
          <img src="/images/Location.svg" alt="Location">
          <p>г. Жуковский<br/><span>ул. Московская, 1</span></p>
        </div>
        <div class="footer-payments">
          <img src="/images/Visa_MasterCard.svg" alt="Visa_MasterCard">
          <span class="payment-mastercard"></span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background: #F0F0FF;
  padding: 50px 0;
  margin-top: 60px;
}

/* Мобильный футер */
.mobile-footer {
  display: none;
  background: #F0F0FF;
  padding: 20px 10px;
}

.mobile-footer-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.mobile-footer-top img {

}

.burger-btn {
  width: 42px;
  height: 37px;
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 8px;
  cursor: pointer;
}

.burger-btn span {
  display: block;
  width: 100%;
  height: 3px;
  background: #FFAF37;
  border-radius: 6px;
}

.mobile-footer-columns {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.mobile-footer-col {
  padding: 15px;
  border-radius: 6px;
}

.mobile-footer-title {
  font-family: 'Rubik-Medium', sans-serif;
  font-size: 16px;
  line-height: 123.4%;
  text-transform: uppercase;
  color: #4A4D4A;
  margin: 0 0 15px 0;
}

.mobile-footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mobile-footer-links li {
  margin-bottom: 10px;
}

.mobile-footer-links a {
  font-family: 'Rubik-Medium', sans-serif;
  font-size: 14px;
  line-height: 123.4%;
  color: #4A4D4A;
  text-decoration: none;
}

.mobile-footer-contacts {
  background: transparent;
  padding: 0;
}

.mobile-footer-phone,
.mobile-footer-email,
.mobile-footer-address {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  font-family: 'Rubik-Medium', sans-serif;
  font-size: 14px;
  color: #4A4D4A;
}

.mobile-footer-phone img,
.mobile-footer-email img,
.mobile-footer-address img {
  width: 30px;
  height: 30px;
}

.mobile-footer-phone a,
.mobile-footer-email a {
  color: #4A4D4A;
  text-decoration: none;
  font-family: 'Montserrat-Medium', sans-serif;
  font-size: 14px;
}

.mobile-footer-address p {
  margin: 0;
  font-family: 'Rubik-Medium', sans-serif;
  font-size: 14px;
  line-height: 123.4%;
}

.mobile-footer-address p span {
  font-size: 14px;
}

/* Десктопный футер */
.footer-inner {
  display: grid;
  grid-template-columns: 200px 250px 200px 200px 55px 200px;
  gap: 50px;
}

.footer-about-text {
  font-family: 'Rubik-Medium', sans-serif;
  font-size: 18px;
  line-height: 21px;
  color: #4A4D4A;
}

.footer-heading {
  font-family: 'Rubik-Bold', sans-serif;
  font-size: 18px;
  line-height: 21px;
  text-transform: uppercase;
  color: #4A4D4A;
  margin-bottom: 20px;
}

.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  font-family: 'Rubik-Medium', sans-serif;
  font-size: 14px;
  line-height: 17px;
  color: #4A4D4A;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #FFAF37;
}

.social-icons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.footer-phone, .footer-email, .footer-address {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.footer-phone a, .footer-email a {
  font-family: 'Montserrat-Bold', sans-serif;
  font-size: 18px;
  color: #4A4D4A;
  text-decoration: none;
}

.footer-address {
  font-family: 'Montserrat-Bold', sans-serif;
  font-size: 20px;
  line-height: 30px;
  color: #4A4D4A;
}

.footer-address p span {
  font-family: 'Montserrat-Medium', sans-serif;
  font-size: 16px;
  line-height: 30px;
  color: #4A4D4A;
}

.footer-payments {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.payment-visa, .payment-mastercard {
  width: 60px;
  height: 30px;
  background: #001569;
  display: inline-block;
}

/* Адаптивная вёрстка */
@media (max-width: 360px) {
  .footer-inner {
    display: none;
  }

  .mobile-footer {
    display: block;
  }

  .footer {
    padding: 20px 0;
    margin-top: 30px;
  }
}
</style>