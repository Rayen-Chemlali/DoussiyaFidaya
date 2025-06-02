import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documentsCreateManyPatientsInput } from "../inputs/Lab_documentsCreateManyPatientsInput";

@TypeGraphQL.InputType("Lab_documentsCreateManyPatientsInputEnvelope", {})
export class Lab_documentsCreateManyPatientsInputEnvelope {
  @TypeGraphQL.Field(_type => [Lab_documentsCreateManyPatientsInput], {
    nullable: false
  })
  data!: Lab_documentsCreateManyPatientsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
