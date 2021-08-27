import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { IsNumber, IsString } from "class-validator";
import { Episode } from "./episode.entity";

@InputType()
export class Podcast{
    @Field(() => Number)
    @IsNumber()
    id: number;

    @Field(() => String)
    @IsString()
    title: string;
    
    @Field(() => String)
    @IsString()
    category: string;

    @Field(() => Number)
    @IsNumber()
    rating: number;

    @Field(() => [Episode])
    episodes: Episode[];
} 