import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorizationsCreateManyPatientsInputEnvelope } from "../inputs/AuthorizationsCreateManyPatientsInputEnvelope";
import { AuthorizationsCreateOrConnectWithoutPatientsInput } from "../inputs/AuthorizationsCreateOrConnectWithoutPatientsInput";
import { AuthorizationsCreateWithoutPatientsInput } from "../inputs/AuthorizationsCreateWithoutPatientsInput";
import { AuthorizationsWhereUniqueInput } from "../inputs/AuthorizationsWhereUniqueInput";

@TypeGraphQL.InputType("AuthorizationsCreateNestedManyWithoutPatientsInput", {})
export class AuthorizationsCreateNestedManyWithoutPatientsInput {
  @TypeGraphQL.Field(_type => [AuthorizationsCreateWithoutPatientsInput], {
    nullable: true
  })
  create?: AuthorizationsCreateWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorizationsCreateOrConnectWithoutPatientsInput], {
    nullable: true
  })
  connectOrCreate?: AuthorizationsCreateOrConnectWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => AuthorizationsCreateManyPatientsInputEnvelope, {
    nullable: true
  })
  createMany?: AuthorizationsCreateManyPatientsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AuthorizationsWhereUniqueInput], {
    nullable: true
  })
  connect?: AuthorizationsWhereUniqueInput[] | undefined;
}
