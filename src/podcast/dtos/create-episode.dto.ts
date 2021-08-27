import { Field, InputType } from "@nestjs/graphql";
import { IsNumber, IsString } from "class-validator";
import { PodCastSearchInput } from "./podcast.dto";
 
@InputType()
export class CreateEpisodeDto extends PodCastSearchInput{
    @Field(() => String)
    @IsString()
    title: string;

    @Field(() => String)
    @IsString()
    category: string;

}