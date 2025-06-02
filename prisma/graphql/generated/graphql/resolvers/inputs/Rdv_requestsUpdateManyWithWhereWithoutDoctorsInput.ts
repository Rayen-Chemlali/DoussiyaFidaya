import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Rdv_requestsScalarWhereInput } from "../inputs/Rdv_requestsScalarWhereInput";
import { Rdv_requestsUpdateManyMutationInput } from "../inputs/Rdv_requestsUpdateManyMutationInput";

@TypeGraphQL.InputType("Rdv_requestsUpdateManyWithWhereWithoutDoctorsInput", {})
export class Rdv_requestsUpdateManyWithWhereWithoutDoctorsInput {
  @TypeGraphQL.Field(_type => Rdv_requestsScalarWhereInput, {
    nullable: false
  })
  where!: Rdv_requestsScalarWhereInput;

  @TypeGraphQL.Field(_type => Rdv_requestsUpdateManyMutationInput, {
    nullable: false
  })
  data!: Rdv_requestsUpdateManyMutationInput;
}
