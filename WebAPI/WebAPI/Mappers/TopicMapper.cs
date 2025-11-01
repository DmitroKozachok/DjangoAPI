using AutoMapper;
using WebAPI.Data.Entities;
using WebAPI.Models.Topics;

namespace WebAPI.Mappers;

public class TopicMapper : Profile
{
    public TopicMapper()
    {
        CreateMap<TopicEntity, TopicItemModel>();
    }
}
