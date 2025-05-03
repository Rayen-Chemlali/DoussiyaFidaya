import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Lab_requestsCreateManyPatientsInputEnvelope } from "../inputs/Lab_requestsCreateManyPatientsInputEnvelope";
import { Lab_requestsCreateOrConnectWithoutPatientsInput } from "../inputs/Lab_requestsCreateOrConnectWithoutPatientsInput";
import { Lab_requestsCreateWithoutPatientsInput } from "../inputs/Lab_requestsCreateWithoutPatientsInput";
import { Lab_requestsScalarWhereInput } from "../inputs/Lab_requestsScalarWhereInput";
import { Lab_requestsUpdateManyWithWhereWithoutPatientsInput } from "../inputs/Lab_requestsUpdateManyWithWhereWithoutPatientsInput";
import { Lab_requestsUpdateWithWhereUniqueWithoutPatientsInput } from "../inputs/Lab_requestsUpdateWithWhereUniqueWithoutPatientsInput";
import { Lab_requestsUpsertWithWhereUniqueWithoutPatientsInput } from "../inputs/Lab_requestsUpsertWithWhereUniqueWithoutPatientsInput";
import { Lab_requestsWhereUniqueInput } from "../inputs/Lab_requestsWhereUniqueInput";

@TypeGraphQL.InputType("Lab_requestsUpdateManyWithoutPatientsNestedInput", {})
export class Lab_requestsUpdateManyWithoutPatientsNestedInput {
  @TypeGraphQL.Field(_type => [Lab_requestsCreateWithoutPatientsInput], {
    nullable: true
  })
  create?: Lab_requestsCreateWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_requestsCreateOrConnectWithoutPatientsInput], {
    nullable: true
  })
  connectOrCreate?: Lab_requestsCreateOrConnectWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_requestsUpsertWithWhereUniqueWithoutPatientsInput], {
    nullable: true
  })
  upsert?: Lab_requestsUpsertWithWhereUniqueWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => Lab_requestsCreateManyPatientsInputEnvelope, {
    nullable: true
  })
  createMany?: Lab_requestsCreateManyPatientsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Lab_requestsWhereUniqueInput], {
    nullable: true
  })
  set?: Lab_requestsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_requestsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Lab_requestsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_requestsWhereUniqueInput], {
    nullable: true
  })
  delete?: Lab_requestsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_requestsWhereUniqueInput], {
    nullable: true
  })
  connect?: Lab_requestsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_requestsUpdateWithWhereUniqueWithoutPatientsInput], {
    nullable: true
  })
  update?: Lab_requestsUpdateWithWhereUniqueWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_requestsUpdateManyWithWhereWithoutPatientsInput], {
    nullable: true
  })
  updateMany?: Lab_requestsUpdateManyWithWhereWithoutPatientsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Lab_requestsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Lab_requestsScalarWhereInput[] | undefined;
}
