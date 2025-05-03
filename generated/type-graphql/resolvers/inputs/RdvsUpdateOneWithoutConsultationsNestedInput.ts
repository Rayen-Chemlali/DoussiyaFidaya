import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RdvsCreateOrConnectWithoutConsultationsInput } from "../inputs/RdvsCreateOrConnectWithoutConsultationsInput";
import { RdvsCreateWithoutConsultationsInput } from "../inputs/RdvsCreateWithoutConsultationsInput";
import { RdvsUpdateToOneWithWhereWithoutConsultationsInput } from "../inputs/RdvsUpdateToOneWithWhereWithoutConsultationsInput";
import { RdvsUpsertWithoutConsultationsInput } from "../inputs/RdvsUpsertWithoutConsultationsInput";
import { RdvsWhereInput } from "../inputs/RdvsWhereInput";
import { RdvsWhereUniqueInput } from "../inputs/RdvsWhereUniqueInput";

@TypeGraphQL.InputType("RdvsUpdateOneWithoutConsultationsNestedInput", {})
export class RdvsUpdateOneWithoutConsultationsNestedInput {
  @TypeGraphQL.Field(_type => RdvsCreateWithoutConsultationsInput, {
    nullable: true
  })
  create?: RdvsCreateWithoutConsultationsInput | undefined;

  @TypeGraphQL.Field(_type => RdvsCreateOrConnectWithoutConsultationsInput, {
    nullable: true
  })
  connectOrCreate?: RdvsCreateOrConnectWithoutConsultationsInput | undefined;

  @TypeGraphQL.Field(_type => RdvsUpsertWithoutConsultationsInput, {
    nullable: true
  })
  upsert?: RdvsUpsertWithoutConsultationsInput | undefined;

  @TypeGraphQL.Field(_type => RdvsWhereInput, {
    nullable: true
  })
  disconnect?: RdvsWhereInput | undefined;

  @TypeGraphQL.Field(_type => RdvsWhereInput, {
    nullable: true
  })
  delete?: RdvsWhereInput | undefined;

  @TypeGraphQL.Field(_type => RdvsWhereUniqueInput, {
    nullable: true
  })
  connect?: RdvsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => RdvsUpdateToOneWithWhereWithoutConsultationsInput, {
    nullable: true
  })
  update?: RdvsUpdateToOneWithWhereWithoutConsultationsInput | undefined;
}
