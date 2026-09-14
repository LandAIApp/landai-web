# Land AI Web V4

React + Vite website. Spanish/English selector is built in.

## Local development
1. Open this folder in Visual Studio Code.
2. Open Terminal > New Terminal.
3. Run `npm install` once.
4. Run `npm run dev`.
5. Open the Local URL printed by Vite (normally http://localhost:5173).
6. Edit files under `src/`; Vite refreshes the browser automatically.
7. Stop with Ctrl+C.
8. Validate production with `npm run build` and optionally `npm run preview`.

## Main files to edit
- Header/navigation/language: `src/components/Header.jsx`
- Footer/contact icons: `src/components/Footer.jsx`
- Home: `src/pages/Home.jsx`
- Services: `src/pages/Servicios.jsx`
- Solutions: `src/pages/Soluciones.jsx`
- Projects: `src/pages/Proyectos.jsx`
- Platform: `src/pages/Platform.jsx`
- About/publications: `src/pages/Nosotros.jsx`
- Contact form: `src/pages/Contacto.jsx`
- Global design/colors/layout: `src/styles.css`
- Language state: `src/i18n.jsx`
- Images/videos/icons: `public/assets/`

## Contact form
The form uses FormSubmit to deliver submissions to proyectos@landaiapp.com. The first real submission may trigger a one-time activation/confirmation email from FormSubmit. Confirm it before considering the form production-ready. If you do not want a third-party form relay, replace it later with your own API/serverless endpoint.

## GitHub Pages
The project includes the previous Vite/GitHub Pages configuration and `scripts/copy404.mjs` for SPA routes. Run `npm run build` successfully before pushing.
