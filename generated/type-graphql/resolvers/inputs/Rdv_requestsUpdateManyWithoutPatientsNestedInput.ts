import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Rdv_requestsCreateManyPatientsInputEnvelope } from "../inputs/Rdv_requestsCreateManyPatientsInputEnvelope";
import { Rdv_requestsCreateOrConnectWithoutPatientsInput } from "../inputs/Rdv_requestsCreateOrConnectWithoutPatientsInput";
import { Rdv_requestsCreateWithoutPatientsInput } from "../inputs/Rdv_requestsCreateWithoutPatientsInput";
import { Rdv_requestsScalarWhereInput } from "../inputs/Rdv_requestsScalarWhereInput";
import { Rdv_requestsUpdateManyWithWhereWithoutPatientsInput } from "../inputs/Rdv_requestsUpdateManyWithWhereWithoutPatientsInput";
import { Rdv_requestsUpdateWithWhereUniqueWithoutPatientsInput } from "../inputs/Rdv_requestsUpdateWithWhereUniqueWithoutPatientsInput";
import { Rdv_requestsUpsertWithWhereUniqueWithoutPatientsInput } from "../inputs/Rdv_requestsUpsertWithWhereUniqueWithoutPatientsInput";
import { Rdv_requestsWhereUniqueInput } from "../inputs/Rdv_requestsWhereUniqueInput";

@TypeGraphQL.InputType("Rdv_requestsUpdateManyWithoutPatientsNestedInput", {})
export class Rdv_requestsUpdateManyWithoutPatientsNestedInput {
  @TypeGraphQL.Field(_type => [Rdv_requestsCreateWithoutPatientsInput], {
    nullable: true
  })
  create?: Rdv_requestsCreateWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Rdv_requestsCreateOrConnectWithoutPatientsInput], {
    nullable: true
  })
  connectOrCreate?: Rdv_requestsCreateOrConnectWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Rdv_requestsUpsertWithWhereUniqueWithoutPatientsInput], {
    nullable: true
  })
  upsert?: Rdv_requestsUpsertWithWhereUniqueWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => Rdv_requestsCreateManyPatientsInputEnvelope, {
    nullable: true
  })
  createMany?: Rdv_requestsCreateManyPatientsInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Rdv_requestsUpdateWithWhereUniqueWithoutPatientsInput], {
    nullable: true
  })
  update?: Rdv_requestsUpdateWithWhereUniqueWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Rdv_requestsUpdateManyWithWhereWithoutPatientsInput], {
    nullable: true
  })
  updateMany?: Rdv_requestsUpdateManyWithWhereWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Rdv_requestsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Rdv_requestsScalarWhereInput[] | undefined;
}
