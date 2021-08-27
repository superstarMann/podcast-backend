import { Field, InputType } from "@nestjs/graphql";
import { IsNumber, IsOptional, IsString } from "class-validator";
import { Episode } from "../entities/episode.entity";

@InputType()
export class UpdatePodcastDto {
  @Field(() => String, {nullable: true})
  @IsString()
  @IsOptional()
  title?: string;

  @Field(() => String, {nullable: true})
  @IsString()
  @IsOptional()
  category?: string;

  @Field(() => Number, {nullable: true})
  @IsNumber()
  @IsOptional()
  rating?: number;

  @Field(() => [Episode], {nullable: true})
  episodes?: Episode[];
  }
  