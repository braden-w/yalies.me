import type { definitionsJSON } from '$lib/types/definitionsJSON';
import { supabase } from '$lib/utils/supabaseClient';
import { writable, type Writable } from 'svelte/store';

export const facebook: Writable<GeoJSON | null> = writable(null);

export async function loadFacebook() {
  // Load json data from hosted GeoJSON file
  const response = await fetch(import.meta.env.GEOJSON_GITHUB_URL);
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
