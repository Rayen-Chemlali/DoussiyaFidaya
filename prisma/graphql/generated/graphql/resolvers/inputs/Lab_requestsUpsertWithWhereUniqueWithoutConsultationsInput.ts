import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_requestsCreateWithoutConsultationsInput } from "../inputs/Lab_requestsCreateWithoutConsultationsInput";
import { Lab_requestsUpdateWithoutConsultationsInput } from "../inputs/Lab_requestsUpdateWithoutConsultationsInput";
import { Lab_requestsWhereUniqueInput } from "../inputs/Lab_requestsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_requestsUpsertWithWhereUniqueWithoutConsultationsInput", {})
export class Lab_requestsUpsertWithWhereUniqueWithoutConsultationsInput {
  @TypeGraphQL.Field(_type => Lab_requestsWhereUniqueInput, {
    nullable: false
  })
  where!: Lab_requestsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Lab_requestsUpdateWithoutConsultationsInput, {
    nullable: false
  })
  update!: Lab_requestsUpdateWithoutConsultationsInput;

  @TypeGraphQL.Field(_type => Lab_requestsCreateWithoutConsultationsInput, {
    nullable: false
  })
  create!: Lab_requestsCreateWithoutConsultationsInput;
}
