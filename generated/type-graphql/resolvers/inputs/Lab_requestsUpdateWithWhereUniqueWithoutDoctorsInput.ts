import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_requestsUpdateWithoutDoctorsInput } from "../inputs/Lab_requestsUpdateWithoutDoctorsInput";
import { Lab_requestsWhereUniqueInput } from "../inputs/Lab_requestsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_requestsUpdateWithWhereUniqueWithoutDoctorsInput", {})
export class Lab_requestsUpdateWithWhereUniqueWithoutDoctorsInput {
  @TypeGraphQL.Field(_type => Lab_requestsWhereUniqueInput, {
    nullable: false
  })
  where!: Lab_requestsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Lab_requestsUpdateWithoutDoctorsInput, {
    nullable: false
  })
  data!: Lab_requestsUpdateWithoutDoctorsInput;
}
