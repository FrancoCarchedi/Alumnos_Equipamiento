using Alumnos_equipamiento.Models;
using Alumnos_equipamiento.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Alumnos_equipamiento.Controllers
{
    [Route("api/alumnos")]
    [ApiController]
    public class AlumnoController : ControllerBase
    {
        private readonly IAlumnoService _service;

        public AlumnoController(IAlumnoService service)
        {
            _service = service;
        }

        [HttpGet("{documento}")]
        public ActionResult<List<Alumno>> GetByDocument(string documento)
        {
            List<Alumno> alumnos = _service.List(documento);
            return Ok(alumnos);
        }
    }
}
