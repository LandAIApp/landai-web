import {Eyebrow,Reveal,SectionTitle,CTA,Media} from '../components/UI'; import {useLanguage} from '../i18n';
const icons=['data-pipeline.png','competence_9167182.png','process-control_16985630.png','weather-alert.png','integrated.png','vps_1792284.png'];
export default function Platform(){const{t}=useLanguage();const steps=[
[t('Paso 1','Step 1'),t('Define tu área y fuentes de datos','Define your area and data sources'),t('Crea tu proyecto, selecciona el área de interés, periodo de análisis y fuentes de imágenes satelitales, aéreas o de dron. LandAI organiza la preparación inicial del flujo.','Create your project, select the area of interest, analysis period and satellite, aerial or drone imagery sources. LandAI organizes the initial workflow preparation.'),'/assets/platform/mod1.mp4'],
[t('Paso 2','Step 2'),t('Aplica IA de forma guiada','Apply AI through a guided workflow'),t('Usa modelos preconfigurados o entrena modelos con tus muestras, ajustando clases, reglas y parámetros sin depender de programación para cada paso.','Use preconfigured models or train models with your samples, adjusting classes, rules and parameters without relying on coding for every step.'),'/assets/platform/video2.mp4'],
[t('Paso 3','Step 3'),t('Valida y entiende los resultados','Validate and understand the results'),t('Revisa métricas, muestras y visualizaciones para evaluar calidad y exactitud antes de convertir el análisis en una decisión.','Review metrics, samples and visualizations to assess quality and accuracy before turning the analysis into a decision.'),'/assets/platform/video4.mp4'],
[t('Paso 4','Step 4'),t('Exporta mapas y reportes listos','Export ready-to-use maps and reports'),t('Genera mapas, capas, métricas y reportes metodológicos trazables, listos para compartir o integrar en otros sistemas.','Generate traceable maps, layers, metrics and methodological reports, ready to share or integrate into other systems.'),'/assets/media/Cultivos_PW.mp4']];
const principles=[t('No-Code y workflows guiados','No-Code and guided workflows'),t('Human-in-the-loop y validación','Human-in-the-loop and validation'),t('Trazabilidad metodológica','Methodological traceability'),t('Control de costos cloud','Cloud cost control'),t('Resultados reproducibles','Reproducible results'),t('Escalamiento progresivo','Progressive scaling')];return <><section className="page-hero platform-hero"><Eyebrow>LANDAI PLATFORM</Eyebrow><div className="status">{t('EN DESARROLLO','IN DEVELOPMENT')}</div><h1>{t('GeoAI guiado, validado y escalable.','Guided, validated and scalable GeoAI.')}</h1><p>{t('Tecnología propia para convertir procesos GeoAI recurrentes en workflows guiados, reproducibles y escalables.','Proprietary technology to turn recurring GeoAI processes into guided, reproducible and scalable workflows.')}</p></section><section><div className="split"><Reveal><Eyebrow>{t('EL RETO','THE CHALLENGE')}</Eyebrow><h2>{t('GeoAI sigue siendo demasiado fragmentado.','GeoAI remains too fragmented.')}</h2><p className="lead">{t('Datos, scripts, modelos, validación y cloud suelen vivir en herramientas distintas. LandAI Platform busca conectar esas etapas manteniendo control técnico y trazabilidad.','Data, scripts, models, validation and cloud often live in separate tools. LandAI Platform aims to connect these stages while preserving technical control and traceability.')}</p></Reveal><Reveal><img className="media contain diagram-white" src="/assets/platform/diagrama.png"/></Reveal></div></section><section className="alt workflow-reference"><SectionTitle eyebrow={t('CÓMO FUNCIONA','HOW IT WORKS')} title={t('Una forma más inteligente de analizar la Tierra','A smarter way to analyze the Earth')} text={t('Un flujo guiado que transforma imágenes en mapas, métricas y reportes listos para apoyar decisiones.','A guided workflow that transforms imagery into maps, metrics and reports ready to support decisions.')}/><div className="workflow-steps">

  {steps.map((s, i) => (

    <Reveal
      className={'workflow-step ' + (i % 2 ? 'reverse' : '')}
      key={s[0]}
    >

      <div className="workflow-copy">
        <span>{s[0]}</span>
        <h3>{s[1]}</h3>
        <p>{s[2]}</p>
      </div>

      {i === 1 ? (

        <div className="platform-video-collage">

            <video
            className="platform-video-row"
            src="/assets/platform/mod2.mp4"
            muted
            autoPlay
            loop
            playsInline
            />

            <video
            className="platform-video-row"
            src="/assets/platform/mod3.mp4"
            muted
            autoPlay
            loop
            playsInline
            />

        </div>

        ) : (

        <video
          className="workflow-video"
          src={s[3]}
          muted
          autoPlay
          loop
          playsInline
        />

      )}

    </Reveal>

  ))}

</div></section><section><SectionTitle eyebrow={t('PRINCIPIOS','PRINCIPLES')} title={t('Control técnico sin fricción innecesaria','Technical control without unnecessary friction')}/><div className="cards three">{principles.map((x,i)=><Reveal className="card principle-card" key={x}><img className={`principle-icon icon-white ${i === 0 ? 'principle-icon-large' : ''}`} src={`/assets/icons/${icons[i]}`} alt=""/><h3>{x}</h3></Reveal>)}</div></section><CTA title={t('¿Quieres participar en un piloto?','Would you like to join a pilot?')} text={t('Estamos desarrollando LandAI Platform y buscamos casos donde un workflow GeoAI recurrente pueda validarse con usuarios reales.','We are developing LandAI Platform and looking for cases where a recurring GeoAI workflow can be validated with real users.')}/></>}
