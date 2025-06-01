import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCreateWithoutLab_requestsInput } from "../inputs/ConsultationsCreateWithoutLab_requestsInput";
import { ConsultationsWhereUniqueInput } from "../inputs/ConsultationsWhereUniqueInput";

@TypeGraphQL.InputType("ConsultationsCreateOrConnectWithoutLab_requestsInput", {})
export class ConsultationsCreateOrConnectWithoutLab_requestsInput {
  @TypeGraphQL.Field(_type => ConsultationsWhereUniqueInput, {
    nullable: false
  })
  where!: ConsultationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ConsultationsCreateWithoutLab_requestsInput, {
    nullable: false
  })
  create!: ConsultationsCreateWithoutLab_requestsInput;
}
