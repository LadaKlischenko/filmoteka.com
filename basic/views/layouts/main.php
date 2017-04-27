<?php

/* @var $this \yii\web\View */
/* @var $content string */

use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use app\assets\AppAsset;
use app\models\Films;
use yii\helpers\Url;

AppAsset::register($this);

$action = Yii::$app->controller->action->id;

?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">



<head>
                <link href="https://blog.myrusakov.ru/favicon.ico" rel="shortcut icon" type="image/x-icon">
                <link type="text/css" rel="stylesheet" href="/www/main.css">
            <link type="text/css" rel="stylesheet" href="/www/fancybox.css">
                <script id="facebook-jssdk" src="/www/all.js.Без названия"></script><script type="text/javascript" src="/www/jquery.js.Без названия"></script>
            <script type="text/javascript" src="/www/is_mobile.js.Без названия"></script>
            <script type="text/javascript" src="/www/openapi.js.Без названия"></script>
            <script type="text/javascript" src="/www/fancybox.js.Без названия"></script>
            <script type="text/javascript" src="/www/functions.js.Без названия"></script>


    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>



</head>
<body>
<?php $this->beginBody() ?>
        <div id="header">
        <ul class="menu">
    <li>
        <a href="<?=Yii::$app->urlManager->createUrl(["site/actors"])?>" <?php if ($action == "actors") { ?>class = "active" <?php } ?> >Actors</a>
    </li>
    <li>
        <a href="<?=Yii::$app->urlManager->createUrl(["site/contact"])?>" <?php if ($action == "contact") { ?>class = "active" <?php } ?>>contact</a>
    </li>
    <li>
        <a href="<?=Yii::$app->urlManager->createUrl(["site/login"])?>" <?php if ($action == "login") { ?>class = "active" <?php } ?>>login</a>
    </li>
    <li>
        <a href="<?=Yii::$app->urlManager->createUrl(["site/error"])?>" <?php if ($action == "error") { ?>class = "active" <?php } ?>>error</a>
    </li>
    <li>
        <a target="_blank" href="<?=Yii::$app->urlManager->createUrl(["site/index"])?>" <?php if ($action == "index") { ?>class = "active" <?php } ?>>Мой сайт</a>
    </li>
</ul>       <div class="clear"></div>
        <div id="header_title">
            <h2><a href="https://blog.myrusakov.ru/">Filmoteka</a></h2>
        </div>
        <div id="search">
            <form name="search" method="get" action="https://blog.myrusakov.ru/search.html">
                <div>
                    <input type="text" name="q" placeholder="Поиск">
                    <input type="image" src="/www/search_icon.png" alt="Поиск">
                </div>
            </form>
        </div>
        <div class="clear"></div>
    </div>
    <div id="content">
        <div class="clear"></div>
        <div id="bullets">
            <div class=""></div>
                        <div class="active"></div>
                        <div class=""></div>
                        <div class=""></div>
                        <div class=""></div>
                        <div class=""></div>
                        <div class=""></div>
                        <div class=""></div>
                        <div class=""></div>
                        <div class=""></div>
                        <div class=""></div>
                        <div class=""></div>
                        <div class=""></div>
                        <div class=""></div>
                        <div class=""></div>
                </div>
    </div>    
    
    <?=$content?>

        <div class="clear"></div>
    </div>
    <footer>
        <p>
            <img src="/www/logo_footer.png" alt="">
        </p>
        <p>
            <img src="/www/logo_arrow.png" alt="">
            <a href="https://blog.myrusakov.ru/"><span>Filmoteka</span></a>
        </p>
        <ul class="menu">
    <li>
        <a href="https://blog.myrusakov.ru/author.html">Actors</a>
    </li>
    <li>
        <a href="https://blog.myrusakov.ru/courses.html">Directors</a>
    </li>
    <li>
        <a href="https://blog.myrusakov.ru/reviews.html">Reviews</a>
    </li>
    <li>
        <a href="https://blog.myrusakov.ru/subscribe.html">Logg in</a>
    </li>
    <li>
        <a target="_blank" href="https://myrusakov.ru/">Мой сайт</a>
    </li>
    <li>
        <a href="https://blog.myrusakov.ru/sites.html">Сайты учеников</a>
    </li>
</ul>       <div class="clear"></div>
        <div id="copy">
            <p>© Blog.MyRusakov.ru 2017 г.</p>
            <p>ВСЕ ПРАВА ЗАЩИЩЕНЫ.</p>
        </div>
    </footer>

<div id="fb-root" class=" fb_reset"><div style="position: absolute; top: -10000px; height: 0px; width: 0px;"><div></div></div><div style="position: absolute; top: -10000px; height: 0px; width: 0px;"><div><iframe name="fb_xdm_frame_https" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" id="fb_xdm_frame_https" aria-hidden="true" title="Facebook Cross Domain Communication Frame" tabindex="-1" src="/www/87XNE1PC38r.html" style="border: none;"></iframe></div></div></div></body></html>
<?php $this->endPage() ?>
