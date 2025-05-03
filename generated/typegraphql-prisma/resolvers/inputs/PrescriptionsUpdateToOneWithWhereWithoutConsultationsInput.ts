import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrescriptionsUpdateWithoutConsultationsInput } from "../inputs/PrescriptionsUpdateWithoutConsultationsInput";
import { PrescriptionsWhereInput } from "../inputs/PrescriptionsWhereInput";

@TypeGraphQL.InputType("PrescriptionsUpdateToOneWithWhereWithoutConsultationsInput", {})
export class PrescriptionsUpdateToOneWithWhereWithoutConsultationsInput {
  @TypeGraphQL.Field(_type => PrescriptionsWhereInput, {
    nullable: true
  })
  where?: PrescriptionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PrescriptionsUpdateWithoutConsultationsInput, {
    nullable: false
  })
  data!: PrescriptionsUpdateWithoutConsultationsInput;
}
