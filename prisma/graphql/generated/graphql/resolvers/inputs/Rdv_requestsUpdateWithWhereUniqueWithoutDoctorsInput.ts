import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Rdv_requestsUpdateWithoutDoctorsInput } from "../inputs/Rdv_requestsUpdateWithoutDoctorsInput";
import { Rdv_requestsWhereUniqueInput } from "../inputs/Rdv_requestsWhereUniqueInput";

@TypeGraphQL.InputType("Rdv_requestsUpdateWithWhereUniqueWithoutDoctorsInput", {})
export class Rdv_requestsUpdateWithWhereUniqueWithoutDoctorsInput {
  @TypeGraphQL.Field(_type => Rdv_requestsWhereUniqueInput, {
    nullable: false
  })
  where!: Rdv_requestsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Rdv_requestsUpdateWithoutDoctorsInput, {
    nullable: false
  })
  data!: Rdv_requestsUpdateWithoutDoctorsInput;
}
