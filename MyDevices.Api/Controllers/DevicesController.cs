using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using MyDevices.Api.Common;
using MyDevices.Api.Controllers.ViewModels;
using MyDevices.Api.Services;
using MyDevices.Api.Services.Models;

namespace MyDevices.Api.Controllers
{
    [Route("api/devices")]
    [ApiController]
    public class DevicesController : ControllerBase
    {
        private readonly IDevicesService devicesService;

        public DevicesController(IDevicesService devicesService)
        {
            this.devicesService = devicesService;
        }


        [HttpGet]
        public IEnumerable<DeviceViewModel> Get(string criteria, DeviceStatus? status)
        {
            var devices = this.devicesService.GetAll(criteria, status);

            var result = new List<DeviceViewModel>();

            for(var i = 0; i < devices.Count; i++)
            {
                var device = devices[i];
                var viewDevice = new DeviceViewModel();
                viewDevice.Id = device.Id;
                viewDevice.Name = device.Name;
                viewDevice.Status = device.Status;
                viewDevice.Type = device.Type;

                result.Add(viewDevice);
            }
            return result;
        }


        [HttpGet]
        [Route("statuses")]
        public IEnumerable<DeviceStatusModelView> GetStatus()
        {
            var statuses = this.devicesService.GetStatuses();

            var result = new List<DeviceStatusModelView>();


            for (var i = 0; i < statuses.Count; i++)
            {
                var status = statuses[i];
                var viewStatus = new DeviceStatusModelView();
                viewStatus.Count = status.Count;
                viewStatus.Status = status.Status;
                result.Add(viewStatus);
            }
            return result;            
        }

        [HttpGet]
        [Route("{id}/relatedDevices")]
        public IEnumerable<DeviceViewModel> GetRelatedDevices(int id)
        {
            var relatedDevices = this.devicesService.GetRelatedDevices(id);

            var result = new List<DeviceViewModel>();

            for (var i = 0; i < relatedDevices.Count; i++)
            {
                var device = relatedDevices[i];
                var rDevice = new DeviceViewModel();
                rDevice.Id = device.Id;
                rDevice.Name = device.Name;
                rDevice.Status = device.Status;
                rDevice.Type = device.Type;

                result.Add(rDevice);
            }
            return result;           
        }

        [HttpGet]
        [Route("{id}/details")]
        public DeviceDetailsViewModel  GetDeviceDetails(int id)
        {
            var deviceDetails = this.devicesService.GetDeviceDetails(id);

            var d = new DeviceDetailsViewModel();
            d.Id = deviceDetails.Id;
            d.Name = deviceDetails.Name;
            d.Status = deviceDetails.Status;
            d.Type = deviceDetails.Type;
            d.Temperature = deviceDetails.Temperature;

            return d;            
        }

        [HttpPost]
        public int AddDevice([FromBody] NewDeviceViewModel deviceViewModel)
        {
            var device = new NewDeviceModel();
            device.Name = deviceViewModel.Name;            
            device.Type = deviceViewModel.Type;

            return this.devicesService.AddDevice(device);
        }
    }
}