<?php
header('Access-Control-Allow-Origin: '.$_SERVER['HTTP_ORIGIN']);
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

ini_set('user_agent', 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.9) Gecko/20071025 Firefox/2.0.0.9');
function send_email() { 
    try {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
        curl_setopt($ch, CURLOPT_USERPWD, 'api:key-3i6ua0gjx03kshfdjlaw6b-logwpl5p9');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
        curl_setopt($ch, CURLOPT_URL, 
            'https://api.mailgun.net/v2/e9server.com/messages');
            curl_setopt($ch, CURLOPT_POSTFIELDS, 
            array('from' => 'Cab9 Website <info@e9server.com>',
                'to' => $_POST["to"],
                'subject' => $_POST["subject"],
                // 'text' => 'Debug'));
                'html' =>   $_POST["content"]
            )
        );

        $result = curl_exec($ch);
        curl_close($ch);
        return $result;
    } 
    catch (Exception $e) 
    { 
        echo 'Caught exception: ',  $e->getMessage(), "\n";
    } 
}

if($_SERVER['REQUEST_METHOD'] == 'POST')
{
  echo send_email();
}
?>