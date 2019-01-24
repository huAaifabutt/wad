
<?php

require  "C:/xampp/htdocs/WAD/pro/database/db_connection.php";
function getCat()
{
    global $con;
    $getCatQuery="select * from catagory";
    $getcatResults=mysqli_query($con,$getCatQuery);
    while($row=mysqli_fetch_assoc($getcatResults))
    {
        $id=$row["cat_id"];
        $title=$row["cat_title"];
        echo "<li> <a class=\"nav-link\"  href=\"#\">$title</a></li>";
    }
}
function getBrands()
{
    global $con;
    $getBrandQuery="select * from brand";
    $getBandResults=mysqli_query($con,$getBrandQuery);
    while($row=mysqli_fetch_assoc($getBandResults))
    {
        $id=$row["Brand_id"];
        $title=$row["Brand_title"];
        echo "<li><a class=\"nav-link\" href=\"#\">$title</a></li>";
    }
}

function getCatFromInsertProduct()
{
    global $con_insert;
    $getCatQuery="select * from catagory";
    $getCatResults=mysqli_query($con_insert,$getCatQuery);
    while($row=mysqli_fetch_assoc($getCatResults))
    {
        $id=$row["cat_id"];
        $title=$row["cat_title"];
        echo "<option>$title</option>";
    }
}
function getBrandsFromInsertProduct()
{
    global $con_insert;
    $getBrandQuery="select * from brand";
    $getBandResults=mysqli_query($con_insert,$getBrandQuery);
    while($row=mysqli_fetch_assoc($getBandResults))
    {
        $title=$row["brand_title"];
        echo "<option>$title</option>";
    }
}


