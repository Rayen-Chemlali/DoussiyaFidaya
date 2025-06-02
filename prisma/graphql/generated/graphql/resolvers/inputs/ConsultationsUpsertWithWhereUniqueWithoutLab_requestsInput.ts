import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCreateWithoutLab_requestsInput } from "../inputs/ConsultationsCreateWithoutLab_requestsInput";
import { ConsultationsUpdateWithoutLab_requestsInput } from "../inputs/ConsultationsUpdateWithoutLab_requestsInput";
import { ConsultationsWhereUniqueInput } from "../inputs/ConsultationsWhereUniqueInput";

@TypeGraphQL.InputType("ConsultationsUpsertWithWhereUniqueWithoutLab_requestsInput", {})
export class ConsultationsUpsertWithWhereUniqueWithoutLab_requestsInput {
  @TypeGraphQL.Field(_type => ConsultationsWhereUniqueInput, {
    nullable: false
  })
  where!: ConsultationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ConsultationsUpdateWithoutLab_requestsInput, {
    nullable: false
  })
  update!: ConsultationsUpdateWithoutLab_requestsInput;

  @TypeGraphQL.Field(_type => ConsultationsCreateWithoutLab_requestsInput, {
    nullable: false
  })
  create!: ConsultationsCreateWithoutLab_requestsInput;
}
