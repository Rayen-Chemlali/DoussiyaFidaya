import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsCreateOrConnectWithoutUsersInput } from "../inputs/PatientsCreateOrConnectWithoutUsersInput";
import { PatientsCreateWithoutUsersInput } from "../inputs/PatientsCreateWithoutUsersInput";
import { PatientsWhereUniqueInput } from "../inputs/PatientsWhereUniqueInput";

@TypeGraphQL.InputType("PatientsCreateNestedOneWithoutUsersInput", {})
export class PatientsCreateNestedOneWithoutUsersInput {
  @TypeGraphQL.Field(_type => PatientsCreateWithoutUsersInput, {
    nullable: true
  })
  create?: PatientsCreateWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => PatientsCreateOrConnectWithoutUsersInput, {
    nullable: true
  })
  connectOrCreate?: PatientsCreateOrConnectWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => PatientsWhereUniqueInput, {
    nullable: true
  })
  connect?: PatientsWhereUniqueInput | undefined;
}
