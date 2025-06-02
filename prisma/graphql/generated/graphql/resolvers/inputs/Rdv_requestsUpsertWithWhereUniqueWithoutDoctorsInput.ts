import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Rdv_requestsCreateWithoutDoctorsInput } from "../inputs/Rdv_requestsCreateWithoutDoctorsInput";
import { Rdv_requestsUpdateWithoutDoctorsInput } from "../inputs/Rdv_requestsUpdateWithoutDoctorsInput";
import { Rdv_requestsWhereUniqueInput } from "../inputs/Rdv_requestsWhereUniqueInput";

@TypeGraphQL.InputType("Rdv_requestsUpsertWithWhereUniqueWithoutDoctorsInput", {})
export class Rdv_requestsUpsertWithWhereUniqueWithoutDoctorsInput {
  @TypeGraphQL.Field(_type => Rdv_requestsWhereUniqueInput, {
    nullable: false
  })
  where!: Rdv_requestsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Rdv_requestsUpdateWithoutDoctorsInput, {
    nullable: false
  })
  update!: Rdv_requestsUpdateWithoutDoctorsInput;

  @TypeGraphQL.Field(_type => Rdv_requestsCreateWithoutDoctorsInput, {
    nullable: false
  })
  create!: Rdv_requestsCreateWithoutDoctorsInput;
}
