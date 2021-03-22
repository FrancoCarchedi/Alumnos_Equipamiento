using Microsoft.EntityFrameworkCore;

namespace Alumnos_equipamiento.Models
{
    public class AlumnosDbContext : DbContext
    {
        public AlumnosDbContext(DbContextOptions<AlumnosDbContext> options) : base(options) { }

        public DbSet<Alumno> Alumnos { get; set; }
    }
}
