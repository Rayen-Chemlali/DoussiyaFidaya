import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Rdv_requestsCreateWithoutPatientsInput } from "../inputs/Rdv_requestsCreateWithoutPatientsInput";
import { Rdv_requestsWhereUniqueInput } from "../inputs/Rdv_requestsWhereUniqueInput";

@TypeGraphQL.InputType("Rdv_requestsCreateOrConnectWithoutPatientsInput", {})
export class Rdv_requestsCreateOrConnectWithoutPatientsInput {
  @TypeGraphQL.Field(_type => Rdv_requestsWhereUniqueInput, {
    nullable: false
  })
  where!: Rdv_requestsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Rdv_requestsCreateWithoutPatientsInput, {
    nullable: false
  })
  create!: Rdv_requestsCreateWithoutPatientsInput;
}
