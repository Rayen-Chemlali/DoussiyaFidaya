import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_requestsCreateManyDoctorsInput } from "../inputs/Lab_requestsCreateManyDoctorsInput";

@TypeGraphQL.InputType("Lab_requestsCreateManyDoctorsInputEnvelope", {})
export class Lab_requestsCreateManyDoctorsInputEnvelope {
  @TypeGraphQL.Field(_type => [Lab_requestsCreateManyDoctorsInput], {
    nullable: false
  })
  data!: Lab_requestsCreateManyDoctorsInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
