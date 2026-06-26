<template>
  <main class="main-content">
    <section class="hero-section">
      <div class="container hero-inner">
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
      </div>
    </section>

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
            <div class="partner-logo-placeholder1"><img src="/images/Air.svg" alt="Air"></div>
            <p class="partner-name1">«Авиационный техникум <br>
              имени Казакова»</p>
          </div>
          <div class="partner-item">
            <div class="partner-logo-placeholder2"><img src="/images/MFTI.svg" alt="MFTI"></div>
            <p class="partner-name2">МФТИ</p>
          </div>
          <div class="partner-item">
            <div class="partner-logo-placeholder3"><img src="/images/Saturn.svg" alt="Saturn"></div>
            <p class="partner-name3">МБУС Раменского городского <br>
              округа ФК «Сатурн».</p>
          </div>
          <div class="partner-item">
            <div class="partner-logo-placeholder4"><img src="/images/Tsagi.svg" alt="Tsagi"></div>
            <p class="partner-name4">ФГУП «Цаги»</p>
          </div>
          <div class="partner-item">
            <div class="partner-logo-placeholder5"><img src="/images/AO.svg" alt="AO"></div>
            <p class="partner-name5">АО «ЛИИ <br>
              им. Громова»</p>
          </div>
        </div>
      </div>
    </section>

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
        <div class="category-card1 category-card-btn">
          <div>
            <button class="btn-primary1 categories-all-btn">ПОСМОТРЕТЬ ВСЕ КАТЕГОРИИ</button>
          </div>
          <span class="category-arrow1">→</span>
        </div>
      </div>
    </section>

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
            <button class="btn-primary">УЗНАТЬ КАК</button>
          </div>
          <div class="banner-illustration-placeholder1"><img src="/images/undraw_printing.svg" alt="undraw_printing"></div>
        </div>
      </div>
    </section>

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
        <img src="/images/Photo.svg" alt="Photo">
      </div>
    </section>

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

    <section class="consultation-section">
      <div class="container consultation-inner">
        <h2 class="section-title consultation-title">Нужна консультация по выбору компьютерного оборудования?</h2>
        <p class="section-subtitle consultation-subtitle">Остались вопросы? Задайте его в форме ниже:</p>
        <div class="consultation-card">
          <img src="/images/Women.svg" alt="Women">
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
            </div>
            <img src="/images/Map.svg" alt="Map">
          </div>
        </div>
      </div>
    </section>

    <div class="floating-widget">
      <div class="widget-item widget-cart" @click="openCart">
        <span class="widget-icon cart-icon"></span>
        <span class="widget-badge">3</span>
      </div>
      <div class="widget-item widget-favorites" @click="openFavorites">
        <span class="widget-icon heart-icon"></span>
        <span class="widget-badge badge-blue">1</span>
      </div>
      <div class="widget-item widget-compare" @click="openCompare">
        <span class="widget-icon chart-icon"></span>
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
.main-content {
  width: 100%;
  overflow-x: hidden;
}

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
  height: 590px;
  border-radius: 10px;
  overflow: hidden;
}

.banner-image-placeholder {
  width: 100%;
  height: 590px;
  background: url("/public/images/Bg.jpg");
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

.btn-primary1 {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #FFAF37;
  color: #FFFFFF;
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
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
  font-family: 'Rubik-Medium', sans-serif;
  font-size: 15px;
  flex: 1;
  line-height: 1.3;
}

.menu-arrow {
  font-size: 18px;
  color: #001569;
  opacity: 0.6;
}

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
  background: url("/public/images/Tree.jpg");
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

.banner-illustration-placeholder {
  position: absolute;
  bottom: 15px;
  left: 0;
  width: 300px;
  height: 230px;
}

.banner-illustration-placeholder1 {
  position: absolute;
  bottom: 42px;
  left: 0;
  width: 300px;
  height: 230px;
}

.banner-illustration-placeholder2 {
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 300px;
  height: 230px;
}

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

.partner-logo-placeholder1 {
  width: 150px;
  height: 80px;
  margin: 0 0 34px 50px;
}

.partner-logo-placeholder2 {
  width: 150px;
  height: 80px;
  margin: 20px 0 0 0;
}

.partner-logo-placeholder3 {
  width: 150px;
  height: 80px;
  margin: 0 0 19px 95px;
}

.partner-logo-placeholder4 {
  width: 150px;
  height: 80px;
  margin: 40px 0 0 0;
}

.partner-logo-placeholder5 {
  width: 150px;
  height: 80px;
  margin: 0 auto 15px;
}

.partner-name1 {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #4A4D4A;
}

.partner-name2 {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #4A4D4A;
  padding-top: 20px;
  padding-left: 50px;
}

.partner-name3 {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #4A4D4A;
  padding-top: 20px;
  padding-left: 50px;
}

.partner-name4 {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #4A4D4A;
  padding-left: 30px;
  padding-bottom: 20px;
}

.partner-name5 {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #4A4D4A;
  padding-top: 30px;
}

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
.category-card1 {
  background: #FFFFFF;
  box-shadow: 0 0 19px rgba(0, 0, 0, 0.25);
  padding: 128px 20px 120px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s;
}

.category-card1 div {
  padding-top: 50px;
}

.category-card:hover {
  transform: translateY(-3px);
}

.category-image-placeholder {
  width: 100%;
  height: 150px;
  margin-bottom: 15px;
  margin-left: 100px;
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
.category-arrow1 {
  font-size: 24px;
  color: #4A4D4A;
  margin-left: 265px;
  margin-top: 50px;
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

.service-inner img {
  width: 400px;
  height: 250px;
  margin-right: 150px;
}

.trusted-section {
  padding: 40px 0;
}

.trusted-frame {
  border: 6px solid rgba(31, 52, 123, 0.2);
  padding: 40px 40px 40px 40px;
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
}

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

.consultation-card img {
  width: 100%;
  height: 350px;
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

.map-content img {
  max-height: 500px;
  max-width: 600px;
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

.map-info-item a {
  color: #4A4D4A;
  text-decoration: none;
}

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

.widget-icon {
  width: 30px;
  height: 30px;
  display: block;
}

.cart-icon {
  border: 2px solid #FFFFFF;
}

.heart-icon {
  border: 2px solid #FFAF37;
}

.chart-icon {
  background: #FFAF37;
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

@media (max-width: 1200px) {
  .hero-inner {
    grid-template-columns: 1fr;
  }

  .hero-catalog {
    grid-column: 1;
    grid-row: auto;
  }

  .hero-text {
    grid-column: 1;
  }

  .hero-banner {
    grid-column: 1;
  }

  .benefits-inner {
    grid-template-columns: repeat(2, 1fr);
  }

  .benefit-wide {
    grid-column: span 2;
  }

  .categories-inner {
    grid-template-columns: repeat(3, 1fr);
  }

  .consultation-card {
    grid-template-columns: 1fr;
  }

  .map-content {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 24px;
    line-height: 30px;
  }

  .hero-banner {
    height: 300px;
  }

  .banner-text {
    font-size: 20px;
  }

  .benefits-inner {
    grid-template-columns: 1fr;
  }

  .benefit-wide {
    grid-column: span 1;
  }

  .banners-inner,
  .integration-inner {
    grid-template-columns: 1fr;
  }

  .banner-content {
    max-width: 100%;
  }

  .categories-inner {
    grid-template-columns: repeat(2, 1fr);
  }

  .service-inner {
    flex-direction: column;
  }

  .tenders-header {
    flex-direction: column;
  }

  .floating-widget {
    bottom: 20px;
    top: auto;
    right: 20px;
    transform: none;
    flex-direction: row;
    border-radius: 10px;
  }

  .widget-item {
    width: 50px;
    height: 50px;
  }
}
</style>