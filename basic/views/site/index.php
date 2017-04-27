<?php

use yii\widgets\LinkPager;
$this->title="Personal page of Filmoteka";
$this->registerMetaTag([
    'name' => 'description',
    'content' => 'Web Page is used to find all nessasery info about films'
 ]);

$this->registerMetaTag([
    'name' => 'keywords',
    'content' => 'Films, actors, directors, genres, filmoteka'
 ]);
?> 

<?php 

    foreach ($posts as $post) {
        include "intro_post.php";
    }

?>

<div id="pages">
        <?= LinkPager::widget ([
              'pagination' => $pagination,
              'firstPageLabel' => 'To the begining',
              'lastPageLabel' => 'To the last page',
              'prevPageLabel' => '&laquo;'
            ]) ?>
        
        <div class="clear"></div>
        </div>
    </div>