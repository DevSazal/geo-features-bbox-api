import { GeoResponseDTO } from '../dto/geo.dto';
import osmtogeojson from 'osmtogeojson';

/**
 * GeoJSON Converter
 *
 * Convert the OSM data to GeoJSON
 * @param {Object} osm
 * @return {Object} geoJSON
 */
export const geoJsonConverter = async (osm: object): Promise<GeoResponseDTO> => {
  try {
    const geoJSON = osmtogeojson(osm);
    return geoJSON;
  } catch (error) {
    throw new Error('failed to convert osm to geoJson!');
  }
};
