import { DeviceStatusEnum } from '../enum/device-status.enum';

export interface DeviceModel {
  id: number;
  name: string;
  status: DeviceStatusEnum;
}