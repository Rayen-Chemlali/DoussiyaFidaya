import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsUpdateWithoutPrescriptionsInput } from "../inputs/DoctorsUpdateWithoutPrescriptionsInput";
import { DoctorsWhereInput } from "../inputs/DoctorsWhereInput";

@TypeGraphQL.InputType("DoctorsUpdateToOneWithWhereWithoutPrescriptionsInput", {})
export class DoctorsUpdateToOneWithWhereWithoutPrescriptionsInput {
  @TypeGraphQL.Field(_type => DoctorsWhereInput, {
    nullable: true
  })
  where?: DoctorsWhereInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsUpdateWithoutPrescriptionsInput, {
    nullable: false
  })
  data!: DoctorsUpdateWithoutPrescriptionsInput;
}
