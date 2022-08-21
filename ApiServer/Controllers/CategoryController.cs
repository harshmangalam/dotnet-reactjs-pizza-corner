using ApiServer.Models;
using ApiServer.Services;
using Microsoft.AspNetCore.Mvc;

namespace ApiServer.Controllers;

[ApiController]
[Route("api/[controller]")]

public class CategoryController : ControllerBase
{
    private readonly CategoryService _categoryService;


    public CategoryController(CategoryService categoryService) =>
        _categoryService = categoryService;



    [HttpGet]
    public async Task<List<Category>> Get() =>
    await _categoryService.GetAsync();

    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<Category>> Get(string id)
    {
        var category = await _categoryService.GetAsync(id);

        if (category is null)
        {
            return NotFound();
        }

        return category;
    }


    [HttpPost]
    public async Task<IActionResult> Post(Category newCategory)
    {
        await _categoryService.CreateAsync(newCategory);

        return CreatedAtAction(nameof(Get), new { id = newCategory.Id }, newCategory);
    }


    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update(string id, Category updatedCategory)
    {
        var category = await _categoryService.GetAsync(id);

        if (category is null)
        {
            return NotFound();
        }

        updatedCategory.Id = category.Id;

        await _categoryService.UpdateAsync(id, updatedCategory);

        return NoContent();
    }


}