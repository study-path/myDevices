import { DeviceStatusEnum } from './device-status-enum';

export interface DeviceModel {
  id: number;
  name: string;
  status: DeviceStatusEnum;
}