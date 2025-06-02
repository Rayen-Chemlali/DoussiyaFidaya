import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RdvsScalarWhereInput } from "../inputs/RdvsScalarWhereInput";
import { RdvsUpdateManyMutationInput } from "../inputs/RdvsUpdateManyMutationInput";

@TypeGraphQL.InputType("RdvsUpdateManyWithWhereWithoutPatientsInput", {})
export class RdvsUpdateManyWithWhereWithoutPatientsInput {
  @TypeGraphQL.Field(_type => RdvsScalarWhereInput, {
    nullable: false
  })
  where!: RdvsScalarWhereInput;

  @TypeGraphQL.Field(_type => RdvsUpdateManyMutationInput, {
    nullable: false
  })
  data!: RdvsUpdateManyMutationInput;
}
