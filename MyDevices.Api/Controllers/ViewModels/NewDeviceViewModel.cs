using MyDevices.Api.Common;

namespace MyDevices.Api.Controllers.ViewModels
{
    public class NewDeviceViewModel
    {
        public string Name { get; set; }       

        public DeviceType Type { get; set; }
    }
}
