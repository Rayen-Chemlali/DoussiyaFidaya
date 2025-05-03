import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsUpdateWithoutRdvsInput } from "../inputs/ConsultationsUpdateWithoutRdvsInput";
import { ConsultationsWhereInput } from "../inputs/ConsultationsWhereInput";

@TypeGraphQL.InputType("ConsultationsUpdateToOneWithWhereWithoutRdvsInput", {})
export class ConsultationsUpdateToOneWithWhereWithoutRdvsInput {
  @TypeGraphQL.Field(_type => ConsultationsWhereInput, {
    nullable: true
  })
  where?: ConsultationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationsUpdateWithoutRdvsInput, {
    nullable: false
  })
  data!: ConsultationsUpdateWithoutRdvsInput;
}
