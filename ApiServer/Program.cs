using ApiServer.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.Configure<PizzaCornerDatabaseSettings>(builder.Configuration.GetSection("PizzaCornerDatabase"));
var app = builder.Build();

// health check 
app.MapGet("/", () => "Server is up and running...");

// categories endpoints

// get lists of categories 

app.MapGet("/categories", () =>
{
    return "get categories";
});


app.Run();