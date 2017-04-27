<?php

use yii\widgets\LinkPager;
$this->title="Reviews";
$this->registerMetaTag([
    'name' => 'reviews',
    'content' => 'Web Page is used to find all revies'
 ]);

$this->registerMetaTag([
    'name' => 'keywords',
    'content' => 'reviews, films, filmoteka'
 ]);
?> 

<div id = "post">
<?php  $number = 0; 
          foreach ($reviews as $review) {$number++; ?>
			<h1><?=$number ?>. <?=$review->ID_films?></h1>
	<h2>Rating: <?=$review->Rating?>out of 10</h2>		
	<p><?=$review->Review?></p>
    <p><?$review->ID_clients?></p>     
<?php } ?>
</div>

<?php include "form_review.php"; ?>