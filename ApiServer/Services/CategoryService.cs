using ApiServer.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace ApiServer.Services;


public class CategoryService
{

    private readonly IMongoCollection<Category> _categoryCollection;

    public CategoryService(IOptions<PizzaCornerDatabaseSettings> pizzaCornerDatabaseSettings)
    {

        var mongoClient = new MongoClient(pizzaCornerDatabaseSettings.Value.ConnectionString);
        var mongoDatabase = mongoClient.GetDatabase(
          pizzaCornerDatabaseSettings.Value.DatabaseName);

        _categoryCollection = mongoDatabase.GetCollection<Category>(
         pizzaCornerDatabaseSettings.Value.CategoryCollectionName);

    }

    public async Task<List<Category>> GetAsync() =>
      await _categoryCollection.Find(_ => true).ToListAsync();



    public async Task<Category?> GetAsync(string id) =>
        await _categoryCollection.Find(x => x.Id == id).FirstOrDefaultAsync();


    public async Task CreateAsync(Category newCategory) =>
   await _categoryCollection.InsertOneAsync(newCategory);



    public async Task UpdateAsync(string id, Category updatedCategory) =>
           await _categoryCollection.ReplaceOneAsync(x => x.Id == id, updatedCategory);



    public async Task RemoveAsync(string id) =>
await _categoryCollection.DeleteOneAsync(x => x.Id == id);
}
