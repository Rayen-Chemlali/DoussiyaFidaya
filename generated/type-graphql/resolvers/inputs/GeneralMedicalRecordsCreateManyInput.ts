import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GeneralMedicalRecordsCreateallergiesInput } from "../inputs/GeneralMedicalRecordsCreateallergiesInput";

@TypeGraphQL.InputType("GeneralMedicalRecordsCreateManyInput", {})
export class GeneralMedicalRecordsCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => GeneralMedicalRecordsCreateallergiesInput, {
    nullable: true
  })
  allergies?: GeneralMedicalRecordsCreateallergiesInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bloodType?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  birthDate?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  height?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  weight?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  patient_id!: string;
}
