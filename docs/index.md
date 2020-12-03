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
            {% for work in site.works %}
                {% if forloop.index <= site.works_to_show %}
                    <article class="portfolio-item">
                        <a href="{{work.url}}">
                            <div class="portfolio-img">
                                <img src="{{work.img_url}}" alt="Trivago">
                            </div>
                            <div class="portfolio-desc">
                                <h3>{{work.name}}</h3>
                                <p>{{work.desc}}</p>
                            </div>
                        </a>
                    </article>
                {% endif %}
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
            <a href="#" class="order-link" data_scroll="Order">Заказать работу</a>
        </div>
    </div>
</section>
<section class="section reviews" id="Reviews">
    <div class="reviews-container">
        <h2>Последние Отзывы</h2>
        <div class="reviews-list">
            {% for work in site.data.reviews %}
                {% if forloop.index <= site.reviews_to_show %}
                    <div class="reviews-item">
                        <p class="reviews-title">{{work.name}}</p>
                        <p>{{work.review}}</p>
                    </div>
                {% endif %}
            {% endfor %}
        </div>
    </div>
</section>
<section class="section contact" id="Contact">
    <div class="contact-container">
        <h2>Контакты</h2>
        <div class="contact-content">
            <div class="contact-item">
                <p class="contact-title">E-mail</p>
                <p>k.ushakov@ankama.ru</p>
            </div>
            <div class="contact-item">
                <ul class="list social-list">
                    {% for item in site.data.social %}
                        <li>
                            <a href="{{item.link}}"  target="_blank" title="{{item.name}}">
                                <span class="svg">
                                    {{item.svg}}
                                </span>
                            </a>
                        </li>
                    {% endfor %}
                </ul>
            </div>
        </div>
    </div>
</section>

