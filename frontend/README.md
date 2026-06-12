# Frontend — MiColmadoRd

Aplicación web del punto de venta y administración.

## Requisitos

- Node.js 20+
- pnpm (recomendado) o npm

## Instalación

```bash
pnpm install
```

## Desarrollo

```bash
pnpm dev
```

Abrir [http://localhost:5173](http://localhost:5173).

## Build

```bash
pnpm build
```

## Comandos disponibles

| Comando             | Descripción                        |
|---------------------|------------------------------------|
| `pnpm dev`          | Inicia servidor de desarrollo      |
| `pnpm build`        | Compila para producción            |
| `pnpm lint`         | Ejecuta ESLint                     |
| `pnpm format`       | Formatea código con Prettier       |
| `pnpm typecheck`    | Verifica tipos de TypeScript       |
| `pnpm preview`      | Previsualiza el build de producción|

## Estructura

```
src/
├── assets/          # Recursos estáticos
├── components/      # Componentes reutilizables
│   ├── ui/          # Componentes base (shadcn/ui)
│   └── sidebar/     # Componentes del sidebar
├── hooks/           # Custom hooks
├── lib/             # Utilidades
└── pages/           # Páginas de la aplicación
    ├── login/
    ├── signup/
    ├── sale/        # Punto de venta
    └── shop/        # Panel de administración
```

## Convenciones

- **Rutas**: definir en `src/App.tsx` con React Router
- **Componentes UI**: usar y extender los de shadcn/ui en `src/components/ui/`
- **Estilos**: Tailwind CSS — no usar CSS modules ni archivos `.css` adicionales
- **Íconos**: usar componentes de `lucide-react`
