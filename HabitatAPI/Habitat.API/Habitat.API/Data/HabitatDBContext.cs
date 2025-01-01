using Habitat.API.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace Habitat.API.Data
{
    public class HabitatDBContext : DbContext
    {
        public HabitatDBContext(DbContextOptions<HabitatDBContext> options) : base(options)
        {
        }

        public DbSet<Animal> Animals { get; set; }
    }
}
