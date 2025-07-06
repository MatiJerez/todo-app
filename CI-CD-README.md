# CI/CD Setup - Todo App

## 🚀 Configuración Mínima de CI/CD

Este proyecto incluye una configuración básica de CI/CD usando GitHub Actions que:

### ✅ Continuous Integration (CI)
- Ejecuta automáticamente en cada push y pull request
- Instala dependencias
- Ejecuta tests con coverage
- Construye la aplicación
- Verifica que todo funcione correctamente

### 🚀 Continuous Deployment (CD)
- Se ejecuta solo en push a la rama `main` o `master`
- Despliega automáticamente a GitHub Pages
- La aplicación estará disponible en: `https://[tu-usuario].github.io/[nombre-del-repo]`

## 📋 Pasos para Activar

### 1. Configurar GitHub Pages
1. Ve a Settings → Pages en tu repositorio de GitHub
2. En "Source", selecciona "Deploy from a branch"
3. Selecciona la rama `gh-pages` y carpeta `/ (root)`
4. Guarda los cambios

### 2. Actualizar package.json
Edita el campo `homepage` en `package.json`:
```json
"homepage": "https://[tu-usuario].github.io/[nombre-del-repo]"
```

### 3. Hacer Push
```bash
git add .
git commit -m "Add CI/CD pipeline"
git push origin main
```

## 🔧 Comandos Disponibles

```bash
# Desarrollo local
npm start

# Ejecutar tests
npm test

# Build de producción
npm run build

# Deploy manual (opcional)
npm run deploy
```

## 📊 Monitoreo

- Ve a la pestaña "Actions" en GitHub para ver el estado de los workflows
- Cada push/PR mostrará el estado de CI/CD
- Los errores aparecerán en los logs de GitHub Actions

## 🔄 Flujo de Trabajo

1. **Desarrollo**: Haz cambios en una rama feature
2. **Pull Request**: Crea un PR → CI se ejecuta automáticamente
3. **Merge**: Al hacer merge a main → CD despliega automáticamente
4. **Verificación**: Revisa tu app en GitHub Pages

¡Listo! Tu aplicación ahora tiene CI/CD automatizado. 🎉
