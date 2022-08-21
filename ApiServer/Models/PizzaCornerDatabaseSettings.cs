namespace ApiServer.Models;

public class PizzaCornerDatabaseSettings
{
    public string ConnectionString { get; set; } = null!;

    public string DatabaseName { get; set; } = null!;

    public string CategoryCollectionName { get; set; } = null!;
}