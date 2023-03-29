/**
 * To validate the bounding box parameters
 * and handle error messages
 * @param bbox
 * @returns
 */
export const boundingBoxValidator = async (bbox: string): Promise<{ errors: string[] }> => {
  const errors: string[] = [];

  // Validate the bounding box input
  if (!bbox || typeof bbox !== 'string') {
    errors.push('Invalid bounding box input');
  }

  const boundingBox = bbox.split(',');
  if (boundingBox.length !== 4) {
    errors.push('Bounding box should contain 4 coordinates');
  }

  const bboxNumbers = boundingBox.map(Number);
  if (bboxNumbers.some(isNaN)) {
    errors.push('Bounding box should contain only numbers');
  }

  const [west, south, east, north] = bboxNumbers;
  if (west >= east || south >= north) {
    errors.push('Invalid bounding box coordinates');
  }

  return { errors };
};
