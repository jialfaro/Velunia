# NEXORA — Marketplace de suscripciones

Starter de marketplace digital para Perú, con Next.js, TypeScript, Supabase y Culqi.

## Contenido

- Catálogo de productos y variantes
- Autenticación Supabase
- Panel inicial de cliente y administración
- API de checkout y webhook de Culqi (requiere completar configuración y validación en entorno de pruebas)
- Esquema SQL inicial y políticas RLS
- Adaptador base para proveedores autorizados

## Desarrollo local

1. `npm install`
2. Copia `.env.example` a `.env.local` y completa las variables.
3. Ejecuta el esquema `supabase/schema.sql` en el proyecto Supabase.
4. `npm run dev`

## Variables

Consulta `.env.example`. Nunca subas claves privadas, tokens ni secretos al repositorio.

## Estado

Código inicial de desarrollo. No está listo para producción: antes del lanzamiento hay que completar pruebas, verificar los webhooks con la documentación vigente de Culqi, configurar proveedores autorizados y ejecutar auditoría de seguridad.
