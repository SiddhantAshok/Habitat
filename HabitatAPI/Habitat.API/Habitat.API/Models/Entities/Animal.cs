namespace Habitat.API.Models.Entities
{
    public class Animal
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string ImagePath { get; set; }
        public string Author { get; set; }
        public string Topic { get; set; }
        public string Description { get; set; }
    }
}
