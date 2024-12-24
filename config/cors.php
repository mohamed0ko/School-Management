<?php

return [

    'paths' => ['*'], // السماح بجميع المسارات

    'allowed_methods' => ['*'], // السماح بجميع الطرق

    'allowed_origins' => [
        env('FRONTEND_URL', 'http://localhost:3000'), // رابط تطبيق React الأساسي

    ],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'], // السماح بجميع الرؤوس

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => true, // السماح باستخدام ملفات تعريف الارتباط
];
