import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RdvsUpdateWithoutConsultationsInput } from "../inputs/RdvsUpdateWithoutConsultationsInput";
import { RdvsWhereInput } from "../inputs/RdvsWhereInput";

@TypeGraphQL.InputType("RdvsUpdateToOneWithWhereWithoutConsultationsInput", {})
export class RdvsUpdateToOneWithWhereWithoutConsultationsInput {
  @TypeGraphQL.Field(_type => RdvsWhereInput, {
    nullable: true
  })
  where?: RdvsWhereInput | undefined;

  @TypeGraphQL.Field(_type => RdvsUpdateWithoutConsultationsInput, {
    nullable: false
  })
  data!: RdvsUpdateWithoutConsultationsInput;
}
