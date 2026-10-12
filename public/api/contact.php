<?php
require_once __DIR__ . '/config.php';

header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$raw = file_get_contents('php://input');
$body = json_decode($raw, true) ?: [];

$firstName = trim($body['firstName'] ?? '');
$lastName = trim($body['lastName'] ?? '');
$email = trim($body['email'] ?? '');
$phone = trim($body['phone'] ?? '');
$company = trim($body['company'] ?? '');
$message = trim($body['message'] ?? '');

if (empty($firstName) || empty($lastName) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['error' => 'First name, last name, email, and message are required.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address.']);
    exit;
}

// 1. Team Notification (Mazingira Day UI/UX layout)
$adminHtml = '
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>New Website Inquiry: ' . htmlspecialchars("$firstName $lastName") . '</title>
  <style>
    body { margin: 0 !important; padding: 0 !important; background: #f1f5f9; }
    table { border-collapse: collapse; }
    @media only screen and (max-width: 620px) {
      .email-shell { width: 100% !important; }
      .pad { padding-left: 20px !important; padding-right: 20px !important; }
      .masthead { padding: 24px 20px !important; }
      .main-title { font-size: 22px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif;color:#334155;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f1f5f9;">
    <tr>
      <td align="center" style="padding:24px 12px;">
        <table role="presentation" class="email-shell" width="680" cellpadding="0" cellspacing="0" border="0"
          style="width:680px;max-width:680px;background:#ffffff;border-radius:6px;overflow:hidden;box-shadow:0 4px 16px rgba(15,23,42,.10);">

          <!-- Masthead -->
          <tr>
            <td class="masthead" align="center" style="background:#166534;padding:32px 30px 28px;">
              <img src="' . AGRISCAN_LOGO . '" width="170" alt="AgriScanAI" style="display:block;width:170px;max-width:70%;height:auto;margin:0 auto 16px;" border="0">
              <span style="display:inline-block;background:rgba(255,255,255,0.12);color:#4ade80;border:1px solid rgba(74,222,128,0.35);padding:4px 14px;border-radius:20px;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:12px;">Website Contact Form</span>
              <h1 class="main-title" style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:24px;line-height:1.3;letter-spacing:-.3px;color:#ffffff;font-weight:800;">
                New Inquiry: ' . htmlspecialchars("$firstName $lastName") . '
              </h1>
            </td>
          </tr>

          <!-- Summary Box -->
          <tr>
            <td class="pad" style="padding:32px 40px 16px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                style="background:#f0fdf4;border:1px solid #bbf7d0;border-left:4px solid #166534;border-radius:4px;">
                <tr>
                  <td style="padding:16px 20px;">
                    <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#166534;font-weight:700;">
                      A new message has been submitted through the AgriScanAI website contact portal.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Sender Details Grid -->
          <tr>
            <td class="pad" style="padding:12px 40px 20px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding:14px 18px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:4px;">
                    <span style="font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;color:#166534;text-transform:uppercase;letter-spacing:1px;display:block;margin-bottom:4px;">Contact Name</span>
                    <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:700;color:#1e293b;">' . htmlspecialchars("$firstName $lastName") . '</p>
                  </td>
                </tr>
                <tr><td height="10" style="height:10px;font-size:1px;line-height:1px;">&nbsp;</td></tr>
                <tr>
                  <td style="padding:14px 18px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:4px;">
                    <span style="font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;color:#166534;text-transform:uppercase;letter-spacing:1px;display:block;margin-bottom:4px;">Email Address</span>
                    <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#1e293b;">
                      <a href="mailto:' . htmlspecialchars($email) . '" style="color:#166534;font-weight:700;text-decoration:underline;">' . htmlspecialchars($email) . '</a>
                    </p>
                  </td>
                </tr>
                <tr><td height="10" style="height:10px;font-size:1px;line-height:1px;">&nbsp;</td></tr>
                <tr>
                  <td style="padding:14px 18px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:4px;">
                    <span style="font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;color:#166534;text-transform:uppercase;letter-spacing:1px;display:block;margin-bottom:4px;">Phone Number</span>
                    <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#1e293b;">' . htmlspecialchars($phone ?: 'Not provided') . '</p>
                  </td>
                </tr>
                <tr><td height="10" style="height:10px;font-size:1px;line-height:1px;">&nbsp;</td></tr>
                <tr>
                  <td style="padding:14px 18px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:4px;">
                    <span style="font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;color:#166534;text-transform:uppercase;letter-spacing:1px;display:block;margin-bottom:4px;">Organization / Company</span>
                    <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#1e293b;">' . htmlspecialchars($company ?: 'Not provided') . '</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message Card -->
          <tr>
            <td class="pad" style="padding:10px 40px 28px;">
              <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:4px;padding:20px 22px;">
                <span style="font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;color:#166534;text-transform:uppercase;letter-spacing:1px;display:block;margin-bottom:10px;">Inquiry Message</span>
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.75;color:#334155;white-space:pre-wrap;">' . nl2br(htmlspecialchars($message)) . '</p>
              </div>
            </td>
          </tr>

          <!-- Direct Reply Button -->
          <tr>
            <td align="center" style="padding:0 40px 32px;">
              <a href="mailto:' . htmlspecialchars($email) . '?subject=RE: AgriScanAI Inquiry - ' . urlencode("$firstName $lastName") . '"
                style="display:inline-block;background:#166534;color:#ffffff;text-decoration:none;font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:700;padding:14px 34px;border-radius:4px;">
                &#9993; Reply Directly to ' . htmlspecialchars($firstName) . '
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="background:#166534;padding:28px 24px;">
              <img src="' . AGRISCAN_LOGO . '" width="112" alt="AgriScanAI" style="display:block;width:112px;max-width:45%;height:auto;margin:0 auto 14px;" border="0">
              <p style="margin:0 0 6px;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.6;color:#dcfce7;">
                Marsabit Plaza, Ngong Road, Nairobi | +254 711 085 400
              </p>
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11px;line-height:1.6;color:#bbf7d0;">
                &copy; 2026 AgriScanAI. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>';

$adminResult = sendResendEmail([
    'from' => SENDER_EMAIL,
    'to' => TEAM_NOTIFICATION_EMAILS,
    'reply_to' => $email,
    'subject' => "New Contact Inquiry: $firstName $lastName",
    'html' => $adminHtml
]);

if (!$adminResult['success']) {
    http_response_code(500);
    echo json_encode(['error' => $adminResult['data']['message'] ?? 'Failed to send message.']);
    exit;
}

// 2. User Auto-responder (Mazingira Day UI/UX layout)
$userHtml = '
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Thank You for Contacting AgriScanAI</title>
  <style>
    body { margin: 0 !important; padding: 0 !important; background: #f1f5f9; }
    table { border-collapse: collapse; }
    @media only screen and (max-width: 620px) {
      .email-shell { width: 100% !important; }
      .pad { padding-left: 20px !important; padding-right: 20px !important; }
      .masthead { padding: 24px 20px !important; }
      .main-title { font-size: 22px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif;color:#334155;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f1f5f9;">
    <tr>
      <td align="center" style="padding:24px 12px;">
        <table role="presentation" class="email-shell" width="680" cellpadding="0" cellspacing="0" border="0"
          style="width:680px;max-width:680px;background:#ffffff;border-radius:6px;overflow:hidden;box-shadow:0 4px 16px rgba(15,23,42,.10);">

          <!-- Masthead -->
          <tr>
            <td class="masthead" align="center" style="background:#166534;padding:32px 30px 28px;">
              <img src="' . AGRISCAN_LOGO . '" width="170" alt="AgriScanAI" style="display:block;width:170px;max-width:70%;height:auto;margin:0 auto 16px;" border="0">
              <span style="display:inline-block;background:rgba(255,255,255,0.12);color:#4ade80;border:1px solid rgba(74,222,128,0.35);padding:4px 14px;border-radius:20px;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:12px;">Message Received</span>
              <h1 class="main-title" style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:24px;line-height:1.3;letter-spacing:-.3px;color:#ffffff;font-weight:800;">
                Thank You for Contacting Us
              </h1>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td class="pad" style="padding:36px 40px 24px;">
              <p style="margin:0 0 16px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.7;color:#334155;font-weight:700;">
                Dear ' . htmlspecialchars($firstName) . ',
              </p>
              <p style="margin:0 0 20px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.8;color:#475569;">
                Thank you for reaching out to AgriScanAI. We have received your inquiry and our team is currently reviewing your message.
              </p>
              <p style="margin:0 0 24px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.8;color:#475569;">
                One of our agronomic advisory or partnerships specialists will get back to you shortly.
              </p>

              <!-- Highlight Box -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                style="background:#f0fdf4;border:1px solid #bbf7d0;border-left:4px solid #166534;border-radius:4px;margin-bottom:24px;">
                <tr>
                  <td style="padding:16px 20px;">
                    <p style="margin:0 0 6px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#166534;font-weight:700;">
                      Need immediate assistance?
                    </p>
                    <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:#475569;">
                      You can reply directly to this email or reach us at <a href="mailto:info@agriscanai.co.ke" style="color:#166534;font-weight:700;text-decoration:underline;">info@agriscanai.co.ke</a> or call <a href="tel:+254711085400" style="color:#166534;font-weight:700;text-decoration:underline;">+254 711 085 400</a>.
                    </p>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#64748b;">
                Warm regards,
              </p>
              <p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:700;color:#166534;">
                The AgriScanAI Team
              </p>
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#64748b;">
                AgriScanAI
              </p>
            </td>
          </tr>

          <!-- Visit Site Button -->
          <tr>
            <td align="center" style="padding:0 40px 32px;">
              <a href="https://agriscanai.co.ke" target="_blank"
                style="display:inline-block;background:#166534;color:#ffffff;text-decoration:none;font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:700;padding:14px 34px;border-radius:4px;">
                Visit AgriScanAI Website
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="background:#166534;padding:28px 24px;">
              <img src="' . AGRISCAN_LOGO . '" width="112" alt="AgriScanAI" style="display:block;width:112px;max-width:45%;height:auto;margin:0 auto 14px;" border="0">
              <p style="margin:0 0 6px;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.6;color:#dcfce7;">
                Marsabit Plaza, Ngong Road, Nairobi | +254 711 085 400
              </p>
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11px;line-height:1.6;color:#bbf7d0;">
                &copy; 2026 AgriScanAI. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>';

sendResendEmail([
    'from' => SENDER_EMAIL,
    'to' => [$email],
    'subject' => 'Thank you for contacting AgriScanAI',
    'html' => $userHtml
]);

http_response_code(200);
echo json_encode(['success' => true, 'id' => $adminResult['data']['id'] ?? null]);
