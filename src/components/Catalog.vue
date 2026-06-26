<template>
  <main class="catalog-page">
    <div class="container">
      <!-- Хлебные крошки -->
      <nav class="breadcrumbs">
        <router-link to="/" class="breadcrumb-item">Главная</router-link>
        <span class="breadcrumb-separator">→</span>
        <router-link to="/catalog" class="breadcrumb-item">Каталог</router-link>
        <span v-if="currentCategory" class="breadcrumb-separator">→</span>
        <span class="breadcrumb-current">{{ currentCategory?.name || '' }}</span>
      </nav>

      <div class="catalog-layout">
        <!-- Левая колонка -->
        <aside class="sidebar">
          <!-- Меню каталога -->
          <div class="catalog-menu">
            <div class="catalog-menu-header">
              <h2 class="catalog-menu-title">Каталог</h2>
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

          <!-- Фильтр по параметрам -->
          <div class="filter-panel">
            <h3 class="filter-panel-title">Фильтр по параметрам</h3>
            <!-- Цена -->
            <div class="filter-section">
              <div class="filter-section-header" @click="toggleFilter('price')">
                <span>Цена</span>
                <span class="filter-toggle" :class="{ open: openFilters.price }">^</span>
              </div>
              <div v-if="openFilters.price" class="filter-section-content">
                <div class="price-inputs">
                  <input
                      type="number"
                      v-model.number="priceFrom"
                      placeholder="от"
                      class="price-input">
                  <span class="price-separator">—</span>
                  <input
                      type="number"
                      v-model.number="priceTo"
                      placeholder="до"
                      class="price-input">
                </div>
                <div class="price-range">
                  <input type="range" v-model="priceRange" min="0" max="1130000" class="range-slider">
                  <div class="price-range-values">
                    <span>{{ priceFrom || 24 }}</span>
                    <span>{{ priceTo || 1130000 }}</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- Бренд -->
            <div class="filter-section">
              <div class="filter-section-header" @click="toggleFilter('brand')">
                <span>Бренд</span>
                <span class="filter-toggle" :class="{ open: openFilters.brand }">^</span>
              </div>
              <div v-if="openFilters.brand" class="filter-section-content">
                <div class="brands-list">
                  <label v-for="brand in brands" :key="brand" class="brand-checkbox">
                    <input type="checkbox" v-model="selectedBrands" :value="brand">
                    <span class="checkbox-custom"></span>
                    <span>{{ brand }}</span>
                  </label>
                </div>
              </div>
            </div>
            <!-- Кнопки -->
            <div class="filter-actions">
              <button class="btn-filter" @click="applyFilters">ПОКАЗАТЬ</button>
              <button class="btn-reset" @click="resetFilters">СБРОСИТЬ</button>
            </div>
          </div>
        </aside>

        <!-- Правая колонка -->
        <div class="catalog-main">
          <!-- Подкатегории -->
          <div class="subcategories">
            <div
                v-for="sub in subcategories"
                :key="sub.id"
                class="subcategory-card">
              <div class="subcategory-image">
                <img :src="sub.image" :alt="sub.name">
              </div>
              <p class="subcategory-name">{{ sub.name }}</p>
            </div>
          </div>

          <!-- Сортировка -->
          <div class="sort-bar">
            <button
                class="sort-btn"
                :class="{ active: sortBy === 'popular' }"
                @click="sortBy = 'popular'">
              По популярности
            </button>
            <button
                class="sort-btn"
                :class="{ active: sortBy === 'name' }"
                @click="sortBy = 'name'">
              По алфавиту
            </button>
            <button
                class="sort-btn"
                :class="{ active: sortBy === 'price' }"
                @click="sortBy = 'price'">
              По цене
            </button>
          </div>

          <!-- Сетка товаров -->
          <div class="products-grid">
            <div
                v-for="product in paginatedProducts"
                :key="product.id"
                class="product-card">
              <a :href="`/product/${product.id}`" class="product-link">
                <div class="product-image">
                  <img :src="product.image" :alt="product.name" @error="handleImageError">
                </div>
              </a>
              <div class="product-info">
                <h3 class="product-title">
                  <router-link :to="`/product/${product.id}`">{{ product.name }}</router-link>
                </h3>
                <div class="product-sku">
                  Артикул: {{ product.article }}
                </div>
                <div class="product-availability">
                  В наличии / На складе
                </div>
                <div class="product-price">
                  <span class="price-value">{{ product.price }}</span>
                  <span class="price-currency">₽</span>
                </div>
                <button class="add-to-cart-btn" @click="addToCart(product)">
                  <img src="/images/Cart_white.svg" alt="Cart_white">
                  <span>В КОРЗИНУ</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Пагинация -->
          <div class="pagination-section">
            <button class="show-more-btn" @click="loadMore">
              <span>↻</span> Смотреть еще
            </button>
            <div class="pagination">
              <button
                  v-for="page in totalPages"
                  :key="page"
                  :class="['page-btn', { active: page === currentPage }]"
                  @click="currentPage = page">
                {{ page }}
              </button>
              <span class="ellipsis" v-if="totalPages > 5">...</span>
              <button class="page-btn" v-if="totalPages > 5">{{ totalPages }}</button>
              <button class="show-all-btn">
                Показать все
                <span class="arrow-right">▶</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Секция акций -->
      <div class="catalog-main1">
        <section class="promo-section">
          <div class="promo-container">
            <!-- Левая панель -->
            <div class="promo-sidebar">
              <div class="sidebar-title-block">
                <img src="/images/Promo_icon.svg" alt="SBC" class="sidebar-icon" />
                <h2 class="sidebar-title">Выбирайте<br>по акции в СВС</h2>
              </div>
              <div class="sidebar-subtitle-block">
                <img src="/images/Star_icon.svg" alt="Хит" class="sidebar-star" />
                <h3 class="sidebar-subtitle">Хиты продаж в СВС</h3>
              </div>
              <div class="promo-sidebar-footer">
                <router-link to="/catalog?promo=true" class="view-all-link">
                  Смотреть все
                  <span class="arrow-right">→</span>
                </router-link>
              </div>
            </div>
            <!-- Сетка товаров акций -->
            <div class="promo-grid">
              <div
                  v-for="product in promoProducts"
                  :key="product.id"
                  class="promo-card"
                  :class="{ 'has-shadow': product.isPromo }">
                <!-- Верхняя панель -->
                <div class="card-top-bar">
                  <button class="btn-details">Подробнее</button>
                  <div class="card-top-icons">
                    <button class="btn-favorite">
                      <img src="/images/Heart.svg" alt="Heart">
                    </button>
                    <button class="btn-favorite">
                      <img src="/images/Compare.svg" alt="Compare">
                    </button>
                  </div>
                </div>
                <!-- Изображение + бейджи -->
                <div class="product-image-wrapper">
                  <div v-if="product.isPromo" class="badge-hit-wrapper"></div>
                  <img :src="product.image" :alt="product.name" class="product-img1" @error="handleImageError">
                </div>
                <!-- Информация -->
                <div class="product-info1">
                  <h3 class="product-title">
                    <router-link :to="`/product/${product.id}`">{{ product.name }}</router-link>
                  </h3>
                  <div class="product-sku">Артикул: {{ product.article }}</div>
                  <div class="product-availability">В наличии / На складе</div>
                  <div class="product-price-block" v-if="product.oldPrice">
                    <div class="new-price">{{ product.price }} ₽</div>
                  </div>
                  <div v-else class="product-price">
                    <span class="price-value">{{ product.price }}</span>
                    <span class="price-currency">₽</span>
                  </div>
                  <button class="add-to-cart-btn" @click="addToCart(product)">
                    <img src="/images/Cart_white.svg" alt="cart">
                    В КОРЗИНУ
                  </button>
                </div>
              </div>
            </div>

            <div class="promo-grid">
              <div
                  v-for="product in promoProducts"
                  :key="product.id"
                  class="promo-card"
                  :class="{ 'has-shadow': product.isPromo }">
                <div class="product-image-wrapper">
                  <div v-if="product.isPromo" class="badge-promo-circle">
                    АКЦИЯ
                  </div>
                  <div v-if="product.isHit" class="badge-hit">
                    <div class="hit-circle">
                      <span class="hit-text">ХИТ<br>ПРОДАЖ</span>
                    </div>
                  </div>
                  <img :src="product.image" :alt="product.name" class="product-img" @error="handleImageError">
                </div>
                <div class="product-info">
                  <h3 class="product-title">
                    <router-link :to="`/product/${product.id}`">{{ product.name }}</router-link>
                  </h3>
                  <div class="product-sku">Артикул: {{ product.article }}</div>
                  <div class="product-availability">В наличии / На складе</div>
                  <div class="product-price-block" v-if="product.oldPrice">
                    <div class="old-price-line">
                      <span class="old-price">{{ product.price }} ₽</span>
                    </div>
                    <div class="new-price"><span>Цена по акции:</span> {{ product.oldPrice }} ₽</div>
                    <div class="discount-block">
                      <span class="discount-label">Скидка:</span>
                      <span class="discount-value">{{ product.discount }} ₽</span>
                    </div>
                  </div>
                  <div v-else class="product-price">
                    <span class="price-value">{{ product.price }}</span>
                    <span class="price-currency">₽</span>
                  </div>
                  <button class="add-to-cart-btn" @click="addToCart(product)">
                    <img src="/images/Cart_white.svg" alt="cart">
                    В КОРЗИНУ
                  </button>
                </div>
              </div>
            </div>

            <div class="promo-grid">
              <div
                  v-for="product in promoProducts"
                  :key="product.id"
                  class="promo-card"
                  :class="{ 'has-shadow': product.isPromo }">
                <!-- Верхняя панель -->
                <div class="card-top-bar">
                  <button class="btn-details">Подробнее</button>
                  <div class="card-top-icons">
                    <button class="btn-favorite">
                      <img src="/images/Heart.svg" alt="Heart">
                    </button>
                    <button class="btn-favorite">
                      <img src="/images/Compare.svg" alt="Compare">
                    </button>
                  </div>
                </div>
                <!-- Изображение + бейджи -->
                <div class="product-image-wrapper">
                  <div v-if="product.isPromo" class="badge-hit-wrapper"></div>
                  <img :src="product.image" :alt="product.name" class="product-img1" @error="handleImageError">
                </div>
                <!-- Информация -->
                <div class="product-info1">
                  <h3 class="product-title">
                    <router-link :to="`/product/${product.id}`">{{ product.name }}</router-link>
                  </h3>
                  <div class="product-sku">Артикул: {{ product.article }}</div>
                  <div class="product-availability">В наличии / На складе</div>
                  <div class="product-price-block" v-if="product.oldPrice">
                    <div class="new-price">{{ product.price }} ₽</div>
                  </div>
                  <div v-else class="product-price">
                    <span class="price-value">{{ product.price }}</span>
                    <span class="price-currency">₽</span>
                  </div>
                  <button class="add-to-cart-btn" @click="addToCart(product)">
                    <img src="/images/Cart_white.svg" alt="cart">
                    В КОРЗИНУ
                  </button>
                </div>
              </div>
            </div>

            <div class="promo-grid">
              <div
                  v-for="product in promoProducts"
                  :key="product.id"
                  class="promo-card"
                  :class="{ 'has-shadow': product.isPromo }">
                <!-- Верхняя панель -->
                <div class="card-top-bar">
                  <button class="btn-details">Подробнее</button>
                  <div class="card-top-icons">
                    <button class="btn-favorite">
                      <img src="/images/Heart.svg" alt="Heart">
                    </button>
                    <button class="btn-favorite">
                      <img src="/images/Compare.svg" alt="Compare">
                    </button>
                  </div>
                </div>
                <!-- Изображение + бейджи -->
                <div class="product-image-wrapper">
                  <div v-if="product.isPromo" class="badge-hit-wrapper"></div>
                  <img :src="product.image" :alt="product.name" class="product-img1" @error="handleImageError">
                </div>
                <!-- Информация -->
                <div class="product-info1">
                  <h3 class="product-title">
                    <router-link :to="`/product/${product.id}`">{{ product.name }}</router-link>
                  </h3>
                  <div class="product-sku">Артикул: {{ product.article }}</div>
                  <div class="product-availability">В наличии / На складе</div>
                  <div class="product-price-block" v-if="product.oldPrice">
                    <div class="new-price">{{ product.price }} ₽</div>
                  </div>
                  <div v-else class="product-price">
                    <span class="price-value">{{ product.price }}</span>
                    <span class="price-currency">₽</span>
                  </div>
                  <button class="add-to-cart-btn" @click="addToCart(product)">
                    <img src="/images/Cart_white.svg" alt="cart">
                    В КОРЗИНУ
                  </button>
                </div>
              </div>
            </div>

            <div class="promo-grid">
              <div
                  v-for="product in promoProducts"
                  :key="product.id"
                  class="promo-card"
                  :class="{ 'has-shadow': product.isPromo }">
                <div class="product-image-wrapper">
                  <div v-if="product.isPromo" class="badge-promo-circle">
                    АКЦИЯ
                  </div>
                  <div v-if="product.isHit" class="badge-hit">
                    <div class="hit-circle">
                      <span class="hit-text">ХИТ<br>ПРОДАЖ</span>
                    </div>
                  </div>
                  <img :src="product.image" :alt="product.name" class="product-img" @error="handleImageError">
                </div>
                <div class="product-info">
                  <h3 class="product-title">
                    <router-link :to="`/product/${product.id}`">{{ product.name }}</router-link>
                  </h3>
                  <div class="product-sku">Артикул: {{ product.article }}</div>
                  <div class="product-availability">В наличии / На складе</div>
                  <div class="product-price-block" v-if="product.oldPrice">
                    <div class="old-price-line">
                      <span class="old-price">{{ product.price }} ₽</span>
                    </div>
                    <div class="new-price"><span>Цена по акции:</span> {{ product.oldPrice }} ₽</div>
                    <div class="discount-block">
                      <span class="discount-label">Скидка:</span>
                      <span class="discount-value">{{ product.discount }} ₽</span>
                    </div>
                  </div>
                  <div v-else class="product-price">
                    <span class="price-value">{{ product.price }}</span>
                    <span class="price-currency">₽</span>
                  </div>
                  <button class="add-to-cart-btn" @click="addToCart(product)">
                    <img src="/images/Cart_white.svg" alt="cart">
                    В КОРЗИНУ
                  </button>
                </div>
              </div>
            </div>

            <div class="promo-grid">
              <div
                  v-for="product in promoProducts"
                  :key="product.id"
                  class="promo-card"
                  :class="{ 'has-shadow': product.isPromo }">
                <!-- Верхняя панель -->
                <div class="card-top-bar">
                  <button class="btn-details">Подробнее</button>
                  <div class="card-top-icons">
                    <button class="btn-favorite">
                      <img src="/images/Heart.svg" alt="Heart">
                    </button>
                    <button class="btn-favorite">
                      <img src="/images/Compare.svg" alt="Compare">
                    </button>
                  </div>
                </div>
                <!-- Изображение + бейджи -->
                <div class="product-image-wrapper">
                  <div v-if="product.isPromo" class="badge-hit-wrapper"></div>
                  <img :src="product.image" :alt="product.name" class="product-img1" @error="handleImageError">
                </div>
                <!-- Информация -->
                <div class="product-info1">
                  <h3 class="product-title">
                    <router-link :to="`/product/${product.id}`">{{ product.name }}</router-link>
                  </h3>
                  <div class="product-sku">Артикул: {{ product.article }}</div>
                  <div class="product-availability">В наличии / На складе</div>
                  <div class="product-price-block" v-if="product.oldPrice">
                    <div class="new-price">{{ product.price }} ₽</div>
                  </div>
                  <div v-else class="product-price">
                    <span class="price-value">{{ product.price }}</span>
                    <span class="price-currency">₽</span>
                  </div>
                  <button class="add-to-cart-btn" @click="addToCart(product)">
                    <img src="/images/Cart_white.svg" alt="cart">
                    В КОРЗИНУ
                  </button>
                </div>
              </div>
            </div>

            <div class="promo-grid">
              <div
                  v-for="product in promoProducts"
                  :key="product.id"
                  class="promo-card"
                  :class="{ 'has-shadow': product.isPromo }">
                <div class="product-image-wrapper">
                  <div v-if="product.isPromo" class="badge-promo-circle">
                    АКЦИЯ
                  </div>
                  <div v-if="product.isHit" class="badge-hit">
                    <div class="hit-circle">
                      <span class="hit-text">ХИТ<br>ПРОДАЖ</span>
                    </div>
                  </div>
                  <img :src="product.image" :alt="product.name" class="product-img" @error="handleImageError">
                </div>
                <div class="product-info">
                  <h3 class="product-title">
                    <router-link :to="`/product/${product.id}`">{{ product.name }}</router-link>
                  </h3>
                  <div class="product-sku">Артикул: {{ product.article }}</div>
                  <div class="product-availability">В наличии / На складе</div>
                  <div class="product-price-block" v-if="product.oldPrice">
                    <div class="old-price-line">
                      <span class="old-price">{{ product.price }} ₽</span>
                    </div>
                    <div class="new-price"><span>Цена по акции:</span> {{ product.oldPrice }} ₽</div>
                    <div class="discount-block">
                      <span class="discount-label">Скидка:</span>
                      <span class="discount-value">{{ product.discount }} ₽</span>
                    </div>
                  </div>
                  <div v-else class="product-price">
                    <span class="price-value">{{ product.price }}</span>
                    <span class="price-currency">₽</span>
                  </div>
                  <button class="add-to-cart-btn" @click="addToCart(product)">
                    <img src="/images/Cart_white.svg" alt="cart">
                    В КОРЗИНУ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- Секция преимуществ -->
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

      <!-- Секция интеграции -->
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

      <!-- Карта и контакты -->
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
const categories = ref([])
const subcategories = ref([])
const allProducts = ref([])
const benefits = ref([])
const currentCategory = ref(null)
const priceFrom = ref(null)
const priceTo = ref(null)
const priceRange = ref(0)
const selectedBrands = ref([])
const sortBy = ref('popular')
const currentPage = ref(1)
const itemsPerPage = 16
const cartCount = ref(0)

const openFilters = ref({
  price: true,
  brand: true
})

const brands = ['ALCATEL', 'APPLE', 'ARIAN', 'ARK', 'ASUS', 'AUDIO-TECHNICA', 'BBK', 'BEATS', 'BELKIN']

const form = ref({
  name: '',
  phone: '',
  question: '',
  agree: false
})

function toggleFilter(filter) {
  openFilters.value[filter] = !openFilters.value[filter]
}

function handleImageError(event) {
  event.target.src = '/images/Product_cartridge.jpg'
}

async function loadData() {
  try {
    const response = await fetch('/data/products.json')
    const data = await response.json()
    categories.value = data.categories || []
    subcategories.value = data.subcategories || []
    allProducts.value = data.products || []
    benefits.value = data.benefits || []
  } catch (e) {
    console.error('Data load error:', e)
  }
}

watch(() => route.params.category, (newCategory) => {
  if (newCategory) {
    currentCategory.value = categories.value.find(c => c.link.includes(newCategory)) || null
  } else {
    currentCategory.value = null
  }
  currentPage.value = 1
}, { immediate: true })

const filteredProducts = computed(() => {
  let result = [...allProducts.value]
  if (currentCategory.value) {
    result = result.filter(p =>
        p.categoryLink === currentCategory.value.link.split('/').pop() ||
        p.subcategoryLink === currentCategory.value.link.split('/').pop()
    )
  }
  if (priceFrom.value) {
    result = result.filter(p => p.price >= priceFrom.value)
  }
  if (priceTo.value) {
    result = result.filter(p => p.price <= priceTo.value)
  }
  if (selectedBrands.value.length > 0) {
    result = result.filter(p => selectedBrands.value.includes(p.brand))
  }
  switch (sortBy.value) {
    case 'price':
      result.sort((a, b) => a.price - b.price)
      break
    case 'name':
      result.sort((a, b) => a.name.localeCompare(b.name))
      break
    case 'popular':
    default:
      result.sort((a, b) => b.id - a.id)
  }
  return result
})

const totalPages = computed(() => Math.ceil(filteredProducts.value.length / itemsPerPage))

const paginatedProducts = computed(() => {
  const end = currentPage.value * itemsPerPage
  return filteredProducts.value.slice(0, end)
})

const promoProducts = computed(() => {
  return allProducts.value.filter(p => p.isPromo || p.isHit).slice(0, 8)
})

function changePage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

function loadMore() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

function applyFilters() {
  currentPage.value = 1
}

function resetFilters() {
  priceFrom.value = null
  priceTo.value = null
  priceRange.value = 0
  selectedBrands.value = []
  sortBy.value = 'popular'
  currentPage.value = 1
}

function addToCart(product) {
  cartCount.value++
  alert(`Товар "${product.name}" добавлен в корзину`)
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
  loadData()
})
</script>

<style scoped>
/* Ссылка "Подробнее" в акциях */
.new-price span {
  font-family: 'Rubik', sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 149%;
  color: #000000;
}

/* Страница каталога */
.catalog-page {
  padding: 20px 0 60px;
  min-height: 100vh;
  background: #FFFFFF;
}

/* Хлебные крошки */
.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 0 20px;
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
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

/* Сетка макета */
.catalog-layout {
  display: grid;
  grid-template-columns: 453px 1fr;
  gap: 30px;
  align-items: start;
}

/* Боковая панель */
.sidebar {
  position: static;
  top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Меню каталога */
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
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
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

/* Панель фильтров */
.filter-panel {
  background: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0 0 28px rgba(0, 0, 0, 0.25);
  padding: 20px;
}

.filter-panel-title {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: #4A4D4A;
  margin: 0 0 15px;
}

.filter-section {
  margin-bottom: 15px;
}

.filter-section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #4A4D4A;
}

.filter-toggle {
  font-size: 14px;
  transition: transform 0.3s;
}

.filter-toggle.open {
  transform: rotate(180deg);
}

.filter-section-content {
  padding: 15px 0;
}

.price-inputs {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
}

.price-input {
  width: 100px;
  padding: 10px 12px;
  border: 1px solid #4A4D4A;
  border-radius: 4px;
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  font-size: 14px;
  outline: none;
}

.price-input:focus {
  border-color: #FFAF37;
}

.price-separator {
  font-size: 16px;
  color: #4A4D4A;
}

.price-range {
  margin-top: 15px;
}

.range-slider {
  width: 100%;
  margin-bottom: 10px;
}

.price-range-values {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #4A4D4A;
}

.brands-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 200px;
  overflow-y: auto;
}

.brand-checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #4A4D4A;
  cursor: pointer;
}

.brand-checkbox input {
  display: none;
}

.checkbox-custom {
  width: 18px;
  height: 18px;
  border: 1px solid #4A4D4A;
  border-radius: 3px;
  flex-shrink: 0;
  transition: all 0.3s;
}

.brand-checkbox input:checked + .checkbox-custom {
  background: #FFAF37;
  border-color: #FFAF37;
}

.filter-actions {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

.btn-filter {
  flex: 1;
  padding: 12px 20px;
  background: #FFAF37;
  color: #FFFFFF;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.3s;
}

.btn-filter:hover {
  opacity: 0.85;
}

.btn-reset {
  flex: 1;
  padding: 12px 20px;
  background: transparent;
  color: #4A4D4A;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  border: 1px solid #001569;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-reset:hover {
  background: #001569;
  color: #FFFFFF;
}

/* Основная область контента */
.catalog-main {
  min-width: 0;
}

/* Подкатегории */
.subcategories {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}

.subcategory-card {
  background: #F0F0FF;
  border: 0.4px solid #4A4D4A;
  border-radius: 6px;
  padding: 20px 15px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
}

.subcategory-card:hover {
  box-shadow: 0 0 28px rgba(0, 0, 0, 0.25);
  transform: translateY(-2px);
}

.subcategory-image {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.subcategory-image img {
  max-width: 80px;
  max-height: 80px;
  object-fit: contain;
}

.subcategory-name {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #4A4D4A;
  margin: 0;
  line-height: 1.3;
}

/* Панель сортировки */
.sort-bar {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  padding-bottom: 10px;
}

.sort-btn {
  background: none;
  border: none;
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #4A4D4A;
  cursor: pointer;
  padding: 5px 0;
  border-bottom: 2px solid transparent;
  transition: all 0.3s;
}

.sort-btn:hover {
  color: #FFAF37;
}

.sort-btn.active {
  color: #4A4D4A;
  border-bottom-color: #FFAF37;
}

/* Сетка товаров */
.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 40px;
}

.product-link {
  text-decoration: none;
  color: inherit;
}

.product-card {
  background: #FFFFFF;
  border: 0.4px solid #4A4D4A;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: box-shadow 0.3s;
}

.product-card:hover {
  box-shadow: 0 0 28px rgba(0, 0, 0, 0.25);
}

.product-image {
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FFFFFF;
  padding: 15px;
}

.product-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.product-info {
  padding: 15px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.product-title {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.3;
  text-align: center;
  color: #000000;
  margin: 0 0 8px 0;
  min-height: 36px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-title a {
  color: inherit;
  text-decoration: none;
}

.product-title a:hover {
  color: #FFAF37;
}

.product-sku {
  font-family: 'Rubik', sans-serif;
  font-weight: 300;
  font-size: 12px;
  color: #4A4D4A;
  text-align: center;
  margin-bottom: 8px;
}

.product-availability {
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  color: #000000;
  margin-bottom: 10px;
}

.product-price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 4px;
  margin-bottom: 15px;
}

.price-value {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 24px;
  color: #001569;
}

.price-currency {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 24px;
  color: #001569;
}

.add-to-cart-btn {
  width: 100%;
  height: 50px;
  background: #FFAF37;
  border: none;
  font-family: 'Rubik', sans-serif;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
  color: #FFFFFF;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: opacity 0.3s;
  border-radius: 4px;
}

.add-to-cart-btn:hover {
  opacity: 0.9;
}

.cart-icon {
  width: 24px;
  height: 24px;
}

/* Пагинация */
.pagination-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 60px;
}

.show-more-btn {
  width: 100%;
  max-width: 930px;
  height: 40px;
  background: #FFFFFF;
  border: 0.4px solid #4A4D4A;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #4A4D4A;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s;
}

.show-more-btn:hover {
  background: #F0F0FF;
}

.pagination {
  display: flex;
  align-items: center;
  gap: 5px;
}

.page-btn {
  width: 25px;
  height: 25px;
  background: #FFFFFF;
  border: none;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #4A4D4A;
  cursor: pointer;
  border-radius: 2px;
}

.page-btn.active {
  background: #1F347B;
  color: #FFFFFF;
}

.ellipsis {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #4A4D4A;
  padding: 0 5px;
}

.show-all-btn {
  font-family: 'Rubik', sans-serif;
  font-weight: 300;
  font-size: 10px;
  text-decoration-line: underline;
  color: #1F347B;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-left: 20px;
}

.arrow-right {
  transform: rotate(-90deg);
  font-size: 8px;
}

/* Секция акций */
.badge-promo-circle {
  position: absolute;
  left: 50px;
  top: 76px;
  width: 88px;
  height: 88px;
  background: #001569;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Rubik', sans-serif;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  line-height: 1.1;
  z-index: 3;
  transform: rotate(-6deg);
}

.badge-hit-wrapper {
  position: absolute;
  left: 20px;
  top: 82px;
  background: url("/images/Hit_sale.svg");
  border-radius: 50%;
  font-family: 'Rubik', sans-serif;
  font-weight: 700;
  z-index: 3;
  width: 100px;
  height: 100px;
}

.hit-text {
  display: block;
}

.discount-block {
  background: #E3E1FF;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 15px;
  color: #4A4D4A;
}

.promo-section {
  padding: 40px 0;
}

.promo-container {
  display: grid;
  grid-template-columns: 330px repeat(3, 1fr);
  gap: 25px;
  max-width: 1410px;
  margin: 0 auto;
}

.promo-sidebar {
  background: #FFFFFF;
  border: 1px solid #4A4D4A;
  border-radius: 6px;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 467px;
  width: 330px;
}

.sidebar-title-block {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  gap: 15px;
  margin-bottom: 48px;
}

.sidebar-title {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 25px;
  line-height: 1.23;
  color: #4A4D4A;
}

.sidebar-icon {
  width: 60px;
  height: 68px;
  flex-shrink: 0;
}

.sidebar-subtitle-block {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  gap: 15px;
}

.sidebar-subtitle {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 25px;
  line-height: 1.23;
  color: #4A4D4A;
}

.sidebar-star {
  width: 50px;
  height: 71px;
  flex-shrink: 0;
}

.promo-sidebar-footer {
  margin-top: auto;
  padding-top: 30px;
}

.view-all-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #4A4D4A;
  text-decoration: none;
  padding: 15px;
  border: none;
  transition: all 0.3s;
  margin-left: 100px;
  margin-top: 140px;
}

.view-all-link:hover {
  background: #F0F0FF;
}

.view-all-link .arrow-right {
  font-size: 16px;
  transition: transform 0.3s;
  transform: none;
}

.view-all-link:hover .arrow-right {
  transform: translateX(5px);
}

.promo-card {
  background: #FFFFFF;
  border: 1px solid #4A4D4A;
  border-radius: 6px;
  padding: 0 20px 20px 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 330px;
  height: 467px;
  box-sizing: border-box;
}

.promo-card.has-shadow {
  box-shadow: 0 0 28px rgba(0, 0, 0, 0.25);
}

.btn-details {
  position: absolute;
  top: 49px;
  left: 50%;
  transform: translateX(-50%);
  background: #FFFFFF;
  border: 1px solid #4A4D4A;
  padding: 10px 25px;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #4A4D4A;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s;
  z-index: 1;
  min-width: 150px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-details:hover {
  background: #F0F0FF;
}

.card-top-icons {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-end;
  z-index: 2;
  margin-top: 10px;
}

.btn-favorite {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 30px;
  height: 30px;
  transition: transform 0.3s;
  margin-top: 11px;
  margin-right: 30px;
}

.btn-favorite:hover {
  transform: scale(1.15);
}

.product-image-wrapper {
  position: relative;
  width: 100%;
  height: 143px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-img {
  margin-top: 12px;
  max-width: 114px;
  max-height: 143px;
  object-fit: contain;
}

.product-img1 {
  margin-top: 31px;
  max-width: 114px;
  max-height: 143px;
  object-fit: contain;
}

.product-info {
  padding: 15px;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
}

.product-info1 {
  padding: 15px;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  margin-top: 31px;
  gap: 7px;
}

.product-price-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-bottom: 15px;
  width: 100%;
}

.old-price {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: #1F347B;
  text-decoration: line-through;
  display: flex;
  align-items: baseline;
  gap: 2px;
  margin-bottom: 4px;
}

.new-price {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 24px;
  color: #001569;
  display: flex;
  align-items: baseline;
  gap: 2px;
}

.discount-block {
  background: #E3E1FF;
  width: 327px;
  padding: 4px 12px;
  border-radius: 4px;
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #4A4D4A;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 26px;
  box-sizing: border-box;
}

.discount-label {
  font-size: 14px;
}

.discount-value {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #4A4D4A;
}

/* Секция преимуществ */
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

/* Баннеры услуг */
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

.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 20px 40px;
  background: #FFAF37;
  border: none;
  font-family: 'Rubik', sans-serif;
  font-weight: 700;
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

/* Форма консультации */
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
  font-weight: 400;
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

/* Карта и контакты */
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
</style>