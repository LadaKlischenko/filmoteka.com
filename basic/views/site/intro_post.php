<div class="post">
                <h1>Назва фільму <?=$post->Name ?></h1>
          <div class = "post_info">
            <img src="<?=$post->img?>" alt="<?=$post->Name?>" />
        
        <div class="text">
            <p><h3>Description: <?=$post->description ?></h3></p>        </div>
        <div class="more">
           <p> <h2>Budget: <?=$post->Budget ?>$</h2></p>
           <p> <h2>Time of film: <?=$post->TimeOfFilm ?> хв</h2></p>
           <p><h2>Year: <?=$post->Year ?></h2></p></div>

            <div class="clear"></div>
            </div>
     </div>