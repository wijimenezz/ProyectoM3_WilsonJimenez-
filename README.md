# ClueVerse — Interroga el Multiverso

Una app de misterio interactivo inspirada en Rick and Morty. Habla con los personajes, recolecta pistas y descubre quién causó el colapso temporal antes de que el multiverso desaparezca.

---

## El Misterio

Rick creó una máquina capaz de alterar el tiempo, pero alguien la usó sin permiso y explotó en su garaje. Ahora múltiples líneas temporales están colapsando: hay recuerdos falsos, personas muertas que siguen vivas y realidades mezclándose.

Habla con cada personaje, descubre las contradicciones y encuentra quién provocó el accidente.

---

## Personajes

### Rick Sanchez — ID 1

**Personalidad:** Sarcástico, impaciente, extremadamente inteligente  
**Nivel de pista:** Alto

El científico más brillante del multiverso. Después de detectar anomalías temporales, sospecha que alguien alteró una línea de tiempo prohibida usando una versión corrupta de su pistola portal. Sabe más de lo que dice, pero sus emociones lo delatan cuando se menciona a Morty.

Preguntas sugeridas:

- ¿Qué salió mal con la máquina del tiempo?
- ¿Quién alteró la línea temporal?
- ¿Qué significa la energía verde en los portales?

---

### Morty Smith — ID 2

**Personalidad:** Extremadamente nervioso  
**Nivel de pista:** Media

Estuvo presente cuando ocurrió el accidente temporal, pero está nervioso y confundido. Tiene recuerdos incompletos porque varias líneas temporales colapsaron al mismo tiempo. Sus contradicciones son la clave.

Preguntas sugeridas:

- ¿Qué recuerdas del accidente?
- ¿Viste quién encendió la máquina?
- ¿Por qué todos olvidaron partes del día?

---

### Beth Smith — ID 4

**Personalidad:** Intelectual en conflicto  
**Nivel de pista:** Bajo

Encontró registros médicos y datos extraños después del accidente temporal. Cree que alguien manipuló memorias para ocultar la verdad. Cuando se menciona su muerte en otra línea temporal, su reacción lo dice todo.

Preguntas sugeridas:

- ¿Qué descubriste en los registros?
- ¿Alguien manipuló recuerdos?
- ¿Rick te contó toda la verdad?

---

### Evil Morty — ID 118

**Personalidad:** Frío, calculador y manipulador  
**Nivel de pista:** Extremo

Parece saber exactamente cómo funciona la máquina del tiempo. Nadie sabe si quiere ayudar o manipular a todos para cumplir su propio plan. Habla en frases crípticas y nunca da una respuesta directa.

Preguntas sugeridas:

- ¿Tú causaste el accidente?
- ¿Por qué ocultas información?
- ¿Qué pasó en la línea original?

---

### Mr. Meeseeks — ID 242

**Personalidad:** Caótico y desesperado  
**Nivel de pista:** Variable e inestable

Fue creado para ayudar a reparar la máquina del tiempo, pero el proceso tomó demasiado tiempo y comenzó a perder estabilidad mental. Mezcla recuerdos y se contradice constantemente, revelando pistas sin darse cuenta.

Preguntas sugeridas:

- ¿Qué parte intentaste reparar?
- ¿La máquina todavía funciona?
- ¿Quién te dio la orden?

---

### Rick Prime — ID 285

**Personalidad:** Calculador y peligrosamente inteligente  
**Nivel de pista:** Nivel Dios Multiversal

Apareció después de las primeras fracturas temporales. Aunque parece conocer demasiado sobre la máquina del tiempo y las líneas alternas, sus verdaderas intenciones siguen siendo un misterio. El personaje más peligroso del juego.

Preguntas sugeridas:

- ¿Cómo sabes tanto sobre las líneas temporales?
- ¿Estás ayudando o manipulando a todos?
- ¿Se puede reparar el tiempo?

---

## Requisitos

- Node.js 18 o superior
- Cuenta en [Vercel](https://vercel.com)
- API Key de [Google Gemini](https://aistudio.google.com/app/apikey)
- Vercel CLI instalado globalmente

```bash
npm install -g vercel
```

---

## Ejecutar en local

### 1. Clonar el repositorio

```bash
git clone https://github.com/wijimenezz/ProyectoM3_WilsonJimenez-.git
cd ProyectoM3_WilsonJimenez-
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```bash
GEMINI_API_KEY=tu_api_key_aqui
```

Obtén tu API key en [Google AI Studio](https://aistudio.google.com/app/apikey).

### 4. Iniciar sesión en Vercel (primera vez)

```bash
vercel login
```

### 5. Ejecutar el servidor local

```bash
vercel dev
```

La app estará disponible en `http://localhost:3000`.

> Vercel CLI levanta tanto el frontend estático como la serverless function `/api/chat` que actúa como proxy seguro hacia Gemini. La API key nunca queda expuesta en el frontend.

---

## Ejecutar tests

### Instalar Vitest (si no está instalado)

```bash
npm install --save-dev vitest
```

### Agregar script en package.json

```json
"scripts": {
  "test": "vitest",
  "test:run": "vitest run"
}
```

### Correr los tests

```bash
# Modo watch — re-corre al guardar cambios
npm test

# Una sola vez
npm run test:run
```

### Tests incluidos

| Archivo                       | Función testeada                       |
| ----------------------------- | -------------------------------------- |
| `normalizeAIResponse.test.js` | Extrae texto de la respuesta de Gemini |
| `getTrimmedHistory.test.js`   | Recorta el historial de mensajes       |
| `buildPayload.test.js`        | Construye el payload para la API       |
| `escapeHtml.test.js`          | Sanitiza HTML en los mensajes          |
| `mockGeminiApi.test.js`       | Simula respuestas de la IA             |

---

## Desplegar en Vercel

### 1. Conectar el proyecto con Vercel

```bash
vercel
```

Sigue las instrucciones del CLI para vincularlo con tu cuenta.

### 2. Agregar la API key en el dashboard de Vercel

1. Ve a [vercel.com/dashboard](https://vercel.com/dashboard)
2. Selecciona tu proyecto
3. Settings → Environment Variables
4. Agrega:

```
GEMINI_API_KEY = tu_api_key_aqui
```

### 3. Desplegar a producción

```bash
vercel deploy --prod
```

Vercel construye el proyecto y despliega en una URL pública del tipo `https://tu-proyecto.vercel.app`.

---

## Estructura del proyecto

```
├── api/
│   └── chat.js              # Serverless function — proxy hacia Gemini
├── src/
│   ├── data/                # Información estática de personajes
│   ├── services/            # API client, estado, prompts de IA
│   ├── transform/           # Funciones puras — payload y normalización
│   ├── UI/                  # Componentes de interfaz (Chat, Home, About)
│   ├── Views/               # Orquestadores de vistas
│   ├── main.js              # Punto de entrada
│   └── styles.css           # Estilos globales
├── .env                     # Variables de entorno (no se sube a git)
├── vercel.json              # Configuración de Vercel
└── package.json
```

---

## Stack

- **Frontend** — HTML, CSS, JavaScript vanilla con ES Modules
- **IA** — Google Gemini 2.5 Flash Lite vía API REST
- **Backend** — Vercel Serverless Functions (Node.js)
- **Deploy** — Vercel
- **Tests** — Vitest
- **Datos** — Rick and Morty API
