<template>
  <main class="service-center-page">
    <!-- Hero Section -->
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
          <div class="banner-overlay"></div>
          <div class="banner-content">
            <h2 class="banner-title">Покупайте, ремонтируйте и обслуживайте компьютерное оборудование в одном месте - в центре СВС в Жуковском</h2>
            <p class="banner-desc">Для этого вам совершенно не нужно ездить в Москву. Собственный сервисный центр гарантирует качество, надежность и безопасность ремонта за счет прямых контрактов с производителями</p>
            <button class="btn-primary banner-btn">Заказать обслуживание</button>
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

    <!-- Services Section -->
    <section class="services-section">
      <div class="container services-inner">
        <div class="service-card title-card">
          <h3 class="title-card-text">Что мы ремонтируем, оптимизируем и чистим?</h3>
        </div>
        <div class="service-card" v-for="service in services" :key="service.id">
          <div>
            <div class="service-icon-wrapper">
              <img :src="service.icon" :alt="service.title" class="service-icon">
            </div>
            <div class="block-title">
              <h4 class="service-title">{{ service.title }}</h4>
              <p class="service-price">От <span>{{ service.price }}</span> ₽</p>
            </div>
          </div>
          <a href="#" class="service-link">Посмотреть прайс-лист <span class="link-arrow">→</span></a>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section">
      <div class="container stats-inner">
        <div class="stats-graphics">
          <h2 class="stats-main-title">За это время мы отремонтировали</h2>
          <div class="stats-circles">
            <div class="stat-item stat-monitors">
              <span class="stat-number">1578</span>
              <span class="stat-label">Мониторов</span>
            </div>
            <div class="stat-item stat-laptops">
              <span class="stat-number">1050</span>
              <span class="stat-label">Ноутбуков</span>
            </div>
            <div class="stat-item stat-printers">
              <span class="stat-number">1428</span>
              <span class="stat-label">Принтеров</span>
            </div>
            <div class="stat-item stat-pcs">
              <span class="stat-number">3587</span>
              <span class="stat-label">Компьютеров</span>
            </div>
          </div>
        </div>
        <div class="stats-text">
          <h3 class="stats-title">СВС в Жуковском начинал свою деятельность в 1993 году с ремонта ЭВМ</h3>
          <p class="stats-desc">Мы знаем, как ремонтировать “древние” и новейшие компьютеры, работать со схемами и микрочипами. Бережно обслуживаем оборудование предприятий с уникальным ПО.</p>
          <button class="btn-primary">Заказать обслуживание</button>
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
            <h3 class="banner-block-title">СВС Жуковский - поставщик компьютерной техники крупных промышленных и государственных предприятий</h3>
            <button class="btn-primary">УЗНАТЬ О РАБОТЕ С ТЕНДЕРАМИ</button>
          </div>
          <div class="banner-illustration-placeholder1"><img src="/images/undraw_Hello.svg" alt="Hello"></div>
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
        <h2 class="section-title consultation-title">Хотите получить консультацию по обслуживанию и ремонту компьютерной техники?</h2>
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
const services = ref([])
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

    // Mock services data
    services.value = [
      { id: 1, title: 'Ремонт и обслуживание компьютеров (мониторов)', price: 300, icon: '/images/Monitor.svg' },
      { id: 2, title: 'Ремонт и обслуживание ноутбуков', price: 500, icon: '/images/Laptops.svg' },
      { id: 3, title: 'Сборка ПК из комплектующих клиента', price: 800, icon: '/images/System_block.svg' },
      { id: 4, title: 'Запуск и тестирование компьютерного оборудования', price: 500, icon: '/images/video_cards.svg' },
      { id: 5, title: 'Ремонт принтеров и МФУ', price: 200, icon: '/images/Printers.svg' },
      { id: 6, title: 'Лечение от вирусов', price: 500, icon: '/images/antivirus.svg' },
      { id: 7, title: 'Установка и настройка ПО', price: 200, icon: '/images/Service_software.svg' },
      { id: 8, title: 'Восстановление информации с HDD', price: 300, icon: '/images/Service_hdd.svg' },
      { id: 9, title: 'Установка драйверов', price: 300, icon: '/images/Service_driver.svg' },
      { id: 10, title: 'Установка Windows', price: 700, icon: '/images/Service_windows.svg' },
      { id: 11, title: 'Чистка от пыли', price: 200, icon: '/images/Service_dust.svg' }
    ]
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
.service-center-page {
  width: 100%;
  overflow-x: hidden;
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
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 36px;
  line-height: 43px;
  color: #4A4D4A;
}
.accent-text { color: #FFAF37; }
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
  height: 100%;
  background: url("/images/Bg.jpg") center/cover;
}
.banner-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(70.75deg, rgba(0, 0, 0, 0.73) 3.13%, rgba(0, 0, 0, 0) 94.81%);
}
.banner-content {
  position: absolute;
  top: 217px;
  right: 30px;
  width: 680px;
  text-align: right;
  z-index: 2;
}
.banner-title {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 30px;
  line-height: 123.4%;
  color: #FFFFFF;
  margin-bottom: 20px;
}
.banner-desc {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
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

/* Services Section */
.services-section { padding: 40px 0; }
.services-inner {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 29px;
}
.service-card {
  background: #FFFFFF;
  box-shadow: 0 0 19px rgba(0, 0, 0, 0.25);
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 248px;
  transition: transform 0.3s;
}

.service-card div {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
}

.service-card div.block-title {
  display: flex;
  flex-direction: column;
}

.service-card:hover { transform: translateY(-3px); }
.title-card {
  background: #F0F0FF;
  justify-content: center;
}
.title-card-text {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 30px;
  line-height: 123.4%;
  color: #4A4D4A;
}
.service-icon-wrapper {
  height: 115px;
  width: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  margin-right: 10px;
}
.service-icon { width: 108px; height: 90px; object-fit: contain; }
.service-title {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #4A4D4A;
  margin-bottom: 10px;
  min-height: 72px;
  display: flex;
  align-items: center;
}
.service-price {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #1F347B;
  margin-bottom: 15px;
}
.service-link {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #4A4D4A;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: auto;
  transition: color 0.3s;
}
.service-link:hover { color: #FFAF37; }
.link-arrow { font-size: 24px; }

/* Stats Section */
.stats-section {
  padding: 60px 0;
  background: #F0F0FF;
}
.stats-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}
.stats-graphics { position: relative; }
.stats-main-title {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 30px;
  line-height: 123.4%;
  color: #4A4D4A;
  margin-bottom: 40px;
}
.stats-circles {
  position: relative;
  width: 100%;
  height: 300px;
}
.stat-item {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.stat-number {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 36px;
  line-height: 43px;
  color: #FFAF37;
}
.stat-label {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #4A4D4A;
}
.stat-monitors { top: 20px; left: 0; }
.stat-laptops { top: 0; right: 50px; }
.stat-printers { bottom: 0; left: 50px; }
.stat-pcs { bottom: 20px; right: 0; }

.stats-text { max-width: 475px; margin: 0 auto; }
.stats-title {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 122%;
  color: #4A4D4A;
  text-align: center;
  margin-bottom: 20px;
}
.stats-desc {
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #4A4D4A;
  text-align: center;
  margin-bottom: 30px;
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
.benefit-wide { grid-column: span 2; }
.brands-row {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 15px;
}
.brand-placeholder { display: flex; align-items: center; justify-content: center; }

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
.consultation-section { padding: 40px 0; }
.consultation-title { text-align: center; margin-bottom: 10px; }
.consultation-subtitle { text-align: center; margin-bottom: 30px; }
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
  font-family: 'Rubik', sans-serif;
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
.map-content img { max-height: 500px; max-width: 600px; border-radius: 20px; box-shadow: 0 0 28px rgba(0, 0, 0, 0.25); }
.map-info { display: flex; flex-direction: column; gap: 20px; margin-top: 100px; }
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

/* Responsive */
@media (max-width: 1200px) {
  .hero-inner { grid-template-columns: 1fr; }
  .hero-catalog { grid-column: 1; grid-row: auto; }
  .hero-text { grid-column: 1; }
  .hero-banner { grid-column: 1; }
  .services-inner { grid-template-columns: repeat(3, 1fr); }
  .stats-inner { grid-template-columns: 1fr; }
  .benefits-inner { grid-template-columns: repeat(2, 1fr); }
  .benefit-wide { grid-column: span 2; }
  .consultation-card { grid-template-columns: 1fr; }
  .map-content { grid-template-columns: 1fr; }
}

@media (max-width: 768px) {
  .hero-title { font-size: 24px; line-height: 30px; }
  .hero-banner { height: 400px; }
  .banner-content { right: 15px; width: auto; left: 15px; text-align: center; }
  .banner-title { font-size: 20px; }
  .services-inner { grid-template-columns: repeat(2, 1fr); }
  .stats-circles { height: 400px; }
  .stat-monitors { top: 0; left: 0; }
  .stat-laptops { top: 0; right: 0; }
  .stat-printers { bottom: 0; left: 0; }
  .stat-pcs { bottom: 0; right: 0; }
  .benefits-inner { grid-template-columns: 1fr; }
  .benefit-wide { grid-column: span 1; }
  .banners-inner { grid-template-columns: 1fr; }
  .banner-content { max-width: 100%; }
  .floating-widget {
    bottom: 20px;
    top: auto;
    right: 20px;
    transform: none;
    flex-direction: row;
    border-radius: 10px;
  }
  .widget-item { width: 50px; height: 50px; }
}
</style>