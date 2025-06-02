import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { patients_gender_enum } from "../../enums/patients_gender_enum";

@TypeGraphQL.InputType("PatientsCreateManyInput", {})
export class PatientsCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  cin!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date_of_birth!: Date;

  @TypeGraphQL.Field(_type => patients_gender_enum, {
    nullable: false
  })
  gender!: "Male" | "Female";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  profile_image?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  general_medical_record_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  user_id?: string | undefined;
}
