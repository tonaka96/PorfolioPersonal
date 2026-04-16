# 1. Iniciar servidor local

```bash
ng serve
```

O si no va también funciona con

```bash
npx ng serve
```

# 2. Subir cambios

```bash
git add .
```

```bash
git commit -m "Commit"
```

```bash
git push origin master
```

Para ver qué tal va la subida escribir

```bash
git status
```

# 3. Actualizar la web

```bash
npx ng build       
```

```bash
npx angular-cli-ghpages --dir=dist/PorfolioPersonal/browser
```