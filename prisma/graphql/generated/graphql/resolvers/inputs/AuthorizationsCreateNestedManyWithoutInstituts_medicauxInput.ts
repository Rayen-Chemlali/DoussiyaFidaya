import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorizationsCreateManyInstituts_medicauxInputEnvelope } from "../inputs/AuthorizationsCreateManyInstituts_medicauxInputEnvelope";
import { AuthorizationsCreateOrConnectWithoutInstituts_medicauxInput } from "../inputs/AuthorizationsCreateOrConnectWithoutInstituts_medicauxInput";
import { AuthorizationsCreateWithoutInstituts_medicauxInput } from "../inputs/AuthorizationsCreateWithoutInstituts_medicauxInput";
import { AuthorizationsWhereUniqueInput } from "../inputs/AuthorizationsWhereUniqueInput";

@TypeGraphQL.InputType("AuthorizationsCreateNestedManyWithoutInstituts_medicauxInput", {})
export class AuthorizationsCreateNestedManyWithoutInstituts_medicauxInput {
  @TypeGraphQL.Field(_type => [AuthorizationsCreateWithoutInstituts_medicauxInput], {
    nullable: true
  })
  create?: AuthorizationsCreateWithoutInstituts_medicauxInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorizationsCreateOrConnectWithoutInstituts_medicauxInput], {
    nullable: true
  })
  connectOrCreate?: AuthorizationsCreateOrConnectWithoutInstituts_medicauxInput[] | undefined;

  @TypeGraphQL.Field(_type => AuthorizationsCreateManyInstituts_medicauxInputEnvelope, {
    nullable: true
  })
  createMany?: AuthorizationsCreateManyInstituts_medicauxInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AuthorizationsWhereUniqueInput], {
    nullable: true
  })
  connect?: AuthorizationsWhereUniqueInput[] | undefined;
}
