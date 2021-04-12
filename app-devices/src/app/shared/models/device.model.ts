import { DeviceStatusEnum } from '../enum/device-status.enum';
import { DeviceType } from '../enum/device-type.enum';

export interface DeviceModel {
  id: number;
  name: string;
  status: DeviceStatusEnum;
  type: DeviceType;
}