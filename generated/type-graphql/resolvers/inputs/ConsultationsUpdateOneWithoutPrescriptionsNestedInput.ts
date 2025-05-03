import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConsultationsCreateOrConnectWithoutPrescriptionsInput } from "../inputs/ConsultationsCreateOrConnectWithoutPrescriptionsInput";
import { ConsultationsCreateWithoutPrescriptionsInput } from "../inputs/ConsultationsCreateWithoutPrescriptionsInput";
import { ConsultationsUpdateToOneWithWhereWithoutPrescriptionsInput } from "../inputs/ConsultationsUpdateToOneWithWhereWithoutPrescriptionsInput";
import { ConsultationsUpsertWithoutPrescriptionsInput } from "../inputs/ConsultationsUpsertWithoutPrescriptionsInput";
import { ConsultationsWhereInput } from "../inputs/ConsultationsWhereInput";
import { ConsultationsWhereUniqueInput } from "../inputs/ConsultationsWhereUniqueInput";

@TypeGraphQL.InputType("ConsultationsUpdateOneWithoutPrescriptionsNestedInput", {})
export class ConsultationsUpdateOneWithoutPrescriptionsNestedInput {
  @TypeGraphQL.Field(_type => ConsultationsCreateWithoutPrescriptionsInput, {
    nullable: true
  })
  create?: ConsultationsCreateWithoutPrescriptionsInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationsCreateOrConnectWithoutPrescriptionsInput, {
    nullable: true
  })
  connectOrCreate?: ConsultationsCreateOrConnectWithoutPrescriptionsInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationsUpsertWithoutPrescriptionsInput, {
    nullable: true
  })
  upsert?: ConsultationsUpsertWithoutPrescriptionsInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationsWhereInput, {
    nullable: true
  })
  disconnect?: ConsultationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationsWhereInput, {
    nullable: true
  })
  delete?: ConsultationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationsWhereUniqueInput, {
    nullable: true
  })
  connect?: ConsultationsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ConsultationsUpdateToOneWithWhereWithoutPrescriptionsInput, {
    nullable: true
  })
  update?: ConsultationsUpdateToOneWithWhereWithoutPrescriptionsInput | undefined;
}
