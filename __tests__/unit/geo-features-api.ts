import request from 'supertest';
import { app } from '../../src/app';

describe('GeoJSON Features API', () => {
  describe('GET /geo/features', () => {
    it('should return geo features as json format for valid bbox', async () => {
      const response = await request(app)
        .get('/geo/features')
        .query({ bbox: '6.883,51.4243,6.8933,51.4326' });

      expect(response.status).toEqual(200);
      expect(response.body.type).toEqual('FeatureCollection');
      expect(response.body.features).toBeInstanceOf(Array);
      expect(response.body.features[0].type).toEqual('Feature');
      expect(response.body.features[0].geometry).toBeInstanceOf(Object);
      expect(response.body.features[0].properties).toBeInstanceOf(Object);
    });

    it('should return 400 for invalid bbox', async () => {
      const response = await request(app).get('/geo/features').query({ bbox: 'invalid-bbox' });

      expect(response.status).toEqual(400);
      expect(response.text).toEqual(
        '{"errors":["Bounding box should contain 4 coordinates","Bounding box should contain only numbers"]}',
      );
    });

    it('should return 400 if request to OSM API fails for invalid coordinates', async () => {
      const response = await request(app).get('/geo/features').query({ bbox: '0,0,0,0' });

      expect(response.status).toEqual(400);
      expect(response.text).toEqual('{"errors":["Invalid bounding box coordinates"]}');
    });
  });
});
