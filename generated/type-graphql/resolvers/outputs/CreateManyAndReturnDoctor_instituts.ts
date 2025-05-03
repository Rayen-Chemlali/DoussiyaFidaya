import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Doctors } from "../../models/Doctors";
import { Instituts_medicaux } from "../../models/Instituts_medicaux";

@TypeGraphQL.ObjectType("CreateManyAndReturnDoctor_instituts", {})
export class CreateManyAndReturnDoctor_instituts {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  doctor_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  institut_medical_id!: string;

  @TypeGraphQL.Field(_type => Doctors, {
    nullable: false
  })
  doctors!: Doctors;

  @TypeGraphQL.Field(_type => Instituts_medicaux, {
    nullable: false
  })
  instituts_medicaux!: Instituts_medicaux;
}
