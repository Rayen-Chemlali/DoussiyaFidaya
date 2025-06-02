import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DoctorsCreateOrConnectWithoutPrescriptionsInput } from "../inputs/DoctorsCreateOrConnectWithoutPrescriptionsInput";
import { DoctorsCreateWithoutPrescriptionsInput } from "../inputs/DoctorsCreateWithoutPrescriptionsInput";
import { DoctorsUpdateToOneWithWhereWithoutPrescriptionsInput } from "../inputs/DoctorsUpdateToOneWithWhereWithoutPrescriptionsInput";
import { DoctorsUpsertWithoutPrescriptionsInput } from "../inputs/DoctorsUpsertWithoutPrescriptionsInput";
import { DoctorsWhereInput } from "../inputs/DoctorsWhereInput";
import { DoctorsWhereUniqueInput } from "../inputs/DoctorsWhereUniqueInput";

@TypeGraphQL.InputType("DoctorsUpdateOneWithoutPrescriptionsNestedInput", {})
export class DoctorsUpdateOneWithoutPrescriptionsNestedInput {
  @TypeGraphQL.Field(_type => DoctorsCreateWithoutPrescriptionsInput, {
    nullable: true
  })
  create?: DoctorsCreateWithoutPrescriptionsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsCreateOrConnectWithoutPrescriptionsInput, {
    nullable: true
  })
  connectOrCreate?: DoctorsCreateOrConnectWithoutPrescriptionsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsUpsertWithoutPrescriptionsInput, {
    nullable: true
  })
  upsert?: DoctorsUpsertWithoutPrescriptionsInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsWhereInput, {
    nullable: true
  })
  disconnect?: DoctorsWhereInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsWhereInput, {
    nullable: true
  })
  delete?: DoctorsWhereInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsWhereUniqueInput, {
    nullable: true
  })
  connect?: DoctorsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => DoctorsUpdateToOneWithWhereWithoutPrescriptionsInput, {
    nullable: true
  })
  update?: DoctorsUpdateToOneWithWhereWithoutPrescriptionsInput | undefined;
}
