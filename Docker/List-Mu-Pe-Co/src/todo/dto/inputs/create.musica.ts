import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MaxLength, IsBoolean } from 'class-validator';

@InputType()
export class CreateMusicaInput {

    @Field(() => String, { description: 'Description of the music' })
    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    description: string;

    @Field(() => Boolean, { description: 'Is the music done?' })
    @IsBoolean()
    done: boolean;
}