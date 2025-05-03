import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { patients_gender_enum } from "../../enums/patients_gender_enum";

@TypeGraphQL.ObjectType("PatientsMinAggregate", {})
export class PatientsMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  cin!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  date_of_birth!: Date | null;

  @TypeGraphQL.Field(_type => patients_gender_enum, {
    nullable: true
  })
  gender!: "Male" | "Female" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  profile_image!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  general_medical_record_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  user_id!: string | null;
}
