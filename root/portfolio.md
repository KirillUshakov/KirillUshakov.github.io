---
layout: default
title: Портфолио
---

<section class="section potfolio portfolio-main">
    <div class="portfolio-container">
        <h1>Портфолио</h1>
        <div class="portfolio-list">
            {% for work in site.works %}
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
            {% endfor %}
        </div>
    </div>
</section>
