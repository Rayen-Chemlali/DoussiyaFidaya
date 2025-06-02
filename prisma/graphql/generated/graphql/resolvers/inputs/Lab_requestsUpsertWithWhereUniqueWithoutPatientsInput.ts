import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_requestsCreateWithoutPatientsInput } from "../inputs/Lab_requestsCreateWithoutPatientsInput";
import { Lab_requestsUpdateWithoutPatientsInput } from "../inputs/Lab_requestsUpdateWithoutPatientsInput";
import { Lab_requestsWhereUniqueInput } from "../inputs/Lab_requestsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_requestsUpsertWithWhereUniqueWithoutPatientsInput", {})
export class Lab_requestsUpsertWithWhereUniqueWithoutPatientsInput {
  @TypeGraphQL.Field(_type => Lab_requestsWhereUniqueInput, {
    nullable: false
  })
  where!: Lab_requestsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Lab_requestsUpdateWithoutPatientsInput, {
    nullable: false
  })
  update!: Lab_requestsUpdateWithoutPatientsInput;

  @TypeGraphQL.Field(_type => Lab_requestsCreateWithoutPatientsInput, {
    nullable: false
  })
  create!: Lab_requestsCreateWithoutPatientsInput;
}
