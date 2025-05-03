import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_requestsCreateManyPatientsInput } from "../inputs/Lab_requestsCreateManyPatientsInput";

@TypeGraphQL.InputType("Lab_requestsCreateManyPatientsInputEnvelope", {})
export class Lab_requestsCreateManyPatientsInputEnvelope {
  @TypeGraphQL.Field(_type => [Lab_requestsCreateManyPatientsInput], {
    nullable: false
  })
  data!: Lab_requestsCreateManyPatientsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
