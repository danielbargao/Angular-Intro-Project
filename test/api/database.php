<?php

session_start();

if($_SESSION && $_SESSION['user'] == 'admin') {
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