<?php
namespace app\models;
use yii\db\ActiveRecord;
use Yii;
class Films extends ActiveRecord
{
    public $img;
   // public $link;


    public function afterFind() {
    	$this->img = "web/images/films/".$this->img.".png";
    	//$this->link = "http://filmoteka.com/".this->Name;

    }

    // piblic static function setNumbers($posts) {
    //    $query = Films::find()->orderBy("Year")->all();
    //    fore

    // }

    // public function afterFind() {
    // 	$this->video = $this->youtube("{youtube:".this->video.",480,295}");
    // }

   // private function youtube($text) {
   // 	$reg = "/{youtube:([\w-_]*)?,(\d*)?,(\d*)?}i";
   // 	$text = preg_replace($reg, str_replace(array("%name%","%width%", "%height%"), array("\\1","\\2","\\3"), file_get_contents(Yii::basePath.Yii::$app->params["dir_tmpl"]."youtube.tpl")), $text);
   // 	return $text;
   // }
	
}



?>