<?php

$con= mysqli_connect("localhost","root","","tech_box_db");

$con_insert=mysqli_connect("localhost","root","","insert_product_db");
if(!$con || !$con_insert)
{
    die("Connection Failed...");
}