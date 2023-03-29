import axios from 'axios';

const OpenStreetMap = {
  endpoint: 'https://www.openstreetmap.org/api/0.6/map',
};

/**
 * OpenStreetMap API Caller
 *
 * To Get OSM data
 * @param bbox
 * @returns osm
 */
export const openStreetMapApi = async (bbox: string) => {
  try {
    const params = { bbox };
    const { data: osm } = await axios.get(OpenStreetMap.endpoint, { params });

    if (!osm.elements) {
      throw new Error('Failed to retrieve osm data!');
    }

    return osm;
  } catch (error) {
    throw new Error('Failed to retrieve osm data!');
  }
};
