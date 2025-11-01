using AutoMapper;
using WebAPI.Data.Entities;
using WebAPI.Models.Posts;

namespace WebAPI.Mappers;

public class PostMapper : Profile
{
    public PostMapper()
    {
        CreateMap<PostEntity, PostItemModel>()
            .ForMember(src => src.TopicName, opt => opt.MapFrom(x => x.Topic.Name))
            .ForMember(src => src.UserName, opt => opt.MapFrom(x => x.User.UserName));

        CreateMap<PostCreateModel, PostEntity>()
            .ForMember(src => src.Image, opt => opt.Ignore())
            .ForMember(src => src.Video, opt => opt.Ignore())
            .ForMember(src => src.CreatedAt, opt => opt.MapFrom(_ => DateTime.UtcNow));
    }
}
