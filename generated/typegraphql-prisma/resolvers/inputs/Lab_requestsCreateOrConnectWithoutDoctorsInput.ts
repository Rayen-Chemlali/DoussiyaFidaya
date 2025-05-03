import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_requestsCreateWithoutDoctorsInput } from "../inputs/Lab_requestsCreateWithoutDoctorsInput";
import { Lab_requestsWhereUniqueInput } from "../inputs/Lab_requestsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_requestsCreateOrConnectWithoutDoctorsInput", {})
export class Lab_requestsCreateOrConnectWithoutDoctorsInput {
  @TypeGraphQL.Field(_type => Lab_requestsWhereUniqueInput, {
    nullable: false
  })
  where!: Lab_requestsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Lab_requestsCreateWithoutDoctorsInput, {
    nullable: false
  })
  create!: Lab_requestsCreateWithoutDoctorsInput;
}
