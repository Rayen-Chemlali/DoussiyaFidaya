import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_requestsCreateWithoutLab_documentsInput } from "../inputs/Lab_requestsCreateWithoutLab_documentsInput";
import { Lab_requestsWhereUniqueInput } from "../inputs/Lab_requestsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_requestsCreateOrConnectWithoutLab_documentsInput", {})
export class Lab_requestsCreateOrConnectWithoutLab_documentsInput {
  @TypeGraphQL.Field(_type => Lab_requestsWhereUniqueInput, {
    nullable: false
  })
  where!: Lab_requestsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Lab_requestsCreateWithoutLab_documentsInput, {
    nullable: false
  })
  create!: Lab_requestsCreateWithoutLab_documentsInput;
}
