import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorizationsCreateManyPatientsInputEnvelope } from "../inputs/AuthorizationsCreateManyPatientsInputEnvelope";
import { AuthorizationsCreateOrConnectWithoutPatientsInput } from "../inputs/AuthorizationsCreateOrConnectWithoutPatientsInput";
import { AuthorizationsCreateWithoutPatientsInput } from "../inputs/AuthorizationsCreateWithoutPatientsInput";
import { AuthorizationsScalarWhereInput } from "../inputs/AuthorizationsScalarWhereInput";
import { AuthorizationsUpdateManyWithWhereWithoutPatientsInput } from "../inputs/AuthorizationsUpdateManyWithWhereWithoutPatientsInput";
import { AuthorizationsUpdateWithWhereUniqueWithoutPatientsInput } from "../inputs/AuthorizationsUpdateWithWhereUniqueWithoutPatientsInput";
import { AuthorizationsUpsertWithWhereUniqueWithoutPatientsInput } from "../inputs/AuthorizationsUpsertWithWhereUniqueWithoutPatientsInput";
import { AuthorizationsWhereUniqueInput } from "../inputs/AuthorizationsWhereUniqueInput";

@TypeGraphQL.InputType("AuthorizationsUpdateManyWithoutPatientsNestedInput", {})
export class AuthorizationsUpdateManyWithoutPatientsNestedInput {
  @TypeGraphQL.Field(_type => [AuthorizationsCreateWithoutPatientsInput], {
    nullable: true
  })
  create?: AuthorizationsCreateWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorizationsCreateOrConnectWithoutPatientsInput], {
    nullable: true
  })
  connectOrCreate?: AuthorizationsCreateOrConnectWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorizationsUpsertWithWhereUniqueWithoutPatientsInput], {
    nullable: true
  })
  upsert?: AuthorizationsUpsertWithWhereUniqueWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => AuthorizationsCreateManyPatientsInputEnvelope, {
    nullable: true
  })
  createMany?: AuthorizationsCreateManyPatientsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AuthorizationsWhereUniqueInput], {
    nullable: true
  })
  set?: AuthorizationsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorizationsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: AuthorizationsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorizationsWhereUniqueInput], {
    nullable: true
  })
  delete?: AuthorizationsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorizationsWhereUniqueInput], {
    nullable: true
  })
  connect?: AuthorizationsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorizationsUpdateWithWhereUniqueWithoutPatientsInput], {
    nullable: true
  })
  update?: AuthorizationsUpdateWithWhereUniqueWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorizationsUpdateManyWithWhereWithoutPatientsInput], {
    nullable: true
  })
  updateMany?: AuthorizationsUpdateManyWithWhereWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorizationsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AuthorizationsScalarWhereInput[] | undefined;
}
