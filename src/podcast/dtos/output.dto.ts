import { Field,  ObjectType } from "@nestjs/graphql";
import { IsBoolean, IsOptional, IsString } from "class-validator";

@ObjectType()
export class CoreOutPut {
    @Field(() => String)
    @IsString()
    @IsOptional()
    error: string;

    @Field(() => Boolean)
    @IsBoolean()
    ok: boolean
}