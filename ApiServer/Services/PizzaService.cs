using ApiServer.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace ApiServer.Services;


public class PizzaService
{

    private readonly IMongoCollection<Pizza> _pizzaCollection;

    public PizzaService(IOptions<PizzaCornerDatabaseSettings> pizzaCornerDatabaseSettings)
    {

        var mongoClient = new MongoClient(pizzaCornerDatabaseSettings.Value.ConnectionString);
        var mongoDatabase = mongoClient.GetDatabase(
          pizzaCornerDatabaseSettings.Value.DatabaseName);

        _pizzaCollection = mongoDatabase.GetCollection<Pizza>(
         pizzaCornerDatabaseSettings.Value.PizzaCollectionName);

    }

    public async Task<List<Pizza>> GetAsync() =>
      await _pizzaCollection.Find(_ => true).ToListAsync();



    public async Task<Pizza?> GetAsync(string id) =>
        await _pizzaCollection.Find(x => x.Id == id).FirstOrDefaultAsync();


    public async Task CreateAsync(Pizza newPizza) =>
   await _pizzaCollection.InsertOneAsync(newPizza);



    public async Task UpdateAsync(string id, Pizza updatedPizza) =>
           await _pizzaCollection.ReplaceOneAsync(x => x.Id == id, updatedPizza);



    public async Task RemoveAsync(string id) =>
await _pizzaCollection.DeleteOneAsync(x => x.Id == id);
}
