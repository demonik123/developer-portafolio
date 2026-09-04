# Developer Portfolio 🚀

Un portafolio web moderno y responsivo construido con **Next.js**, diseñado para mostrar proyectos, habilidades, experiencia y educación de un desarrollador full stack.

## ✨ Características

- **Multi-idioma**: Soporte completo para español, inglés y portugués usando `next-intl`
- **Tema Oscuro/Claro**: Toggle de tema con persistencia
- **Formulario de Contacto**: Integración con Telegram, Gmail y email
- **Verificación reCAPTCHA**: Protección contra spam en formularios
- **Animaciones**: Animaciones suaves con Lottie React
- **Blog**: Sección de blog integrada
- **Responsivo**: Diseño mobile-first adaptable a todos los dispositivos
- **SEO Optimizado**: Metadatos y estructura optimizada para motores de búsqueda
- **Docker**: Contenedores para desarrollo y producción

## 🛠️ Stack Tecnológico

### Frontend

- **Next.js** 16.0.10 - Framework React moderno
- **React** 19.2.3 - Librería de UI
- **Tailwind CSS** 4.1.16 - Framework de estilos
- **SASS** 1.69.5 - Preprocesador CSS
- **Lottie React** 2.4.1 - Animaciones JSON
- **React Icons** 4.11.0 - Iconos vectoriales
- **React Toastify** 10.0.4 - Notificaciones

### Backend & API

- **Nodemailer** 6.9.15 - Envío de emails
- **Axios** 1.6.8 - Cliente HTTP
- **React Google reCAPTCHA** 3.1.0 - Verificación anti-spam

### Internacionalización

- **next-intl** 4.7.0 - Gestión de idiomas

## 📦 Dependencias Principales

```json
{
  "dependencies": {
    "next": "16.0.10",
    "react": "19.2.3",
    "tailwindcss": "latest",
    "next-intl": "4.7.0",
    "nodemailer": "6.9.15",
    "lottie-react": "2.4.1"
  }
}
```

## 🚀 Inicio Rápido

### Requisitos Previos

- Node.js >= 18.x
- pnpm (recomendado) o npm

### Instalación

1. **Clonar el repositorio**

```bash
git clone <repository-url>
cd developer-portfolio
```

2. **Instalar dependencias**

```bash
pnpm install
# o
npm install
```

3. **Configurar variables de entorno**

Crear un archivo `.env.local` en la raíz del proyecto:

```env
# Email Configuration
EMAIL_ADDRESS=tu_email@gmail.com
GMAIL_PASSKEY=tu_contraseña_app_gmail

# Telegram Configuration
TELEGRAM_BOT_TOKEN=tu_bot_token
TELEGRAM_CHAT_ID=tu_chat_id

# Google reCAPTCHA
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=tu_site_key
RECAPTCHA_SECRET_KEY=tu_secret_key
```

### Desarrollo

```bash
pnpm dev
# o
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

### Build para Producción

```bash
pnpm build
pnpm start
# o
npm run build
npm run start
```

## 🐳 Docker

### Desarrollo

```bash
docker-compose up
```

El contenedor de desarrollo usa `Dockerfile.dev` con hot reload.

### Producción

```bash
docker build -f Dockerfile.prod -t developer-portfolio:latest .
docker run -p 3000:3000 developer-portfolio:latest
```

## 📁 Estructura del Proyecto

```
├── app/
│   ├── api/                    # Rutas API
│   │   ├── contact/           # API de contacto (POST)
│   │   ├── data/              # API de datos
│   │   └── google/            # Integraciones Google
│   ├── assets/                # Animaciones Lottie y SVGs
│   ├── blog/                  # Página de blog
│   ├── components/            # Componentes reutilizables
│   │   ├── homepage/          # Componentes de la página principal
│   │   │   ├── about/
│   │   │   ├── blog/
│   │   │   ├── contact/
│   │   │   ├── education/
│   │   │   ├── experience/
│   │   │   ├── hero-section/
│   │   │   ├── projects/
│   │   │   └── skills/
│   │   └── helper/            # Componentes auxiliares
│   ├── css/                   # Estilos globales
│   └── [locale]/              # Rutas internacionalizadas
├── public/                    # Archivos estáticos
├── i18n/                      # Configuración de idiomas
├── messages/                  # Traducciones (EN, ES, PT)
├── utils/                     # Funciones utilitarias
│   ├── data/                  # Datos del portafolio
│   │   ├── personal-data.js
│   │   ├── skills.js
│   │   ├── experience.js
│   │   ├── educations.js
│   │   └── projects-data.js
│   └── content/               # Archivos JSON de contenido
├── middleware.js              # Middleware de Next.js
├── next.config.js             # Configuración de Next.js
├── tailwind.config.js         # Configuración de Tailwind
└── package.json               # Dependencias del proyecto
```

## 🔧 Configuración

### Idiomas Soportados

Los idiomas se configuran en `i18n/routing.js`. Archivos de traducciones en `messages/`:

- `en.json` - English
- `es.json` - Español
- `pt.json` - Português

### Datos del Portafolio

Editar archivos en `utils/data/`:

- `personal-data.js` - Información personal
- `skills.js` - Habilidades técnicas
- `experience.js` - Experiencia laboral
- `educations.js` - Educación y certificaciones
- `projects-data.js` - Proyectos destacados

### Animaciones Lottie

Archivos de animación JSON en `app/assets/lottie/`

## 📧 Formulario de Contacto

El formulario de contacto está integrado con:

- **Gmail**: Envía un email a tu dirección configurada
- **Telegram**: Envía un mensaje a tu bot de Telegram
- **Validaciones**: Email y reCAPTCHA

**Configurar Gmail:**

1. Habilitar autenticación de 2 factores
2. Generar contraseña de aplicación
3. Usar en `GMAIL_PASSKEY`

**Configurar Telegram:**

1. Crear bot con @BotFather
2. Obtener token del bot
3. Conseguir chat ID de tu cuenta

## 🎨 Temas y Estilos

- Tailwind CSS para utilidades
- SASS para estilos personalizados en `app/css/`
- Soporte para tema oscuro/claro
- Componentes reutilizables en `components/helper/`

## 📊 Scripts Disponibles

```bash
pnpm dev      # Iniciar servidor de desarrollo
pnpm build    # Compilar para producción
pnpm start    # Iniciar servidor de producción
pnpm lint     # Ejecutar linter
```

## 🔗 Enlaces de Contacto

- **Email**: borisleonel12@gmail.com
- **GitHub**: https://github.com/boris-mita/
- **LinkedIn**: https://www.linkedin.com/in/boris-leonel-8a3296175/
- **Stack Overflow**: https://stackoverflow.com/users/16840768/boris-leonel
- **Dev.to**: https://dev.to/borisleonel

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📧 Soporte

Para reportar bugs o solicitar features, abre un issue en el repositorio.

---

**Desarrollado por** [Boris Leonel](https://github.com/boris-mita)  
**Stack**: Next.js • React • Tailwind CSS • Node.js
