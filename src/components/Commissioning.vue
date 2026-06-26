<template>
  <main class="commissioning-page">
    <div class="container">
      <!-- Хлебные крошки -->
      <nav class="breadcrumbs">
        <router-link to="/" class="breadcrumb-item">Главная</router-link>
        <span class="breadcrumb-separator">→</span>
        <span class="breadcrumb-current">Пуско-наладка IT-оборудования</span>
      </nav>
    </div>

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container hero-inner">
        <div class="hero-text">
          <h1 class="hero-title">
            Пуско-наладка <span class="accent-text">IT-оборудования</span><br/>
            от компании СВС в Жуковском — настройка, интеграция и запуск под ключ
          </h1>
        </div>
        <div class="hero-banner">
          <div class="banner-image-placeholder">
            <div class="banner-content1">
              <h2 class="banner-title">Решаем cложные задачи пуско-наладки <br>
                компьютерной техники</h2>
              <p class="banner-desc">Работаем с 1993 года, хорошо знаем поставщиков,<br>
                настраиваем, интегрируем и запускаем <br>
                по самым требовательным ТЗ. Предоставляем <br>
                оборудование в тест бесплатно на нужный вам срок
              </p>
              <button class="btn-primary banner-btn">ЗАПУСТИТЬ ОБОРУДОВАНИЕ</button>
            </div>
          </div>
        </div>
        <div class="hero-catalog">
          <div class="catalog-header">
            <h2 class="catalog-title">Каталог</h2>
          </div>
          <ul class="catalog-menu-list">
            <li
                v-for="category in categories"
                :key="category.id"
                class="catalog-menu-item">
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

    <!-- Описание услуги -->
    <section class="description-section">
      <div class="container description-inner">
        <div class="description-header">
          <div class="description-icon"></div>
          <h2 class="description-title">У вашей компании появилась потребность в закупке оборудования, но нет штатных специалистов по этим вопросам – не беда.</h2>
        </div>
        <div class="description-grid">
          <div class="description-text description-text-accent">
            <p>СВС не только поставляет хорошую технику, но и делает пусконаладку оборудования. Мы запросто настроим технику в вашем офисе, чтобы ничего не отвлекало Вас и Ваших сотрудников от работы</p>
          </div>
          <div class="description-image">
            <img src="/images/Commissioning.jpg" alt="Commissioning">
          </div>
          <div class="description-text">
            <p>За долгие годы на рынке мы внедрили большое количество проектов и знаем что и как лучше сделать. Мы анализируем текущее состояние оборудования в офисе и предлагаем Вам оптимальное решение по внедрению и отладке.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Задачи Section -->
    <section class="tasks-section">
      <div class="container tasks-inner">
        <h2 class="section-title tasks-title">Какие задачи мы решаем?</h2>
        <div class="tasks-grid">
          <div class="task-card">
            <div class="task-icon1"></div>
            <h3 class="task-title">Интеграция любого совместимого ПО</h3>
          </div>
          <div class="task-card">
            <div class="task-icon2"></div>
            <h3 class="task-title">Интеграция систем экономии и контроля печати</h3>
          </div>
          <div class="task-card">
            <div class="task-icon3"></div>
            <h3 class="task-title">Установка необходимых компонентов системы</h3>
          </div>
          <div class="task-card">
            <div class="task-icon4"></div>
            <h3 class="task-title">Интеграция системы идентификации пользователей</h3>
          </div>
          <div class="task-card">
            <div class="task-icon5"></div>
            <h3 class="task-title">Подбор необходимой комплектации по вашему и совместно выработанному ТЗ</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
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

    <!-- Trusted Section -->
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

    <!-- Banners Section -->
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
            <h3 class="banner-block-title">СВС Жуковский - поставщик компьютерной <br>
              техники крупных промышленных <br>
              и государственных предприятий</h3>
            <div class="banner-brands">
              <div>
                <img src="/images/AO.svg" alt="AO">
                <img src="/images/Tsagi.svg" alt="Tsagi">
                <img src="/images/Air.svg" alt="Air">
              </div>
              <img src="/images/Saturn.svg" alt="Saturn">
              <img src="/images/MFTI.svg" alt="MFTI">
            </div>
            <button class="btn-primary">УЗНАТЬ О РАБОТЕ С ТЕНДЕРАМИ</button>
          </div>
          <div class="banner-illustration-placeholder1"><img src="/images/Two_man.svg" alt="Two_man"></div>
        </div>
      </div>
      <div class="container banners-inner" style="margin-top: 30px;">
        <div class="banner-block banner-block-left">
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
        <div class="banner-block banner-block-right">
          <div class="banner-bg banner-bg-purple"></div>
          <div class="banner-icon-placeholder printer-icon"><img src="/images/Printer.svg" alt="Printer"></div>
          <div class="banner-content">
            <h3 class="banner-block-title">Оборудуем офис <br>
              "под ключ"</h3>
            <p class="banner-block-desc">Компьютерной техникой <br>
              периферией, мебелью <br>
              канцтоварами, а также <br>
              вкусным кофе</p>
            <button class="btn-primary">СОБРАТЬ ОФИС</button>
          </div>
          <div class="banner-illustration-placeholder1"><img src="/images/undraw_printing.svg" alt="undraw_printing"></div>
        </div>
      </div>
    </section>

    <!-- Consultation Section -->
    <section class="consultation-section">
      <div class="container consultation-inner">
        <h2 class="section-title consultation-title">Хотите получить бесплатную консультацию по пуско-наладке компьютерного оборудования под "ключ"?</h2>
        <p class="consultation-subtitle">После настройки оборудования вы можете получить компьютеры под ваши требования на бесплатное тестирование</p>
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

    <!-- Map Section -->
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

    <!-- Floating Widget -->
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
const benefits = ref([])
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
    benefits.value = data.benefits || []
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

function openCart() { alert('Корзина') }
function openFavorites() { alert('Избранное') }
function openCompare() { alert('Сравнение') }

onMounted(() => {
  loadData()
})
</script>

<style scoped>
.banner-brands img {
  width: 80px;
  height: 53px;
}

.commissioning-page {
  width: 100%;
  overflow-x: hidden;
}

/* Хлебные крошки */
.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 0 20px;
  font-family: 'Rubik-Regular', sans-serif;
  font-size: 14px;
  color: #4A4D4A;
}

.breadcrumb-item {
  color: #4A4D4A;
  text-decoration: none;
  border-bottom: 1px dashed #4A4D4A;
  transition: color 0.3s;
}

.breadcrumb-item:hover {
  color: #FFAF37;
}

.breadcrumb-separator {
  color: #4A4D4A;
  font-size: 12px;
}

.breadcrumb-current {
  color: #4A4D4A;
  border-bottom: 1px dashed #4A4D4A;
}

/* Hero Section */
.hero-section { padding: 40px 0; }
.hero-inner {
  display: grid;
  grid-template-columns: 350px 1fr;
  grid-template-rows: auto 1fr;
  gap: 30px;
  position: relative;
}
.hero-text { grid-column: 2; }
.hero-title {
  font-family: 'Rubik-Medium', sans-serif;
  font-size: 36px;
  line-height: 43px;
  color: #4A4D4A;
}
.accent-text { color: #FFAF37; }
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
  background: url("/images/Bg_commissioning.jpg") center/cover;
  position: relative;
}
.banner-image-placeholder::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}
.banner-content {
  position: absolute;
  top: 300px;
  right: 100px;
  width: 680px;
  text-align: left;
  z-index: 2;
  margin-top: 170px;
}
.banner-title {
  font-family: 'Rubik-Medium', sans-serif;
  font-size: 30px;
  line-height: 123.4%;
  color: #FFFFFF;
  margin-bottom: 20px;
}
.banner-desc {
  font-family: 'Rubik-Medium', sans-serif;
  font-size: 18px;
  line-height: 21px;
  color: #FFFFFF;
  margin-bottom: 30px;
}
.banner-btn { padding: 24px 45px; }
.hero-catalog {
  grid-column: 1;
  grid-row: 1 / 3;
  background: #F0F0FF;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
}
.catalog-header { padding: 20px 25px; }
.catalog-title {
  font-family: 'Rubik-Medium', sans-serif;
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
.catalog-menu-item { border-bottom: 1px solid #f0f0f0; }
.catalog-menu-link {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  text-decoration: none;
  color: #4A4D4A;
  transition: background 0.3s;
  gap: 12px;
}
.catalog-menu-link:hover { background: #f5f5f5; }
.menu-icon-img { width: 20px; height: 20px; flex-shrink: 0; object-fit: contain; }
.menu-text { font-family: 'Rubik-Medium', sans-serif; font-size: 15px; flex: 1; line-height: 1.3; }
.menu-arrow { font-size: 18px; color: #001569; opacity: 0.6; }

/* Описание услуги */
.description-section { padding: 60px 0; }
.description-inner { max-width: 1410px; margin: 0 auto; }
.description-header {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 40px;
}
.description-icon {
  width: 60px;
  height: 58px;
  background: url("/images/Monitors.svg");
}
.description-title {
  font-family: 'Rubik-Medium', sans-serif;
  font-size: 30px;
  line-height: 123.4%;
  color: #4A4D4A;
  text-align: center;
  flex: 1;
}
.description-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  align-items: center;
}
.description-text p {
  font-family: 'Rubik-Regular', sans-serif;
  font-size: 18px;
  line-height: 21px;
  color: #4A4D4A;
  text-align: center;
}
.description-text-accent p {
  color: #FFAF37;
}
.description-image img {
  width: 100%;
  max-width: 485px;
  border-radius: 10px;
  margin: 0 auto;
  display: block;
}

/* Задачи */
.tasks-section {
  padding: 60px 0;
  background: #F0F0FF;
}
.tasks-inner { max-width: 1410px; margin: 0 auto; }
.tasks-title { margin-bottom: 30px; }
.tasks-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}
.task-card {
  background: #FFFFFF;
  box-shadow: 0 0 28px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 30px 20px;
  text-align: center;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s;
}
.task-card:hover {
  transform: translateY(-3px);
}
.task-icon1 {
  width: 63px;
  height: 60px;
  margin-bottom: 20px;
  background: url("/images/Rotary_arrows.svg");
}
.task-icon2 {
  width: 60px;
  height: 53px;
  margin-bottom: 20px;
  background: url("/images/Monitor_control.svg");
}
.task-icon3 {
  width: 60px;
  height: 58px;
  margin-bottom: 20px;
  background: url("/images/Yellow_disk.svg");
}
.task-icon4 {
  width: 57px;
  height: 60px;
  margin-bottom: 20px;
  background: url("/images/Yellow_man.svg");
}
.task-icon5 {
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
  background: url("/images/Selection_monitor.svg");
}
.task-title {
  font-family: 'Rubik-Medium', sans-serif;
  font-size: 18px;
  line-height: 21px;
  color: #4A4D4A;
  text-align: center;
}

/* Benefits Section */
.benefits-section { padding: 40px 0; }
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
  font-family: 'Rubik-Medium', sans-serif;
  font-size: 30px;
  line-height: 123.4%;
  text-align: center;
  color: #4A4D4A;
}
.diamond-icon {
  width: 70px;
  height: 72px;
  background: url("/images/Tree.jpg") center/contain no-repeat;
  border-radius: 0;
}
.benefit-title {
  font-family: 'Rubik-Medium', sans-serif;
  font-size: 24px;
  line-height: 122%;
  color: #4A4D4A;
  margin-bottom: 15px;
}
.benefit-desc {
  font-family: 'Rubik-Regular', sans-serif;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #4A4D4A;
}
.benefit-wide { grid-column: span 2; }
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

/* Trusted Section */
.trusted-section { padding: 40px 0; }
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
.trusted-frame .section-title { margin-bottom: 30px; }
.trusted-logos {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 60px;
  gap: 30px;
}
.trusted-logos img { width: 180px; height: 140px; object-fit: contain; }

/* Banners Section */
.banners-section { padding: 40px 0; }
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
  top: 0; left: 0; right: 0; bottom: 0;
}
.banner-bg-light { background: #F0F0FF; }
.banner-bg-purple { background: #E3E1FF; }
.banner-content {
  position: relative;
  margin-top: 0;
  right: 90px;
  top: 0;
  text-align: end;
}
.banner-content1 {
  position: relative;
  margin-top: 0;
  right: 50px;
  top: 200px;
  text-align: end;
}
.banner-block-title {
  font-family: 'Rubik-Medium', sans-serif;
  font-size: 24px;
  line-height: 122%;
  color: #4A4D4A;
  margin-bottom: 15px;
}
.banner-block-desc {
  font-family: 'Rubik-Regular', sans-serif;
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
.banner-illustration-placeholder,
.banner-illustration-placeholder1,
.banner-illustration-placeholder2 {
  position: absolute;
  bottom: 15px;
  left: 0;
  width: 300px;
  height: 230px;
}
.banner-illustration-placeholder1 { bottom: 42px; }
.banner-illustration-placeholder2 { bottom: 10px; }

/* Consultation Section */
.consultation-section {
  padding: 40px 0;
}
.consultation-title {
  text-align: center;
  margin-bottom: 10px; }
.consultation-subtitle {
  text-align: center;
  margin-bottom: 30px;
  font-family: 'Rubik-Medium', sans-serif;
  font-size: 24px;
  line-height: 123.4%;
  color: #4A4D4A;
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
.consultation-card img { width: 100%; height: 350px; object-fit: contain; }
.consultation-form { display: flex; flex-direction: column; gap: 20px; }
.form-input {
  width: 100%;
  padding: 20px 15px;
  border: 1px solid #4A4D4A;
  font-family: 'Rubik-Regular', sans-serif;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s;
}
.form-input:focus { border-color: #FFAF37; }
.form-submit { width: 100%; padding: 20px; }
.form-checkbox {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-family: 'Rubik-Light', sans-serif;
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

/* Map Section */
.map-section { padding: 40px 0; }
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
.map-title { text-align: center; margin-bottom: 30px; }
.map-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
}
.map-content img {
  max-height: 500px;
  max-width: 600px;
  border-radius: 20px;
}
.map-info { display: flex; flex-direction: column; gap: 20px; margin-top: 100px; }
.map-info-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'Rubik-Medium', sans-serif;
  font-size: 20px;
  line-height: 24px;
  color: #4A4D4A;
}
.map-info-item a { color: #4A4D4A; text-decoration: none; }

/* Floating Widget */
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
.widget-item:hover { background: #f5f5f5; }
.widget-cart { background: #1F347B; }
.widget-cart:hover { background: #162a63; }
.widget-icon { width: 30px; height: 30px; display: block; }
.cart-icon { border: 2px solid #FFFFFF; }
.heart-icon { border: 2px solid #FFAF37; }
.chart-icon { background: #FFAF37; }
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
.badge-blue { background: #1F347B; border-color: #1F347B; }
</style>