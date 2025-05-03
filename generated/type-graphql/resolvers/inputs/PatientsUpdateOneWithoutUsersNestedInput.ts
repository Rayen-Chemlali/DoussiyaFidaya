import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PatientsCreateOrConnectWithoutUsersInput } from "../inputs/PatientsCreateOrConnectWithoutUsersInput";
import { PatientsCreateWithoutUsersInput } from "../inputs/PatientsCreateWithoutUsersInput";
import { PatientsUpdateToOneWithWhereWithoutUsersInput } from "../inputs/PatientsUpdateToOneWithWhereWithoutUsersInput";
import { PatientsUpsertWithoutUsersInput } from "../inputs/PatientsUpsertWithoutUsersInput";
import { PatientsWhereInput } from "../inputs/PatientsWhereInput";
import { PatientsWhereUniqueInput } from "../inputs/PatientsWhereUniqueInput";

@TypeGraphQL.InputType("PatientsUpdateOneWithoutUsersNestedInput", {})
export class PatientsUpdateOneWithoutUsersNestedInput {
  @TypeGraphQL.Field(_type => PatientsCreateWithoutUsersInput, {
    nullable: true
  })
  create?: PatientsCreateWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => PatientsCreateOrConnectWithoutUsersInput, {
    nullable: true
  })
  connectOrCreate?: PatientsCreateOrConnectWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => PatientsUpsertWithoutUsersInput, {
    nullable: true
  })
  upsert?: PatientsUpsertWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => PatientsWhereInput, {
    nullable: true
  })
  disconnect?: PatientsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PatientsWhereInput, {
    nullable: true
  })
  delete?: PatientsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PatientsWhereUniqueInput, {
    nullable: true
  })
  connect?: PatientsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PatientsUpdateToOneWithWhereWithoutUsersInput, {
    nullable: true
  })
  update?: PatientsUpdateToOneWithWhereWithoutUsersInput | undefined;
}
