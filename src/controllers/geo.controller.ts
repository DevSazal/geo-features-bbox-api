import { NextFunction, Request, Response } from 'express';
import { boundingBoxValidator } from '../services/geo';
import { geoJsonConverter } from '../lib/helpers';
import { GeoResponseDTO } from '../dto/geo.dto';
import { openStreetMapApi } from '../services/openstreetmap';

export const getGeoFeatures = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const { bbox } = request.query;
    const { errors } = await boundingBoxValidator(bbox as string);
    if (errors.length > 0) return response.status(400).json({ errors });

    // retrieve osm data
    const osm = await openStreetMapApi(bbox as string);

    // convert the OSM data to GeoJSON
    const geoJSON: GeoResponseDTO = await geoJsonConverter(osm);

    return response.json(geoJSON);
  } catch (error) {
    next(error);
  }
};
