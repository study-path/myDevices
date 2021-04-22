using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MyDevices.Api.Common;
using MyDevices.Api.Services.Models;

namespace MyDevices.Api.Services
{
    public class DevicesService: IDevicesService
    {
        private IList<DeviceModel> devices = new List<DeviceModel>()
        {
              new DeviceModel
              {
                  Id = 1,
                  Name = "Device 1",
                  Status = DeviceStatus.Online,
                  Type = DeviceType.Computer
    },
              new DeviceModel
              {
                  Id = 2,
                  Name = "Device 2",
                  Status = DeviceStatus.Offline,
                  Type = DeviceType.Mobile
},
              new DeviceModel
              {
                  Id = 3,
                  Name = "Device 3",
                  Status = DeviceStatus.Online,
                  Type = DeviceType.SmartKitchenAppliances
              },
              new DeviceModel
              {
                  Id = 4,
                  Name = "Device 4",
                  Status = DeviceStatus.Restarting,
                  Type = DeviceType.Computer
              },
              new DeviceModel
              {
                  Id = 5,
                  Name = "Device 5",
                  Status = DeviceStatus.Maintenance,
                  Type = DeviceType.Mobile
              },
              new DeviceModel
              {
                  Id = 6,
                  Name = "Device 6",
                  Status = DeviceStatus.Online,
                  Type = DeviceType.Computer
              },
              new DeviceModel
              {
                  Id = 7,
                  Name = "Device 7",
                  Status = DeviceStatus.Maintenance,
                  Type = DeviceType.SmartLighting
              },
              new DeviceModel
              {
                  Id = 8,
                  Name = "Device 8",
                  Status = DeviceStatus.Online,
                  Type = DeviceType.Thermostat
              }
           };

        private int idCount = 8;

        public IList<DeviceModel> GetAll(string criteria, DeviceStatus? status)
        {
            return this.devices;
        }

        public IList<DeviceStatusModel> GetStatuses()
        {
            return new DeviceStatusModel[]
            {
                new DeviceStatusModel
                {
                    Count = 1,
                    Status = DeviceStatus.Maintenance
                },
                new DeviceStatusModel
                {
                    Count = 2,
                    Status = DeviceStatus.Online
                },
                new DeviceStatusModel
                {
                    Count = 3,
                    Status = DeviceStatus.Offline
                },
                new DeviceStatusModel
                {
                    Count = 4,
                    Status = DeviceStatus.Restarting
                },
            };
        }

        public IList<DeviceModel> GetRelatedDevices(int id)
        {
            if (id == 1)
            {
                return new DeviceModel[]
                    {
                        new DeviceModel
                        {
                            Id = 1,
                            Name = "Device 1",
                            Status = DeviceStatus.Online,
                            Type = DeviceType.Computer
    },
                        new DeviceModel
                        {
                            Id = 2,
                            Name = "Device 2",
                            Status = DeviceStatus.Offline,
                            Type = DeviceType.Computer
},
                    };
            }
            else if (id == 2)
            {
                return new DeviceModel[]
                    {
                        new DeviceModel
                        {
                            Id = 3,
                            Name = "Device 3",
                            Status = DeviceStatus.Offline,
                            Type = DeviceType.Mobile,
                        },
                        new DeviceModel
                        {
                            Id = 4,
                            Name = "Device 4",
                            Status = DeviceStatus.Maintenance,
                            Type = DeviceType.Mobile,
                        }
                    };
            }
            else
            {
                return new DeviceModel[]
                    {
                        new DeviceModel
                        {
                            Id = 5,
                            Name = "Device 5",
                            Status = DeviceStatus.Restarting,
                            Type = DeviceType.SmartKitchenAppliances
                        },
                        new DeviceModel
                        {
                            Id = 6,
                            Name = "Device 6",
                            Status = DeviceStatus.Online,
                            Type = DeviceType.Computer
                        },
                        new DeviceModel
                        {
                            Id = 7,
                            Name = "Device 7",
                            Status = DeviceStatus.Maintenance,
                            Type = DeviceType.SmartLighting
                        },
                        new DeviceModel
                        {
                            Id = 8,
                            Name = "Device 8",
                            Status = DeviceStatus.Online,
                            Type = DeviceType.Thermostat
                        }
                    };
            }
        }


        public DeviceDetailsModel GetDeviceDetails(int id)
        {
            return
                new DeviceDetailsModel
                {
                    Id = id,
                    Name = "Device 1",
                    Status = DeviceStatus.Online,
                    Type = DeviceType.Computer,
                    Temperature = 10
                };
        }

       
        public int AddDevice(NewDeviceModel newDevice)
        {
            var device = new DeviceModel();

            device.Id = ++this.idCount;
            device.Name = newDevice.Name;
            device.Status = DeviceStatus.Online;
            device.Type = newDevice.Type;

            this.devices.Add(device);
            return device.Id;
        }

    }
}
