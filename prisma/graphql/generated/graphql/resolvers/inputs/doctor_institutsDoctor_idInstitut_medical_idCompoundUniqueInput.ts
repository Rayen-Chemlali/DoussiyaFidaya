import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("doctor_institutsDoctor_idInstitut_medical_idCompoundUniqueInput", {})
export class doctor_institutsDoctor_idInstitut_medical_idCompoundUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  doctor_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  institut_medical_id!: string;
}
