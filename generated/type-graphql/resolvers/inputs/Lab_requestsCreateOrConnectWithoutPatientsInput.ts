import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_requestsCreateWithoutPatientsInput } from "../inputs/Lab_requestsCreateWithoutPatientsInput";
import { Lab_requestsWhereUniqueInput } from "../inputs/Lab_requestsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_requestsCreateOrConnectWithoutPatientsInput", {})
export class Lab_requestsCreateOrConnectWithoutPatientsInput {
  @TypeGraphQL.Field(_type => Lab_requestsWhereUniqueInput, {
    nullable: false
  })
  where!: Lab_requestsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Lab_requestsCreateWithoutPatientsInput, {
    nullable: false
  })
  create!: Lab_requestsCreateWithoutPatientsInput;
}
