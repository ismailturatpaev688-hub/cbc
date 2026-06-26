<template>
  <header class="header">
    <div class="header-top">
      <div class="container header-top-inner">
        <nav class="header-nav">
          <router-link to="/">
            <img src="/images/Logo.svg" alt="Logo">
          </router-link>
          <div>
            <div class="header-navigation">
              <a href="#" class="nav-link">Сервисный центр</a>
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
        <a href="#" class="service-link">
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
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const searchQuery = ref('')

function openCallback() {
  alert('Форма обратного звонка')
}

function search() {
  if (searchQuery.value.trim()) {
    alert(`Поиск: ${searchQuery.value}`)
  }
}
</script>

<style scoped>
.header {
  background: #FFFFFF;
  width: 100%;
}

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
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #4A4D4A;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #FFAF37;
}

.header-middle {
  padding: 15px 0;
}

.header-middle-inner {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
}

.header-description p {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
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
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 30px;
  line-height: 37px;
  color: #4A4D4A;
  text-decoration: none;
}

.btn-call {
  background: #FFAF37;
  color: #FFFFFF;
  font-family: 'Rubik', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  text-transform: uppercase;
  border: none;
  padding: 7px 15px;
  cursor: pointer;
  transition: opacity 0.3s;
}

.btn-call:hover {
  opacity: 0.85;
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
  font-family: 'Rubik', sans-serif;
  font-size: 14px;
  outline: none;
}

.search-btn {
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
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
}

.contact-item a {
  color: #4A4D4A;
  text-decoration: none;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 18px;
}
.contact-item span {
  color: #4A4D4A;
  text-decoration: none;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
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
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 18px;
  text-transform: uppercase;
  padding-bottom: 5px;
  border-bottom: 1px dashed #4A4D4A;
  transition: color 0.3s;
}

.service-link:hover {
  color: #FFAF37;
}
</style>