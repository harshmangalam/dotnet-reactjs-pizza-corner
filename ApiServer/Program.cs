using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
var builder = WebApplication.CreateBuilder(args);
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