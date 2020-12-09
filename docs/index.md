---
layout: default
title: Главная
---

<section class="title" style="background-image: url(/assets/images/src/Title/Background.jpg);" id="TitleBlock">
    <div class="title-container">
        <div class="title-desc">
            <p>Привет, меня зовут</p>
            <h1>Кирилл Ушаков</h1>
            <p>Веб-дизайнер, Верстальщик и Разработчик</p>
        </div>
    </div>
</section>
<section class="section portfolio" id="Portfolio">
    <div class="portfolio-container">
        <h2>Портфолио</h2>
        <div class="portfolio-list">
            {% assign sorted_works = site.works | where: 'show', true %}
            {% for work in sorted_works limit:site.works_to_show %}
                <article class="portfolio-item">
                    <a href="{{work.url}}">
                        <div class="portfolio-img">
                            {% if work.adapted %}
                                <div class="adapted-icon">
                                    <div class="svg">
                                        <svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                            width="14px" height="23px" viewBox="0 0 35 35" style="enable-background:new 0 0 35 35;" xml:space="preserve">
                                            <g>
                                                <path d="M25.302,0H9.698c-1.3,0-2.364,1.063-2.364,2.364v30.271C7.334,33.936,8.398,35,9.698,35h15.604
                                                    c1.3,0,2.364-1.062,2.364-2.364V2.364C27.666,1.063,26.602,0,25.302,0z M15.004,1.704h4.992c0.158,0,0.286,0.128,0.286,0.287
                                                    c0,0.158-0.128,0.286-0.286,0.286h-4.992c-0.158,0-0.286-0.128-0.286-0.286C14.718,1.832,14.846,1.704,15.004,1.704z M17.5,33.818
                                                    c-0.653,0-1.182-0.529-1.182-1.183s0.529-1.182,1.182-1.182s1.182,0.528,1.182,1.182S18.153,33.818,17.5,33.818z M26.021,30.625
                                                    H8.979V3.749h17.042V30.625z"/>
                                            </g>
                                        </svg>
                                    </div>
                                </div> 
                            {% endif %}
                            <img src="{{work.img_url}}" alt="{{work.name}}">
                        </div>
                        <div class="portfolio-desc">
                            <h3>{{work.name}}</h3>
                            <p>{{work.desc}}</p>
                        </div>
                    </a>
                </article>
            {% endfor %}
        </div>
        <a href="portfolio.html" class="portfolio-link">Все работы</a>
    </div>
</section>
<section class="section about" id="About">
    <div class="about-column about-column-autor">
        <div class="autor-img">
            <img src="/assets/images/src/About/Avatar.jpg" alt="Kirill Ushakov">
        </div>
    </div>
    <div class="about-column about-column-desc">
        <h2>Обо мне</h2>
        <div class="about-content">
            <div class="about-desc">
                <h3>Ушаков Кирилл</h3>
                <p>Частный HTML верстальщик</p>
                <p><b>Основная специализация: </b>верстка сайтов, интернет-магазинов и Landing Page (фиксированная, резиновая, адаптивная) c посадкой на CMS. Работаю удаленно.</p>
                <p>Ответственный, находчивый, исполнительный, в процессе обдумываю каждую деталь и создаю максимально чистый код для решения текущей задачи.</p>
            </div>
            <a href="portfolio.html" class="order-link">Портфолио</a>
        </div>
    </div>
</section>
<section class="section reviews" id="Reviews">
    <div class="reviews-container">
        <h2>Последние Отзывы</h2>
        <div class="reviews-list">
            {% for work in site.data.reviews limit:site.reviews_to_show %}
                <div class="reviews-item">
                    <p class="reviews-title">{{work.name}}</p>
                    <p>{{work.review}}</p>
                </div>
            {% endfor %}
        </div>
    </div>
</section>

