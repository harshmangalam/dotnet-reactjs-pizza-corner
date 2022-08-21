using ApiServer.Models;
using ApiServer.Services;


var builder = WebApplication.CreateBuilder(args);

// add swagger for api documentation 
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddControllers();
builder.Services.Configure<PizzaCornerDatabaseSettings>(builder.Configuration.GetSection("PizzaCornerDatabase"));
builder.Services.AddSingleton<CategoryService>();


var app = builder.Build();


// configure swagger ui in development mode 
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.MapControllers();
app.Run();