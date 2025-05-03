import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_requestsScalarWhereInput } from "../inputs/Lab_requestsScalarWhereInput";
import { Lab_requestsUpdateManyMutationInput } from "../inputs/Lab_requestsUpdateManyMutationInput";

@TypeGraphQL.InputType("Lab_requestsUpdateManyWithWhereWithoutPatientsInput", {})
export class Lab_requestsUpdateManyWithWhereWithoutPatientsInput {
  @TypeGraphQL.Field(_type => Lab_requestsScalarWhereInput, {
    nullable: false
  })
  where!: Lab_requestsScalarWhereInput;

  @TypeGraphQL.Field(_type => Lab_requestsUpdateManyMutationInput, {
    nullable: false
  })
  data!: Lab_requestsUpdateManyMutationInput;
}
