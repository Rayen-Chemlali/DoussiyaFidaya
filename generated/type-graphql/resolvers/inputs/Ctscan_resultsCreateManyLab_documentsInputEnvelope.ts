import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Ctscan_resultsCreateManyLab_documentsInput } from "../inputs/Ctscan_resultsCreateManyLab_documentsInput";

@TypeGraphQL.InputType("Ctscan_resultsCreateManyLab_documentsInputEnvelope", {})
export class Ctscan_resultsCreateManyLab_documentsInputEnvelope {
  @TypeGraphQL.Field(_type => [Ctscan_resultsCreateManyLab_documentsInput], {
    nullable: false
  })
  data!: Ctscan_resultsCreateManyLab_documentsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
