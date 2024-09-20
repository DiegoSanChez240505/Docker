import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MaxLength, IsBoolean } from 'class-validator';

@InputType()
export class UpdateMusicaInput {

    @Field(() => Int, { description: 'ID of the music' })
    @IsNotEmpty()
    id: number;

    @Field(() => String, { description: 'Description of the music', nullable: true })
    @IsString()
    @MaxLength(50)
    description?: string;

    @Field(() => Boolean, { description: 'Is the music done?', nullable: true })
    @IsBoolean()
    done?: boolean;
}