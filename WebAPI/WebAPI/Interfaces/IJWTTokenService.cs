using WebAPI.Data.Entities.Identity;

namespace WebAPI.Interfaces;

public interface IJWTTokenService
{
    Task<Dictionary<string, string>> CreateTokenAsync(UserEntity user);
}
