using MyDevices.Api.Common;

namespace MyDevices.Api.Services.Models
{
    public class DeviceModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public DeviceStatus Status { get; set; }

        public DeviceType Type { get; set; }
    }
}
