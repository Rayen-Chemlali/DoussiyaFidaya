import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Analysis_resultsScalarWhereInput } from "../inputs/Analysis_resultsScalarWhereInput";
import { Analysis_resultsUpdateManyMutationInput } from "../inputs/Analysis_resultsUpdateManyMutationInput";

@TypeGraphQL.InputType("Analysis_resultsUpdateManyWithWhereWithoutLab_documentsInput", {})
export class Analysis_resultsUpdateManyWithWhereWithoutLab_documentsInput {
  @TypeGraphQL.Field(_type => Analysis_resultsScalarWhereInput, {
    nullable: false
  })
  where!: Analysis_resultsScalarWhereInput;

  @TypeGraphQL.Field(_type => Analysis_resultsUpdateManyMutationInput, {
    nullable: false
  })
  data!: Analysis_resultsUpdateManyMutationInput;
}
