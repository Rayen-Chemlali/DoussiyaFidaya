import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_attachmentsCreateManyLab_documentsInput } from "../inputs/Lab_attachmentsCreateManyLab_documentsInput";

@TypeGraphQL.InputType("Lab_attachmentsCreateManyLab_documentsInputEnvelope", {})
export class Lab_attachmentsCreateManyLab_documentsInputEnvelope {
  @TypeGraphQL.Field(_type => [Lab_attachmentsCreateManyLab_documentsInput], {
    nullable: false
  })
  data!: Lab_attachmentsCreateManyLab_documentsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
