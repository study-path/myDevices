using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MyDevices.Api.Common;
using MyDevices.Api.Services.Models;

namespace MyDevices.Api.Services
{
    public interface IDevicesService
    {
        IList<DeviceModel> GetAll(string criteria, DeviceStatus? status);

        IList<DeviceStatusModel> GetStatuses();

        IList<DeviceModel> GetRelatedDevices(int id);

        DeviceDetailsModel GetDeviceDetails(int id); 

        int AddDevice(NewDeviceModel device);
    }
}
