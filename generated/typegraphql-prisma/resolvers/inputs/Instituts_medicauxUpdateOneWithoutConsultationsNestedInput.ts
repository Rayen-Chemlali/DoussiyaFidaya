import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Instituts_medicauxCreateOrConnectWithoutConsultationsInput } from "../inputs/Instituts_medicauxCreateOrConnectWithoutConsultationsInput";
import { Instituts_medicauxCreateWithoutConsultationsInput } from "../inputs/Instituts_medicauxCreateWithoutConsultationsInput";
import { Instituts_medicauxUpdateToOneWithWhereWithoutConsultationsInput } from "../inputs/Instituts_medicauxUpdateToOneWithWhereWithoutConsultationsInput";
import { Instituts_medicauxUpsertWithoutConsultationsInput } from "../inputs/Instituts_medicauxUpsertWithoutConsultationsInput";
import { Instituts_medicauxWhereInput } from "../inputs/Instituts_medicauxWhereInput";
import { Instituts_medicauxWhereUniqueInput } from "../inputs/Instituts_medicauxWhereUniqueInput";

@TypeGraphQL.InputType("Instituts_medicauxUpdateOneWithoutConsultationsNestedInput", {})
export class Instituts_medicauxUpdateOneWithoutConsultationsNestedInput {
  @TypeGraphQL.Field(_type => Instituts_medicauxCreateWithoutConsultationsInput, {
    nullable: true
  })
  create?: Instituts_medicauxCreateWithoutConsultationsInput | undefined;

  @TypeGraphQL.Field(_type => Instituts_medicauxCreateOrConnectWithoutConsultationsInput, {
    nullable: true
  })
  connectOrCreate?: Instituts_medicauxCreateOrConnectWithoutConsultationsInput | undefined;

  @TypeGraphQL.Field(_type => Instituts_medicauxUpsertWithoutConsultationsInput, {
    nullable: true
  })
  upsert?: Instituts_medicauxUpsertWithoutConsultationsInput | undefined;

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

  @TypeGraphQL.Field(_type => Instituts_medicauxUpdateToOneWithWhereWithoutConsultationsInput, {
    nullable: true
  })
  update?: Instituts_medicauxUpdateToOneWithWhereWithoutConsultationsInput | undefined;
}
