<?php
$myfile = fopen($_POST["elementId"] . ".dat", "w") or die("Unable to open file!");
fwrite($myfile, $_POST["data"]);
fclose($myfile);
?>