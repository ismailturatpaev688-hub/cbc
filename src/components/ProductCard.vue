<template>
  <main class="catalog-page">
    <div class="container">
      <!-- Хлебные крошки -->
      <nav class="breadcrumbs">
        <router-link to="/" class="breadcrumb-item">Главная</router-link>
        <span class="breadcrumb-separator">→</span>
        <router-link to="/catalog" class="breadcrumb-item">Каталог</router-link>
        <span v-if="product.category" class="breadcrumb-separator">→</span>
        <router-link v-if="product.category" :to="`/catalog/${product.categoryLink}`" class="breadcrumb-item">
          {{ product.category }}
        </router-link>
        <span class="breadcrumb-separator">→</span>
        <span class="breadcrumb-current">{{ product.shortName || product.name }}</span>
      </nav>

      <div class="catalog-layout">
        <!-- Левая колонка -->
        <aside class="sidebar">
          <div class="catalog-menu">
            <div class="catalog-menu-header">
              <h2 class="catalog-menu-title">Каталог</h2>
            </div>
            <ul class="catalog-menu-list">
              <li
                  v-for="category in categories"
                  :key="category.id"
                  class="catalog-menu-item"
                  :class="{ active: product.categoryLink === category.link.split('/').pop() }">
                <router-link :to="category.link" class="catalog-menu-link">
                  <img :src="category.icon" :alt="category.name" class="menu-icon-img">
                  <span class="menu-text">{{ category.name }}</span>
                  <span class="menu-arrow">›</span>
                </router-link>
              </li>
            </ul>
          </div>
        </aside>

        <!-- Правая колонка -->
        <div class="catalog-main">
          <!-- Карточка товара -->
          <div class="product-card-full">
            <!-- Галерея -->
            <div class="product-gallery-section">
              <div class="product-image-main">
                <img :src="currentImage" :alt="product.name" @error="handleImageError">
                <div class="product-badges-top">
                  <button class="icon-btn">
                    <img src="/images/Heart.svg" alt="Избранное">
                  </button>
                  <button class="icon-btn">
                    <img src="/images/Compare.svg" alt="Сравнить">
                  </button>
                </div>
              </div>
              <div class="product-thumbnails-wrapper">
                <button class="thumb-arrow" @click="prevImage">‹</button>
                <div class="product-thumbnails">
                  <img
                      v-for="(img, index) in product.images"
                      :key="index"
                      :src="img"
                      :alt="`Thumbnail ${index + 1}`"
                      class="thumbnail"
                      :class="{ active: index === selectedImage }"
                      @click="selectedImage = index">
                </div>
                <button class="thumb-arrow" @click="nextImage">›</button>
              </div>
            </div>

            <!-- Информация -->
            <div class="product-info-section">
              <h1 class="product-title-detail">{{ product.name }}</h1>
              <div class="product-meta-info">
                <p class="product-article">Артикул: {{ product.article }}</p>
                <p class="product-warranty">Гарантия: {{ product.warranty }}</p>
              </div>
              <div class="product-price-block">
                <div class="price-value">
                  <span class="price-amount">{{ product.price }}</span>
                  <span class="price-currency">₽/шт</span>
                </div>
              </div>
              <div class="product-actions-block">
                <div class="quantity-control">
                  <button class="qty-btn" @click="decreaseQty">-</button>
                  <input type="number" v-model="quantity" min="1" class="qty-input">
                  <button class="qty-btn" @click="increaseQty">+</button>
                </div>
                <button class="btn-one-click">
                  <img src="/images/Hand.svg" alt="Click" class="btn-icon">
                  <span>купить в один клик</span>
                </button>
                <button class="btn-cart" @click="addToCart">
                  <img src="/images/Cart_white.svg" alt="Cart">
                  <span>В КОРЗИНУ</span>
                </button>
              </div>
              <div class="availability-info">
                <p class="availability-note">Цена действительна только для интернет-магазина и может отличаться от цен в розничных магазинах</p>
                <div class="stock-info">
                  <img src="/images/Shop.svg" alt="Office" class="stock-icon">
                  <span>Офис в жуковском - <span class="stock-yes">✓</span> {{ product.stock?.office || 'в наличие' }}</span>
                </div>
                <div class="stock-info">
                  <img src="/images/Truck.svg" alt="Warehouse" class="stock-icon">
                  <span>На складе - {{ product.stock?.warehouse || 'нет в наличие' }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Характеристики -->
          <div class="product-tabs-section">
            <div class="tabs-header">
              <button
                  class="tab-button"
                  :class="{ active: activeTab === 'specs' }"
                  @click="activeTab = 'specs'">
                Характеристики
              </button>
              <button
                  class="tab-button"
                  :class="{ active: activeTab === 'delivery' }"
                  @click="activeTab = 'delivery'">
                Доставка и оплата
              </button>
            </div>
            <div class="tab-content" v-if="activeTab === 'specs'">
              <div class="specs-section">
                <h4>Основные характеристики:</h4>
                <div class="characteristics-list">
                  <div v-for="(value, key) in product.characteristics" :key="key" class="spec-row">
                    <span class="spec-label">{{ key }}</span>
                    <span class="spec-value">{{ value }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-content" v-if="activeTab === 'delivery'">
              <h4>Доставка и оплата</h4>
              <p>Доставка осуществляется по всей России.</p>
            </div>
          </div>
        </div>

        <div class="catalog-main1">
          <!-- Рекомендуемые товары -->
          <section class="related-section">
            <h2 class="section-title">Так же рекомендуем <br> посмотреть</h2>
            <div class="products-carousel">
              <button class="carousel-arrow" @click="scrollCarousel('related', -1)">‹</button>
              <div class="products-carousel-grid" ref="relatedCarousel">
                <a
                    v-for="item in relatedProducts"
                    :key="item.id"
                    :href="`/product/${item.id}`"
                    class="product-card-small">
                  <div class="card-image">
                    <img :src="item.image" :alt="item.name" @error="handleImageError">
                    <button class="card-favorite" @click.prevent>♡</button>
                  </div>
                  <h3 class="card-title">{{ item.shortName }}</h3>
                  <div class="card-rating">
                    <span v-for="i in 5" :key="i" class="star"></span>
                  </div>
                  <div class="card-stock">
                    <span class="stock-dot"></span>
                    <span>Много</span>
                  </div>
                  <div class="card-price-block">
                    <span class="price">{{ item.price }}</span>
                    <span class="currency">₽</span>
                  </div>
                  <button class="btn-add-cart" @click.prevent="addToCartItem(item)">
                    <img src="/images/Cart_white.svg" alt="Cart">
                    <span>В корзину</span>
                  </button>
                </a>
              </div>
              <button class="carousel-arrow" @click="scrollCarousel('related', 1)">›</button>
            </div>
            <div class="carousel-footer">
              <router-link to="/catalog" class="view-all">Смотреть все</router-link>
              <span class="arrow">→</span>
            </div>
          </section>
        </div>
      </div>

      <!-- Преимущества -->
      <section class="benefits-section">
        <div class="benefits-inner">
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

      <!-- Баннеры услуг -->
      <section class="banners-section">
        <div class="banners-inner">
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

      <!-- Интеграция -->
      <section class="integration-section">
        <div class="integration-inner">
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

      <!-- Ранее смотрели -->
      <section class="related-section">
        <h2 class="section-title">Ранее вы смотрели на сайте СВС</h2>
        <div class="products-carousel">
          <button class="carousel-arrow" @click="scrollCarousel('viewed', -1)">‹</button>
          <div class="products-carousel-grid" ref="viewedCarousel">
            <a
                v-for="item in viewedProducts"
                :key="item.id"
                :href="`/product/${item.id}`"
                class="product-card-small">
              <div class="card-image">
                <img :src="item.image" :alt="item.name" @error="handleImageError">
                <button class="card-favorite" @click.prevent>♡</button>
              </div>
              <h3 class="card-title">{{ item.shortName }}</h3>
              <div class="card-rating">
                <span v-for="i in 5" :key="i" class="star"></span>
              </div>
              <div class="card-stock">
                <span class="stock-dot"></span>
                <span>Много</span>
              </div>
              <div class="card-price-block">
                <span class="price">{{ item.price }}</span>
                <span class="currency">₽</span>
              </div>
              <button class="btn-add-cart" @click.prevent="addToCartItem(item)">
                <img src="/images/Cart_white.svg" alt="Cart">
                <span>В корзину</span>
              </button>
            </a>
          </div>
          <button class="carousel-arrow" @click="scrollCarousel('viewed', 1)">›</button>
        </div>
        <div class="carousel-footer">
          <router-link to="/catalog" class="view-all">Смотреть все</router-link>
          <span class="arrow">→</span>
        </div>
      </section>

      <!-- Форма консультации -->
      <section class="consultation-section">
        <div class="consultation-inner">
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

      <!-- Карта -->
      <section class="map-section">
        <div class="map-inner">
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
    </div>

    <!-- Плавающий виджет -->
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
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const product = ref({})
const allProducts = ref([])
const categories = ref([])
const benefits = ref([])
const selectedImage = ref(0)
const quantity = ref(1)
const activeTab = ref('specs')
const form = ref({
  name: '',
  phone: '',
  question: '',
  agree: false
})

const relatedCarousel = ref(null)
const buyWithCarousel = ref(null)
const viewedCarousel = ref(null)

const currentImage = computed(() => {
  if (product.value?.images && product.value.images.length > 0) {
    return product.value.images[selectedImage.value] || product.value.image
  }
  return product.value?.image || '/images/Product_cartridge.jpg'
})

const relatedProducts = computed(() => {
  return allProducts.value.filter(p => p.id !== product.value?.id).slice(0, 4)
})

const buyWithProducts = computed(() => {
  return allProducts.value.filter(p => p.id !== product.value?.id).slice(4, 8)
})

const viewedProducts = computed(() => {
  return allProducts.value.filter(p => p.id !== product.value?.id).slice(8, 12)
})

function handleImageError(event) {
  event.target.src = '/images/Product_cartridge.jpg'
}

async function loadProduct() {
  try {
    const response = await fetch('/data/products.json')
    const data = await response.json()
    allProducts.value = data.products || []
    categories.value = data.categories || []
    benefits.value = data.benefits || []
    const productId = parseInt(route.params.id)
    product.value = allProducts.value.find(p => p.id === productId) || allProducts.value[0]
    selectedImage.value = 0
  } catch (e) {
    console.error('Product load error:', e)
  }
}

watch(() => route.params.id, () => {
  loadProduct()
})

function prevImage() {
  if (product.value?.images) {
    selectedImage.value = (selectedImage.value - 1 + product.value.images.length) % product.value.images.length
  }
}

function nextImage() {
  if (product.value?.images) {
    selectedImage.value = (selectedImage.value + 1) % product.value.images.length
  }
}

function decreaseQty() {
  if (quantity.value > 1) quantity.value--
}

function increaseQty() {
  quantity.value++
}

function addToCart() {
  alert(`Товар "${product.value?.name}" добавлен в корзину (кол-во: ${quantity.value})`)
}

function addToCartItem(item) {
  alert(`Товар "${item.name}" добавлен в корзину`)
}

function scrollCarousel(carouselName, direction) {
  const carousel = carouselName === 'related' ? relatedCarousel.value :
      carouselName === 'buyWith' ? buyWithCarousel.value : viewedCarousel.value
  if (carousel) {
    carousel.scrollBy({ left: direction * 320, behavior: 'smooth' })
  }
}

function submitForm() {
  if (form.value.agree) {
    alert('Заявка отправлена!')
    form.value = { name: '', phone: '', question: '', agree: false }
  }
}

function openCart() {
  alert('Корзина')
}

function openFavorites() {
  alert('Избранное')
}

function openCompare() {
  alert('Сравнение')
}

onMounted(() => {
  loadProduct()
})
</script>

<style scoped>
.catalog-page {
  padding: 20px 0 60px;
  min-height: 100vh;
  background: #FFFFFF;
}

.container {
  max-width: 1410px;
  margin: 0 auto;
  padding: 0 15px;
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

/* Layout */
.catalog-layout {
  display: grid;
  grid-template-columns: 453px 1fr;
  gap: 30px;
  align-items: start;
}

/* Sidebar */
.sidebar {
  position: static;
  top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.catalog-menu {
  background: #FFFFFF;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  box-shadow: 0 0 28px rgba(0, 0, 0, 0.25);
}

.catalog-menu-header {
  background: #F0F0FF;
  padding: 18px 20px;
}

.catalog-menu-title {
  font-family: 'Rubik-Medium', sans-serif;
  font-size: 24px;
  color: #4A4D4A;
  margin: 0;
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

/* Main Content */
.catalog-main {
  min-width: 0;
}

/* Product Card Full */
.product-card-full {
  background: #FFFFFF;
  box-shadow: 0 0 28px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 30px;
}

.product-gallery-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.product-image-main {
  position: relative;
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FFFFFF;
  border: 0.2px solid #4A4D4A;
}

.product-image-main img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.product-badges-top {
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.icon-btn {
  width: 40px;
  height: 40px;
  background: #FFFFFF;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.icon-btn:hover {
  transform: scale(1.1);
}

.product-thumbnails-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}

.thumb-arrow {
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #4A4D4A;
  transition: color 0.3s;
}

.thumb-arrow:hover {
  color: #FFAF37;
}

.product-thumbnails {
  display: flex;
  gap: 10px;
  flex: 1;
}

.thumbnail {
  width: 80px;
  height: 80px;
  border: 0.2px solid #4A4D4A;
  border-radius: 5px;
  object-fit: contain;
  cursor: pointer;
  transition: all 0.3s;
  padding: 10px;
}

.thumbnail:hover,
.thumbnail.active {
  border-color: #FFAF37;
  background: #F0F0FF;
}

/* Product Info */
.product-info-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.product-title-detail {
  font-family: 'Rubik-Medium', sans-serif;
  font-size: 18px;
  color: #4A4D4A;
  text-align: right;
  margin: 0;
}

.product-meta-info {
  text-align: right;
}

.product-article,
.product-warranty {
  font-family: 'Rubik-Light', sans-serif;
  font-size: 14px;
  color: #4A4D4A;
  margin: 5px 0;
}

.product-price-block {
  text-align: right;
  padding: 20px 0;
  border-top: 0.2px solid #4A4D4A;
  border-bottom: 0.2px solid #4A4D4A;
}

.price-value {
  font-family: 'Rubik-Medium', sans-serif;
  font-size: 24px;
  color: #001569;
}

.price-amount {
  font-size: 36px;
}

.price-currency {
  font-size: 24px;
}

.product-actions-block {
  display: flex;
  gap: 15px;
  align-items: center;
  flex-wrap: wrap;
}

.quantity-control {
  display: flex;
  align-items: center;
  background: #FFFFFF;
  box-shadow: 0 0 28px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 5px 10px;
  gap: 10px;
}

.qty-btn {
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #4A4D4A;
  transition: background 0.3s;
}

.qty-btn:hover {
  background: #F0F0FF;
}

.qty-input {
  width: 40px;
  text-align: center;
  border: none;
  font-family: 'Rubik-Light', sans-serif;
  font-size: 18px;
  color: #4A4D4A;
  outline: none;
}

.btn-one-click {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 20px;
  background: transparent;
  border: 1px solid #001569;
  font-family: 'Rubik-Medium', sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  color: #4A4D4A;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-one-click:hover {
  background: #001569;
  color: #FFFFFF;
}

.btn-cart {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  background: #FFAF37;
  border: none;
  font-family: 'Rubik-Bold', sans-serif;
  font-size: 18px;
  text-transform: uppercase;
  color: #FFFFFF;
  cursor: pointer;
  transition: opacity 0.3s;
}

.btn-cart:hover {
  opacity: 0.85;
}

.btn-cart img {
  width: 24px;
  height: 24px;
}

.availability-info {
  text-align: right;
}

.availability-note {
  font-family: 'Rubik-Light', sans-serif;
  font-size: 10px;
  text-decoration: underline;
  color: #000000;
  margin-bottom: 15px;
}

.stock-info {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-end;
  font-family: 'Rubik-Regular', sans-serif;
  font-size: 14px;
  color: #4A4D4A;
  margin: 10px 0;
}

.stock-icon {
  width: 40px;
  height: 40px;
}

.stock-yes {
  color: #07CE6D;
}

/* Tabs */
.product-tabs-section {
  background: #FFFFFF;
  box-shadow: 0 0 28px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 30px;
}

.tabs-header {
  display: flex;
  border-bottom: 0.2px solid #4A4D4A;
}

.tab-button {
  padding: 20px 40px;
  background: #F0F0FF;
  border: none;
  font-family: 'Rubik-Regular', sans-serif;
  font-size: 18px;
  color: #4A4D4A;
  cursor: pointer;
  transition: all 0.3s;
}

.tab-button.active {
  background: #FFFFFF;
  color: #001569;
  border-bottom: 2px solid #FFAF37;
}

.tab-content {
  padding: 30px;
}

.specs-section h4 {
  font-family: 'Rubik-Medium', sans-serif;
  font-size: 18px;
  color: #4A4D4A;
  margin-bottom: 15px;
}

.spec-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 10px 0;
  border-bottom: 0.4px solid #4A4D4A;
}

.spec-label {
  font-family: 'Rubik-Regular', sans-serif;
  font-size: 14px;
  color: #4A4D4A;
}

.spec-value {
  font-family: 'Rubik-Regular', sans-serif;
  font-size: 14px;
  color: #4A4D4A;
  text-align: right;
}

/* Carousel */
.related-section {
  background: #F0F0FF;
  width: 1380px;
  height: 570px;
  padding-top: 30px;
  margin-bottom: 60px;
}

.section-title {
  font-family: 'Rubik-Medium', sans-serif;
  font-size: 30px;
  color: #4A4D4A;
  margin-bottom: 30px;
}

.products-carousel {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
}

.carousel-arrow {
  width: 50px;
  height: 50px;
  background: #FFFFFF;
  border: 0.2px solid #4A4D4A;
  border-radius: 50%;
  box-shadow: 0 0 28px rgba(0, 0, 0, 0.25);
  font-size: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s;
}

.carousel-arrow:hover {
  background: #F0F0FF;
}

.products-carousel-grid {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-behavior: smooth;
  flex: 1;
  padding: 10px 0;
  scrollbar-width: none;
}

.products-carousel-grid::-webkit-scrollbar {
  display: none;
}

.product-card-small {
  flex: 0 0 300px;
  background: #FFFFFF;
  border: 0.4px solid #4A4D4A;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: box-shadow 0.3s;
  text-decoration: none;
  color: inherit;
}

.product-card-small:hover {
  box-shadow: 0 0 28px rgba(0, 0, 0, 0.25);
}

.card-image {
  position: relative;
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FFFFFF;
  padding: 15px;
}

.card-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.card-favorite {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  color: #FFAF37;
  cursor: pointer;
}

.card-title {
  font-family: 'Rubik-Medium', sans-serif;
  font-size: 14px;
  line-height: 1.3;
  text-align: center;
  color: #000000;
  margin: 0 0 8px 0;
  min-height: 36px;
  padding: 0 15px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-rating {
  display: flex;
  gap: 5px;
  justify-content: center;
}

.star {
  width: 26px;
  height: 26px;
  background: #C4C4C4;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

.card-stock {
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  font-family: 'Rubik-Regular', sans-serif;
  font-size: 12px;
  color: #000000;
  margin-bottom: 10px;
}

.stock-dot {
  width: 10px;
  height: 10px;
  background: #07CE6D;
  border-radius: 50%;
}

.card-price-block {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 4px;
  margin-bottom: 15px;
}

.price {
  font-family: 'Rubik-Medium', sans-serif;
  font-size: 24px;
  color: #001569;
}

.currency {
  font-family: 'Rubik-Medium', sans-serif;
  font-size: 24px;
  color: #001569;
}

.btn-add-cart {
  width: 100%;
  height: 50px;
  background: #FFAF37;
  border: none;
  font-family: 'Rubik-Bold', sans-serif;
  font-size: 16px;
  text-transform: uppercase;
  color: #FFFFFF;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: opacity 0.3s;
}

.btn-add-cart:hover {
  opacity: 0.9;
}

.btn-add-cart img {
  width: 20px;
  height: 20px;
}

.carousel-footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
}

.view-all {
  font-family: 'Rubik-Medium', sans-serif;
  font-size: 18px;
  color: #4A4D4A;
  text-decoration: none;
  transition: color 0.3s;
}

.view-all:hover {
  color: #FFAF37;
}

.arrow {
  font-size: 24px;
  color: #4A4D4A;
}

/* Benefits */
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

.benefit-card.benefit-main {
  background: #F0F0FF;
  display: flex;
  align-items: center;
  justify-content: center;
}

.benefit-main-title {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 30px;
  line-height: 123%;
  text-align: center;
  color: #4A4D4A;
  margin: 0;
}

.benefit-icon-placeholder {
  width: 70px;
  height: 72px;
  margin: 0 auto 15px;
}

.benefit-icon-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: contain;
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
  margin: 0 0 15px 0;
}

.benefit-desc {
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #4A4D4A;
  margin: 0;
}

.benefit-card.benefit-wide {
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
  height: 40px;
  object-fit: contain;
}

/* Banners */
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

.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 20px 40px;
  background: #FFAF37;
  border: none;
  font-family: 'Rubik-Bold', sans-serif;
  font-size: 18px;
  line-height: 21px;
  text-transform: uppercase;
  color: #FFFFFF;
  cursor: pointer;
  transition: opacity 0.3s;
}

.btn-primary:hover {
  opacity: 0.85;
}

/* Integration */
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

/* Consultation */
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

.form-group {
  width: 100%;
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

/* Map */
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

/* Responsive */
@media (max-width: 1200px) {
  .catalog-layout {
    grid-template-columns: 1fr;
  }

  .sidebar {
    display: none;
  }

  .product-card-full {
    grid-template-columns: 1fr;
  }

  .benefits-inner {
    grid-template-columns: repeat(2, 1fr);
  }

  .benefit-card.benefit-wide {
    grid-column: span 2;
  }

  .banners-inner,
  .integration-inner {
    grid-template-columns: 1fr;
  }

  .consultation-card {
    grid-template-columns: 1fr;
  }

  .map-content {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .products-carousel-grid {
    flex-direction: column;
  }

  .product-card-small {
    flex: 1;
  }

  .banners-inner,
  .integration-inner {
    grid-template-columns: 1fr;
  }

  .banner-content {
    max-width: 100%;
  }

  .benefits-inner {
    grid-template-columns: 1fr;
  }

  .benefit-card.benefit-wide {
    grid-column: span 1;
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