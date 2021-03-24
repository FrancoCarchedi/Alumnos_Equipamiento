using Alumnos_equipamiento.Models;
using Alumnos_equipamiento.Services.Interfaces;
using Alumnos_equipamiento.Services.Exceptions;
using System.Collections.Generic;
using System.Linq;

namespace Alumnos_equipamiento.Services
{
    public class AlumnoService : IAlumnoService
    {
        private readonly AlumnosDbContext _context;
        public AlumnoService(AlumnosDbContext context)
        {
            _context = context;
        }
        public List<Alumno> List(string NumeroDocumento)
        {
            List<Alumno> alumnos = _context.Alumnos.Where(a => a.NumeroDocumento == NumeroDocumento).ToList();
            if (alumnos.Count.Equals(0))
            {
                throw new ServiceException($"No se encontraron alumnos con el documento {NumeroDocumento}", 404);
            }

            return alumnos;
        }
    }
}
