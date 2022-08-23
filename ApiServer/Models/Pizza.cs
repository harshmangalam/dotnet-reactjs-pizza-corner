using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ApiServer.Models;


public class Pizza
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]

    public string? Id { get; set; }
    public string Name { get; set; }
    public string description { get; set; }

    public string Image { get; set; }

    public Category PizzaCategory {get;set;}
}