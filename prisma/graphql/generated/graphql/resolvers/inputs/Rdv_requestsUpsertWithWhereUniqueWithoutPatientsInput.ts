import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Rdv_requestsCreateWithoutPatientsInput } from "../inputs/Rdv_requestsCreateWithoutPatientsInput";
import { Rdv_requestsUpdateWithoutPatientsInput } from "../inputs/Rdv_requestsUpdateWithoutPatientsInput";
import { Rdv_requestsWhereUniqueInput } from "../inputs/Rdv_requestsWhereUniqueInput";

@TypeGraphQL.InputType("Rdv_requestsUpsertWithWhereUniqueWithoutPatientsInput", {})
export class Rdv_requestsUpsertWithWhereUniqueWithoutPatientsInput {
  @TypeGraphQL.Field(_type => Rdv_requestsWhereUniqueInput, {
    nullable: false
  })
  where!: Rdv_requestsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Rdv_requestsUpdateWithoutPatientsInput, {
    nullable: false
  })
  update!: Rdv_requestsUpdateWithoutPatientsInput;

  @TypeGraphQL.Field(_type => Rdv_requestsCreateWithoutPatientsInput, {
    nullable: false
  })
  create!: Rdv_requestsCreateWithoutPatientsInput;
}
