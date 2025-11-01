using Microsoft.AspNetCore.Identity;

namespace WebAPI.Data.Entities.Identity;

public class UserLoginEntity : IdentityUserLogin<long>
{
    public UserEntity User { get; set; }// = new();
}
