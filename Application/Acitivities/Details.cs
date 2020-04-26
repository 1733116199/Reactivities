using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Errors;
using AutoMapper;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistance;

namespace Application.Acitivities
{
    public class Details
    {
        public class Query : IRequest<ActivityDto>
        {
            public Guid Id { get; set; }
        }
        public class Handler : IRequestHandler<Query, ActivityDto>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                this._mapper = mapper;
                this._context = context;
            }

            public async Task<ActivityDto> Handle(Query request, CancellationToken cancellationToken)
            {

                var activity = await _context.Acitivities
                .FindAsync(request.Id);

                if (activity == null)
                    throw new RestException(HttpStatusCode.NotFound, new { activity = "Not found" });

                var activityToReturn = _mapper.Map<Activity, ActivityDto>(activity);
                
                return activityToReturn;
            }
        }
    }
}