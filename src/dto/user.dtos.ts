import { IsString, IsNotEmpty, IsEmail, Length, IsOptional, IsInt } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @Length(1, 100)
    name: string;

    @IsEmail()
    @IsNotEmpty()
    @Length(1, 100)
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}

export class UpdateUserDto {
    @IsOptional()
    @IsString()
    @Length(1, 100)
    name?: string;

    @IsOptional()
    @IsEmail()
    @Length(1, 100)
    email?: string;

    @IsOptional()
    @IsString()
    password?: string;
}
