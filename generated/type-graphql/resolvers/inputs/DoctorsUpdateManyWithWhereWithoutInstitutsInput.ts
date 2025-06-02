import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsScalarWhereInput } from "../inputs/DoctorsScalarWhereInput";
import { DoctorsUpdateManyMutationInput } from "../inputs/DoctorsUpdateManyMutationInput";

@TypeGraphQL.InputType("DoctorsUpdateManyWithWhereWithoutInstitutsInput", {})
export class DoctorsUpdateManyWithWhereWithoutInstitutsInput {
  @TypeGraphQL.Field(_type => DoctorsScalarWhereInput, {
    nullable: false
  })
  where!: DoctorsScalarWhereInput;

  @TypeGraphQL.Field(_type => DoctorsUpdateManyMutationInput, {
    nullable: false
  })
  data!: DoctorsUpdateManyMutationInput;
}
