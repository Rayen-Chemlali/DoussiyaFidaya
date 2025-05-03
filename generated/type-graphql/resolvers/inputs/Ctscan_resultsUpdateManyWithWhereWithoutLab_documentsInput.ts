import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Ctscan_resultsScalarWhereInput } from "../inputs/Ctscan_resultsScalarWhereInput";
import { Ctscan_resultsUpdateManyMutationInput } from "../inputs/Ctscan_resultsUpdateManyMutationInput";

@TypeGraphQL.InputType("Ctscan_resultsUpdateManyWithWhereWithoutLab_documentsInput", {})
export class Ctscan_resultsUpdateManyWithWhereWithoutLab_documentsInput {
  @TypeGraphQL.Field(_type => Ctscan_resultsScalarWhereInput, {
    nullable: false
  })
  where!: Ctscan_resultsScalarWhereInput;

  @TypeGraphQL.Field(_type => Ctscan_resultsUpdateManyMutationInput, {
    nullable: false
  })
  data!: Ctscan_resultsUpdateManyMutationInput;
}
