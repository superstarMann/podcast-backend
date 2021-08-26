import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreatePodcastDto } from './dtos/create-podcast.dto';
import { UpdateEpisodeDto } from './dtos/update-episode.dto';
import { Podcast } from './entities/podcast.entity';

@Resolver(() => Podcast)
export class PodcastResolver {
    @Query(() => Podcast) podcast(){
        return true;
    }

    @Mutation(() => Boolean)
    createPodcast(
        @Args('input')createPodcastDto: CreatePodcastDto
    ):boolean {
        return true;
    }

    @Mutation(() => Boolean)
    createEpisode(
        @Args('input')createEpisode: CreatePodcastDto
    ):boolean{
        return true;
    }

    @Mutation(() => Boolean)
    updatePodcast(@Args('input')updatePodcast: UpdateEpisodeDto): boolean{
        return true;
    }

    @Mutation(() => Boolean)
    updateEpisode(@Args('input')updateEpisode: UpdateEpisodeDto): boolean{
        return true;
    }

}
