import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Xray_resultsScalarWhereInput } from "../inputs/Xray_resultsScalarWhereInput";
import { Xray_resultsUpdateManyMutationInput } from "../inputs/Xray_resultsUpdateManyMutationInput";

@TypeGraphQL.InputType("Xray_resultsUpdateManyWithWhereWithoutLab_documentsInput", {})
export class Xray_resultsUpdateManyWithWhereWithoutLab_documentsInput {
  @TypeGraphQL.Field(_type => Xray_resultsScalarWhereInput, {
    nullable: false
  })
  where!: Xray_resultsScalarWhereInput;

  @TypeGraphQL.Field(_type => Xray_resultsUpdateManyMutationInput, {
    nullable: false
  })
  data!: Xray_resultsUpdateManyMutationInput;
}
