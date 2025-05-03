import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Xray_resultsCreateManyLab_documentsInput } from "../inputs/Xray_resultsCreateManyLab_documentsInput";

@TypeGraphQL.InputType("Xray_resultsCreateManyLab_documentsInputEnvelope", {})
export class Xray_resultsCreateManyLab_documentsInputEnvelope {
  @TypeGraphQL.Field(_type => [Xray_resultsCreateManyLab_documentsInput], {
    nullable: false
  })
  data!: Xray_resultsCreateManyLab_documentsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
