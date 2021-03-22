using Alumnos_equipamiento.Models;
using System.Collections.Generic;

namespace Alumnos_equipamiento.Services.Interfaces
{
    public interface IAlumnoService
    {
        List<Alumno> List(string NumeroDocumento);
    }
}
