import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateEpisodeDto } from './dtos/create-episode.dto';
import { CreatePodcastDto } from './dtos/create-podcast.dto';
import { CoreOutPut } from './dtos/output.dto';
import { EpisodesOutput, EpisodesSearchInput, PodcastOutput, PodCastSearchInput } from './dtos/podcast.dto';
import { UpdateEpisodeDto } from './dtos/update-episode.dto';
import { UpdatePodcastDto } from './dtos/update-podcast.dto';
import { Episode } from './entities/episode.entity';
import { Podcast } from './entities/podcast.entity';
import { PodcastsService } from './podcasts.service';

Resolver((Of) => Podcast)
export class PodcastsResolver {
  constructor(private readonly podcastsService: PodcastsService) {}

  @Query((returns) => [Podcast])
  getAllPodcasts() {
    return true
  }
/*
  @Mutation((returns) => CoreOutPut)
  createPodcast(@Args('input') createPodcastDto: CreatePodcastDto): CoreOutPut {
    return this.podcastsService.createPodcast(createPodcastDto);
  }

  @Query((returns) => PodcastOutput)
  getPodcast(@Args('input') podcastSearchInput: PodCastSearchInput) {
    return this.podcastsService.getPodcast(podcastSearchInput.id);
  }

  @Mutation((returns) => CoreOutPut)
  deletePodcast(@Args('input') podcastSearchInput: PodCastSearchInput) {
    return this.podcastsService.deletePodcast(podcastSearchInput.id);
  }

  @Mutation((returns) => CoreOutPut)
  updatePodcast(@Args('input') updatePodcastDto: UpdatePodcastDto): CoreOutPut {
    return this.podcastsService.updatePodcast(updatePodcastDto);
  }
  */
}

@Resolver((of) => Episode)
export class EpisodeResolver {
  constructor(private readonly podcastService: PodcastsService) {}
  /*
  @Query((returns) => EpisodesOutput)
  getEpisodes(
    @Args('input') podcastSearchInput: PodCastSearchInput,
  ): EpisodesOutput {
    return this.podcastService.getEpisodes(podcastSearchInput.id);
  }

  @Mutation((returns) => CoreOutPut)
  createEpisode(@Args('input') createEpisodeDto: CreateEpisodeDto): CoreOutPut {
    return this.podcastService.createEpisode(createEpisodeDto);
  }

  @Mutation((returns) => CoreOutPut)
  updateEpisode(@Args('input') updateEpisodeDto: UpdateEpisodeDto) {
    return this.podcastService.updateEpisode(updateEpisodeDto);
  }

  @Mutation((returns) => CoreOutPut)
  deleteEpisode(
    @Args('input') episodesSearchInput: EpisodesSearchInput,
  ): CoreOutPut {
    return this.podcastService.deleteEpisode(episodesSearchInput);
  }
  */
}
