using ApiServer.Models;
using ApiServer.Services;
using Microsoft.AspNetCore.Mvc;

namespace ApiServer.Controllers;

[ApiController]
[Route("api/[controller]")]

public class PizzaController : ControllerBase
{
    private readonly PizzaService _pizzaService;


    public PizzaController(PizzaService pizzaService) =>
        _pizzaService = pizzaService;



    [HttpGet]
    public async Task<List<Pizza>> Get() =>
    await _pizzaService.GetAsync();

    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<Pizza>> Get(string id)
    {
        var pizza = await _pizzaService.GetAsync(id);

        if (pizza is null)
        {
            return NotFound();
        }

        return pizza;
    }


    [HttpPost]
    public async Task<IActionResult> Post(Pizza newPizza)
    {
        await _pizzaService.CreateAsync(newPizza);

        return CreatedAtAction(nameof(Get), new { id = newPizza.Id }, newPizza);
    }


    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update(string id, Pizza updatedPizza)
    {
        var pizza = await _pizzaService.GetAsync(id);

        if (pizza is null)
        {
            return NotFound();
        }

        updatedPizza.Id = pizza.Id;

        await _pizzaService.UpdateAsync(id, updatedPizza);

        return NoContent();
    }
    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        var pizza = await _pizzaService.GetAsync(id);

        if (pizza is null)
        {
            return NotFound();
        }

        await _pizzaService.RemoveAsync(id);

        return NoContent();
    }

}