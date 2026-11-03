import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://landaiapp.com';

const DEFAULT_IMAGE =
  `${SITE_URL}/assets/brand/Logo-princiapal-LAND-AI.png`;

const seoByPath = {
  '/': {
    title: 'Land AI | GeoAI & Earth Intelligence Solutions',
    description:
      'Land AI — Observación de la Tierra, GeoAI, GIS, Cloud e ingeniería geoespacial para soluciones territoriales.',
  },

  '/servicios': {
    title: 'Servicios GeoAI y Geoespaciales | Land AI',
    description:
      'Servicios especializados en Observación de la Tierra, GeoAI, teledetección, GIS, automatización geoespacial, Cloud y aplicaciones territoriales.',
  },

  '/soluciones': {
    title: 'Soluciones de Inteligencia Geoespacial | Land AI',
    description:
      'Soluciones GeoAI para monitoreo territorial, detección y clasificación, análisis espacial, automatización geoespacial y aplicaciones de geointeligencia.',
  },

  '/proyectos': {
    title: 'Proyectos GeoAI y Geoespaciales | Land AI',
    description:
      'Proyectos de Land AI en agricultura, minería, coberturas, detección de cambios, gestión del riesgo y desarrollo de aplicaciones geoespaciales.',
  },

  '/platform': {
    title: 'LandAI Platform | GeoAI Guiado y Escalable',
    description:
      'LandAI Platform integra datos, inteligencia artificial, validación y procesamiento Cloud en workflows GeoAI guiados, reproducibles y escalables.',
  },

  '/nosotros': {
    title: 'Nosotros | Land AI',
    description:
      'Conoce Land AI y nuestra experiencia en teledetección, inteligencia artificial, GIS, Cloud, investigación y desarrollo de soluciones geoespaciales.',
  },

  '/contacto': {
    title: 'Contacto | Land AI',
    description:
      'Contacta con Land AI para proyectos de Observación de la Tierra, GeoAI, GIS, automatización, Cloud y desarrollo de soluciones geoespaciales.',
  },

  '/labs': {
    title: 'Land AI Labs | Aplicaciones GeoAI',
    description:
      'Prototipos y aplicaciones geoespaciales de Land AI Labs para Observación de la Tierra, GeoAI, análisis de cambios, incendios y analítica espacial.',
  },

  '/privacidad': {
    title: 'Política de Privacidad | Land AI',
    description:
      'Política de privacidad de Land AI.',
    robots: 'noindex, follow',
  },

  '/terminos': {
    title: 'Términos y Condiciones | Land AI',
    description:
      'Términos y condiciones de Land AI.',
    robots: 'noindex, follow',
  },
};

function setMeta(selector, attribute, value) {
  const element = document.querySelector(selector);

  if (element) {
    element.setAttribute(attribute, value);
  }
}

export default function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPath =
      pathname === '/'
        ? '/'
        : pathname.replace(/\/+$/, '');

    const seo = seoByPath[normalizedPath] || seoByPath['/'];

    const canonicalUrl =
      normalizedPath === '/'
        ? `${SITE_URL}/`
        : `${SITE_URL}${normalizedPath}/`;

    document.title = seo.title;

    setMeta(
      'meta[name="description"]',
      'content',
      seo.description
    );

    setMeta(
      'meta[name="robots"]',
      'content',
      seo.robots || 'index, follow'
    );

    setMeta(
      'meta[property="og:title"]',
      'content',
      seo.title
    );

    setMeta(
      'meta[property="og:description"]',
      'content',
      seo.description
    );

    setMeta(
      'meta[property="og:url"]',
      'content',
      canonicalUrl
    );

    setMeta(
      'meta[property="og:image"]',
      'content',
      DEFAULT_IMAGE
    );

    setMeta(
      'meta[name="twitter:title"]',
      'content',
      seo.title
    );

    setMeta(
      'meta[name="twitter:description"]',
      'content',
      seo.description
    );

    setMeta(
      'meta[name="twitter:image"]',
      'content',
      DEFAULT_IMAGE
    );

    const canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (canonical) {
      canonical.setAttribute('href', canonicalUrl);
    }
  }, [pathname]);

  return null;
}