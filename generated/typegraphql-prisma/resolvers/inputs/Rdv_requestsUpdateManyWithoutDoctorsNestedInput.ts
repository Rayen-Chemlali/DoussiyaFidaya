import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Rdv_requestsCreateManyDoctorsInputEnvelope } from "../inputs/Rdv_requestsCreateManyDoctorsInputEnvelope";
import { Rdv_requestsCreateOrConnectWithoutDoctorsInput } from "../inputs/Rdv_requestsCreateOrConnectWithoutDoctorsInput";
import { Rdv_requestsCreateWithoutDoctorsInput } from "../inputs/Rdv_requestsCreateWithoutDoctorsInput";
import { Rdv_requestsScalarWhereInput } from "../inputs/Rdv_requestsScalarWhereInput";
import { Rdv_requestsUpdateManyWithWhereWithoutDoctorsInput } from "../inputs/Rdv_requestsUpdateManyWithWhereWithoutDoctorsInput";
import { Rdv_requestsUpdateWithWhereUniqueWithoutDoctorsInput } from "../inputs/Rdv_requestsUpdateWithWhereUniqueWithoutDoctorsInput";
import { Rdv_requestsUpsertWithWhereUniqueWithoutDoctorsInput } from "../inputs/Rdv_requestsUpsertWithWhereUniqueWithoutDoctorsInput";
import { Rdv_requestsWhereUniqueInput } from "../inputs/Rdv_requestsWhereUniqueInput";

@TypeGraphQL.InputType("Rdv_requestsUpdateManyWithoutDoctorsNestedInput", {})
export class Rdv_requestsUpdateManyWithoutDoctorsNestedInput {
  @TypeGraphQL.Field(_type => [Rdv_requestsCreateWithoutDoctorsInput], {
    nullable: true
  })
  create?: Rdv_requestsCreateWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Rdv_requestsCreateOrConnectWithoutDoctorsInput], {
    nullable: true
  })
  connectOrCreate?: Rdv_requestsCreateOrConnectWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Rdv_requestsUpsertWithWhereUniqueWithoutDoctorsInput], {
    nullable: true
  })
  upsert?: Rdv_requestsUpsertWithWhereUniqueWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => Rdv_requestsCreateManyDoctorsInputEnvelope, {
    nullable: true
  })
  createMany?: Rdv_requestsCreateManyDoctorsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Rdv_requestsWhereUniqueInput], {
    nullable: true
  })
  set?: Rdv_requestsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Rdv_requestsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Rdv_requestsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Rdv_requestsWhereUniqueInput], {
    nullable: true
  })
  delete?: Rdv_requestsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Rdv_requestsWhereUniqueInput], {
    nullable: true
  })
  connect?: Rdv_requestsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Rdv_requestsUpdateWithWhereUniqueWithoutDoctorsInput], {
    nullable: true
  })
  update?: Rdv_requestsUpdateWithWhereUniqueWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Rdv_requestsUpdateManyWithWhereWithoutDoctorsInput], {
    nullable: true
  })
  updateMany?: Rdv_requestsUpdateManyWithWhereWithoutDoctorsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Rdv_requestsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Rdv_requestsScalarWhereInput[] | undefined;
}
