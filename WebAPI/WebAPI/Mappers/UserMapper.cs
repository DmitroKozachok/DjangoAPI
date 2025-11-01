using AutoMapper;
using WebAPI.Data.Entities.Identity;
using WebAPI.Models.Account;
using WebAPI.Models.Seeders;

namespace WebAPI.Mappers;

public class UserMapper : Profile
{
    public UserMapper()
    {
        CreateMap<SeederUserModel, UserEntity>()
            .ForMember(x => x.UserName, opt => opt.MapFrom(x => x.Email));

        CreateMap<RegisterModel, UserEntity>()
            .ForMember(x => x.UserName, opt => opt.MapFrom(x => x.Username ?? x.Email));

        CreateMap<GoogleAccountModel, UserEntity>()
                .ForMember(x => x.UserName, opt => opt.MapFrom(x => x.Email));
    }
}