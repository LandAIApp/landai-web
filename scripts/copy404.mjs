import {
  copyFileSync,
  mkdirSync,
  readFileSync,
  writeFileSync
} from 'node:fs';

const routes = [
  'servicios',
  'soluciones',
  'proyectos',
  'platform',
  'nosotros',
  'contacto',
  'labs',
  'privacidad',
  'terminos'
];

const indexPath = 'dist/index.html';
const html = readFileSync(indexPath, 'utf8');

// Mantiene el fallback SPA para URLs realmente inexistentes.
copyFileSync(indexPath, 'dist/404.html');

// Genera una entrada HTML real para cada ruta de React Router.
for (const route of routes) {
  const directory = `dist/${route}`;

  mkdirSync(directory, { recursive: true });

  writeFileSync(
    `${directory}/index.html`,
    html,
    'utf8'
  );
}

console.log('Generated static entry points for React routes.');