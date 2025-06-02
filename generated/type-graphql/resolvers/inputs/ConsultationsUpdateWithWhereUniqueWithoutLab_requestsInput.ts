import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsUpdateWithoutLab_requestsInput } from "../inputs/ConsultationsUpdateWithoutLab_requestsInput";
import { ConsultationsWhereUniqueInput } from "../inputs/ConsultationsWhereUniqueInput";

@TypeGraphQL.InputType("ConsultationsUpdateWithWhereUniqueWithoutLab_requestsInput", {})
export class ConsultationsUpdateWithWhereUniqueWithoutLab_requestsInput {
  @TypeGraphQL.Field(_type => ConsultationsWhereUniqueInput, {
    nullable: false
  })
  where!: ConsultationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ConsultationsUpdateWithoutLab_requestsInput, {
    nullable: false
  })
  data!: ConsultationsUpdateWithoutLab_requestsInput;
}
