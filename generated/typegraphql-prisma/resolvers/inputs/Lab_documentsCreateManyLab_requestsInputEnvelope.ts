import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_documentsCreateManyLab_requestsInput } from "../inputs/Lab_documentsCreateManyLab_requestsInput";

@TypeGraphQL.InputType("Lab_documentsCreateManyLab_requestsInputEnvelope", {})
export class Lab_documentsCreateManyLab_requestsInputEnvelope {
  @TypeGraphQL.Field(_type => [Lab_documentsCreateManyLab_requestsInput], {
    nullable: false
  })
  data!: Lab_documentsCreateManyLab_requestsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
