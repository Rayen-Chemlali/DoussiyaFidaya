import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PrescriptionsCreateOrConnectWithoutConsultationsInput } from "../inputs/PrescriptionsCreateOrConnectWithoutConsultationsInput";
import { PrescriptionsCreateWithoutConsultationsInput } from "../inputs/PrescriptionsCreateWithoutConsultationsInput";
import { PrescriptionsUpdateToOneWithWhereWithoutConsultationsInput } from "../inputs/PrescriptionsUpdateToOneWithWhereWithoutConsultationsInput";
import { PrescriptionsUpsertWithoutConsultationsInput } from "../inputs/PrescriptionsUpsertWithoutConsultationsInput";
import { PrescriptionsWhereInput } from "../inputs/PrescriptionsWhereInput";
import { PrescriptionsWhereUniqueInput } from "../inputs/PrescriptionsWhereUniqueInput";

@TypeGraphQL.InputType("PrescriptionsUpdateOneWithoutConsultationsNestedInput", {})
export class PrescriptionsUpdateOneWithoutConsultationsNestedInput {
  @TypeGraphQL.Field(_type => PrescriptionsCreateWithoutConsultationsInput, {
    nullable: true
  })
  create?: PrescriptionsCreateWithoutConsultationsInput | undefined;

  @TypeGraphQL.Field(_type => PrescriptionsCreateOrConnectWithoutConsultationsInput, {
    nullable: true
  })
  connectOrCreate?: PrescriptionsCreateOrConnectWithoutConsultationsInput | undefined;

  @TypeGraphQL.Field(_type => PrescriptionsUpsertWithoutConsultationsInput, {
    nullable: true
  })
  upsert?: PrescriptionsUpsertWithoutConsultationsInput | undefined;

  @TypeGraphQL.Field(_type => PrescriptionsWhereInput, {
    nullable: true
  })
  disconnect?: PrescriptionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PrescriptionsWhereInput, {
    nullable: true
  })
  delete?: PrescriptionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PrescriptionsWhereUniqueInput, {
    nullable: true
  })
  connect?: PrescriptionsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PrescriptionsUpdateToOneWithWhereWithoutConsultationsInput, {
    nullable: true
  })
  update?: PrescriptionsUpdateToOneWithWhereWithoutConsultationsInput | undefined;
}
