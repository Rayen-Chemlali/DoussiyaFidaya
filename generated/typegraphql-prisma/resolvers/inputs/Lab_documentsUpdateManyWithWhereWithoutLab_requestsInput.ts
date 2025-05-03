import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documentsScalarWhereInput } from "../inputs/Lab_documentsScalarWhereInput";
import { Lab_documentsUpdateManyMutationInput } from "../inputs/Lab_documentsUpdateManyMutationInput";

@TypeGraphQL.InputType("Lab_documentsUpdateManyWithWhereWithoutLab_requestsInput", {})
export class Lab_documentsUpdateManyWithWhereWithoutLab_requestsInput {
  @TypeGraphQL.Field(_type => Lab_documentsScalarWhereInput, {
    nullable: false
  })
  where!: Lab_documentsScalarWhereInput;

  @TypeGraphQL.Field(_type => Lab_documentsUpdateManyMutationInput, {
    nullable: false
  })
  data!: Lab_documentsUpdateManyMutationInput;
}
