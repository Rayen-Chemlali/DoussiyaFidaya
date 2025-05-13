import { doctors_type_enum, doctors_specialty_enum } from "@prisma/client"
import { IsEnum, IsNotEmpty } from "class-validator"

export class DoctorRegistrationInput {
    @IsNotEmpty()
    @IsEnum(doctors_type_enum)
    type: doctors_type_enum

    @IsNotEmpty()
    @IsEnum(doctors_specialty_enum)
    specialty: doctors_specialty_enum
}   