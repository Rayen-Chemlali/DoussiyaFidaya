import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsCreateWithoutAuthorizationsInput } from "../inputs/PatientsCreateWithoutAuthorizationsInput";
import { PatientsUpdateWithoutAuthorizationsInput } from "../inputs/PatientsUpdateWithoutAuthorizationsInput";
import { PatientsWhereInput } from "../inputs/PatientsWhereInput";

@TypeGraphQL.InputType("PatientsUpsertWithoutAuthorizationsInput", {})
export class PatientsUpsertWithoutAuthorizationsInput {
  @TypeGraphQL.Field(_type => PatientsUpdateWithoutAuthorizationsInput, {
    nullable: false
  })
  update!: PatientsUpdateWithoutAuthorizationsInput;

  @TypeGraphQL.Field(_type => PatientsCreateWithoutAuthorizationsInput, {
    nullable: false
  })
  create!: PatientsCreateWithoutAuthorizationsInput;

  @TypeGraphQL.Field(_type => PatientsWhereInput, {
    nullable: true
  })
  where?: PatientsWhereInput | undefined;
}
