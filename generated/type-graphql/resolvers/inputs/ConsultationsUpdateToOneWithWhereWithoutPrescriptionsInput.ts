import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsUpdateWithoutPrescriptionsInput } from "../inputs/ConsultationsUpdateWithoutPrescriptionsInput";
import { ConsultationsWhereInput } from "../inputs/ConsultationsWhereInput";

@TypeGraphQL.InputType("ConsultationsUpdateToOneWithWhereWithoutPrescriptionsInput", {})
export class ConsultationsUpdateToOneWithWhereWithoutPrescriptionsInput {
  @TypeGraphQL.Field(_type => ConsultationsWhereInput, {
    nullable: true
  })
  where?: ConsultationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationsUpdateWithoutPrescriptionsInput, {
    nullable: false
  })
  data!: ConsultationsUpdateWithoutPrescriptionsInput;
}
