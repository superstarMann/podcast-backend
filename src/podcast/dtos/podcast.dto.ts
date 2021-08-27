import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { IsNumber } from "class-validator";
import { Episode } from "../entities/episode.entity";
import { Podcast } from "../entities/podcast.entity";
import { CoreOutPut } from "./output.dto";

@InputType()
export class PodCastSearchInput{
    @Field(() => Number)
    @IsNumber()
    id: number;
}

@ObjectType()
export class  PodcastOutput extends CoreOutPut{
    @Field(() => Podcast, {nullable: true})
    podcast?: Podcast
}

@ObjectType()
export class EpisodesOutput extends CoreOutPut{
    @Field(() => [Episode], {nullable: true})
    episodes?: Episode[]
}

@InputType()
export class EpisodesSearchInput {
    @Field(() => Number)
    @IsNumber()
    podcastId: number;

    @Field(() => Number)
    @IsNumber()
    episodeid: number
}