using MyDevices.Api.Common;

namespace MyDevices.Api.Controllers.ViewModels
{
    public class DeviceViewModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public DeviceStatus Status { get; set; }

        public DeviceType Type { get; set; }
    }
}
