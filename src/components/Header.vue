<template>
  <header class="header">
    <!-- Мобильный хедер -->
    <div class="mobile-header">
      <div class="mobile-header-top">
        <div class="mobile-logo">
          <router-link to="/">
            <img src="/images/Logo.svg" alt="Logo">
          </router-link>
        </div>
        <div class="mobile-phone">
          <img src="/images/Phone.svg" alt="Phone" class="phone-icon">
          <a href="tel:+74957230969">+7 495 723-09-69</a>
        </div>
      </div>
      <div class="mobile-header-middle">
        <button class="burger-btn" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <button class="btn-call" @click="openCallback">ЗАКАЗАТЬ ЗВОНОК</button>
      </div>
      <div class="mobile-header-address">
        <img src="/images/Location.svg" alt="Location">
        <span>г. Жуковский<br>ул. Московская, 1</span>
        <div class="mobile-header-actions">
          <a href="#" class="whatsapp-icon">
            <img src="/images/Whatsapp.svg" alt="WhatsApp">
          </a>
          <a href="#" class="cart-icon">
            <img src="/images/Cart_white.svg" alt="Cart">
            <span class="cart-badge">3</span>
          </a>
        </div>
      </div>
      <div class="mobile-search">
        <input type="text" v-model="searchQuery" placeholder="Поиск" @keyup.enter="search">
        <button class="search-btn" @click="search">
          <img src="/images/Search-icon.svg" alt="Search">
        </button>
      </div>
    </div>

    <!-- Десктопный хедер -->
    <div class="header-top">
      <div class="container header-top-inner">
        <nav class="header-nav">
          <router-link to="/">
            <img src="/images/Logo.svg" alt="Logo">
          </router-link>
          <div>
            <div class="header-navigation">
              <a href="/service" class="nav-link">Сервисный центр</a>
              <a href="#" class="nav-link">Доставка и оплата</a>
              <a href="#" class="nav-link">Отзывы</a>
              <a href="#" class="nav-link">Личный кабинет</a>
              <a href="#" class="nav-link">О компании</a>
              <a href="#" class="nav-link">Контакты</a>
            </div>
            <div class="header-middle-inner">
              <div class="header-description">
                <p>СВС - надежный поставщик компьютерной техники рядом с вами. 28 лет в Жуковском</p>
              </div>
              <div class="header-phone">
                <img src="/images/Phone.svg" alt="Phone" class="phone-icon">
                <a href="tel:+74957230969" class="phone-number">+7 495 723-09-69</a>
              </div>
              <button class="btn-call" @click="openCallback">ЗАКАЗАТЬ ЗВОНОК</button>
            </div>
          </div>
        </nav>
        <div class="header-bottom">
          <div class="header-bottom-inner">
            <div class="header-search">
              <input type="text" v-model="searchQuery" placeholder="Поиск" class="search-input" @keyup.enter="search" />
              <img src="/images/Search-icon.svg" alt="Search" class="search-btn" @click="search">
            </div>
            <div class="header-contacts-row">
              <div class="contact-item">
                <img src="/images/Whatsapp.svg" alt="Whatsapp">
                <p>Напишите нам <br>в Whats APP</p>
              </div>
              <div class="contact-item">
                <img src="/images/Letter.svg" alt="Letter">
                <a href="mailto:mail@svs93.ru">mail@svs93.ru</a>
              </div>
              <div class="contact-item">
                <img src="/images/Location.svg" alt="Location">
                <p>
                  <span>г. Жуковский</span>
                  <br/>
                  ул. Московская, 1
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-services">
      <div class="container header-services-inner">
        <a href="#" class="service-link">
          <p>Комплексная поставка</p>
        </a>
        <a href="/commissioning" class="service-link">
          <p>Пуско-наладка IT-оборудования</p>
        </a>
        <a href="#" class="service-link">
          <p>Аудит и оптимизация парка печати</p>
        </a>
        <a href="#" class="service-link">
          <p>Тендеры</p>
        </a>
      </div>
    </div>

    <!-- Мобильное меню -->
    <div class="mobile-menu" :class="{ active: isMenuOpen }" @click="closeMenu">
      <div class="mobile-menu-content" @click.stop>
        <div class="mobile-menu-section">
          <h4 class="mobile-menu-title">Информация</h4>
          <div class="mobile-menu-divider"></div>
          <a href="/service" class="mobile-menu-link">Сервисный центр</a>
          <a href="#" class="mobile-menu-link">Доставка и оплата</a>
          <a href="#" class="mobile-menu-link">Отзывы</a>
          <a href="#" class="mobile-menu-link">Личный кабинет</a>
          <a href="#" class="mobile-menu-link">О компании</a>
          <a href="#" class="mobile-menu-link">Контакты</a>
        </div>
        <div class="mobile-menu-section">
          <h4 class="mobile-menu-title">Услуги</h4>
          <div class="mobile-menu-divider"></div>
          <a href="#" class="mobile-menu-link">Комплексная поставка</a>
          <a href="/commissioning" class="mobile-menu-link">Пуско-наладка</a>
          <a href="#" class="mobile-menu-link">Аудит парка печати</a>
          <a href="#" class="mobile-menu-link">Тендеры</a>
        </div>
        <div class="mobile-menu-section">
          <h4 class="mobile-menu-title">Контакты</h4>
          <div class="mobile-menu-divider"></div>
          <div class="mobile-menu-contact">
            <img src="/images/Letter.svg" alt="Letter">
            <a href="mailto:mail@svs93.ru">mail@svs93.ru</a>
          </div>
          <div class="mobile-menu-contact">
            <img src="/images/Phone.svg" alt="Phone">
            <a href="tel:+74957230969">+7 495 723-09-69</a>
          </div>
          <div class="mobile-menu-contact">
            <img src="/images/Location.svg" alt="Location">
            <span>г. Жуковский<br>ул. Московская, 1</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const searchQuery = ref('')
const isMenuOpen = ref(false)

function openCallback() {
  alert('Форма обратного звонка')
}

function search() {
  if (searchQuery.value.trim()) {
    alert(`Поиск: ${searchQuery.value}`)
  }
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<style scoped>
.header {
  background: #FFFFFF;
  width: 100%;
}

/* Мобильный хедер */
.mobile-header {
  display: none;
  background: #FFFFFF;
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.mobile-header-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.mobile-logo img {
  width: 72px;
  height: 33px;
}

.mobile-phone {
  display: flex;
  align-items: center;
  gap: 5px;
}

.mobile-phone .phone-icon {
  width: 20px;
  height: 20px;
}

.mobile-phone a {
  font-family: 'Rubik-Medium', sans-serif;
  font-size: 18px;
  line-height: 123.4%;
  color: #4A4D4A;
  text-decoration: none;
}

.mobile-header-middle {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
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

.btn-call {
  flex: 1;
  background: #FFAF37;
  color: #FFFFFF;
  font-family: 'Rubik-Medium', sans-serif;
  font-size: 16px;
  line-height: 123.4%;
  text-transform: uppercase;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  transition: opacity 0.3s;
}

.btn-call:hover {
  opacity: 0.85;
}

.mobile-header-address {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
  font-family: 'Rubik-Medium', sans-serif;
  font-size: 14px;
  line-height: 123.4%;
  color: #4A4D4A;
}

.mobile-header-address img {
  width: 20px;
  height: 20px;
}

.mobile-header-actions {
  display: flex;
  gap: 10px;
  margin-left: auto;
}

.whatsapp-icon img {
  width: 30px;
  height: 30px;
}

.cart-icon {
  position: relative;
}

.cart-icon img {
  width: 30px;
  height: 30px;
}

.cart-badge {
  position: absolute;
  top: -5px;
  right: -8px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid #1F347B;
  background: #FFFFFF;
  font-family: 'Montserrat-Medium', sans-serif;
  font-size: 10px;
  color: #4A4D4A;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-search {
  display: flex;
  align-items: center;
  border: 0.5px solid #4A4D4A;
  height: 42px;
  padding: 0 10px;
}

.mobile-search input {
  flex: 1;
  border: none;
  outline: none;
  font-family: 'Rubik-Regular', sans-serif;
  font-size: 14px;
  color: #4A4D4A;
  background: transparent;
}

.mobile-search .search-btn {
  background: none;
  border: none;
  cursor: pointer;
}

.mobile-search .search-btn img {
  width: 20px;
  height: 20px;
}

/* Мобильное меню */
.mobile-menu {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
}

.mobile-menu.active {
  opacity: 1;
  visibility: visible;
}

.mobile-menu-content {
  width: 200px;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  padding: 20px;
  overflow-y: auto;
}

.mobile-menu-section {
  margin-bottom: 20px;
}

.mobile-menu-title {
  font-family: 'Rubik-Medium', sans-serif;
  font-size: 12px;
  line-height: 123.4%;
  color: #FFFFFF;
  margin: 0 0 10px 0;
}

.mobile-menu-divider {
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.3);
  margin-bottom: 10px;
}

.mobile-menu-link {
  display: block;
  font-family: 'Rubik-Medium', sans-serif;
  font-size: 14px;
  line-height: 123.4%;
  color: #FFFFFF;
  text-decoration: none;
  margin-bottom: 10px;
}

.mobile-menu-contact {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
  font-family: 'Rubik-Medium', sans-serif;
  font-size: 14px;
  color: #FFFFFF;
}

.mobile-menu-contact img {
  width: 20px;
  height: 20px;
}

.mobile-menu-contact a {
  color: #FFFFFF;
  text-decoration: none;
}

/* Десктопный хедер */
.header-top {
  padding: 15px 0;
  border-bottom: 1px solid #eee;
}

.header-top-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

.header-nav {
  display: flex;
  gap: 74px;
  flex-direction: row;
  justify-content: space-between;
}

.header-nav div {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  flex-direction: row;
}

.header-navigation {
  display: flex;
  text-align: center;
}

.header-navigation a {
  height: 35px;
  border-bottom: 1px dashed #4A4D4A;
  margin-top: 20px;
}

.nav-link {
  font-family: 'Rubik-Medium', sans-serif;
  font-size: 20px;
  line-height: 24px;
  color: #4A4D4A;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #FFAF37;
}

.header-middle-inner {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
}

.header-description p {
  font-family: 'Rubik-Medium', sans-serif;
  font-size: 18px;
  line-height: 21px;
  color: #4A4D4A;
  max-width: 400px;
}

.header-phone {
  display: flex;
  align-items: center;
}

.phone-icon {
  width: 30px;
  height: 30px;
  display: inline-block;
  margin-right: -20px;
}

.phone-number {
  font-family: 'Montserrat-Bold', sans-serif;
  font-size: 30px;
  line-height: 37px;
  color: #4A4D4A;
  text-decoration: none;
}

.header-bottom {
  padding: 10px 0;
}

.header-bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 74px;
}

.header-search {
  position: relative;
  width: 800px;
}

.search-input {
  width: 100%;
  padding: 12px 50px 12px 15px;
  border: 1px solid #4A4D4A;
  font-family: 'Rubik-Regular', sans-serif;
  font-size: 14px;
  outline: none;
}

.header-search .search-btn {
  position: absolute;
  right: 20px;
  top: 10px;
  bottom: 10px;
  width: 20px;
  border: none;
  cursor: pointer;
}

.header-contacts-row {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  align-items: center;
}

.contact-item {
  display: flex;
  align-items: center;
  text-align: center;
  gap: 8px;
  font-size: 14px;
  color: #4A4D4A;
  text-decoration: none;
  font-family: 'Rubik-Medium', sans-serif;
}

.contact-item a {
  color: #4A4D4A;
  text-decoration: none;
  font-family: 'Rubik-Medium', sans-serif;
  font-size: 18px;
}

.contact-item span {
  color: #4A4D4A;
  text-decoration: none;
  font-family: 'Rubik-Medium', sans-serif;
  font-size: 18px;
}

.header-services {
  background: #F0F0FF;
  padding: 15px 0;
}

.header-services-inner {
  display: flex;
  gap: 114px;
}

.service-link {
  text-decoration: none;
  color: #4A4D4A;
  font-family: 'Rubik-Medium', sans-serif;
  font-size: 18px;
  text-transform: uppercase;
  padding-bottom: 5px;
  border-bottom: 1px dashed #4A4D4A;
  transition: color 0.3s;
}

.service-link:hover {
  color: #FFAF37;
}

/* Адаптивная вёрстка */
@media (max-width: 360px) {
  .header-top,
  .header-services {
    display: none;
  }

  .mobile-header {
    display: block;
  }

  .mobile-menu {
    display: block;
  }
}
</style>