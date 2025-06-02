import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Analysis_resultsCreateManyLab_documentsInput } from "../inputs/Analysis_resultsCreateManyLab_documentsInput";

@TypeGraphQL.InputType("Analysis_resultsCreateManyLab_documentsInputEnvelope", {})
export class Analysis_resultsCreateManyLab_documentsInputEnvelope {
  @TypeGraphQL.Field(_type => [Analysis_resultsCreateManyLab_documentsInput], {
    nullable: false
  })
  data!: Analysis_resultsCreateManyLab_documentsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
