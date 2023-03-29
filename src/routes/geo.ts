import { Router } from 'express';
import { getGeoFeatures } from '../controllers/geo.controller';

const router: Router = Router();

/**
 * initialize geo routes
 */

router.get('/geo/features', getGeoFeatures);

export { router as geoAPI };
