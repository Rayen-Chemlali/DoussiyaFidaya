import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_resultsScalarWhereInput } from "../inputs/Lab_resultsScalarWhereInput";
import { Lab_resultsUpdateManyMutationInput } from "../inputs/Lab_resultsUpdateManyMutationInput";

@TypeGraphQL.InputType("Lab_resultsUpdateManyWithWhereWithoutLab_documentsInput", {})
export class Lab_resultsUpdateManyWithWhereWithoutLab_documentsInput {
  @TypeGraphQL.Field(_type => Lab_resultsScalarWhereInput, {
    nullable: false
  })
  where!: Lab_resultsScalarWhereInput;

  @TypeGraphQL.Field(_type => Lab_resultsUpdateManyMutationInput, {
    nullable: false
  })
  data!: Lab_resultsUpdateManyMutationInput;
}
