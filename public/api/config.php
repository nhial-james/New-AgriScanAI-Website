<?php
// AgriScanAI Resend Configuration for HostAfrica
require_once __DIR__ . '/logo.php';

function getEnvValue($key, $default = '') {
    $val = getenv($key);
    if ($val !== false && $val !== '') return $val;
    
    $paths = [__DIR__ . '/.env', __DIR__ . '/../.env', __DIR__ . '/../../.env'];
    foreach ($paths as $path) {
        if (file_exists($path)) {
            $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
            foreach ($lines as $line) {
                $line = trim($line);
                if (empty($line) || strpos($line, '#') === 0) continue;
                if (strpos($line, '=') !== false) {
                    list($k, $v) = explode('=', $line, 2);
                    if (trim($k) === $key) {
                        return trim($v, " \t\n\r\0\x0B\"'");
                    }
                }
            }
        }
    }
    return $default;
}

define('RESEND_API_KEY', getEnvValue('RESEND_API_KEY', ''));
define('SENDER_EMAIL', getEnvValue('SENDER_EMAIL', 'AgriScanAI <info@agriscanai.co.ke>'));
define('RECEIVER_EMAIL', getEnvValue('CONTACT_RECEIVER_EMAIL', 'info@agriscanai.co.ke'));

const TEAM_NOTIFICATION_EMAILS = [
    'info@agriscanai.co.ke',
    'james@goodpartnerske.org',
    'mercy@goodpartnerske.org',
    'elizabeth@goodpartnerske.org',
    'lizakaren@goodpartnerske.org'
];

function sendResendEmail($payload) {
    $ch = curl_init('https://api.resend.com/emails');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Authorization: Bearer ' . RESEND_API_KEY,
        'Content-Type: application/json',
        'User-Agent: AgriScanAI-Web/1.0'
    ]);
    curl_setopt($ch, CURLOPT_TIMEOUT, 15);
    
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlError = curl_error($ch);
    curl_close($ch);
    
    if ($curlError) {
        return ['success' => false, 'error' => $curlError, 'code' => 500];
    }
    
    $decoded = json_decode($response, true);
    return [
        'success' => ($httpCode >= 200 && $httpCode < 300),
        'code' => $httpCode,
        'data' => $decoded
    ];
}
