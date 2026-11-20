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
              <span>Multi-Hazard</span>
              <span>Sentinel-1/2</span>
              <span>GeoAI</span>
              <span>Earth Engine</span>
            </div>

            <h2>Multi-Hazard Intelligence</h2>

            <p>
              {t(
                'Evaluación preliminar de amenazas y exposición territorial mediante Observación de la Tierra y GeoAI. Integra análisis de incendios e inundaciones con edificaciones, vías, equipamientos y población potencialmente expuesta.',
                'Preliminary hazard and territorial exposure assessment using Earth Observation and GeoAI. Integrates wildfire and flood analysis with buildings, roads, facilities and potentially exposed population.'
              )}
            </p>

            <a
              className="btn"
              href="https://landaiapp.github.io/landai-multihazard/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('Abrir aplicación', 'Launch application')}
            </a>
          </article>
          <article className="lab-card">
            <div className="tags">
              <span>Sentinel-2</span>
              <span>CVA</span>
              <span>Spectral Change</span>
              <span>Earth Engine</span>
            </div>

            <h2>Change Intelligence</h2>

            <p>
              {t(
                'Detección multitemporal de cambios territoriales mediante Sentinel-2, análisis espectral y Earth Engine.',
                'Multitemporal territorial change detection using Sentinel-2, spectral analysis and Earth Engine.'
              )}
            </p>

            <a
              className="btn"
              href="https://landaiapp.github.io/landai-change/"
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