import { Type } from "class-transformer";
import { IsOptional, IsDate, IsEnum, IsNotEmpty, IsNumber, Max, Min } from "class-validator";

import { RegistrationInput } from "./registration.input";
import { patients_gender_enum } from "@prisma/client";

export class PatientRegistrationInput extends RegistrationInput {
    @IsNotEmpty()
    @Type(() => Number)
    @IsNumber()
    @Min(10000000)
    @Max(99999999)
    cin: number;

    @IsNotEmpty()
    @Type(() => Date) 
    @IsDate()
    date_of_birth: Date;

    @IsNotEmpty()
    @IsEnum(patients_gender_enum)
    gender: patients_gender_enum;
};