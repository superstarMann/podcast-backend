import { Field, InputType } from "@nestjs/graphql";
import { IsNumber, IsString } from "class-validator";

@InputType()
export class CreatePodcastDto{
    @Field(() => Number)
    @IsNumber()
    id: number;

    @Field(() => String)
    @IsString()
    title: string;
    
    @Field(() => String)
    @IsString()
    category: string;
}