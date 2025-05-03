import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_resultsCreateManyLab_documentsInput } from "../inputs/Lab_resultsCreateManyLab_documentsInput";

@TypeGraphQL.InputType("Lab_resultsCreateManyLab_documentsInputEnvelope", {})
export class Lab_resultsCreateManyLab_documentsInputEnvelope {
  @TypeGraphQL.Field(_type => [Lab_resultsCreateManyLab_documentsInput], {
    nullable: false
  })
  data!: Lab_resultsCreateManyLab_documentsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
