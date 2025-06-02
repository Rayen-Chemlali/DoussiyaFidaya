import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Instituts_medicauxCreateOrConnectWithoutDoctorsInput } from "../inputs/Instituts_medicauxCreateOrConnectWithoutDoctorsInput";
import { Instituts_medicauxCreateWithoutDoctorsInput } from "../inputs/Instituts_medicauxCreateWithoutDoctorsInput";
import { Instituts_medicauxScalarWhereInput } from "../inputs/Instituts_medicauxScalarWhereInput";
import { Instituts_medicauxUpdateManyWithWhereWithoutDoctorsInput } from "../inputs/Instituts_medicauxUpdateManyWithWhereWithoutDoctorsInput";
import { Instituts_medicauxUpdateWithWhereUniqueWithoutDoctorsInput } from "../inputs/Instituts_medicauxUpdateWithWhereUniqueWithoutDoctorsInput";
import { Instituts_medicauxUpsertWithWhereUniqueWithoutDoctorsInput } from "../inputs/Instituts_medicauxUpsertWithWhereUniqueWithoutDoctorsInput";
import { Instituts_medicauxWhereUniqueInput } from "../inputs/Instituts_medicauxWhereUniqueInput";

@TypeGraphQL.InputType("Instituts_medicauxUpdateManyWithoutDoctorsNestedInput", {})
export class Instituts_medicauxUpdateManyWithoutDoctorsNestedInput {
  @TypeGraphQL.Field(_type => [Instituts_medicauxCreateWithoutDoctorsInput], {
    nullable: true
  })
  create?: Instituts_medicauxCreateWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Instituts_medicauxCreateOrConnectWithoutDoctorsInput], {
    nullable: true
  })
  connectOrCreate?: Instituts_medicauxCreateOrConnectWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Instituts_medicauxUpsertWithWhereUniqueWithoutDoctorsInput], {
    nullable: true
  })
  upsert?: Instituts_medicauxUpsertWithWhereUniqueWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Instituts_medicauxWhereUniqueInput], {
    nullable: true
  })
  set?: Instituts_medicauxWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Instituts_medicauxWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Instituts_medicauxWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Instituts_medicauxWhereUniqueInput], {
    nullable: true
  })
  delete?: Instituts_medicauxWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Instituts_medicauxWhereUniqueInput], {
    nullable: true
  })
  connect?: Instituts_medicauxWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Instituts_medicauxUpdateWithWhereUniqueWithoutDoctorsInput], {
    nullable: true
  })
  update?: Instituts_medicauxUpdateWithWhereUniqueWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Instituts_medicauxUpdateManyWithWhereWithoutDoctorsInput], {
    nullable: true
  })
  updateMany?: Instituts_medicauxUpdateManyWithWhereWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Instituts_medicauxScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Instituts_medicauxScalarWhereInput[] | undefined;
}
