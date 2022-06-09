import type { definitions } from '$lib/types/supabase';

export interface Person {
  id: string;
  name: string;
  avatar_url: string;
}

export interface PersonFromFacebook {
  email: string;
  name: string;
  avatar_url: string;
  year: number;
}

export interface definitionsJSON extends Omit<definitions, 'places_with_people' | 'places_with_facebook' | 'user_responses'> {
  places_with_people: {
    /**
     * Format: character varying
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    place_id: string;
    /** Format: character varying */
    description: string;
    /** Format: double precision */
    lat: number;
    /** Format: double precision */
    lng: number;
    /** Format: json */
    people: (Person)[];
  };
    places_with_facebook: {
    /**
     * Format: character varying
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    place_id: string;
    /** Format: character varying */
    description: string;
    /** Format: double precision */
    lat: number;
    /** Format: double precision */
    lng: number;
    /** Format: json */
    people: (PersonFromFacebook)[];
  };
  user_responses: {
    /** Format: character varying */
    interests?: string;
    /** Format: character varying */
    expression?: string;
    /** Format: character varying */
    university?: string;
    /** Format: character varying */
    instagram?: string;
    /** Format: character varying */
    linkedin?: string;
    /** Format: character varying */
    phone?: string;
    /** Format: character varying */
    major?: string;
    /** Format: integer */
    year?: number;
    /**
     * Format: character varying
     * @description Links to places
     *
     * Note:
     * This is a Foreign Key to `places.place_id`.<fk table='places' column='place_id'/>
     */
    place_id?: string | null;
    /**
     * Format: character varying
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    user_response_id: string;
  };
}
