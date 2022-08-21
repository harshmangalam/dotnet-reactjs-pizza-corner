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


}