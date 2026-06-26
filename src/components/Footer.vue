<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-col footer-about">
        <img src="/images/Logo_small.svg" alt="Logo small">
        <p class="footer-about-text">СВС - надежный поставщик компьютерной техники рядом с вами 28 лет в Жуковском</p>
      </div>
      <div class="footer-col">
        <h4 class="footer-heading">Популярные категории</h4>
        <ul class="footer-links">
          <li><a href="#">Компьютерные поставки и комплектующие</a></li>
          <li><a href="#">Принтеры и МФУ</a></li>
          <li><a href="#">Видеокарты</a></li>
          <li><a href="#">Картриджи</a></li>
          <li><a href="#">Акции</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4 class="footer-heading">Услуги</h4>
        <ul class="footer-links">
          <li><a href="#">Поставки картриджей в офис</a></li>
          <li><a href="#">Пуско-наладка оборудования</a></li>
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
          <a href="#"><img src="/images/Facebook.svg" alt="Instagram"></a>
          <a href="#"><img src="/images/Whatsapp_footer.svg" alt="Instagram"></a>
          <a href="#"><img src="/images/Vk.svg" alt="Instagram"></a>
          <a href="#"><img src="/images/Man.svg" alt="Instagram"></a>
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

.footer-inner {
  display: grid;
  grid-template-columns: 200px 250px 200px 200px 55px 200px;
  gap: 50px;
}

.footer-about-text {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #4A4D4A;
}

.footer-heading {
  font-family: 'Rubik', sans-serif;
  font-weight: 700;
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
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
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
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #4A4D4A;
  text-decoration: none;
}

.footer-address {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #4A4D4A;
}

.footer-address p span {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
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

@media (max-width: 768px) {
  .footer-inner {
    grid-template-columns: 1fr;
  }
}
</style>