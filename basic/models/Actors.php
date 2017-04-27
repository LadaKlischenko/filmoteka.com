<?php
namespace app\models;
use yii\db\ActiveRecords;

class Actors extends ActiveRecords
{

		public $img;
   // public $link;

    public function afterFind() {
    	$this->img = "web/images/actors/".$this->Surname.".png";
    	//$this->link = "http://filmoteka.com/".this->Name;
	
}
}



?>