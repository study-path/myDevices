import { DeviceStatusEnum } from '../enum/device-status.enum';

export const deviceStatusToColors = new Map<DeviceStatusEnum, string>([
  [DeviceStatusEnum.Online, "#077200"],
  [DeviceStatusEnum.Maintenance, "#CE9400"],
  [DeviceStatusEnum.Offline, "#F90800"],
  [DeviceStatusEnum.Restarting, "#C9F200"],
]);