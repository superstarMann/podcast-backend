import { Field, InputType } from "@nestjs/graphql";
import { IsNumber, IsString } from "class-validator";
import { Episode } from "../entities/episode.entity";

@InputType()
export class UpdatePodcastDto {
  @Field(() => String, {nullable: true})
  @IsString()
  title?: string;

  @Field(() => String, {nullable: true})
  @IsString()
  category?: string;

  @Field(() => Number, {nullable: true})
  @IsNumber()
  rating?: number;

  episodes?: Episode[];
  }
  