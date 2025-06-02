import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_requestsUpdateWithoutConsultationsInput } from "../inputs/Lab_requestsUpdateWithoutConsultationsInput";
import { Lab_requestsWhereUniqueInput } from "../inputs/Lab_requestsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_requestsUpdateWithWhereUniqueWithoutConsultationsInput", {})
export class Lab_requestsUpdateWithWhereUniqueWithoutConsultationsInput {
  @TypeGraphQL.Field(_type => Lab_requestsWhereUniqueInput, {
    nullable: false
  })
  where!: Lab_requestsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Lab_requestsUpdateWithoutConsultationsInput, {
    nullable: false
  })
  data!: Lab_requestsUpdateWithoutConsultationsInput;
}
