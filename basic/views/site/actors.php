<?php

use yii\widgets\LinkPager;
$this->title="Personal page of Filmoteka";
$this->registerMetaTag([
    'name' => 'actors',
    'content' => 'Web Page is used to find all nessasery info about actors'
 ]);

$this->registerMetaTag([
    'name' => 'keywords',
    'content' => 'actors, films filmoteka'
 ]);
?> 


<div id = "post">
          <?php $number = 0; 
          foreach ($actors as $actor) {$number++; ?>
 			<h1><?=$number ?>. <?=$actor->Surname?> <?=$actor->Name?></h1>

         <div class = "post_info">
            <img src="<?=$actor->img?>" alt="<?=$actor->Name?>" />        
        <div class="text">
            <p><h3>Year of birth: <?=$actor->YearOfBirth ?></h3></p>        </div>
        <div class="more">
           <p> <h2>Country: <?=$actor->Country ?>$</h2></p>
           <p><h2>Films: name of films</h2></p></div>

            <div class="clear"></div>
            </div>


          	<?php } ?>


</div>

</body>

