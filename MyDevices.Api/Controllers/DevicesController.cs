using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using MyDevices.Api.Common;
using MyDevices.Api.Controllers.ViewModels;

namespace MyDevices.Api.Controllers
{
    [Route("api/devices")]
    [ApiController]
    public class DevicesController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<DeviceViewModel> Get(string criteria, DeviceStatus status)
        {
            return new DeviceViewModel[] {
              new DeviceViewModel
              {
                  Id = 1,
                  Name = "Device 1",
                  Status = DeviceStatus.Online,
                  Type = DeviceType.Computer
              },
              new DeviceViewModel
              {
                  Id = 2,
                  Name = "Device 2",
                  Status = DeviceStatus.Offline,
                  Type = DeviceType.Mobile
              },
              new DeviceViewModel
              {
                  Id = 3,
                  Name = "Device 3",
                  Status = DeviceStatus.Online,
                  Type = DeviceType.SmartKitchenAppliances
              },
              new DeviceViewModel
              {
                  Id = 4,
                  Name = "Device 4",
                  Status = DeviceStatus.Restarting,
                  Type = DeviceType.Computer
              },
              new DeviceViewModel
              {
                  Id = 5,
                  Name = "Device 5",
                  Status = DeviceStatus.Maintenance,
                  Type = DeviceType.Mobile
              },
              new DeviceViewModel
              {
                  Id = 6,
                  Name = "Device 6",
                  Status = DeviceStatus.Online,
                  Type = DeviceType.Computer
              },
              new DeviceViewModel
              {
                  Id = 7,
                  Name = "Device 7",
                  Status = DeviceStatus.Maintenance,
                  Type = DeviceType.SmartLighting
              },
              new DeviceViewModel
              {
                  Id = 8,
                  Name = "Device 8",
                  Status = DeviceStatus.Online,
                  Type = DeviceType.Thermostat
              }
           };
        }


        [HttpGet]
        [Route("statuses")]
        public IEnumerable<DeviceStatusModelView> GetStatus()
        {
            return new DeviceStatusModelView[]
            {
                new DeviceStatusModelView
                {
                    Count = 1,
                    Status = DeviceStatus.Maintenance
                },
                new DeviceStatusModelView
                {
                    Count = 2,
                    Status = DeviceStatus.Online
                },
                new DeviceStatusModelView
                {
                    Count = 3,
                    Status = DeviceStatus.Offline
                },
                new DeviceStatusModelView
                {
                    Count = 4,
                    Status = DeviceStatus.Restarting
                },
            };
        }

        [HttpGet]
        [Route("{id}/relatedDevices")]
        public IEnumerable<DeviceViewModel> GetRelatedDevices(int id)
        {
            if (id == 1)
            {
                return new DeviceViewModel[]
                    {
                        new DeviceViewModel
                        {
                            Id = 1,
                            Name = "Device 1",
                            Status = DeviceStatus.Online,
                            Type = DeviceType.Computer
                        },
                        new DeviceViewModel
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
                return new DeviceViewModel[]
                    {
                        new DeviceViewModel
                        {
                            Id = 3,
                            Name = "Device 3",
                            Status = DeviceStatus.Offline,
                            Type = DeviceType.Mobile,
                        },
                        new DeviceViewModel
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
                return new DeviceViewModel[]
                    {
                        new DeviceViewModel
                        {
                            Id = 5,
                            Name = "Device 5",
                            Status = DeviceStatus.Restarting,
                            Type = DeviceType.SmartKitchenAppliances
                        },
                        new DeviceViewModel
                        {
                            Id = 6,
                            Name = "Device 6",
                            Status = DeviceStatus.Online,
                            Type = DeviceType.Computer
                        },
                        new DeviceViewModel
                        {
                            Id = 7,
                            Name = "Device 7",
                            Status = DeviceStatus.Maintenance,
                            Type = DeviceType.SmartLighting
                        },
                        new DeviceViewModel
                        {
                            Id = 8,
                            Name = "Device 8",
                            Status = DeviceStatus.Online,
                            Type = DeviceType.Thermostat
                        }
                    };
            }
        }

        [HttpGet]
        [Route("{id}/details")]
        public DeviceDetailsViewModel  GetDeviceDetails(int id)
        {
            return 
                new DeviceDetailsViewModel
                {
                    Id = id,
                    Name = "Device 1",
                    Status = DeviceStatus.Online,
                    Type = DeviceType.Computer,
                    Temperature = 10
                };            
        }

        [HttpPost]
        public int AddDevice()
        {
            return 2;
        }
    }
}