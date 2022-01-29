export interface AddStation {
  stationId: string;
  latitude: string;
  longitude: string;
  name: string;
  description: string;
  slotPrefix: string;
  slots: number;
  slotsAvailable: number;
}
