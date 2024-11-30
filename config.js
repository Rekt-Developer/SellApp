// Configuration settings for SellApp
const config = {
    // Application settings
    appName: 'SellApp',
    version: '1.0.0',
    
    // Server settings
    port: process.env.PORT || 3000,
    
    // Database settings
    database: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        name: process.env.DB_NAME || 'sellapp_db',
        user: process.env.DB_USER || 'admin',
        password: process.env.DB_PASSWORD || 'password'
    },
    
    // API settings
    apiVersion: 'v1',
    apiBaseUrl: '/api',
    
    // Authentication settings
    jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
    jwtExpiresIn: '1d',
    
    // Email settings
    smtp: {
        host: process.env.SMTP_HOST || 'smtp.example.com',
        port: process.env.SMTP_PORT || 587,
        secure: false,
        auth: {
            user: process.env.SMTP_USER || 'your-email@example.com',
            pass: process.env.SMTP_PASS || 'your-email-password'
        }
    },
    
    // Payment gateway settings (example for Stripe)
    stripe: {
        secretKey: process.env.STRIPE_SECRET_KEY || 'your-stripe-secret-key',
        publicKey: process.env.STRIPE_PUBLIC_KEY || 'your-stripe-public-key',
        webhookSecret: process.env.STRIPE_WEBHOOK_SECRET || 'your-stripe-webhook-secret'
    },
    
    // File upload settings
    uploads: {
        maxFileSize: 5 * 1024 * 1024, // 5MB
        allowedMimeTypes: ['image/jpeg', 'image/png', 'image/gif', 'application/pdf']
    },
    
    // Logging settings
    logging: {
        level: process.env.LOG_LEVEL || 'info',
        file: 'logs/app.log'
    }
};

export default config;

