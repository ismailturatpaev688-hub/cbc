<template>
  <main class="main-content">
    <!-- Меню каталога -->
    <section class="hero-section">
      <div class="container hero-inner">
        <div class="hero-catalog">
          <div class="catalog-header">
            <h2 class="catalog-title">Каталог</h2>
          </div>
          <ul class="catalog-menu-list">
            <li
                v-for="category in categories"
                :key="category.id"
                class="catalog-menu-item"
                :class="{ active: currentCategory?.id === category.id }">
              <router-link :to="category.link" class="catalog-menu-link">
                <img :src="category.icon" :alt="category.name" class="menu-icon-img">
                <span class="menu-text">{{ category.name }}</span>
                <span class="menu-arrow">›</span>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="hero-text">
          <h1 class="hero-title">
            Компьютерный магазин <span class="accent-text">СВС в Жуковском</span><br/>
            Поставки компьютерной техники, сервис-центр и услуги для компаний по IT-интеграции
          </h1>
        </div>
        <div class="hero-banner">
          <div class="banner-image-placeholder"></div>
          <div class="banner-overlay">
            <p class="banner-text">Поставки компьютерной <br>
              техники для офисов <br>
              под "ключ"</p>
            <button class="btn-primary banner-btn">СМОТРЕТЬ ПРЕДЛОЖЕНИЕ</button>
          </div>
          <div class="banner-dots">
            <span class="dot active"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
          <button class="banner-arrow banner-arrow-left"><img src="/images/Arrow-left.jpg" alt="Arrow"></button>
          <button class="banner-arrow banner-arrow-right"><img src="/images/Arrow-right.jpg" alt="Arrow"></button>
        </div>
      </div>
    </section>

    <!-- Секция преимущества -->
    <section class="benefits-section">
      <div class="container benefits-inner">
        <div class="benefit-card benefit-main">
          <h2 class="benefit-main-title">Работать с СВС выгодно и надежно</h2>
        </div>
        <div class="benefit-card" v-for="benefit in benefits.slice(0, 1)" :key="benefit.id">
          <div class="benefit-icon-placeholder">
            <img :src="benefit.icon" :alt="benefit.title">
          </div>
          <h3 class="benefit-title">{{ benefit.title }}</h3>
          <p class="benefit-desc">{{ benefit.description }}</p>
        </div>
        <div class="benefit-card" v-for="benefit in benefits.slice(1, 2)" :key="benefit.id">
          <div class="benefit-icon-placeholder">
            <img :src="benefit.icon" :alt="benefit.title">
          </div>
          <h3 class="benefit-title">{{ benefit.title }}</h3>
          <p class="benefit-desc">{{ benefit.description }}</p>
        </div>
        <div class="benefit-card" v-for="benefit in benefits.slice(2, 3)" :key="benefit.id">
          <div class="benefit-icon-placeholder">
            <img :src="benefit.icon" :alt="benefit.title">
          </div>
          <h3 class="benefit-title">{{ benefit.title }}</h3>
          <p class="benefit-desc">{{ benefit.description }}</p>
        </div>
        <div class="benefit-card benefit-wide">
          <div class="benefit-icon-placeholder diamond-icon"></div>
          <h3 class="benefit-title">Прямые поставки</h3>
          <div class="brands-row">
            <span class="brand-placeholder"><img src="/images/Square.jpg" alt="Square"></span>
            <span class="brand-placeholder"><img src="/images/Nvidia.jpg" alt="Nvidia"></span>
            <span class="brand-placeholder"><img src="/images/Asus.jpg" alt="Asus"></span>
            <span class="brand-placeholder"><img src="/images/Hp.jpg" alt="Hp"></span>
            <span class="brand-placeholder"><img src="/images/Samsung.jpg" alt="Samsung"></span>
            <span class="brand-placeholder"><img src="/images/Intel.jpg" alt="Intel"></span>
            <span class="brand-placeholder"><img src="/images/Lenovo.jpg" alt="Lenovo"></span>
          </div>
        </div>
        <div class="benefit-card" v-for="benefit in benefits.slice(3, 4)" :key="benefit.id">
          <div class="benefit-icon-placeholder">
            <img :src="benefit.icon" :alt="benefit.title">
          </div>
          <h3 class="benefit-title">{{ benefit.title }}</h3>
          <p class="benefit-desc">{{ benefit.description }}</p>
        </div>
        <div class="benefit-card" v-for="benefit in benefits.slice(4, 5)" :key="benefit.id">
          <div class="benefit-icon-placeholder">
            <img :src="benefit.icon" :alt="benefit.title">
          </div>
          <h3 class="benefit-title">{{ benefit.title }}</h3>
          <p class="benefit-desc">{{ benefit.description }}</p>
        </div>
      </div>
    </section>

    <!-- Секция баннеров -->
    <section class="banners-section">
      <div class="container banners-inner">
        <div class="banner-block banner-block-left">
          <div class="banner-bg banner-bg-light"></div>
          <div class="banner-icon-placeholder"><img src="/images/Monitors.svg" alt="Monitor"></div>
          <div class="banner-content">
            <h3 class="banner-block-title">Комплексные поставки компьютерного <br>
              оборудования для вашего офиса <br>
              в Жуковском</h3>
            <p class="banner-block-desc">Специалист бесплатно подберет <br>
              решение под ваши требования.</p>
            <button class="btn-primary">ПОДОБРАТЬ ТЕХНИКУ</button>
          </div>
          <div class="banner-illustration-placeholder"><img src="/images/undraw_monitor.svg" alt="Monitor"></div>
        </div>
        <div class="banner-block banner-block-right">
          <div class="banner-bg banner-bg-purple"></div>
          <div class="banner-icon-placeholder"><img src="/images/House.svg" alt="House"></div>
          <div class="banner-content">
            <h3 class="banner-block-title">Оборудуем офис <br>
              "под ключ"</h3>
            <p class="banner-block-desc">Компьютерной техникой <br>
              периферией, мебелью <br>
              канцтоварами, а также <br>
              вкусным кофе</p>
            <button class="btn-primary">СОБРАТЬ ОФИС</button>
          </div>
          <div class="banner-illustration-placeholder1"><img src="/images/undraw_Hello.svg" alt="Hello"></div>
        </div>
      </div>
    </section>

    <!-- Секция тендеров -->
    <section class="tenders-section">
      <div class="container tenders-inner">
        <div class="tenders-header">
          <h2 class="section-title">Работаем с государственными заказчиками <br>
            по требовательным ТЗ</h2>
          <button class="btn-outline tenders-btn">
            УЗНАТЬ О РАБОТЕ С ТЕНДЕРАМИ
            <span class="arrow-right"></span>
          </button>
        </div>
        <div class="partners-grid">
          <div class="partner-item">
            <div class="partner-logo-placeholder"><img src="/images/Air.svg" alt="Air"></div>
            <p class="partner-name">«Авиационный техникум <br>
              имени Казакова»</p>
          </div>
          <div class="partner-item">
            <div class="partner-logo-placeholder"><img src="/images/MFTI.svg" alt="MFTI"></div>
            <p class="partner-name">МФТИ</p>
          </div>
          <div class="partner-item">
            <div class="partner-logo-placeholder"><img src="/images/Saturn.svg" alt="Saturn"></div>
            <p class="partner-name">МБУС Раменского городского <br>
              округа ФК «Сатурн».</p>
          </div>
          <div class="partner-item">
            <div class="partner-logo-placeholder"><img src="/images/Tsagi.svg" alt="Tsagi"></div>
            <p class="partner-name">ФГУП «Цаги»</p>
          </div>
          <div class="partner-item">
            <div class="partner-logo-placeholder"><img src="/images/AO.svg" alt="AO"></div>
            <p class="partner-name">АО «ЛИИ <br>
              им. Громова»</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Секция категории -->
    <section class="categories-section">
      <div class="container categories-inner">
        <div class="categories-header-card">
          <h2 class="section-title">Топ категорий СВС</h2>
        </div>
        <div class="category-card" v-for="cat in topCategories.slice(0, 1)" :key="cat.id">
          <div class="category-image-placeholder"><img src="/images/Proccesors.svg" alt="Proccesors"></div>
          <div class="category-info">
            <span class="category-name">{{ cat.name }}</span>
            <span class="category-arrow">→</span>
          </div>
        </div>
        <div class="category-card" v-for="cat in topCategories.slice(1, 2)" :key="cat.id">
          <div class="category-image-placeholder"><img src="/images/Laptops.svg" alt="Laptops"></div>
          <div class="category-info">
            <span class="category-name">{{ cat.name }}</span>
            <span class="category-arrow">→</span>
          </div>
        </div>
        <div class="category-card" v-for="cat in topCategories.slice(2, 3)" :key="cat.id">
          <div class="category-image-placeholder"><img src="/images/System_block.svg" alt="System_block"></div>
          <div class="category-info">
            <span class="category-name">{{ cat.name }}</span>
            <span class="category-arrow">→</span>
          </div>
        </div>
        <div class="category-card" v-for="cat in topCategories.slice(3, 4)" :key="cat.id">
          <div class="category-image-placeholder"><img src="/images/Monitor.svg" alt="Monitor"></div>
          <div class="category-info">
            <span class="category-name">{{ cat.name }}</span>
            <span class="category-arrow">→</span>
          </div>
        </div>
        <div class="category-card" v-for="cat in topCategories.slice(4, 5)" :key="cat.id">
          <div class="category-image-placeholder"><img src="/images/Printers.svg" alt="Printers"></div>
          <div class="category-info">
            <span class="category-name">{{ cat.name }}</span>
            <span class="category-arrow">→</span>
          </div>
        </div>
        <div class="category-card" v-for="cat in topCategories.slice(5, 6)" :key="cat.id">
          <div class="category-image-placeholder"><img src="/images/MFU.svg" alt="MFU"></div>
          <div class="category-info">
            <span class="category-name">{{ cat.name }}</span>
            <span class="category-arrow">→</span>
          </div>
        </div>
        <div class="category-card" v-for="cat in topCategories.slice(6, 7)" :key="cat.id">
          <div class="category-image-placeholder"><img src="/images/video_cards.svg" alt="video_cards"></div>
          <div class="category-info">
            <span class="category-name">{{ cat.name }}</span>
            <span class="category-arrow">→</span>
          </div>
        </div>
        <div class="category-card" v-for="cat in topCategories.slice(7, 8)" :key="cat.id">
          <div class="category-image-placeholder"><img src="/images/cartridges.svg" alt="cartridges"></div>
          <div class="category-info">
            <span class="category-name">{{ cat.name }}</span>
            <span class="category-arrow">→</span>
          </div>
        </div>
        <div class="category-card" v-for="cat in topCategories.slice(8, 9)" :key="cat.id">
          <div class="category-image-placeholder"><img src="/images/Microphone.svg" alt="Microphone"></div>
          <div class="category-info">
            <span class="category-name">{{ cat.name }}</span>
            <span class="category-arrow">→</span>
          </div>
        </div>
        <div class="category-card" v-for="cat in topCategories.slice(9, 10)" :key="cat.id">
          <div class="category-image-placeholder"><img src="/images/Computer_equipment.svg" alt="Computer_equipment"></div>
          <div class="category-info">
            <div>
              <span class="category-name">{{ cat.name }}</span>
              <span v-if="cat.subtitle" class="category-subtitle">{{ cat.subtitle }}</span>
            </div>
            <span class="category-arrow">→</span>
          </div>
        </div>
        <div class="category-card category-card-btn">
          <div>
            <button class="btn-primary categories-all-btn">ПОСМОТРЕТЬ ВСЕ КАТЕГОРИИ</button>
          </div>
          <span class="category-arrow">→</span>
        </div>
      </div>
    </section>

    <!-- Интеграционная секция -->
    <section class="integration-section">
      <div class="container integration-inner">
        <div class="integration-banner integration-left">
          <div class="banner-bg banner-bg-light"></div>
          <div class="banner-icon-placeholder"><img src="/images/PC.svg" alt="PC"></div>
          <div class="banner-content">
            <h3 class="banner-block-title">Решаем сложные задачи интеграции <br>
              компьютерной техники <br>
              в ваш бизнес</h3>
            <p class="banner-block-desc">Предоставим бесплатный тест компьютерного <br>
              оборудования, чтобы все работало как надо</p>
            <button class="btn-primary">ВНЕДРИТЬ ОБОРУДОВАНИЕ</button>
          </div>
          <div class="banner-illustration-placeholder2"><img src="/images/Human.svg" alt="Human"></div>
        </div>
        <div class="integration-banner integration-right">
          <div class="banner-bg banner-bg-purple"></div>
          <div class="banner-icon-placeholder printer-icon"><img src="/images/Printer.svg" alt="Printer"></div>
          <div class="banner-content">
            <h3 class="banner-block-title">У вас много принтеров <br>
              и они часто ломаются?</h3>
            <p class="banner-block-desc">Проведем аудит печатной <br>
              техники и экономим до <br>
              300 000 рублей в год.</p>
            <button class="btn-primary1">УЗНАТЬ КАК</button>
          </div>
          <div class="banner-illustration-placeholder1"><img src="/images/undraw_printing.svg" alt="undraw_printing"></div>
        </div>
      </div>
    </section>

    <!-- Секция сервиса -->
    <section class="service-section">
      <div class="container service-inner">
        <div class="service-bg"></div>
        <div class="service-content">
          <h2 class="section-title">Ремонт и обслуживание компьютерной <br>
            техники в сервис-центре СВС</h2>
          <p class="text-regular">Ремонтируем компьютеры, ноутбуки, <br>
            оргтехнику, серверное оборудование.</p>
          <button class="btn-outline service-btn">
            ПОСМОТРЕТЬ УСЛУГИ СЕРВИС ЦЕНТРА
            <span class="arrow-right"></span>
          </button>
        </div>
        <img src="/images/Photo.svg" alt="Photo" class="service-photo">
      </div>
    </section>

    <!-- Секция доверия -->
    <section class="trusted-section">
      <div class="container trusted-inner">
        <div class="trusted-frame">
          <h2 class="section-title">Нам доверяют поставлять, оптимизировать и модернизировать компьютерную технику</h2>
          <div class="trusted-logos">
            <img src="/images/Dog.svg" alt="Dog">
            <img src="/images/Monro.svg" alt="Monro">
            <img src="/images/Eagle.svg" alt="Eagle">
            <img src="/images/Alrosa.svg" alt="Alrosa">
            <img src="/images/dry.svg" alt="dry">
          </div>
        </div>
      </div>
    </section>

    <!-- Секция консультация -->
    <section class="consultation-section">
      <div class="container consultation-inner">
        <h2 class="section-title consultation-title">Нужна консультация по выбору компьютерного оборудования?</h2>
        <p class="section-subtitle consultation-subtitle">Остались вопросы? Задайте его в форме ниже:</p>
        <div class="consultation-card">
          <img src="/images/Women.svg" alt="Women" class="consultation-img">
          <form class="consultation-form" @submit.prevent="submitForm">
            <div class="form-group">
              <input type="text" v-model="form.name" placeholder="Имя *" class="form-input" required />
            </div>
            <div class="form-group">
              <input type="tel" v-model="form.phone" placeholder="+7 --- --- -- -- *" class="form-input" required />
            </div>
            <div class="form-group">
              <input type="text" v-model="form.question" placeholder="Ваш вопрос *" class="form-input" required />
            </div>
            <button type="submit" class="btn-primary form-submit">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</button>
            <label class="form-checkbox">
              <input type="checkbox" v-model="form.agree" required />
              <span>Нажимая на кнопку я соглашаюсь с политикой конфиденциальности</span>
            </label>
          </form>
        </div>
      </div>
    </section>

    <!-- Секция карты -->
    <section class="map-section">
      <div class="container map-inner">
        <div class="map-frame">
          <h2 class="section-title map-title">Магазин компьютерной техники СВС рядом с вами, в Жуковском</h2>
          <div class="map-content">
            <div class="map-info">
              <div class="map-info-item">
                <img src="/images/Location.svg" alt="Location">
                <span>г. Жуковский, ул. Московская, д.1</span>
              </div>
              <div class="map-info-item">
                <img src="/images/Phone.svg" alt="Phone" class="phone-icon">
                <a href="tel:+74957250969">+7 (495) 725-09-69</a>
              </div>
              <div class="map-info-item">
                <img src="/images/Letter.svg" alt="Letter">
                <a href="mailto:Svs93@mail.ru">Svs93@mail.ru</a>
              </div>
              <div class="map-info-item">
                <img src="/images/Whatsapp.svg" alt="Whatsapp">
                <span>Напишите нам в Whats APP</span>
              </div>
              <div class="map-info-item">
                <img src="/images/Times.svg" alt="Times">
                <span>Пн – Чт: с 9:00 до 19:00 Пт: с 9:00 до 17:00</span>
              </div>
              <div class="map-info-item">
                <img src="/images/Times.svg" alt="Times">
                <span>Сб - Вс: принимаем онлайн-заказы</span>
              </div>
              <img src="/images/Map.svg" alt="Map" class="map-image">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Плавающий виджет -->
    <div class="floating-widget">
      <div class="widget-item widget-cart" @click="openCart">
        <img src="/images/Cart_white.svg" alt="Cart_white">
        <span class="widget-badge">3</span>
      </div>
      <div class="widget-item widget-favorites" @click="openFavorites">
        <img src="/images/Heart.svg" alt="Heart">
        <span class="widget-badge badge-blue">1</span>
      </div>
      <div class="widget-item widget-compare" @click="openCompare">
        <img src="/images/Compare.svg" alt="Compare">
        <span class="widget-badge badge-blue">0</span>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const categories = ref([])
const topCategories = ref([])
const benefits = ref([])
const partners = ref([])
const brands = ref([])
const trustedBy = ref([])
const currentCategory = ref(null)

const form = ref({
  name: '',
  phone: '',
  question: '',
  agree: false
})

async function loadData() {
  try {
    const response = await fetch('/data/products.json')
    const data = await response.json()
    categories.value = data.categories || []
    topCategories.value = data.topCategories || []
    benefits.value = data.benefits || []
    partners.value = data.partners || []
    brands.value = data.brands || []
    trustedBy.value = data.trustedBy || []
  } catch (e) {
    console.error('Data load error:', e)
  }
}

function submitForm() {
  if (form.value.agree) {
    alert('Заявка отправлена!')
    form.value = { name: '', phone: '', question: '', agree: false }
  }
}

onMounted(() => {
  loadData()
})

function openCart() {
  alert('Корзина')
}

function openFavorites() {
  alert('Избранное')
}

function openCompare() {
  alert('Сравнение')
}
</script>

<style scoped>
/* Базовые параметры */
.main-content {
  width: 100%;
  overflow-x: hidden;
}

.container {
  max-width: 1410px;
  margin: 0 auto;
  padding: 0 15px;
  box-sizing: border-box;
}

/* Секция заголовок */
.hero-section {
  padding: 40px 0;
}

.hero-inner {
  display: grid;
  grid-template-columns: 350px 1fr;
  grid-template-rows: auto 1fr;
  gap: 30px;
  position: relative;
}

.hero-text {
  grid-column: 2;
}

.hero-title {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 36px;
  line-height: 43px;
  color: #4A4D4A;
}

.accent-text {
  color: #FFAF37;
}

.hero-banner {
  grid-column: 2;
  position: relative;
  width: 100%;
  height: 630px;
  border-radius: 10px;
  overflow: hidden;
}

.banner-image-placeholder {
  width: 100%;
  height: 100%;
  background: url("/images/Bg.jpg") center/cover;
}

.banner-overlay {
  position: absolute;
  top: 0;
  left: 300px;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.banner-text {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 30px;
  line-height: 123.4%;
  text-align: center;
  color: #FFFFFF;
  margin-bottom: 30px;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #FFAF37;
  color: #FFFFFF;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 123.4%;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  padding: 20px 40px;
  transition: opacity 0.3s;
}
.btn-primary1 {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #FFAF37;
  color: #FFFFFF;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 123.4%;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  padding: 20px 40px;
  transition: opacity 0.3s;
}

.banner-btn {
  padding: 20px 50px;
}

.banner-dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #FFFFFF;
  background: transparent;
}

.dot.active {
  background: #FFAF37;
  border-color: #FFAF37;
}

.banner-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #FFFFFF;
  border: none;
  cursor: pointer;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-arrow-left {
  left: 20px;
}

.banner-arrow-right {
  right: 100px;
}

.hero-catalog {
  grid-column: 1;
  grid-row: 1 / 3;
  background: #F0F0FF;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
}

.catalog-header {
  padding: 20px 25px;
}

.catalog-title {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 122%;
  color: #4A4D4A;
}

.catalog-menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
  background: #FFFBFB;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
}

.catalog-menu-item {
  border-bottom: 1px solid #f0f0f0;
}

.catalog-menu-item.active .catalog-menu-link {
  background: #FFAF37;
}

.catalog-menu-item.active .menu-text {
  color: #FFFFFF;
}

.catalog-menu-link {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  text-decoration: none;
  color: #4A4D4A;
  transition: background 0.3s;
  gap: 12px;
}

.catalog-menu-link:hover {
  background: #f5f5f5;
}

.menu-icon-img {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  object-fit: contain;
}

.menu-text {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 15px;
  flex: 1;
  line-height: 1.3;
}

.menu-arrow {
  font-size: 18px;
  color: #001569;
  opacity: 0.6;
}

/* Секция преимущества */
.benefits-section {
  padding: 40px 0;
}

.benefits-inner {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.benefit-card {
  background: #FFFFFF;
  box-shadow: 0 0 11px rgba(0, 0, 0, 0.25);
  padding: 30px 25px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.benefit-main {
  background: #F0F0FF;
  display: flex;
  align-items: center;
  justify-content: center;
}

.benefit-main-title {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 30px;
  line-height: 123.4%;
  text-align: center;
  color: #4A4D4A;
}

.diamond-icon {
  width: 70px;
  height: 72px;
  background: url("/images/Tree.jpg") center/contain no-repeat;
}

.benefit-title {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 122%;
  color: #4A4D4A;
  margin-bottom: 15px;
}

.benefit-desc {
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #4A4D4A;
}

.benefit-wide {
  grid-column: span 2;
}

.brands-row {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 15px;
}

.brand-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
}

.brand-placeholder img {
  max-width: 80px;
  max-height: 40px;
}

/* Секция баннеров */
.banners-section {
  padding: 40px 0;
}

.banners-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.banner-block {
  position: relative;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
  padding: 40px;
}

.banner-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.banner-bg-light {
  background: #F0F0FF;
}

.banner-bg-purple {
  background: #E3E1FF;
}

.banner-content {
  position: relative;
  z-index: 2;
  top: 50px;
  max-width: 100%;
  text-align: end;
}

.banner-block-title {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 122%;
  color: #4A4D4A;
  margin-bottom: 15px;
}

.banner-block-desc {
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #4A4D4A;
  margin-bottom: 25px;
}

.banner-icon-placeholder {
  position: absolute;
  top: 30px;
  left: 20px;
  width: 60px;
  height: 60px;
}

.banner-icon-placeholder img {
  max-width: 100%;
  max-height: 100%;
}

.banner-illustration-placeholder,
.banner-illustration-placeholder1,
.banner-illustration-placeholder2 {
  position: absolute;
  bottom: 15px;
  left: 0;
  width: 300px;
  height: 230px;
}

.banner-illustration-placeholder img,
.banner-illustration-placeholder1 img,
.banner-illustration-placeholder2 img {
  max-width: 100%;
  max-height: 100%;
}

/* Секция тендеры */
.tenders-section {
  padding: 40px 0;
  background: #F0F0FF;
}

.tenders-inner {
  max-width: 1410px;
  margin: 0 auto;
  padding: 0 15px;
}

.tenders-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 20px;
}

.tenders-btn {
  display: flex;
  align-items: center;
  gap: 15px;
}

.arrow-right {
  display: inline-block;
  width: 30px;
  height: 2px;
  background: #4A4D4A;
  position: relative;
}

.arrow-right::after {
  content: '';
  position: absolute;
  right: 0;
  top: -4px;
  width: 10px;
  height: 10px;
  border-top: 2px solid #4A4D4A;
  border-right: 2px solid #4A4D4A;
  transform: rotate(45deg);
}

.partners-grid {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 30px;
}

.partner-item {
  text-align: center;
  min-width: 150px;
}

.partner-logo-placeholder {
  width: 150px;
  height: 80px;
  margin: 0 auto 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.partner-logo-placeholder img {
  max-width: 100%;
  max-height: 100%;
}

.partner-name {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #4A4D4A;
}

/* Секция категории */
.categories-section {
  padding: 40px 0;
}

.categories-inner {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.categories-header-card {
  background: #F0F0FF;
  box-shadow: 0 0 19px rgba(0, 0, 0, 0.25);
  padding: 40px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.category-card {
  background: #FFFFFF;
  box-shadow: 0 0 19px rgba(0, 0, 0, 0.25);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s;
}

.category-card:hover {
  transform: translateY(-3px);
}

.category-image-placeholder {
  width: 100%;
  height: 150px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.category-image-placeholder img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.category-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.category-info div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
}

.category-name {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #4A4D4A;
}

.category-subtitle {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #4A4D4A;
  display: block;
  width: 100%;
  margin-top: 5px;
}

.category-arrow {
  font-size: 24px;
  color: #4A4D4A;
}

.category-card-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FFFFFF;
  height: 100px;
}

.categories-all-btn {
  width: 100%;
  height: 100%;
  min-height: 60px;
}

/* Секция интеграции */
.integration-section {
  padding: 40px 0;
}

.integration-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.integration-banner {
  position: relative;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
  padding: 40px;
}

.integration-left .banner-content {
  text-align: right;
  margin-left: auto;
}

.integration-right .banner-content {
  text-align: right;
  margin-left: auto;
}

/* Секция сервисов */
.service-section {
  padding: 40px 0;
  background: #F0F0FF;
  position: relative;
}

.service-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
}

.service-content {
  margin-left: -150px;
}

.service-content .section-title {
  margin-bottom: 20px;
}

.service-content .text-regular {
  margin-bottom: 30px;
}

.service-btn {
  display: flex;
  align-items: center;
  gap: 15px;
}

.service-photo {
  width: 400px;
  height: 250px;
  margin-right: 150px;
  object-fit: cover;
}

/* Секция доверия */
.trusted-section {
  padding: 40px 0;
}

.trusted-frame {
  border: 6px solid rgba(31, 52, 123, 0.2);
  padding: 40px;
  position: relative;
}

.trusted-frame::before {
  content: '';
  position: absolute;
  top: -12px;
  right: -12px;
  width: 24px;
  height: 24px;
  background: rgba(31, 52, 123, 0.2);
  border-radius: 50%;
}

.trusted-frame .section-title {
  margin-bottom: 30px;
}

.trusted-logos {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 60px;
  gap: 30px;
}

.trusted-logos img {
  width: 180px;
  height: 140px;
  object-fit: contain;
}

/* Секция консультация */
.consultation-section {
  padding: 40px 0;
}

.consultation-title {
  text-align: center;
  margin-bottom: 10px;
}

.consultation-subtitle {
  text-align: center;
  margin-bottom: 30px;
}

.consultation-card {
  background: #FFFFFF;
  box-shadow: 0 0 28px rgba(0, 0, 0, 0.25);
  padding: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}

.consultation-img {
  width: 100%;
  height: 350px;
  object-fit: contain;
}

.consultation-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-input {
  width: 100%;
  padding: 20px 15px;
  border: 1px solid #4A4D4A;
  font-family: 'Rubik', sans-serif;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s;
  box-sizing: border-box;
}

.form-input:focus {
  border-color: #FFAF37;
}

.form-submit {
  width: 100%;
  padding: 20px;
}

.form-checkbox {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-family: 'Rubik', sans-serif;
  font-weight: 300;
  font-size: 10px;
  line-height: 15px;
  color: #4A4D4A;
  text-decoration: underline;
}

.form-checkbox input {
  width: 20px;
  height: 20px;
  background: #4A4D4A;
  flex-shrink: 0;
  accent-color: #4A4D4A;
}

/* Секция карта */
.map-section {
  padding: 40px 0;
}

.map-frame {
  border: 6px solid rgba(31, 52, 123, 0.2);
  padding: 40px;
  position: relative;
}

.map-frame::before {
  content: '';
  position: absolute;
  top: -12px;
  left: -12px;
  width: 24px;
  height: 24px;
  background: rgba(31, 52, 123, 0.2);
  border-radius: 50%;
}

.map-title {
  text-align: center;
  margin-bottom: 30px;
}

.map-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
}

.map-image {
  max-height: 500px;
  max-width: 600px;
  width: 100%;
}

.map-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 100px;
}

.map-info-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #4A4D4A;
}

.map-info-item img {
  width: 30px;
  height: 30px;
  flex-shrink: 0;
}

.map-info-item a {
  color: #4A4D4A;
  text-decoration: none;
}

/* Плавающий виджет */
.floating-widget {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  box-shadow: 0 0 38px rgba(0, 0, 0, 0.3);
  border-radius: 10px 0 0 10px;
  overflow: hidden;
}

.widget-item {
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  transition: background 0.3s;
}

.widget-item:hover {
  background: #f5f5f5;
}

.widget-cart {
  background: #1F347B;
}

.widget-cart:hover {
  background: #162a63;
}

.widget-badge {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid #FFAF37;
  background: #FFAF37;
  color: #FFFFFF;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.badge-blue {
  background: #1F347B;
  border-color: #1F347B;
}

/* Общие стили */
.section-title {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 36px;
  line-height: 43px;
  color: #4A4D4A;
  margin: 0 0 20px 0;
}

.text-regular {
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #4A4D4A;
}

.btn-outline {
  display: inline-flex;
  align-items: center;
  background: transparent;
  border: 2px solid #FFAF37;
  color: #4A4D4A;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 123.4%;
  text-transform: uppercase;
  cursor: pointer;
  padding: 20px 40px;
  transition: opacity 0.3s;
}

/* Мобильная адаптивка (320px - 360px) */
@media (max-width: 320px) {
  * {
    box-sizing: border-box;
  }

  .container {
    padding: 0 10px;
    max-width: 320px;
  }

  .hero-section {
    padding: 20px 0;
  }

  .hero-inner {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .hero-catalog {
    order: 1;
    width: 302px;
    margin: 0 auto;
  }

  .catalog-header {
    padding: 12px 25px;
    background: #F0F0FF;
  }

  .catalog-title {
    font-size: 14px;
    line-height: 123.4%;
  }

  .catalog-menu-link {
    padding: 10px 16px;
  }

  .menu-icon-img {
    width: 15px;
    height: 15px;
  }

  .menu-text {
    font-size: 12px;
    line-height: 123.4%;
  }

  .menu-arrow {
    font-size: 16px;
  }

  .hero-text {
    order: 2;
    width: 301px;
    margin: 0 auto;
  }

  .hero-title {
    font-size: 24px;
    line-height: 123.4%;
    text-align: center;
  }

  .hero-banner {
    order: 3;
    width: 300px;
    height: 328px;
    margin: 0 auto;
  }

  .banner-overlay {
    left: 0;
    padding: 20px;
  }

  .banner-text {
    font-size: 20px;
    line-height: 123.4%;
  }

  .banner-btn {
    width: 300px;
    height: 60px;
    padding: 0;
    font-size: 16px;
  }

  .banner-dots {
    bottom: 15px;
    gap: 9px;
  }

  .dot {
    width: 15px;
    height: 15px;
  }

  .banner-arrow {
    display: none;
  }

  .benefits-section {
    padding: 20px 0;
  }

  .benefits-inner {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .benefit-card {
    width: 300px;
    height: 200px;
    margin: 0 auto;
    padding: 20px 25px;
  }

  .benefit-main-title {
    font-size: 20px;
    line-height: 123.4%;
  }

  .benefit-icon-placeholder {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }

  .diamond-icon {
    width: 70px;
    height: 72px;
  }

  .benefit-title {
    font-size: 18px;
    line-height: 123.4%;
    margin-bottom: 10px;
  }

  .benefit-desc {
    font-size: 16px;
    line-height: 123.4%;
  }

  .benefit-wide {
    height: 233px;
  }

  .brands-row {
    gap: 15px;
    margin-top: 15px;
  }

  .brand-placeholder img {
    max-width: 60px;
    max-height: 30px;
  }

  .banners-section {
    padding: 20px 0;
  }

  .banners-inner {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .banner-block {
    width: 300px;
    height: 360px;
    margin: 0 auto;
    padding: 20px;
  }

  .banner-content {
    top: 20px;
    text-align: center;
  }

  .banner-block-title {
    font-size: 16px;
    line-height: 123.4%;
    text-align: center;
    margin-bottom: 10px;
  }

  .banner-block-desc {
    font-size: 14px;
    line-height: 123.4%;
    text-align: center;
    margin-bottom: 20px;
  }

  .banner-block .btn-primary {
    width: 200px;
    height: 50px;
    font-size: 16px;
    padding: 0;
  }

  .banner-icon-placeholder {
    width: 40px;
    height: 42px;
  }

  .banner-illustration-placeholder,
  .banner-illustration-placeholder1,
  .banner-illustration-placeholder2 {
    left: 85px;
    width: 200px;
    height: 110px;
  }

  .tenders-section {
    padding: 20px 0;
  }

  .tenders-header {
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
  }

  .tenders-header .section-title {
    font-size: 20px;
    line-height: 123.4%;
    text-align: center;
    margin-bottom: 30px;
  }

  .tenders-btn {
    width: 300px;
    height: 60px;
    justify-content: center;
    font-size: 16px;
    padding: 0 20px;
  }

  .partners-grid {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .partner-logo-placeholder {
    width: 80px;
    height: 50px;
    margin: 0 auto 10px;
  }

  .partner-name {
    font-size: 14px;
    line-height: 123.4%;
  }

  .categories-section {
    padding: 20px 0;
  }

  .categories-inner {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .categories-header-card {
    padding: 20px;
  }

  .categories-header-card .section-title {
    font-size: 20px;
    line-height: 123.4%;
  }

  .category-card {
    width: 300px;
    margin: 0 auto;
  }

  .category-image-placeholder {
    height: 150px;
    margin-left: 0;
  }

  .category-name {
    font-size: 18px;
  }

  .category-card-btn {
    height: auto;
    min-height: 60px;
    padding: 20px;
  }

  .categories-all-btn {
    min-height: 50px;
    font-size: 16px;
  }

  .integration-section {
    padding: 20px 0;
  }

  .integration-inner {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .integration-banner {
    width: 300px;
    height: 380px;
    margin: 0 auto;
    padding: 20px;
  }

  .integration-left .banner-content,
  .integration-right .banner-content {
    text-align: center;
    margin-left: 0;
  }

  .integration-banner .banner-block-title {
    font-size: 18px;
  }

  .integration-banner .banner-block-desc {
    font-size: 16px;
  }

  .service-section {
    padding: 20px 0;
  }

  .service-inner {
    flex-direction: column;
    gap: 20px;
  }

  .service-content {
    margin-left: 0;
    text-align: center;
  }

  .service-content .section-title {
    font-size: 18px;
    line-height: 123.4%;
    margin-bottom: 15px;
  }

  .service-content .text-regular {
    font-size: 16px;
    line-height: 123.4%;
    margin-bottom: 20px;
  }

  .service-btn {
    width: 300px;
    height: 60px;
    justify-content: center;
    margin: 0 auto;
    font-size: 16px;
    padding: 0 20px;
  }

  .service-photo {
    width: 280px;
    height: 171px;
    margin-right: 0;
  }

  .trusted-section {
    padding: 20px 0;
  }

  .trusted-frame {
    width: 279px;
    margin: 0 auto;
    padding: 20px;
  }

  .trusted-frame .section-title {
    font-size: 20px;
    line-height: 123.4%;
    margin-bottom: 20px;
  }

  .trusted-logos {
    margin-top: 20px;
    gap: 15px;
  }

  .trusted-logos img {
    width: 80px;
    height: 60px;
  }

  .consultation-section {
    padding: 20px 0;
  }

  .consultation-title {
    font-size: 20px;
    line-height: 123.4%;
    margin-bottom: 10px;
  }

  .consultation-subtitle {
    font-size: 16px;
    line-height: 123.4%;
    margin-bottom: 20px;
  }

  .consultation-card {
    display: flex;
    flex-direction: column;
    padding: 20px 10px;
    gap: 20px;
  }

  .consultation-img {
    display: none;
  }

  .form-input {
    width: 300px;
    height: 60px;
    margin: 0 auto;
    display: block;
    font-size: 14px;
  }

  .form-submit {
    width: 300px;
    height: 60px;
    margin: 0 auto;
    display: block;
    font-size: 16px;
    padding: 0;
  }

  .form-checkbox {
    max-width: 300px;
    margin: 0 auto;
  }

  .map-section {
    padding: 20px 0;
  }

  .map-frame {
    width: 302px;
    margin: 0 auto;
    padding: 20px;
  }

  .map-title {
    font-size: 20px;
    line-height: 123.4%;
    margin-bottom: 20px;
  }

  .map-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .map-image {
    width: 250px;
    height: 274px;
    margin: 0 auto;
    border-radius: 20px;
  }

  .map-info {
    margin-top: 0;
    gap: 15px;
  }

  .map-info-item {
    font-size: 14px;
    line-height: 123.4%;
  }

  .map-info-item img {
    width: 30px;
    height: 30px;
  }

  .floating-widget {
    right: 0;
    top: auto;
    bottom: 20px;
    transform: none;
    flex-direction: row;
    border-radius: 10px;
  }

  .widget-item {
    width: 50px;
    height: 50px;
  }

  .widget-badge {
    width: 16px;
    height: 16px;
    top: 5px;
    right: 5px;
    font-size: 10px;
  }

  .section-title {
    font-size: 20px;
    line-height: 123.4%;
  }

  .text-regular {
    font-size: 16px;
    line-height: 123.4%;
  }

  .btn-primary {
    font-size: 12px;
  }
  .btn-primary1 {
    font-size: 16px;
  }

  .btn-outline {
    font-size: 16px;
  }
}
</style>