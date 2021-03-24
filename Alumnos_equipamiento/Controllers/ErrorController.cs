using System;
using CeluGamaSystem.Dtos;
using CeluGamaSystem.Exceptions;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Alumnos_equipamiento.Controllers
{
    [Route("api/error")]
    [ApiController]
    public class ErrorController : ControllerBase
    {
        public IActionResult LogError()
        {
            IExceptionHandlerPathFeature exFeature = HttpContext.Features.Get<IExceptionHandlerPathFeature>();
            if (exFeature != null)
            {
                if (exFeature.Error is ServiceException Error)
                {
                    ApiError ApiError = new ApiError()
                    {
                        StatusCode = Error.StatusCode,
                        Message = Error.Message
                    };

                    switch (Error.StatusCode)
                    {
                        case 404:
                            return NotFound(ApiError);
                        case 500:
                            return StatusCode(500, ApiError);
                    }
                }
            }

            return StatusCode(500);
        }
    }
}