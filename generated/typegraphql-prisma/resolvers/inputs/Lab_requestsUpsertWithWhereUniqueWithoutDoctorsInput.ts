import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_requestsCreateWithoutDoctorsInput } from "../inputs/Lab_requestsCreateWithoutDoctorsInput";
import { Lab_requestsUpdateWithoutDoctorsInput } from "../inputs/Lab_requestsUpdateWithoutDoctorsInput";
import { Lab_requestsWhereUniqueInput } from "../inputs/Lab_requestsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_requestsUpsertWithWhereUniqueWithoutDoctorsInput", {})
export class Lab_requestsUpsertWithWhereUniqueWithoutDoctorsInput {
  @TypeGraphQL.Field(_type => Lab_requestsWhereUniqueInput, {
    nullable: false
  })
  where!: Lab_requestsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Lab_requestsUpdateWithoutDoctorsInput, {
    nullable: false
  })
  update!: Lab_requestsUpdateWithoutDoctorsInput;

  @TypeGraphQL.Field(_type => Lab_requestsCreateWithoutDoctorsInput, {
    nullable: false
  })
  create!: Lab_requestsCreateWithoutDoctorsInput;
}
