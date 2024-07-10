
export const ENVIRONMENTS = {
    PROD: "PRODUCTION",
    PREPROD: "PREPRODUCTION",
    DEV: "DEVELOP"
  }
  
  export const ACTIVED_ENVIRONMENT = ENVIRONMENTS.DEV;
  
  // Api URL
  export const API_URL = ACTIVED_ENVIRONMENT === ENVIRONMENTS.PROD ? 
  'https://api.woowfix.com.ec/' :  ACTIVED_ENVIRONMENT === ENVIRONMENTS.PREPROD ? 
  'https://api.woowfix.preprod.com/' : 'http://localhost:8082/';
  
  
  // Bad request
  export const BAD_REQUEST = 400;
  
  // Login
  export const EXPIRED_TOKEN = 'Expired token';
  export const REQUIRED_TOKEN = 'Required token';

  export const GRANT_TYPE = 'password';
  export const CLIENT_ID = 'backend-microservice';
  export const CLIENT_SECRET = 'tEE2R53BidRMSUD8D4NAEKImWOVHNsvp';
  
  
  // Otp
  export const START_OTP_TIME = 'START_OTP_TIME';
  export const OTP_TIME_EXPIRED_IN = 300;
  
  export const COUNTRY = 'ec';

  export const TRANSLATE = {
    ES: {
      TAG_LOGIN: "Iniciar sesión",
      TAG_REGISTER_IN: "Regístrate",
      TAG_EMAIL: "Correo electrónico",
      TAG_PASSWORD: "Contraseña",
      TAG_LOG: "Ingresar",
      TAG_CAR_DATA: "Datos de tu vehículo",
      TAG_SKIP: "Omitir",
      MESSAGE_FORGOT_PASSWORD: "Olvidaste tu contraseña",
      MESSAGE_NO_ACCOUNT_YET: "Aun no tienes cuenta",
      MESSAGE_EMAIL_EXAMPLE: "Ej: tu@email.com",
      MESSAGE_PASSWORD: "Ingresa tu contraseña",
      MESSAGE_LOGIN_LIKE: "Iniciar sesión con",
      MESSAGE_EMAIL_REQUIRED: "Correo electrónico requerido",
      MESSAGE_PASSWORD_REQUIRED: "Contraseña requerida",
      MESSAGE_PASSWORD_MIN: "Contraseña mínimo 8 caracteres",
      MESSAGE_PASSWORD_MAX: "Contraseña máximo 32 caracteres",
    },
    EN: {
      TAG_LOGIN: "Login",
      TAG_REGISTER_IN: "Register",
      TAG_EMAIL: "Email",
      TAG_PASSWORD: "Password",
      TAG_LOG: "Login",
      TAG_CAR_DATA: "Your vehicle details",
      TAG_SKIP: "Skip",
      MESSAGE_FORGOT_PASSWORD: "Forgot password",
      MESSAGE_NO_ACCOUNT_YET: "No account yet",
      MESSAGE_EMAIL_EXAMPLE: "Ex: your@email.com",
      MESSAGE_PASSWORD: "Enter your password",
      MESSAGE_LOGIN_LIKE: "Login with",
      MESSAGE_EMAIL_REQUIRED: "Email required",
      MESSAGE_PASSWORD_REQUIRED: "Password required",
      MESSAGE_PASSWORD_MIN: "Password at least 8 characters",
      MESSAGE_PASSWORD_MAX: "Password max. 32 characters",
    },
    
  }

  export const BOOKING_STATUS = {
    PENDING: "PENDING",
    CONFIRMED: "CONFIRMED",
    PAID: "PAID",
    REJECTED: "REJECTED",
  }