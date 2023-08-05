using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;

namespace Rezervacije.Controllers;

[Route("api/[controller]")]
[ApiController]
public class RezervacijaController : ControllerBase
{
    private readonly RezervacijaContext _dbContext;

    public RezervacijaController(RezervacijaContext dbContext)
    {
        _dbContext = dbContext;
    }

    // POST api/<UpdateCoordinatesController>
    [HttpPost]
    [Route("SacuvajRezervaciju")]
    public IActionResult SacuvajRezervaciju([FromBody] JObject data)
    {
        Rezervacija rezervacija = new Rezervacija();

        rezervacija.Naziv = data["naziv"].ToString();
        rezervacija.Telefon = data["telefon"].ToString();
        rezervacija.MestoRezervacije = data["mestoRezervacije"].ToString();

        _dbContext.Rezervacije.Add(rezervacija);
        _dbContext.SaveChanges();
        return Ok("Test");
    }

    [HttpGet]
    [Route("PrikaziRezervacije")]
    public IActionResult PrikaziRezervacije()
    {
        List<Rezervacija> rezervacije = _dbContext.Rezervacije.ToList();
        return Ok(rezervacije);
    }
}