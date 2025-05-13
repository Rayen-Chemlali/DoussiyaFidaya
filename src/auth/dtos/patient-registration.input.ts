import { Type } from "class-transformer";
import { IsOptional, IsDate, IsEnum, IsNotEmpty, IsNumber } from "class-validator";

import { RegistrationInput } from "./registration.input";
import { patients_gender_enum } from "@prisma/client";

export class PatientRegistrationInput extends RegistrationInput {
    @IsNotEmpty()
    @Type(() => Number)
    @IsNumber()
    cin: number;

    @IsNotEmpty()
    @Type(() => Date) 
    @IsDate()
    date_of_birth: Date;

    @IsNotEmpty()
    @IsEnum(patients_gender_enum)
    gender: patients_gender_enum;
};