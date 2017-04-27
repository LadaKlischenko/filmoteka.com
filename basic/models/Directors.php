<?php
namespace app\models;
use yii\db\ActiveRecords;

class Directors extends ActiveRecords
{
	public $img;
   // public $link;

    public function afterFind() {
    	$this->img = "web/images/directors/".$this->Surname.".png";
    	//$this->link = "http://filmoteka.com/".this->Name;
	
}

}

?>