using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MyDevices.Api.Common;

namespace MyDevices.Api.Services.Models
{
    public class NewDeviceModel
    {
        public string Name { get; set; }       

        public DeviceType Type { get; set; }
    }
}
