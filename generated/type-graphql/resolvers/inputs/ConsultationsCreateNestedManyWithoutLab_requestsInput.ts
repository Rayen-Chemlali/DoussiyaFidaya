import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCreateOrConnectWithoutLab_requestsInput } from "../inputs/ConsultationsCreateOrConnectWithoutLab_requestsInput";
import { ConsultationsCreateWithoutLab_requestsInput } from "../inputs/ConsultationsCreateWithoutLab_requestsInput";
import { ConsultationsWhereUniqueInput } from "../inputs/ConsultationsWhereUniqueInput";

@TypeGraphQL.InputType("ConsultationsCreateNestedManyWithoutLab_requestsInput", {})
export class ConsultationsCreateNestedManyWithoutLab_requestsInput {
  @TypeGraphQL.Field(_type => [ConsultationsCreateWithoutLab_requestsInput], {
    nullable: true
  })
  create?: ConsultationsCreateWithoutLab_requestsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationsCreateOrConnectWithoutLab_requestsInput], {
    nullable: true
  })
  connectOrCreate?: ConsultationsCreateOrConnectWithoutLab_requestsInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConsultationsWhereUniqueInput], {
    nullable: true
  })
  connect?: ConsultationsWhereUniqueInput[] | undefined;
}
