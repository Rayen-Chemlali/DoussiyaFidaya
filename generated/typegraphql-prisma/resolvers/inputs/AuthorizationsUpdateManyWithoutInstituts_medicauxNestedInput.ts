import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorizationsCreateManyInstituts_medicauxInputEnvelope } from "../inputs/AuthorizationsCreateManyInstituts_medicauxInputEnvelope";
import { AuthorizationsCreateOrConnectWithoutInstituts_medicauxInput } from "../inputs/AuthorizationsCreateOrConnectWithoutInstituts_medicauxInput";
import { AuthorizationsCreateWithoutInstituts_medicauxInput } from "../inputs/AuthorizationsCreateWithoutInstituts_medicauxInput";
import { AuthorizationsScalarWhereInput } from "../inputs/AuthorizationsScalarWhereInput";
import { AuthorizationsUpdateManyWithWhereWithoutInstituts_medicauxInput } from "../inputs/AuthorizationsUpdateManyWithWhereWithoutInstituts_medicauxInput";
import { AuthorizationsUpdateWithWhereUniqueWithoutInstituts_medicauxInput } from "../inputs/AuthorizationsUpdateWithWhereUniqueWithoutInstituts_medicauxInput";
import { AuthorizationsUpsertWithWhereUniqueWithoutInstituts_medicauxInput } from "../inputs/AuthorizationsUpsertWithWhereUniqueWithoutInstituts_medicauxInput";
import { AuthorizationsWhereUniqueInput } from "../inputs/AuthorizationsWhereUniqueInput";

@TypeGraphQL.InputType("AuthorizationsUpdateManyWithoutInstituts_medicauxNestedInput", {})
export class AuthorizationsUpdateManyWithoutInstituts_medicauxNestedInput {
  @TypeGraphQL.Field(_type => [AuthorizationsCreateWithoutInstituts_medicauxInput], {
    nullable: true
  })
  create?: AuthorizationsCreateWithoutInstituts_medicauxInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorizationsCreateOrConnectWithoutInstituts_medicauxInput], {
    nullable: true
  })
  connectOrCreate?: AuthorizationsCreateOrConnectWithoutInstituts_medicauxInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorizationsUpsertWithWhereUniqueWithoutInstituts_medicauxInput], {
    nullable: true
  })
  upsert?: AuthorizationsUpsertWithWhereUniqueWithoutInstituts_medicauxInput[] | undefined;

  @TypeGraphQL.Field(_type => AuthorizationsCreateManyInstituts_medicauxInputEnvelope, {
    nullable: true
  })
  createMany?: AuthorizationsCreateManyInstituts_medicauxInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [AuthorizationsUpdateWithWhereUniqueWithoutInstituts_medicauxInput], {
    nullable: true
  })
  update?: AuthorizationsUpdateWithWhereUniqueWithoutInstituts_medicauxInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorizationsUpdateManyWithWhereWithoutInstituts_medicauxInput], {
    nullable: true
  })
  updateMany?: AuthorizationsUpdateManyWithWhereWithoutInstituts_medicauxInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorizationsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AuthorizationsScalarWhereInput[] | undefined;
}
