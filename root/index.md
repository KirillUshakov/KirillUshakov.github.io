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
            <img src="/assets/images/src/Portfolio/Sport.jpg" alt="Kirill Ushakov">
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
<section class="section order" id="Order">
    <div class="order-container">
        <h2>Заказать работу</h2>
        <form action="#" method="POST" class="order-form" id="order-form">
            <div class="order-inputs">
                <div class="form-error">
                    <p>Сообщение успешно отправлено</p>
                </div>
                <input type="text" name="user-name" placeholder="Имя" required>
                <input type="email" name="user-email" placeholder="Email" id="UserEmail" required>
                <textarea name="user-comment" placeholder="Описание" required></textarea>
            </div>
            <button type="submit" class="btn order-btn">Отправить</button>
        </form>
        <div class="contacts">
            <ul class="list social-list">
                <li>
                    <a href="#" title="GitHub">
                        <span class="svg">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="#eaeaea" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.96694 11.2296C6.61057 11.2296 6.30569 11.394 6.06065 11.7309C5.81491 12.0621 5.69354 12.472 5.69354 12.9587C5.69354 13.4459 5.81721 13.8574 6.06065 14.1895C6.30569 14.5231 6.60905 14.6884 6.96694 14.6884C7.29874 14.6884 7.58761 14.5216 7.83104 14.1895C8.07601 13.8574 8.19815 13.4459 8.19815 12.9587C8.19815 12.4736 8.07448 12.063 7.83104 11.7309C7.58757 11.3955 7.30108 11.2296 6.96694 11.2296Z" />
                                <path d="M13.073 11.2296C12.7196 11.2296 12.4131 11.394 12.1674 11.7309C11.9224 12.0621 11.8018 12.472 11.8018 12.9587C11.8018 13.4459 11.9263 13.8574 12.1674 14.1895C12.4131 14.5231 12.7181 14.6884 13.073 14.6884C13.4063 14.6884 13.6943 14.5216 13.9393 14.1895C14.1851 13.8574 14.3072 13.4459 14.3072 12.9587C14.3072 12.4736 14.1836 12.063 13.9393 11.7309C13.6943 11.3955 13.4101 11.2296 13.073 11.2296Z" />
                                <path d="M17.4132 6.71875H17.4109C17.4109 6.71875 17.52 6.16156 17.4231 5.18828C17.3379 4.215 17.1313 3.31961 16.7933 2.5C16.7933 2.5 16.6206 2.52969 16.2949 2.61313C15.9692 2.69656 15.4324 2.85918 14.6957 3.19C13.9715 3.52359 13.2119 3.96297 12.4185 4.49879C11.8793 4.34512 11.0745 4.2668 9.99687 4.2668C8.96996 4.2668 8.1643 4.34539 7.5759 4.49902C5.83402 3.29359 4.37934 2.62617 3.1973 2.5C2.8616 3.31961 2.655 4.2184 2.57055 5.19414C2.47687 6.16832 2.58742 6.73043 2.58742 6.73043C1.6398 7.7559 1.25 9.23988 1.25 10.4607C1.25 11.4077 1.2757 12.2606 1.48926 13.0185C1.7066 13.7728 1.98387 14.3907 2.3134 14.863C2.64977 15.3365 3.05605 15.7532 3.54684 16.1106C4.03383 16.4745 4.48387 16.7341 4.89016 16.9003C5.29879 17.0711 5.76418 17.1973 6.2957 17.2855C6.81641 17.3787 7.21125 17.4279 7.48621 17.4416C7.48621 17.4416 8.57996 17.5 10 17.5C11.4201 17.5 12.5116 17.4416 12.5116 17.4416C12.7858 17.4279 13.1813 17.3778 13.7043 17.2855C14.2335 17.1957 14.7013 17.0665 15.1083 16.9003C15.5146 16.7326 15.9654 16.4745 16.4547 16.1106C16.9439 15.7578 17.3495 15.3396 17.6859 14.863C18.0154 14.3907 18.2911 13.7728 18.51 13.0185C18.7243 12.2606 18.7501 11.4019 18.7501 10.4548C18.75 9.27301 18.3587 7.77344 17.4132 6.71875ZM14.8587 15.8455C13.7704 16.3569 12.1674 16.5625 10.0414 16.5625L9.95773 16.561C7.83105 16.561 6.2327 16.356 5.15898 15.8418C4.08445 15.3304 3.54684 14.2771 3.54684 12.688C3.54684 11.7376 3.88168 10.9696 4.54223 10.3791C4.82949 10.1246 5.18434 9.94871 5.62211 9.84332C6.05684 9.7434 6.45625 9.73543 6.83184 9.74703C7.19895 9.76324 7.71273 9.83281 8.36871 9.88234C9.02457 9.93301 9.51309 10 10 10C10.457 10 11.063 9.92356 12.0353 9.84535C13.0115 9.76836 13.7343 9.7293 14.202 9.80629C14.682 9.88449 15.0999 10.0486 15.457 10.3821C16.1498 10.9974 16.4962 11.7691 16.4962 12.6901C16.4961 14.2786 15.9439 15.3335 14.8587 15.8455Z" />
                            </svg>
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#" title="Facebook">
                        <span class="svg">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="#eaeaea" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5489 20V10.8777H14.6096L15.0688 7.32156H11.5489V5.05147C11.5489 4.0222 11.8335 3.32076 13.3112 3.32076L15.1927 3.31999V0.13923C14.8673 0.0969453 13.7504 0 12.4504 0C9.7358 0 7.87733 1.65697 7.87733 4.69927V7.32156H4.80731V10.8777H7.87733V20H11.5489Z" />
                            </svg>
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#" title="Vkontacte">
                        <span class="svg">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="#eaeaea" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0)">
                                <path d="M19.8216 14.4726C19.7678 14.3825 19.4353 13.66 17.8352 12.1749C16.1601 10.6198 16.3851 10.8723 18.4027 8.18333C19.6316 6.54571 20.1229 5.54564 19.9691 5.11811C19.8228 4.71058 18.919 4.81808 18.919 4.81808L15.9138 4.83559C15.9138 4.83559 15.6913 4.80558 15.525 4.90434C15.3638 5.00185 15.26 5.22686 15.26 5.22686C15.26 5.22686 14.7837 6.49446 14.1487 7.57204C12.8098 9.84596 12.2735 9.96597 12.0548 9.82471C11.546 9.49593 11.6735 8.50211 11.6735 7.79706C11.6735 5.59314 12.0073 4.67432 11.0222 4.43681C10.6947 4.35805 10.4547 4.30555 9.61835 4.2968C8.54577 4.28554 7.63696 4.30055 7.12317 4.55181C6.78065 4.71933 6.51688 5.09311 6.67814 5.11436C6.8769 5.14061 7.32694 5.23562 7.5657 5.56064C7.87448 5.97942 7.86322 6.92199 7.86322 6.92199C7.86322 6.92199 8.04074 9.51593 7.44944 9.83846C7.04317 10.0597 6.48687 9.60844 5.29304 7.54454C4.68174 6.48821 4.21921 5.31937 4.21921 5.31937C4.21921 5.31937 4.13046 5.10186 3.97169 4.9856C3.77918 4.84434 3.50916 4.79933 3.50916 4.79933L0.651454 4.81683C0.651454 4.81683 0.222673 4.82934 0.0651617 5.0156C-0.0748484 5.18186 0.0539109 5.52439 0.0539109 5.52439C0.0539109 5.52439 2.29157 10.7585 4.82426 13.3975C7.14817 15.8164 9.78586 15.6576 9.78586 15.6576H10.981C10.981 15.6576 11.3422 15.6176 11.526 15.4189C11.696 15.2364 11.6898 14.8938 11.6898 14.8938C11.6898 14.8938 11.666 13.29 12.4111 13.0537C13.1449 12.8212 14.0874 14.6038 15.0862 15.2901C15.8413 15.8089 16.4151 15.6951 16.4151 15.6951L19.0865 15.6576C19.0865 15.6576 20.4841 15.5714 19.8216 14.4726Z"/>
                                </g>
                                <defs>
                                <clipPath id="clip0">
                                <rect width="20" height="20"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </span>		
                    </a>
                </li>
            </ul>
            <p>cool.ushackov2016@yandex.ru</p>
        </div>
    </div>
</section>
