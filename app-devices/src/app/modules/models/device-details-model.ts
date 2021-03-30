import { DeviceModel } from './device-model';

export interface DeviceDetailsModel extends DeviceModel {
  temperature: number;
}