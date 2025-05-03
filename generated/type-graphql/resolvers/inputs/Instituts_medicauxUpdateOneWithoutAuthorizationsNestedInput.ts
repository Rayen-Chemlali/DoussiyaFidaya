import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Instituts_medicauxCreateOrConnectWithoutAuthorizationsInput } from "../inputs/Instituts_medicauxCreateOrConnectWithoutAuthorizationsInput";
import { Instituts_medicauxCreateWithoutAuthorizationsInput } from "../inputs/Instituts_medicauxCreateWithoutAuthorizationsInput";
import { Instituts_medicauxUpdateToOneWithWhereWithoutAuthorizationsInput } from "../inputs/Instituts_medicauxUpdateToOneWithWhereWithoutAuthorizationsInput";
import { Instituts_medicauxUpsertWithoutAuthorizationsInput } from "../inputs/Instituts_medicauxUpsertWithoutAuthorizationsInput";
import { Instituts_medicauxWhereInput } from "../inputs/Instituts_medicauxWhereInput";
import { Instituts_medicauxWhereUniqueInput } from "../inputs/Instituts_medicauxWhereUniqueInput";

@TypeGraphQL.InputType("Instituts_medicauxUpdateOneWithoutAuthorizationsNestedInput", {})
export class Instituts_medicauxUpdateOneWithoutAuthorizationsNestedInput {
  @TypeGraphQL.Field(_type => Instituts_medicauxCreateWithoutAuthorizationsInput, {
    nullable: true
  })
  create?: Instituts_medicauxCreateWithoutAuthorizationsInput | undefined;

  @TypeGraphQL.Field(_type => Instituts_medicauxCreateOrConnectWithoutAuthorizationsInput, {
    nullable: true
  })
  connectOrCreate?: Instituts_medicauxCreateOrConnectWithoutAuthorizationsInput | undefined;

  @TypeGraphQL.Field(_type => Instituts_medicauxUpsertWithoutAuthorizationsInput, {
    nullable: true
  })
  upsert?: Instituts_medicauxUpsertWithoutAuthorizationsInput | undefined;

  @TypeGraphQL.Field(_type => Instituts_medicauxWhereInput, {
    nullable: true
  })
  disconnect?: Instituts_medicauxWhereInput | undefined;

  @TypeGraphQL.Field(_type => Instituts_medicauxWhereInput, {
    nullable: true
  })
  delete?: Instituts_medicauxWhereInput | undefined;

  @TypeGraphQL.Field(_type => Instituts_medicauxWhereUniqueInput, {
    nullable: true
  })
  connect?: Instituts_medicauxWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Instituts_medicauxUpdateToOneWithWhereWithoutAuthorizationsInput, {
    nullable: true
  })
  update?: Instituts_medicauxUpdateToOneWithWhereWithoutAuthorizationsInput | undefined;
}
