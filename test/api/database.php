<?php

session_start();

$username = $_SESSION['user'];

if($username == 'admin') {
    echo '{
        "message": "This is a secret message only for administrator",
        "success": true
    }';
} else {
    echo '{
        "message": "Who the f are you",
        "success": false
    }';
}

?>