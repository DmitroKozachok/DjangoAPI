using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Data;
using WebAPI.Models.Topics;

namespace WebAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class TopicsController(AppDbContext context, IMapper mapper) : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> GetTopicsAsync([FromQuery] string? parent)
    {
        long? parentId = null;

        if (!string.IsNullOrEmpty(parent) && parent.ToLower() != "null")
        {
            if (!long.TryParse(parent, out var parsedId))
            {
                return BadRequest("Invalid parent id");
            }
            parentId = parsedId;
        }

        var topics = await context.Topics
            .Where(t => t.ParentId == parentId)
            .OrderBy(t => t.Priority)
            .ProjectTo<TopicItemModel>(mapper.ConfigurationProvider)
            .ToListAsync();

        return Ok(topics);
    }
}
