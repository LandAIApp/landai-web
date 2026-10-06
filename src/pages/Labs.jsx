import {useLanguage} from '../i18n';

export default function Labs(){
  const {t}=useLanguage();

  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">Land AI Labs</span>

        <h1>{t(
          'Aplicaciones geoespaciales en desarrollo',
          'Geospatial applications in development'
        )}</h1>

        <p className="lead">
          {t(
            'Prototipos y herramientas aplicadas de Observación de la Tierra, GeoAI y analítica espacial.',
            'Applied prototypes and tools for Earth Observation, GeoAI and spatial analytics.'
          )}
        </p>

        <div className="labs-grid">
          <article className="lab-card">
            <div className="tags">
              <span>Sentinel-2</span>
              <span>VIIRS</span>
              <span>GeoAI</span>
              <span>Earth Engine</span>
            </div>

            <h2>Wildfire Intelligence</h2>

            <p>
              {t(
                'Evaluación preliminar de áreas afectadas por incendios mediante Sentinel-2, VIIRS y GeoAI.',
                'Preliminary wildfire impact assessment using Sentinel-2, VIIRS and GeoAI.'
              )}
            </p>

            <a
              className="btn"
              href="https://landaiapp.github.io/landai-wildfire/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('Abrir aplicación', 'Launch application')}
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}