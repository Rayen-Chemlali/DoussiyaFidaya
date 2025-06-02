import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documentsCreateManyLaboratoriesInput } from "../inputs/Lab_documentsCreateManyLaboratoriesInput";

@TypeGraphQL.InputType("Lab_documentsCreateManyLaboratoriesInputEnvelope", {})
export class Lab_documentsCreateManyLaboratoriesInputEnvelope {
  @TypeGraphQL.Field(_type => [Lab_documentsCreateManyLaboratoriesInput], {
    nullable: false
  })
  data!: Lab_documentsCreateManyLaboratoriesInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
