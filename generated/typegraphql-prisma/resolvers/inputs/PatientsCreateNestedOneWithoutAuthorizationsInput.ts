import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsCreateOrConnectWithoutAuthorizationsInput } from "../inputs/PatientsCreateOrConnectWithoutAuthorizationsInput";
import { PatientsCreateWithoutAuthorizationsInput } from "../inputs/PatientsCreateWithoutAuthorizationsInput";
import { PatientsWhereUniqueInput } from "../inputs/PatientsWhereUniqueInput";

@TypeGraphQL.InputType("PatientsCreateNestedOneWithoutAuthorizationsInput", {})
export class PatientsCreateNestedOneWithoutAuthorizationsInput {
  @TypeGraphQL.Field(_type => PatientsCreateWithoutAuthorizationsInput, {
    nullable: true
  })
  create?: PatientsCreateWithoutAuthorizationsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsCreateOrConnectWithoutAuthorizationsInput, {
    nullable: true
  })
  connectOrCreate?: PatientsCreateOrConnectWithoutAuthorizationsInput | undefined;

  @TypeGraphQL.Field(_type => PatientsWhereUniqueInput, {
    nullable: true
  })
  connect?: PatientsWhereUniqueInput | undefined;
}
