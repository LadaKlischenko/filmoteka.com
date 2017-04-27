<?php
$connection = mysqli_connect("127.0.0.1","root","","Filmoteka");

if( $connection == false) {
	echo "Can not connect to Filmoteka";
	echo mysqli_connect_error();
	exit();
}
//else {echo "Привет You have successefully connected to Filmoteka!";}


$result = mysqli_query($connection, "SELECT * FROM films");

if( mysqli_num_rows($result) == 0) {
	echo "No data!" ;
}
else {
	?>
<ul>
	<?php
		while( ($cat = mysqli_fetch_assoc($result)) )
		{
			echo '<li>' . $cat['Name'] . '</li>';
		}
	?>
</ul>
<?php
}
?>


<?php
	mysqli_close($connection);
?>