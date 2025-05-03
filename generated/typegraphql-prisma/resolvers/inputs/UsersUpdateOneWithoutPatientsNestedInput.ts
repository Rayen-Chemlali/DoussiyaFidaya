import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateOrConnectWithoutPatientsInput } from "../inputs/UsersCreateOrConnectWithoutPatientsInput";
import { UsersCreateWithoutPatientsInput } from "../inputs/UsersCreateWithoutPatientsInput";
import { UsersUpdateToOneWithWhereWithoutPatientsInput } from "../inputs/UsersUpdateToOneWithWhereWithoutPatientsInput";
import { UsersUpsertWithoutPatientsInput } from "../inputs/UsersUpsertWithoutPatientsInput";
import { UsersWhereInput } from "../inputs/UsersWhereInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";

@TypeGraphQL.InputType("UsersUpdateOneWithoutPatientsNestedInput", {})
export class UsersUpdateOneWithoutPatientsNestedInput {
  @TypeGraphQL.Field(_type => UsersCreateWithoutPatientsInput, {
    nullable: true
  })
  create?: UsersCreateWithoutPatientsInput | undefined;

  @TypeGraphQL.Field(_type => UsersCreateOrConnectWithoutPatientsInput, {
    nullable: true
  })
  connectOrCreate?: UsersCreateOrConnectWithoutPatientsInput | undefined;

  @TypeGraphQL.Field(_type => UsersUpsertWithoutPatientsInput, {
    nullable: true
  })
  upsert?: UsersUpsertWithoutPatientsInput | undefined;

  @TypeGraphQL.Field(_type => UsersWhereInput, {
    nullable: true
  })
  disconnect?: UsersWhereInput | undefined;

  @TypeGraphQL.Field(_type => UsersWhereInput, {
    nullable: true
  })
  delete?: UsersWhereInput | undefined;

  @TypeGraphQL.Field(_type => UsersWhereUniqueInput, {
    nullable: true
  })
  connect?: UsersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UsersUpdateToOneWithWhereWithoutPatientsInput, {
    nullable: true
  })
  update?: UsersUpdateToOneWithWhereWithoutPatientsInput | undefined;
}
