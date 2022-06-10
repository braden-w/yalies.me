import mapboxgl from 'mapbox-gl';

// https://docs.mapbox.com/help/glossary/access-token/
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY;

const key = Symbol();

export {mapboxgl, key};