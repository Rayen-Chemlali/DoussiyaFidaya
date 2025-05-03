import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Instituts_medicauxCreateOrConnectWithoutDoctor_institutsInput } from "../inputs/Instituts_medicauxCreateOrConnectWithoutDoctor_institutsInput";
import { Instituts_medicauxCreateWithoutDoctor_institutsInput } from "../inputs/Instituts_medicauxCreateWithoutDoctor_institutsInput";
import { Instituts_medicauxUpdateToOneWithWhereWithoutDoctor_institutsInput } from "../inputs/Instituts_medicauxUpdateToOneWithWhereWithoutDoctor_institutsInput";
import { Instituts_medicauxUpsertWithoutDoctor_institutsInput } from "../inputs/Instituts_medicauxUpsertWithoutDoctor_institutsInput";
import { Instituts_medicauxWhereUniqueInput } from "../inputs/Instituts_medicauxWhereUniqueInput";

@TypeGraphQL.InputType("Instituts_medicauxUpdateOneRequiredWithoutDoctor_institutsNestedInput", {})
export class Instituts_medicauxUpdateOneRequiredWithoutDoctor_institutsNestedInput {
  @TypeGraphQL.Field(_type => Instituts_medicauxCreateWithoutDoctor_institutsInput, {
    nullable: true
  })
  create?: Instituts_medicauxCreateWithoutDoctor_institutsInput | undefined;

  @TypeGraphQL.Field(_type => Instituts_medicauxCreateOrConnectWithoutDoctor_institutsInput, {
    nullable: true
  })
  connectOrCreate?: Instituts_medicauxCreateOrConnectWithoutDoctor_institutsInput | undefined;

  @TypeGraphQL.Field(_type => Instituts_medicauxUpsertWithoutDoctor_institutsInput, {
    nullable: true
  })
  upsert?: Instituts_medicauxUpsertWithoutDoctor_institutsInput | undefined;

  @TypeGraphQL.Field(_type => Instituts_medicauxWhereUniqueInput, {
    nullable: true
  })
  connect?: Instituts_medicauxWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Instituts_medicauxUpdateToOneWithWhereWithoutDoctor_institutsInput, {
    nullable: true
  })
  update?: Instituts_medicauxUpdateToOneWithWhereWithoutDoctor_institutsInput | undefined;
}
