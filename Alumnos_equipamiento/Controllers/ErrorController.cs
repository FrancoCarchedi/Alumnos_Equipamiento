using System;
using Alumnos_equipamiento.Dtos;
using Alumnos_equipamiento.Services.Exceptions;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Alumnos_equipamiento.Controllers
{
    [ApiController]
    public class ErrorController : ControllerBase
    {
        [Route("/error")]
        public IActionResult LogError()
        {
            IExceptionHandlerFeature exFeature = HttpContext.Features.Get<IExceptionHandlerFeature>();
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