export interface GeoRequestDTO {
  bbox: string;
}

export interface GeoResponseDTO {
  type: string;
  features: any[];
}
