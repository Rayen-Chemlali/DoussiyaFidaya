import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RdvsCreateWithoutConsultationsInput } from "../inputs/RdvsCreateWithoutConsultationsInput";
import { RdvsUpdateWithoutConsultationsInput } from "../inputs/RdvsUpdateWithoutConsultationsInput";
import { RdvsWhereInput } from "../inputs/RdvsWhereInput";

@TypeGraphQL.InputType("RdvsUpsertWithoutConsultationsInput", {})
export class RdvsUpsertWithoutConsultationsInput {
  @TypeGraphQL.Field(_type => RdvsUpdateWithoutConsultationsInput, {
    nullable: false
  })
  update!: RdvsUpdateWithoutConsultationsInput;

  @TypeGraphQL.Field(_type => RdvsCreateWithoutConsultationsInput, {
    nullable: false
  })
  create!: RdvsCreateWithoutConsultationsInput;

  @TypeGraphQL.Field(_type => RdvsWhereInput, {
    nullable: true
  })
  where?: RdvsWhereInput | undefined;
}
