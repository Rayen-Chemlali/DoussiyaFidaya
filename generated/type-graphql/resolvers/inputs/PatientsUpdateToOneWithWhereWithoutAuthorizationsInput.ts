import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsUpdateWithoutAuthorizationsInput } from "../inputs/PatientsUpdateWithoutAuthorizationsInput";
import { PatientsWhereInput } from "../inputs/PatientsWhereInput";

@TypeGraphQL.InputType("PatientsUpdateToOneWithWhereWithoutAuthorizationsInput", {})
export class PatientsUpdateToOneWithWhereWithoutAuthorizationsInput {
  @TypeGraphQL.Field(_type => PatientsWhereInput, {
    nullable: true
  })
  where?: PatientsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PatientsUpdateWithoutAuthorizationsInput, {
    nullable: false
  })
  data!: PatientsUpdateWithoutAuthorizationsInput;
}
