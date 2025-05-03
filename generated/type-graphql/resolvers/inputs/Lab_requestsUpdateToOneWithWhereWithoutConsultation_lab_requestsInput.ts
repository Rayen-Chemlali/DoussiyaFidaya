import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_requestsUpdateWithoutConsultation_lab_requestsInput } from "../inputs/Lab_requestsUpdateWithoutConsultation_lab_requestsInput";
import { Lab_requestsWhereInput } from "../inputs/Lab_requestsWhereInput";

@TypeGraphQL.InputType("Lab_requestsUpdateToOneWithWhereWithoutConsultation_lab_requestsInput", {})
export class Lab_requestsUpdateToOneWithWhereWithoutConsultation_lab_requestsInput {
  @TypeGraphQL.Field(_type => Lab_requestsWhereInput, {
    nullable: true
  })
  where?: Lab_requestsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Lab_requestsUpdateWithoutConsultation_lab_requestsInput, {
    nullable: false
  })
  data!: Lab_requestsUpdateWithoutConsultation_lab_requestsInput;
}
