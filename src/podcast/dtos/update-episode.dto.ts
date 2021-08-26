import { Field, InputType } from "@nestjs/graphql";
import { IsNumber, IsString } from "class-validator";

@InputType()
export class UpdateEpisodeDto {
    @Field(() => String, {nullable: true})
    @IsString()
    title?: string;
    
    @Field(() => String, {nullable: true})
    @IsString()
    category?: string;

    @Field(() => Number, {nullable: true})
    @IsNumber()
    rating?: number;
  }