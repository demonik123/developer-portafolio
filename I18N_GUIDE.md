# i18n - Internacionalización

Este proyecto cuenta con soporte multiidioma en **inglés (en)**, **español (es)** y **portugués (pt)**.

## 📁 Estructura de archivos

```
i18n/
└── request.js           # Configuración del servidor i18n

messages/
├── en.json             # Traducciones en inglés
├── es.json             # Traducciones en español
└── pt.json             # Traducciones en portugués

middleware.js            # Middleware para detectar idioma
```

## 🚀 Cómo usar las traducciones en componentes

### En componentes de cliente (`'use client'`)

```jsx
'use client';
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('navigation');
  
  return <h1>{t('home')}</h1>; // Mostrará "Home", "Inicio" o "Início"
}
```

### En componentes del servidor

```jsx
import { getTranslations } from 'next-intl/server';

export default async function MyComponent() {
  const t = await getTranslations('navigation');
  
  return <h1>{t('home')}</h1>;
}
```

### Para obtener el idioma actual

```jsx
'use client';
import { useLocale } from 'next-intl';

export default function MyComponent() {
  const locale = useLocale();
  console.log(locale); // 'es', 'en' o 'pt'
}
```

## 📝 Estructura de traducción

Las traducciones están organizadas en secciones:

- `navigation` - Menú de navegación
- `hero` - Sección principal
- `about` - Acerca de
- `experience` - Experiencia laboral
- `education` - Educación
- `projects` - Proyectos
- `skills` - Habilidades
- `contact` - Contacto
- `footer` - Pie de página
- `common` - Elementos comunes

## 🔄 Cambiar idioma

El componente `LanguageToggle` permite cambiar entre idiomas:

```jsx
import LanguageToggle from '@/components/language-toggle';

export default function Navbar() {
  return (
    <nav>
      <LanguageToggle />
    </nav>
  );
}
```

## 🌐 URLs por idioma

- `/es` - Español (por defecto)
- `/en` - Inglés
- `/pt` - Portugués

## ✏️ Agregar nuevas traducciones

1. Abre el archivo JSON del idioma (`messages/es.json`, `messages/en.json` o `messages/pt.json`)
2. Agrega la nueva clave y valor en la sección correspondiente
3. Repite para los otros dos idiomas

**Ejemplo:**
```json
{
  "mySection": {
    "myKey": "Mi valor"
  }
}
```

Luego úsalo:
```jsx
const t = useTranslations('mySection');
<p>{t('myKey')}</p>
```

## 🛠️ Tecnología

- **next-intl** - Librería oficial para internacionalización en Next.js
- **Next.js 16+** - Framework React con soporte App Router
