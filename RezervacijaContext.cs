using Microsoft.EntityFrameworkCore;

namespace Rezervacije;

public class RezervacijaContext : DbContext
{
    public DbSet<Rezervacija> Rezervacije { get; set; }

    public RezervacijaContext(DbContextOptions<RezervacijaContext> options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Rezervacija>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Naziv).IsRequired();
        });
    }
}