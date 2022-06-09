import type { definitionsJSON } from '$lib/types/definitionsJSON';
import { supabase } from '$lib/utils/supabaseClient';
import { writable, type Writable } from 'svelte/store';

export const facebook: Writable<GeoJSON | null> = writable(null);

export async function loadFacebook() {
  // Load json data from https://gist.githubusercontent.com/braden-w/c2c907d98ad973d119324df77864d7ee/raw/be5c237e5372c4e84a04bda22844baa44cd8c432/places_with_facebook_geojson.json
  const response = await fetch('https://gist.githubusercontent.com/braden-w/c2c907d98ad973d119324df77864d7ee/raw/f08f17d5684e8eb2cd257a698cfdf45fa6f5ffc4/places_with_facebook_geojson.json');
  const data = await response.json();
  facebook.set(data);
}
// Generated by https://quicktype.io

export interface GeoJSON {
  type:     string;
  features: Feature[];
}

export interface Feature {
  type:       FeatureType;
  geometry:   Geometry;
  properties: Properties;
}

export interface Geometry {
  type:        GeometryType;
  coordinates: [number, number];
}

export enum GeometryType {
  Point = "Point",
}

export interface Properties {
  place_id:    string;
  description: string;
  people:      Person[];
}

export interface Person {
  email:      string;
  name:       string;
  avatar_url: string;
  year:       number;
}

export enum FeatureType {
  Feature = "Feature",
}
