import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrescriptionsCreateWithoutConsultationsInput } from "../inputs/PrescriptionsCreateWithoutConsultationsInput";
import { PrescriptionsUpdateWithoutConsultationsInput } from "../inputs/PrescriptionsUpdateWithoutConsultationsInput";
import { PrescriptionsWhereInput } from "../inputs/PrescriptionsWhereInput";

@TypeGraphQL.InputType("PrescriptionsUpsertWithoutConsultationsInput", {})
export class PrescriptionsUpsertWithoutConsultationsInput {
  @TypeGraphQL.Field(_type => PrescriptionsUpdateWithoutConsultationsInput, {
    nullable: false
  })
  update!: PrescriptionsUpdateWithoutConsultationsInput;

  @TypeGraphQL.Field(_type => PrescriptionsCreateWithoutConsultationsInput, {
    nullable: false
  })
  create!: PrescriptionsCreateWithoutConsultationsInput;

  @TypeGraphQL.Field(_type => PrescriptionsWhereInput, {
    nullable: true
  })
  where?: PrescriptionsWhereInput | undefined;
}
