import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Rdv_requestsCreateWithoutDoctorsInput } from "../inputs/Rdv_requestsCreateWithoutDoctorsInput";
import { Rdv_requestsWhereUniqueInput } from "../inputs/Rdv_requestsWhereUniqueInput";

@TypeGraphQL.InputType("Rdv_requestsCreateOrConnectWithoutDoctorsInput", {})
export class Rdv_requestsCreateOrConnectWithoutDoctorsInput {
  @TypeGraphQL.Field(_type => Rdv_requestsWhereUniqueInput, {
    nullable: false
  })
  where!: Rdv_requestsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Rdv_requestsCreateWithoutDoctorsInput, {
    nullable: false
  })
  create!: Rdv_requestsCreateWithoutDoctorsInput;
}
